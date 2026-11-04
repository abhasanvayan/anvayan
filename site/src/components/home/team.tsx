"use client";

import { Reveal, Eyebrow } from "@/components/shared";

/* ───────────────────────────────────────────
   §7 — FOUNDERS
   Real bios, typographic initials
   ─────────────────────────────────────────── */
export function Team() {
  return (
    <section
      id="about"
      className="bg-ivory"
      style={{ padding: "clamp(96px, 10vw, 168px) 0" }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-[130px] items-start">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Who you&apos;ll work with</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.75rem, 5vw, 4.6rem)" }}
              >
                You talk to the
                <br />
                people who <em className="not-italic text-gold-ink">build it.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[16px] text-muted leading-[1.85] mt-8 max-w-[500px]">
                We&apos;ve built for recruitment firms and specialist
                contractors, and the same problems show up in plenty of
                service businesses. Tight teams with real deadlines have no
                patience for a tool that creates more admin than it saves.
              </p>
              <p className="text-[16px] text-muted leading-[1.85] mt-5 max-w-[500px]">
                You work with the two of us. The people who design the system
                are the people who build it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} direction="right">
            <div className="pt-0 lg:pt-11">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { initial: "A", name: "Abhas", role: "Founder and Chief AI Consultant" },
                  { initial: "N", name: "Nishi", role: "Founder and Chief Technology Officer" },
                ].map((person) => (
                  <div key={person.name} className="border-t border-champagne/50 pt-5">
                    <div
                      className="h-[200px] md:h-[220px] rounded-lg flex items-center justify-center font-display text-[72px] md:text-[80px] relative overflow-hidden ring-1 ring-champagne/50"
                      style={{
                        background:
                          "linear-gradient(145deg, var(--color-mist), var(--color-champagne))",
                        color: "var(--color-gold-ink)",
                        opacity: 0.85,
                      }}
                      aria-label={`Portrait placeholder for ${person.name}`}
                    >
                      {person.initial}
                      <div className="absolute bottom-[-60px] left-[20%] w-[120px] h-[120px] rounded-full border border-champagne/20" />
                    </div>
                    <h3 className="font-medium text-[18px] mt-4 text-midnight">
                      {person.name}
                    </h3>
                    <p className="text-[11px] tracking-[0.12em] uppercase text-muted">
                      {person.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
