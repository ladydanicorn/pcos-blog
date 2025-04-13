import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
	image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
