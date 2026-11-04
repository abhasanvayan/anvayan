"use client";

import { useState } from "react";
import { Reveal, Eyebrow } from "@/components/shared";
import { CLIENT_NAMES, INDUSTRIES, PROOF_STATS } from "@/lib/clients";

/* ───────────────────────────────────────────
   CLIENT TICKER
   Names of businesses we have worked with, scrolling.
   Pause button for anyone who needs it (WCAG 2.2.2).
   ─────────────────────────────────────────── */
export function ClientTicker() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      aria-label="Businesses we have worked with"
      className="relative bg-mist border-y border-champagne/30 overflow-hidden"
    >
      <div className="md:flex md:items-center">
        <p className="relative z-10 shrink-0 bg-mist pl-[clamp(24px,5.5vw,88px)] pr-8 pt-5 md:py-7 text-[11px] uppercase tracking-[0.18em] text-muted font-medium flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-champagne" />
          We&apos;ve worked with
          <span
            aria-hidden="true"
            className="absolute left-full top-0 bottom-0 hidden w-12 md:block"
            style={{
              background:
                "linear-gradient(to right, var(--color-mist), transparent)",
            }}
          />
        </p>
        <div className="relative flex-1 overflow-hidden">
          <div
            className="marquee-track flex min-w-max gap-14 py-5 md:py-7"
            style={{
              animation: paused ? "none" : "marquee 50s linear infinite",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
              <span
                key={i}
                className="flex items-center gap-14"
                aria-hidden={i >= CLIENT_NAMES.length ? true : undefined}
              >
                <span className="font-display text-[26px] md:text-[32px] leading-none tracking-[-0.02em] text-midnight whitespace-nowrap">
                  {name}
                </span>
                <span className="text-champagne text-[13px]" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
          <button
            onClick={() => setPaused(!paused)}
            className="absolute right-0 top-0 bottom-0 z-10 flex items-center pl-14 pr-5 text-[10px] text-muted hover:text-midnight transition-colors"
            style={{
              background:
                "linear-gradient(to left, var(--color-mist) 62%, transparent)",
            }}
            aria-label={paused ? "Resume ticker" : "Pause ticker"}
          >
            {paused ? "▶" : "❚❚"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   RESULTS BAND
   Dark strip: the numbers, then the industries
   ─────────────────────────────────────────── */
export function ProofBar() {
  return (
    <section
      className="relative bg-midnight-deep text-ivory"
      aria-label="Results so far"
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-80"
      />
      <div className="container-wide py-14 md:py-16">
        <Reveal>
          <Eyebrow tone="dark" className="mb-10">
            Results so far
          </Eyebrow>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-0 lg:divide-x lg:divide-champagne/25">
          {PROOF_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="lg:px-8 lg:first:pl-0"
            >
              <div>
                <p
                  className="font-display text-champagne leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4.6rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[14px] text-ivory/85 mt-3 leading-snug">
                  {stat.label}
                </p>
                <p className="text-[11px] tracking-[0.14em] uppercase text-ivory/55 mt-1.5">
                  {stat.who}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 pt-7 border-t border-champagne/20 flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="mr-2 text-[11px] uppercase tracking-[0.18em] text-ivory/60">
              Across
            </span>
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-champagne/40 px-4 py-1.5 text-[12px] text-ivory/85"
              >
                {industry}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
