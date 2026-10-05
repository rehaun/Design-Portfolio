export const LANGS = ['en', 'fa'];

export const ui = {
  en: {
    brand: 'Davarpanah',
    name: 'Reyhane Davarpanah',
    works: 'Works',
    about: 'About',
    play: 'Play',
    resume: 'Resume',
    footerThanks: 'Thanks for stopping by :)',
    footerIteration: 'Iteration no.5',
    backHome: '← Back to home',
  },
  fa: {
    brand: 'داورپناه',
    name: 'ریحانه داورپناه',
    works: 'کارها',
    about: 'درباره من',
    play: 'Play',
    resume: 'رزومه',
    footerThanks: 'ممنون که تشریف آوردید :)',
    footerIteration: 'نسخه‌ی ۵',
    backHome: '→ بازگشت به صفحه اصلی',
  },
};

// Prefixes a site-relative path ("/classeh-games/") with the deploy base.
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

// Path of a page in the given language: "/x/" -> "/fa/x/" for Persian.
export function localePath(lang, path = '/') {
  return url(lang === 'fa' ? `/fa${path}` : path);
}

// Splits a collection entry id ("fa/classeh-games") into its parts.
export function parseId(id) {
  const [lang, ...rest] = id.split('/');
  return { lang, slug: rest.join('/') };
}

// Anchor id for a case-study section, from its heading (works for Persian too).
export function sectionId(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
