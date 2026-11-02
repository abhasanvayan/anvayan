import type { Metadata } from "next";
import { Header, Footer, Reveal, ArrowUpRight } from "@/components/shared";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Contact — Anvayan",
  description:
    "Book a free 15-minute system audit with Anvayan, or email hello@anvayan.com.",
  alternates: { canonical: "/contact" },
};

/* ───────────────────────────────────────────
   CONTACT PAGE
   Calendly embed for 15-min system audit calls
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
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold-ink font-medium mb-6">
                Get in touch
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-display font-normal text-midnight leading-[0.98] tracking-[-0.035em] max-w-[720px]"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
              >
                Let&rsquo;s talk about what&rsquo;s slowing your team down.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] md:text-[17px] text-muted leading-relaxed mt-6 max-w-[560px]">
                Book a free 15-minute system audit. We&rsquo;ll look at how your
                tools and processes connect, where work gets stuck, and whether
                automation would actually help.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Calendly embed */}
        <section className="pb-24 md:pb-32">
          <div className="container-wide">
            <Reveal delay={0.3}>
              <CalendlyEmbed />
            </Reveal>
          </div>
        </section>

        {/* Fallback / direct contact */}
        <section className="pb-20 md:pb-28">
          <div className="container-wide">
            <Reveal>
              <div className="border-t border-soft-grey/60 pt-10 flex flex-col md:flex-row justify-between gap-8 max-w-[760px]">
                <div>
                  <h2 className="font-display text-[22px] text-midnight mb-2">
                    Prefer email?
                  </h2>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Drop us a line and we&rsquo;ll get back to you within a
                    working day.
                  </p>
                  <a
                    href="mailto:hello@anvayan.com"
                    className="inline-flex items-center gap-2 text-[14px] text-midnight font-medium mt-4 hover:text-champagne transition-colors"
                  >
                    hello@anvayan.com
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div>
                  <h2 className="font-display text-[22px] text-midnight mb-2">
                    Where we work
                  </h2>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Remote-first.
                    <br />
                    Working with teams across time zones.
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
