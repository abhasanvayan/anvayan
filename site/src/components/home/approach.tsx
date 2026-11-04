"use client";

import { Reveal, Eyebrow } from "@/components/shared";

/* ───────────────────────────────────────────
   §6 — PHILOSOPHY (MIDNIGHT SECTION)
   Visually generous statement with steps
   ─────────────────────────────────────────── */
export function Approach() {
  return (
    <section
      id="approach"
      className="bg-midnight-deep text-ivory overflow-hidden relative"
      style={{ padding: "clamp(96px, 10vw, 168px) 0" }}
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-70"
      />
      {/* Decorative ring */}
      <div
        className="absolute -right-48 -top-20 w-[540px] h-[540px] rounded-full border border-champagne/20 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 80px rgba(192,164,110,0.035), 0 0 0 160px rgba(192,164,110,0.018)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <Reveal>
          <Eyebrow tone="dark" className="mb-6">
            How we work
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[1.03] tracking-[-0.035em] max-w-[950px]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            We start with
            <br />
            <em className="not-italic text-champagne/70" style={{
              background: "linear-gradient(110deg, rgba(192,164,110,0.7) 0%, rgba(212,188,138,0.7) 30%, rgba(240,228,200,0.85) 50%, rgba(212,188,138,0.7) 70%, rgba(192,164,110,0.7) 100%)",
              backgroundSize: "250% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 5s ease-in-out infinite",
            }}>
              the bottleneck.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-ivory/70 text-[17px] leading-[1.8] max-w-[600px] mt-8">
            First we watch how work moves through your business and where it
            gets stuck. Then we build the fix in small stages and stay close
            while it beds in.
          </p>
          <p className="text-ivory/70 text-[17px] leading-[1.8] max-w-[600px] mt-5">
            After launch we&apos;re still around as your{" "}
            <span className="text-champagne">AI growth partner</span>. We
            maintain what we built and keep improving it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-2.5 mt-16">
            {[
              "Understand the process",
              "Design the fix",
              "Build in stages",
              "Maintain and improve",
            ].map((step, i) => (
              <span key={step} className="flex items-center gap-2.5">
                <span className="flex items-center gap-3 px-5 py-3.5 border border-champagne/30 rounded-full text-[12px] text-ivory/90 hover:border-champagne/70 transition-colors">
                  <span className="text-[11px] text-champagne font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {i < 3 && (
                  <span className="text-champagne/70 text-[13px] hidden sm:inline">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
