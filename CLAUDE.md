# Working notes for Claude (read this first)

This is **Reyhane Davarpanah's** personal product-design portfolio (the owner goes by "Ray").
Live site: https://rehaun.github.io/Design-Portfolio/ · Repo: `rehaun/Design-Portfolio`.

## How to talk and work with the owner
- **Reply in Persian (Farsi).** The owner writes Persian. Use **they/them** for them; never guess pronouns.
- They are a designer, not a developer: explain in plain words, show results with screenshots/images, offer 2–5 visual options when a design choice is theirs, and give a clear recommendation.
- **Never merge unless they say "merge کن".** After a merge: wait for the "Deploy to GitHub Pages" run to succeed, then give the link. Don't open a PR unless asked, except when the work is an explicit request to ship (they usually say "آماده کن/PR بساز").
- Work on the branch named in the session instructions (usually `claude/fervent-ride-jprn2g`). **After a PR is merged, restart the branch from `origin/main`** (`git fetch origin main && git checkout -B <branch> origin/main`) before new work, and check whether the previous PR is already merged before stacking commits on it. Commits may be merged before your last push — a missed commit needs a new PR.
- Check your work in a real browser (Playwright is installed globally; Chromium at `/opt/pw-browsers`): desktop **and** phone widths, **English and Persian**. Be honest about what you could not see (the sandbox can't open the live site).

## What the site is
Static, bilingual (EN / FA, RTL) portfolio built with **Astro 7 + MDX**, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
`base: '/Design-Portfolio'`, `trailingSlash: 'always'`. URLs: `/slug/` (EN) and `/fa/slug/` (FA).

Pages: Home (temporary), About, Play, Resume (PDF via print), three case studies, 404.
Case studies (`src/content/work/{en,fa}/<slug>.mdx`): `classeh-games`, `ux-research`, `classeh-dashboard`. The same file name in `en/` and `fa/` links them as translations. A LinkedIn case study is **not ready yet**.

## Code map
| What | Where |
|---|---|
| Case study content | `src/content/work/{en,fa}/*.mdx` (schema in `src/content.config.js`) |
| Case study page, TOC data, next-case card | `src/layouts/CaseStudy.astro` |
| Building blocks in MDX | `src/components/`: `Section`, `PhaseDivider`, `Figure`, `Compare`, `Gallery`, `MediaText`, `Img`, `Reveal` |
| Page shell, fonts, scroll scripts | `src/layouts/Base.astro` |
| Nav (avatar), Footer | `src/components/Nav.astro`, `Footer.astro` |
| Custom cursor | `src/components/Cursor.astro` (+ styles at the end of `global.css`) |
| Section list / phase bar | `Toc.astro`, `PhaseBar.astro` |
| UI strings, URL helpers | `src/lib/i18n.js` |
| Images (looked up by file name) | `src/assets/images/`, `src/data/images.js` |
| Resume text (EN/FA) | `src/data/resume.js` |
| All styles | `src/styles/global.css` |

Commands: `npm run dev` · `npm run build` · `npm run preview` (http://localhost:4321/Design-Portfolio/).

## Image system in case studies (don't go back to absolute layouts)
Every image sits on a card (`--surface: #f3f0e7`, radius 20px).
- `<Figure src width caption>` — single image; width snaps to tiers 140/180/240/360/460/560/720/full. Options: `bare` (image has its own background), `decor` (loose illustration, no card, not zoomable), `end` (sit at the line end), `blend` (white backdrops melt into the card), `wide` + `scrollWidth` (swipeable on phones).
- `<Compare before={{label,imgs,caption}} after={…} kind="screens|wide" h>` — before → after; wide diagrams stack and scroll sideways on phones.
- `<Gallery items h caption decor>` — images at one height; `decor` = small, no card, rise in one by one (left to right, same in both languages).
- `<MediaText src avatar reverse>` — image beside a short text.
- Transparent PNG mockups were trimmed of empty margins; keep new ones trimmed.
- `Img.astro` makes WebP + srcset; GIFs are served raw.

## Design decisions the owner made
- Direction came from a Figma prototype; **newest case-study content lives on Framer** (re-davarpanah.framer.website). The Figma case studies are old.
- Fonts: Poppins (EN), **Estedad (FA)**, Amiko only on the English résumé.
- **Never use the yellow warning stripes as a design colour** — they exist only for "under construction" states.
- **Avatar** (nav): face swap on hover/tap only — **no scaling, tilting or shaking**.
- **Home page is on hold**: leave it alone until the owner provides their own design.
- Motion matters on **both desktop (hover) and mobile (touch)**; always respect `prefers-reduced-motion`.
- Cursor (mouse only): small orange dot (`--cursor`) with a paler trailing dot, a thin bar over text, a yellow dot over links, frosted-yellow glass discs with faint cream icons over images and the next-case card. Colours are CSS variables at the top of the cursor section. No custom cursor on touch (a tap ripple instead).
- Next-case cards have **no border**; the UX hero is tinted via `nextTint: true` in its frontmatter.
- Footer thanks (FA): «ممنون که تشریف آوردید :)».

## Gotchas learned the hard way
- **Don't put `-webkit-backdrop-filter` next to `backdrop-filter`** — the CSS minifier drops the unprefixed one.
- `html` has `scroll-behavior: smooth` for users without reduced motion: in tests use `scrollTo({ top, behavior: 'instant' })`.
- Images load lazily; in screenshots set `loading = 'eager'` and wait.
- Google Fonts are blocked in the sandbox: fulfil them with `curl` inside `page.route` (or accept fallback fonts and say so).
- `reveal` elements start hidden; add `.js .reveal{opacity:1!important;transform:none!important}` for screenshots.
- The nav hides on scroll down; things that sit under it must follow (`body:has(.nav--hidden)`), and anchors use `scroll-margin-top`.
- Images without width/height collapse before loading and break jump-to-section positions — give them an explicit size.
- Don't `pkill` with a pattern that also matches your own shell command.
- The old React/Vite site (`*.jsx`, `src/index.css`) was removed in the Astro migration; ignore those paths if a stale clone still shows them.

## Waiting on the owner
LinkedIn case study · Lottie files and the login-page GIF for Play (current GIFs are heavy) · their Home design · a custom domain (then edit `site`/`base` in `astro.config.mjs` and add `public/CNAME`).
