import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

interface HeaderProps {
  currentPage?: "portfolio" | "blog";
}

export function Header({ currentPage = "portfolio" }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/50 z-50">
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Niharika Surapuram
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {currentPage === "portfolio" ? (
                <>
                  <a
                    href="#about"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Projects
                  </a>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Blog
                  </Link>
                  <a
                    href="#contact"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-900 dark:text-gray-100 font-medium"
                  >
                    Blog
                  </Link>
                </>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
