import { Header } from "@/components/header";
import { personalInfo } from "@/lib/data";
import { allPosts } from "content-collections";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || !post.published) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const ogImageUrl = `/api/og/dark?title=${encodeURIComponent(
    post.title
  )}&description=${encodeURIComponent(post.summary)}&type=post`;

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags || [],
    authors: [
      {
        name: post.author || personalInfo.name,
      },
    ],
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://niharika.vercel.app/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || personalInfo.name],
      tags: post.tags || [],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: "@niharikasurapuram",
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://niharika.vercel.app/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const readingTime = Math.ceil(
    post.html.replace(/<[^>]*>/g, "").split(" ").length / 200
  );

  return (
    <div className="min-h-screen font-sans bg-background">
      <Header currentPage="blog" />

      <main className="pt-32 pb-24 container-width">
        <Link
          href="/blog"
          className="inline-flex items-center mb-8 text-xs font-medium transition-colors group text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 w-3 h-3 transition-transform group-hover:-translate-x-1" />
          Back
        </Link>

        <article>
          <header className="pb-8 mb-12 space-y-6 border-b border-border">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl leading-tight sm:text-4xl text-foreground">
                {post.title}
              </h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-6 items-center font-mono text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 w-3 h-3" />
                {readingTime} min read
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 items-center">
                  <Tag className="w-3 h-3" />
                  <div className="flex gap-1">
                    {post.tags.map((tag, i) => (
                      <span key={tag}>
                        #{tag}
                        {i !== (post.tags?.length || 0) - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          <div
            className="max-w-none prose prose-stone dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <div className="flex justify-between items-center pt-8 mt-16 text-xs border-t border-border text-muted-foreground">
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground"
          >
            ← More Writing
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground">
            Portfolio →
          </Link>
        </div>
      </main>
    </div>
  );
}
