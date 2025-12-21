import { Header } from "@/components/header";
import { personalInfo } from "@/lib/data";
import { allPosts } from "content-collections";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: `Technical blog by ${personalInfo.name}. Insights on Oracle Cloud Infrastructure, full-stack development, React, Next.js, and modern web technologies.`,
  keywords: [
    "blog",
    "technical blog",
    "Oracle Cloud",
    "React",
    "Next.js",
    "full-stack development",
    "web development",
    "programming",
    "technology",
  ],
  openGraph: {
    title: `Blog | ${personalInfo.name}`,
    description: `Technical insights and thoughts on technology, development, and cloud computing by ${personalInfo.name}.`,
    url: "https://niharika.vercel.app/blog",
    type: "website",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          `Blog | ${personalInfo.name}`
        )}&description=${encodeURIComponent(
          `Technical insights and thoughts on technology, development, and cloud computing by ${personalInfo.name}.`
        )}&type=blog`,
        width: 1200,
        height: 630,
        alt: `Blog | ${personalInfo.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${personalInfo.name}`,
    description: `Technical insights and thoughts on technology, development, and cloud computing by ${personalInfo.name}.`,
    images: [
      `/api/og?title=${encodeURIComponent(
        `Blog | ${personalInfo.name}`
      )}&description=${encodeURIComponent(
        `Technical insights and thoughts on technology, development, and cloud computing by ${personalInfo.name}.`
      )}&type=blog`,
    ],
  },
  alternates: {
    canonical: "https://niharika.vercel.app/blog",
  },
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header currentPage="blog" />

      <main className="container-width pt-32 pb-24 space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <h1 className="text-3xl font-serif text-foreground">Writing</h1>
          <p className="text-muted-foreground font-light max-w-lg leading-relaxed">
            Notes on engineering, cloud infrastructure, and the systems we build.
            Sometimes technical, sometimes personal.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-10">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={post.url} className="block space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h2 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-xs text-muted-foreground/60 font-mono shrink-0">
                    <Calendar className="w-3 h-3 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {post.summary}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground/60 bg-secondary/30 px-2 py-0.5 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground text-sm">
              No posts found. Check back soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
