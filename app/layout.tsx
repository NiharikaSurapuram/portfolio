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
  title: "Niharika Surapuram - Full-Stack Developer",
  description:
    "Computer Science graduate from PES University. Full-stack developer specializing in React, Next.js, and modern web technologies. Passionate about building innovative software solutions.",
  keywords: [
    "Niharika Surapuram",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Computer Science",
    "PES University",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Niharika Surapuram",
      url: "https://linkedin.com/in/niharikasurapuram",
    },
  ],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Niharika Surapuram - Full-Stack Developer",
    description:
      "Computer Science graduate specializing in React, Next.js, and modern web technologies.",
    url: "https://niharika.vercel.app",
    siteName: "Niharika Surapuram Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
