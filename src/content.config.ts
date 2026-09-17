import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const log = defineCollection({
  loader: glob({ pattern: "*.md", base: "./posts" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { log };
