"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "portfolio" | "blog";
}

export function Header({ currentPage = "portfolio" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-4xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-lg font-serif font-medium text-foreground hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Niharika Surapuram
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentPage === "portfolio" ? (
              <>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-foreground font-medium"
                >
                  Blog
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {currentPage === "portfolio" ? (
                <>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    Projects
                  </a>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm text-foreground font-medium"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
