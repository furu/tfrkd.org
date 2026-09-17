import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const log = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./posts",
    // ファイル名のピリオドを含むスラッグ(例: cakephp-1.3.2)を維持するため slugger を使わない
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { log };
