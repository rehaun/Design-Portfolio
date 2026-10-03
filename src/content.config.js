import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies live in src/content/work/<lang>/<slug>.mdx.
// The same <slug> in en/ and fa/ makes the two a translation pair.
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    eyebrow: z.string(),
    // key into src/data/images.js
    hero: z.string(),
    order: z.number(),
    // short line shown on the home page card
    cardTitle: z.string().optional(),
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

export const collections = { work };
