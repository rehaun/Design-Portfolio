// One-off: records the structure of the live Framer site (order of text and
// images, image sizes) plus full-page screenshots, to compare with this site.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const ROOT = 'https://re-davarpanah.framer.website';
const OUT = 'framer-snapshot';
// v2: full text + html
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

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
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let n;
    while ((n = walker.nextNode())) {
      const r = n.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const tag = n.tagName.toLowerCase();
      const y = Math.round(r.top + scrollY), x = Math.round(r.left), w = Math.round(r.width), h = Math.round(r.height);
      if (tag === 'img') {
        out.push({ type: 'img', file: (n.currentSrc || n.src).split('/').pop().split('?')[0], alt: n.alt, x, y, w, h, fit: getComputedStyle(n).objectFit });
      } else if (/^(h[1-6]|p|li|blockquote)$/.test(tag)) {
        const text = n.innerText.trim().replace(/\s+/g, ' ');
        const cs = getComputedStyle(n);
        if (text) out.push({ type: tag, text, html: n.innerHTML, x, y, w, h, size: cs.fontSize, weight: cs.fontWeight, align: cs.textAlign, color: cs.color, transform: cs.textTransform, position: cs.position });
      }
    }
    return out.sort((a, b) => a.y - b.y || a.x - b.x);
  });
  const name = p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '__');
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(items, null, 1));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(name, items.length, 'items');
}
await browser.close();
