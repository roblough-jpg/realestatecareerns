import { getCollection } from 'astro:content';

// Drafts appear only in Netlify deploy previews (SHOW_DRAFTS=true), never on the live site.
const showDrafts = import.meta.env.SHOW_DRAFTS === 'true' || process.env.SHOW_DRAFTS === 'true';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => +b.data.published - +a.data.published);
}
