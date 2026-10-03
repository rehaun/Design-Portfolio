// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// The site is served from https://rehaun.github.io/Design-Portfolio/ for now.
// Once a custom domain is connected: set `site` to that domain, remove `base`,
// and add a public/CNAME file containing the domain.
export default defineConfig({
  site: 'https://rehaun.github.io',
  base: '/Design-Portfolio',
  trailingSlash: 'always',
  integrations: [mdx()],
  // keep quotes exactly as written (no automatic curly quotes)
  markdown: { smartypants: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: { prefixDefaultLocale: false },
  },
});
