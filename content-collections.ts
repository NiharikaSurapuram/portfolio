import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    author: z.string().default("Niharika Surapuram"),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    const slug = document._meta.path.replace(/\.md$/, "");
    return {
      ...document,
      html,
      slug,
      url: `/blog/${slug}`,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
