// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The site is served from https://rehaun.github.io/Design-Portfolio/ for now.
// Once a custom domain is connected: set `site` to that domain, remove `base`,
// and add a public/CNAME file containing the domain.
export default defineConfig({
  site: 'https://rehaun.github.io',
  base: '/Design-Portfolio',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', fa: 'fa' } },
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  // keep quotes exactly as written (no automatic curly quotes)
  markdown: { smartypants: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: { prefixDefaultLocale: false },
  },
});
