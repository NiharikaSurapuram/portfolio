import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeMermaid from "rehype-mermaid";
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
    const html = await compileMarkdown(context, document, {
      rehypePlugins: [
        rehypeHighlight,
        [
          rehypeMermaid,
          {
            strategy: "img-svg",
            mermaidConfig: {
              theme: "base",
              themeVariables: {
                primaryColor: "#f5f5f4", // stone-100
                primaryTextColor: "#44403c", // stone-700
                primaryBorderColor: "#e7e5e4", // stone-200
                lineColor: "#78716c", // stone-500
                secondaryColor: "#fafaf9", // stone-50
                tertiaryColor: "#fff", // white
                fontFamily: "var(--font-inter)",
              },
            },
          },
        ],
      ],
    });
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
