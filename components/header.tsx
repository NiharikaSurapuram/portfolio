"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currentPage?: "portfolio" | "blog";
}

export function Header({ currentPage = "portfolio" }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`text-sm font-medium tracking-tight hover:text-primary transition-colors ${
            isHome ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          NS
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-xs sm:text-sm transition-colors ${
              currentPage === "portfolio"
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`text-xs sm:text-sm transition-colors ${
              currentPage === "blog"
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog
          </Link>
          <div className="w-px h-4 bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
