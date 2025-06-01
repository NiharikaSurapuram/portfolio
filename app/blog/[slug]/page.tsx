import { Header } from "@/components/header";
import { allPosts } from "content-collections";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return (allPosts as any[]).map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = (allPosts as any[]).find((post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const readingTime = Math.ceil(
    post.html.replace(/<[^>]*>/g, "").split(" ").length / 200
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Navigation */}
      <Header currentPage="blog" />

      {/* Header */}
      <div className="py-0 pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-gray-500 mb-8">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>

            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {readingTime} min read
            </div>

            <div>By {post.author}</div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-8">
              <Tag className="w-3 h-3 text-gray-500 dark:text-gray-500" />
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
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
      <article className="max-w-4xl mx-auto px-6 pb-24">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          />
        </div>
      </article>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm"
            >
              <ArrowLeft className="w-3 h-3 mr-2" />
              Back to Blog
            </Link>

            <Link
              href="/"
              className="inline-flex items-center text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
