import { Header } from "@/components/header";
import { allPosts } from "content-collections";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Navigation */}
      <Header currentPage="blog" />

      {/* Header */}
      <div className="py-24 pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Thoughts on technology, development, and my journey in the tech
            world
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {sortedPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group ${
                index !== sortedPosts.length - 1
                  ? "border-b border-gray-100 dark:border-gray-800 pb-12"
                  : ""
              }`}
            >
              <Link href={post.url}>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-500">
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
                    {Math.ceil(
                      post.html.replace(/<[^>]*>/g, "").split(" ").length / 200
                    )}{" "}
                    min read
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-500">
              No blog posts found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
