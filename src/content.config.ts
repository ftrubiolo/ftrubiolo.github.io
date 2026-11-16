import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string().default('Engineering'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('5 min read'),
    coverTone: z.enum(['emerald', 'slate', 'indigo', 'charcoal']).default('emerald'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    year: z.string(),
    role: z.string(),
    status: z.string().default('Production'),
    category: z.string().default('Systems'),
    stack: z.array(z.string()),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          ratio: z.number().min(0).max(100),
          highlight: z.boolean().optional(),
        }),
      )
      .default([]),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    previewImage: z.string().optional(),
    previewCaption: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    featured: z.boolean().default(true),
    order: z.number().default(10),
  }),
});

export const collections = { posts, projects };
