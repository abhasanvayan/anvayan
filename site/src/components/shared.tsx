"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

/* ───────────────────────────────────────────
   SCROLL-REVEAL WRAPPER
   Subtle fade + translate, one element at a time
   ─────────────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 32;
  if (direction === "left") initial.x = -24;
  if (direction === "right") initial.x = 24;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────
   BRAND MARK (SVG)
   Hub-and-spoke mark. Draws in currentColor, so set the colour with a
   text-* class: text-midnight on light backgrounds, text-ivory on dark.
   Master files live in /public/brand.
   ─────────────────────────────────────────── */
const MARK_ARM_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export function BrandMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="-470 -470 940 940"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M0 -142a142 142 0 1 0 0 284a142 142 0 1 0 0 -284ZM0 -107a107 107 0 1 1 0 214a107 107 0 1 1 0 -214Z"
      />
      {MARK_ARM_ANGLES.map((angle) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <path d="M-42 -128L-41 -165Q-41 -177 -29 -177L29 -177Q41 -177 41 -165L42 -128Z" />
          <rect x="-16.75" y="-410" width="33.5" height="240" />
          <circle cy="-405" r="61.5" />
        </g>
      ))}
    </svg>
  );
}

/* ───────────────────────────────────────────
   ARROW ICON
   ─────────────────────────────────────────── */
export function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
    </svg>
  );
}

/* ───────────────────────────────────────────
   EYEBROW
   Small caps label with a gold rule. Muted text on light
   backgrounds, champagne on dark ones.
   ─────────────────────────────────────────── */
export function Eyebrow({
  children,
  tone = "light",
  align = "left",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "gold" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const text =
    tone === "dark"
      ? "text-champagne"
      : tone === "gold"
        ? "text-gold-ink"
        : "text-muted";
  return (
    <p
      className={`flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase font-medium ${
        align === "center" ? "justify-center" : ""
      } ${text} ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-champagne" />
      {children}
      {align === "center" && (
        <span aria-hidden="true" className="h-px w-8 bg-champagne" />
      )}
    </p>
  );
}

/* ───────────────────────────────────────────
   PRIMARY CTA
   Midnight pill with a gold ring and a gold arrow
   ─────────────────────────────────────────── */
export function PrimaryCta({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "text-[14px] px-8 py-4" : "text-[13px] px-7 py-3.5";
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 bg-midnight text-ivory font-medium rounded-full ring-1 ring-champagne/60 hover:ring-champagne hover:bg-midnight-deep transition-all duration-300 hover:shadow-[0_8px_32px_rgba(24,33,57,0.3)] ${sizing} ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ───────────────────────────────────────────
   NAV LINKS — shared between Header and Footer
   ─────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Work", href: "/#work" },
  { label: "What we build", href: "/#solutions" },
  { label: "How we work", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

/* ───────────────────────────────────────────
   HEADER
   ─────────────────────────────────────────── */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_3px_rgba(24,33,57,0.04)]"
          : "bg-transparent"
      }`}
    >
      {scrolled && (
        <span
          aria-hidden="true"
          className="gold-hairline absolute bottom-0 left-0 right-0 opacity-70"
        />
      )}
      <div className="container-wide flex items-center justify-between h-[76px] md:h-[88px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <BrandMark className="w-8 h-8 text-midnight" />
          <span className="font-display text-[22px] tracking-[-0.04em] text-midnight">
            Anvayan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] text-midnight/70 hover:text-champagne transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <PrimaryCta className="max-md:hidden px-6! py-3! gap-3!">
          Book a call
        </PrimaryCta>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-midnight text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[76px] left-4 right-4 bg-white rounded-2xl border border-soft-grey shadow-[0_20px_60px_rgba(24,33,57,0.12)] p-6 flex flex-col gap-5"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-midnight/80 hover:text-champagne"
            >
              {label}
            </Link>
          ))}
          <PrimaryCta className="justify-center">Book a call</PrimaryCta>
        </motion.nav>
      )}
    </header>
  );
}

/* ───────────────────────────────────────────
   FOOTER
   ─────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="relative bg-midnight-deep text-ivory/80">
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-80"
      />
      <div className="container-wide py-12 md:py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-16">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="w-7 h-7 text-ivory" />
              <span className="font-display text-[22px] text-ivory">
                Anvayan
              </span>
            </Link>
            <p className="text-[12px] text-ivory/55 mt-4 max-w-[280px]">
              Automation that does the chasing.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 md:gap-9 text-[12px] text-ivory/60">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-champagne transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-champagne/20 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-ivory/50">
          <span>© {new Date().getFullYear()} Anvayan. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-champagne transition-colors">Privacy policy</Link>
            <Link href="/terms" className="hover:text-champagne transition-colors">Terms of service</Link>
          </span>
        </div>
        <div className="mt-4 text-[11px] text-ivory/50">
          Remote-first. We work with teams in any time zone.
        </div>
      </div>
    </footer>
  );
}
