# Davarpanah — Portfolio

Personal product-design portfolio, bilingual (English / Persian), built with
[Astro](https://astro.build) and hosted on GitHub Pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321/Design-Portfolio/
npm run build    # static site in dist/
```

## Where things live
| What | Where |
| --- | --- |
| Case studies (content) | `src/content/work/en/*.mdx`, `src/content/work/fa/*.mdx` |
| Case study page layout | `src/layouts/CaseStudy.astro` |
| Building blocks used inside case studies (`Section`, `Figure`, `TwoImages`, …) | `src/components/` |
| Home page | `src/pages/index.astro` |
| Shared page shell (head, fonts, scroll-reveal script) | `src/layouts/Base.astro` |
| Images (files / lookup by name) | `src/assets/images/`, `src/data/images.js` |
| UI strings per language, URL helpers | `src/lib/i18n.js` |
| Styles | `src/styles/global.css` |

### URLs
- English pages: `/<slug>/` (e.g. `/classeh-games/`)
- Persian pages: `/fa/<slug>/` (e.g. `/fa/classeh-games/`)

Old hash links from the previous version (`#/classeh-games`, `#/classeh-games/fa`)
are redirected to the new URLs from the home page.

### Adding or editing a case study
Each case study is one `.mdx` file per language. The frontmatter at the top holds
the title, subtitle, meta line, hero image and order on the home page; the body is
Markdown plus the components from `src/components/`. Using the same file name in
`en/` and `fa/` links the two as translations (the language switch appears
automatically).

## Deploy
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages (Settings → Pages → Source → GitHub Actions).

## Custom domain
When a domain is connected:
1. In `astro.config.mjs`, set `site` to the domain (e.g. `https://example.com`) and remove `base`.
2. Add `public/CNAME` containing the domain.
3. Update DNS records per GitHub's
   [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Images
All images live in `src/assets/images/` and are looked up by file name through
`src/data/images.js` (`gamesHero.png` → `images.gamesHero`). Astro converts them
to WebP and resizes large ones at build time. To add an image, drop the file into
that folder and reference it by name.
