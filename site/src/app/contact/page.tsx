import type { Metadata } from "next";
import { Header, Footer, Reveal, ArrowUpRight, Eyebrow } from "@/components/shared";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Anvayan",
  description: `Book a free 15-minute call with Anvayan, or email ${CONTACT_EMAIL}.`,
  alternates: { canonical: "/contact" },
};

/* ───────────────────────────────────────────
   CONTACT PAGE
   Calendly embed for the free 15-minute call
   ─────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[88px]">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container-wide">
            <Reveal>
              <Eyebrow tone="gold" className="mb-6">
                Get in touch
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-display font-normal text-midnight leading-[0.98] tracking-[-0.035em] max-w-[720px]"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
              >
                Let&rsquo;s talk about what&rsquo;s{" "}
                <em className="not-italic text-gold-ink">
                  slowing your team down.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] md:text-[17px] text-muted leading-relaxed mt-6 max-w-[560px]">
                Book a free 15-minute call. Tell us where work gets stuck and
                we&rsquo;ll say whether automation would help.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Calendly embed */}
        <section className="pb-24 md:pb-32">
          <div className="container-wide">
            <Reveal delay={0.3}>
              <CalendlyEmbed />
              <p className="text-[13px] text-muted mt-4">
                Calendar not showing?{" "}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-midnight underline decoration-champagne underline-offset-4 hover:text-gold-ink transition-colors"
                >
                  Book directly on Calendly
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Direct contact */}
        <section className="pb-20 md:pb-28">
          <div className="container-wide">
            <Reveal>
              <div className="border-t border-champagne/60 pt-10 flex flex-col md:flex-row justify-between gap-8 max-w-[760px]">
                <div>
                  <h2 className="font-display text-[22px] text-midnight mb-2">
                    Prefer email?
                  </h2>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Write to us and we&rsquo;ll reply.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-[14px] text-midnight font-medium mt-4 hover:text-gold-ink transition-colors"
                  >
                    {CONTACT_EMAIL}
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-ink" />
                  </a>
                </div>
                <div>
                  <h2 className="font-display text-[22px] text-midnight mb-2">
                    Where we work
                  </h2>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Remote-first.
                    <br />
                    We work with teams in any time zone.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
