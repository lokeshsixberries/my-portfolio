import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lokesh Bhatt - Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience building scalable, high-performance web applications. Expertise in React, Next.js, TypeScript, Node.js, and GraphQL.",
  keywords: [
    "Lokesh Bhatt",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Ahmedabad",
  ],
  authors: [{ name: "Lokesh Bhatt" }],
  creator: "Lokesh Bhatt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lokeshbhatt.dev",
    title: "Lokesh Bhatt - Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years of experience building scalable, high-performance web applications.",
    siteName: "Lokesh Bhatt Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Bhatt - Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years of experience building scalable, high-performance web applications.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
