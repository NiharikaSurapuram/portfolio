import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Niharika Surapuram - Portfolio",
  description:
    "Professional portfolio of Niharika Surapuram - Software Engineer & Developer",
  keywords: [
    "Niharika Surapuram",
    "Software Engineer",
    "Developer",
    "Portfolio",
  ],
  authors: [{ name: "Niharika Surapuram" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
