// Shared helpers for the case-study media components.
// Ask the optimizer for 2x the displayed width so screens stay crisp.
export const widthFor = (src, h) =>
  src.format === 'svg' ? undefined : Math.min(src.width, 1720, Math.round(((h * src.width) / src.height) * 2));

export const swipeHint = (locale) =>
  locale === 'fa' ? 'برای دیدن همه، بکشید' : 'Swipe to see it all';
