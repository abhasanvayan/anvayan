"use client";

import { Reveal, Eyebrow, PrimaryCta } from "@/components/shared";

/* ───────────────────────────────────────────
   §9 — FINAL CTA
   Large editorial statement
   ─────────────────────────────────────────── */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-mist"
      style={{ padding: "clamp(96px, 10vw, 148px) 0" }}
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-80"
      />
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Next step</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(3rem, 5.9vw, 5.25rem)" }}
              >
                Tell us what&apos;s
                <br />
                eating <em className="not-italic text-gold-ink">your week.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div>
              <p className="text-[17px] text-muted leading-[1.75] mb-8">
                Book 15 minutes and talk us through it. If automation will
                help, we&apos;ll say how. If it won&apos;t, we&apos;ll say that
                too.
              </p>
              <PrimaryCta size="lg">Book a free call</PrimaryCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
