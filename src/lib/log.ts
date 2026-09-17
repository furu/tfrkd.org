import { getCollection } from "astro:content";

export async function getSortedPosts() {
  const posts = await getCollection("log");
  return posts.sort((a, b) => (postDate(a) < postDate(b) ? 1 : -1));
}

export function postDate(post: { id: string }) {
  return post.id.match(/\d{4}-\d{2}-\d{2}/)![0];
}

export function formatDate(post: { id: string }) {
  return postDate(post).replaceAll("-", "/");
}
