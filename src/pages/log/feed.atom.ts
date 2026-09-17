import type { APIRoute } from "astro";
import { Feed } from "feed";
import { marked } from "marked";
import { getSortedPosts, postDate } from "../../lib/log";

export const GET = (async () => {
  const posts = await getSortedPosts();
  const latestPost = posts[0];

  const feed = new Feed({
    id: "https://tfrkd.org/log",
    title: "log - 49.212.143.129",
    author: {
      name: "furu",
      email: "ba09219@gmail.com",
    },
    updated: new Date(postDate(latestPost)),
    link: "https://tfrkd.org/log/feed.atom",
    copyright: "",
  });

  posts.forEach((post) => {
    feed.addItem({
      id: `https://tfrkd.org/log/${post.id}`,
      title: post.data.title,
      link: `https://tfrkd.org/log/${post.id}`,
      date: new Date(postDate(post)),
      content: marked.parse(post.body ?? "", { async: false }),
    });
  });

  return new Response(feed.atom1(), {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  });
}) satisfies APIRoute;
