import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE, withBase } from '../config/site';

export async function GET(context: APIContext) {
  const posts = SITE.features.writing
    ? (await getCollection('posts'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    : [];

  return rss({
    title: `${SITE.author} — Writing`,
    description: SITE.description,
    site: context.site ?? 'https://ftrubiolo.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: withBase(`/writing/${post.id}`),
    })),
  });
}
