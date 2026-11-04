"use client";

import Image from "next/image";
import { Reveal, Eyebrow } from "@/components/shared";
import { FOUNDERS } from "@/lib/clients";

/* ───────────────────────────────────────────
   FOUNDERS
   Two large portraits, staggered, with offset gold frames and the bio
   beside each. A pair of faint gold rings (the logo's hub shape) sits
   behind them.
   ─────────────────────────────────────────── */
export function Team() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ivory"
      style={{ padding: "clamp(80px, 8vw, 128px) 0" }}
      aria-labelledby="team-title"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[62%] hidden h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/35 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[62%] hidden h-[930px] w-[930px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/20 lg:block"
      />

      <div className="container-wide relative">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-14 lg:grid-cols-[1.15fr_1fr] lg:gap-[130px]">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Who you&apos;ll work with</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="team-title"
                className="font-display leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.75rem, 5vw, 4.6rem)" }}
              >
                You talk to the
                <br />
                people who <em className="not-italic text-gold-ink">build it.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <p className="max-w-[420px] text-[16px] leading-[1.75] text-muted lg:ml-auto">
              You work with the two of us. The people who design the system
              are the people who build it.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-[940px] grid-cols-1 items-start gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-14">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.12}>
              <figure className="group">
                <div className="relative pb-4 pr-4">
                  {/* offset gold frame */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 left-4 top-4 rounded-2xl border border-champagne/80"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist shadow-[0_30px_80px_rgba(16,24,39,0.20)] ring-1 ring-champagne/60">
                    <Image
                      src={founder.photo}
                      alt={founder.alt}
                      fill
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[55%]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(16,24,39,0.92) 0%, rgba(16,24,39,0.55) 45%, transparent 100%)",
                      }}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-8">
                      <p
                        className="font-display leading-none tracking-[-0.02em]"
                        style={{ fontSize: "clamp(2.2rem, 3.4vw, 3rem)" }}
                      >
                        {founder.name}
                      </p>
                      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-champagne">
                        {founder.title}
                      </p>
                    </figcaption>
                  </div>
                </div>
                <div className="mt-7 pr-4">
                  <span
                    aria-hidden="true"
                    className="mb-3 block h-px w-10 bg-champagne"
                  />
                  <p className="text-[15px] leading-[1.7] text-muted text-balance">
                    {founder.bio}
                  </p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
