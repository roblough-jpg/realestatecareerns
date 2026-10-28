import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    track: z.enum(['getting-licensed', 'growing-your-career', 'both']),
    answer: z.string(), // the 2-3 sentence answer that opens the post (quoted by AI search)
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
