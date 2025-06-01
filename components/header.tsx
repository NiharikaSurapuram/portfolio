import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

interface HeaderProps {
  currentPage?: "portfolio" | "blog";
}

export function Header({ currentPage = "portfolio" }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Niharika Surapuram
          </Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {currentPage === "portfolio" ? (
                <>
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#education"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Education
                  </a>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
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
