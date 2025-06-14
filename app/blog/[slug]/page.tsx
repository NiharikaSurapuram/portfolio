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
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-950">
      {/* Navigation */}
      <Header currentPage="blog" />

      {/* Header */}
      <div className="py-0 pt-24 sm:pt-32">
        <div className="px-6 mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center mb-6 text-xs text-gray-500 transition-colors dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 sm:mb-8 sm:text-sm"
          >
            <ArrowLeft className="mr-2 w-3 h-3" />
            Back to Blog
          </Link>

          <h1 className="mb-4 text-2xl font-light tracking-tight leading-tight text-gray-900 sm:text-3xl dark:text-gray-100 sm:mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 items-center mb-6 text-xs text-gray-500 sm:gap-6 dark:text-gray-500 sm:mb-8">
            <div className="flex items-center">
              <Calendar className="mr-1 w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>

            <div className="flex items-center">
              <Clock className="mr-1 w-3 h-3" />
              {readingTime} min read
            </div>

            <div className="text-xs">By {post.author}</div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center mb-6 sm:mb-8">
              <Tag className="flex-shrink-0 w-3 h-3 text-gray-500 dark:text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <article className="px-6 pb-16 mx-auto max-w-4xl sm:pb-24">
        <div className="max-w-none prose prose-sm sm:prose-lg dark:prose-invert">
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-300"
          />
        </div>
      </article>

      {/* Footer */}
      <div className="px-6 pb-8 mx-auto max-w-4xl sm:pb-12">
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 sm:pt-8">
          <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs text-gray-500 transition-colors dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 sm:text-sm"
            >
              <ArrowLeft className="mr-2 w-3 h-3" />
              Back to Blog
            </Link>

            <Link
              href="/"
              className="inline-flex items-center text-xs text-gray-500 transition-colors dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 sm:text-sm"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
