# Davarpanah — Portfolio (from Framer)

A hand-built React clone of the Framer site at `re-davarpanah.framer.website`,
made to be hosted for free on GitHub Pages.

## Stack
- React + Vite
- react-router-dom (`HashRouter` — works from any repo/subpath with zero config)
- framer-motion (scroll-reveal animations, similar spirit to Framer's own)

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

**Option A — automatic (recommended)**
1. Push this whole folder to your GitHub repo (any name).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically. Your site will be live at
   `https://<username>.github.io/<repo-name>/`.

**Option B — manual**
```bash
npm run build
```
Then push the contents of the generated `dist/` folder to a `gh-pages` branch
(or upload it wherever you're hosting), and point GitHub Pages at it.

## About the images
Right now all images point to Framer's CDN (`framerusercontent.com`), so the
site currently depends on that staying online. To make it fully independent:

1. Download each image used in `src/data/images.js`.
2. Put them in `src/assets/images/`.
3. In `src/data/images.js`, replace the CDN URL for that image with a local
   import, e.g.:
   ```js
   import gamesHero from '../assets/images/games-hero.png';
   // then use gamesHero directly instead of img('...')
   ```
Because every image reference in the app reads from this one file, you never
need to touch the page components to do this.

## Custom domain
If you connect a custom domain later, add a `CNAME` file to the `public/`
folder containing your domain name, and update your DNS records per GitHub's
docs. You can also switch `HashRouter` to `BrowserRouter` with a `basename`
at that point if you want URLs without the `#`.

## Notes
- Persian pages (`/fa` routes) are rendered right-to-left automatically.
- Animations are approximated with framer-motion (fade/slide on scroll) since
  Framer's own animation engine isn't exportable — closest equivalent, not a
  pixel-for-pixel match.
