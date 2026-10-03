// One-off: downloads every image referenced in src/data/images.js from
// Framer's CDN into src/assets/images/<key>.<ext>.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync('src/data/images.js', 'utf8');
const entries = [...src.matchAll(/^\s*(\w+): img\('([^']+)'\)/gm)].map(([, key, file]) => ({ key, file }));
mkdirSync('src/assets/images', { recursive: true });

let failed = 0;
for (const { key, file } of entries) {
  const url = `https://framerusercontent.com/images/${file}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`✗ ${key} ${url} → ${res.status}`);
    failed++;
    continue;
  }
  const ext = file.split('.').pop();
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(`src/assets/images/${key}.${ext}`, buf);
  console.log(`✓ ${key}.${ext} (${(buf.length / 1024).toFixed(0)} KB)`);
}
console.log(`${entries.length - failed}/${entries.length} downloaded`);
if (failed) process.exit(1);
