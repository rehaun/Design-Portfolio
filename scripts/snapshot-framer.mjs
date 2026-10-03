// One-off: records the structure of the live Framer site (order of text and
// images, image sizes) plus full-page screenshots, to compare with this site.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const ROOT = 'https://re-davarpanah.framer.website';
const OUT = 'framer-snapshot';
// v4: + pictures (svg, backgrounds, Framer-built mockups) at 2x
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
mkdirSync(`${OUT}/pics`, { recursive: true });

await page.goto(ROOT, { waitUntil: 'networkidle' });
const links = await page.$$eval('a[href]', (as) =>
  [...new Set(as.map((a) => new URL(a.href, location.href)).filter((u) => u.host === location.host).map((u) => u.pathname))],
);
const paths = new Set(['/', ...links]);
// visit discovered pages too, to pick up the /fa versions
for (const p of [...paths]) {
  await page.goto(ROOT + p, { waitUntil: 'networkidle' });
  const more = await page.$$eval('a[href]', (as) =>
    as.map((a) => new URL(a.href, location.href)).filter((u) => u.host === location.host).map((u) => u.pathname),
  );
  more.forEach((m) => paths.add(m));
}
console.log('pages:', [...paths]);

for (const p of paths) {
  await page.goto(ROOT + p, { waitUntil: 'networkidle' });
  // scroll through so lazy images and appear-animations load
  for (let y = 0; y < 40000; y += 700) {
    await page.evaluate((yy) => scrollTo(0, yy), y);
    await page.waitForTimeout(60);
  }
  await page.waitForTimeout(1500);
  const items = await page.evaluate(() => {
    const out = [];
    const tiny = (el) => parseFloat(getComputedStyle(el).fontSize) < 11.9;
    // Framer-built mockups: boxes whose text is all tiny (fake UI) -> captured as a picture
    const isMock = (el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 60 || r.height < 60) return false;
      const texts = [...el.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6')].filter((t) => t.innerText.trim());
      return texts.length > 0 && texts.every(tiny);
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let n;
    let skipUntil = null;
    while ((n = walker.nextNode())) {
      if (skipUntil && skipUntil.contains(n)) continue;
      skipUntil = null;
      const r = n.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const tag = n.tagName.toLowerCase();
      const box = () => ({ x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) });
      if (tag !== 'img' && isMock(n) && !(n.parentElement && isMock(n.parentElement))) {
        out.push({ type: 'pic', kind: 'mock', ...box() });
        skipUntil = n;
        continue;
      }
      if (tag === 'svg' && r.width > 24 && r.height > 24) {
        out.push({ type: 'pic', kind: 'svg', ...box() });
        skipUntil = n;
        continue;
      }
      const bg = getComputedStyle(n).backgroundImage;
      if (bg && bg.startsWith('url(') && r.width > 24 && r.height > 24) {
        out.push({ type: 'pic', kind: 'bg', bg: bg.slice(0, 200), ...box() });
      }
      const y = Math.round(r.top + scrollY), x = Math.round(r.left), w = Math.round(r.width), h = Math.round(r.height);
      if (tag === 'img') {
        out.push({ type: 'img', file: (n.currentSrc || n.src).split('/').pop().split('?')[0], alt: n.alt, x, y, w, h, fit: getComputedStyle(n).objectFit });
      } else if (/^(h[1-6]|p|li|blockquote)$/.test(tag)) {
        const text = n.innerText.trim().replace(/\s+/g, ' ');
        const cs = getComputedStyle(n);
        if (text) out.push({ type: tag, text, html: n.innerHTML, x, y, w, h, size: cs.fontSize, weight: cs.fontWeight, align: cs.textAlign, color: cs.color, transform: cs.textTransform, position: cs.position });
      }
    }
    return out; // DOM (reading) order
  });
  const name = p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '__');
  // capture every picture item at 2x
  let k = 0;
  for (const it of items) {
    if (it.type !== 'pic') continue;
    it.file = `${name}-${k++}.png`;
    await page.screenshot({ path: `${OUT}/pics/${it.file}`, fullPage: true, clip: { x: it.x, y: it.y, width: it.w, height: it.h } });
  }
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(items, null, 1));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(name, items.length, 'items');
}
await browser.close();
