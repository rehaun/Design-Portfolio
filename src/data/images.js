// All images live in src/assets/images/ and are looked up here by file name
// (without extension): src/assets/images/gamesHero.png -> images.gamesHero.
// To add an image, drop the file into that folder and use its name.
// Pages and components only read from this map, so files can be swapped
// without touching page code.

const files = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
});

export const images = Object.fromEntries(
  Object.entries(files).map(([path, image]) => [path.split('/').pop().replace(/\.\w+$/, ''), image]),
);
