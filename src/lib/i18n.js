export const LANGS = ['en', 'fa'];

export const ui = {
  en: {
    brand: 'Davarpanah',
    about: 'About',
    play: 'Play',
    backHome: '← Back to home',
    switchLang: 'Read in Persian: FA',
    switchLangShort: 'فا',
  },
  fa: {
    brand: 'داورپناه',
    about: 'درباره من',
    play: 'Play',
    backHome: '→ بازگشت به صفحه اصلی',
    switchLang: 'Read in English EN',
    switchLangShort: 'EN',
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
