import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-display",
});

const dmSans = localFont({
  src: [
    {
      path: "../fonts/dm-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/dm-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/dm-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-600-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/dm-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Anvayan — Intelligent systems for modern businesses",
  description:
    "We design AI agents and automation that connect your tools, teams, and workflows — so less gets lost and more gets done.",
  openGraph: {
    title: "Anvayan — Intelligent systems for modern businesses",
    description:
      "We design AI agents and automation that connect your tools, teams, and workflows — so less gets lost and more gets done.",
    type: "website",
    url: "https://anvayan.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
