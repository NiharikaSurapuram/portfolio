import { personalInfo } from "@/lib/data";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Cloud Analyst at Oracle specializing in Oracle Cloud Infrastructure, full-stack development with React/Next.js, and enterprise solutions. Computer Science graduate from PES University.",
  keywords: [
    "Niharika Surapuram",
    "Cloud Analyst",
    "Oracle",
    "Oracle Cloud Infrastructure",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Computer Science",
    "PES University",
    "Software Engineer",
    "Cloud Computing",
    "Enterprise Solutions",
    "Bangalore",
    "India",
  ],
  authors: [
    {
      name: personalInfo.name,
      url: personalInfo.linkedin,
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niharika.vercel.app",
    siteName: `${personalInfo.name} - Portfolio`,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description:
      "Cloud Analyst at Oracle specializing in Oracle Cloud Infrastructure and full-stack development. Building enterprise solutions with modern technologies.",
    images: [
      {
        url: "/api/og?type=portfolio",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Cloud Analyst at Oracle`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description:
      "Cloud Analyst at Oracle specializing in Oracle Cloud Infrastructure and full-stack development.",
    images: ["/api/og?type=portfolio"],
    creator: "@niharikasurapuram",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://niharika.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
