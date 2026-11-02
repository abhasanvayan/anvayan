import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";

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

const SITE_URL = "https://anvayan.com";
const SITE_TITLE = "Anvayan — Intelligent systems for modern businesses";
const SITE_DESCRIPTION =
  "We design AI agents and automation that connect your tools, teams, and workflows — so less gets lost and more gets done.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Anvayan",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${instrumentSerif.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-midnight focus:text-ivory focus:px-5 focus:py-3 focus:rounded-full focus:text-[13px] focus:font-medium"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
