import type { Metadata } from "next";
import { Header, Footer, Reveal } from "@/components/shared";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service — Anvayan",
  description: "Terms and conditions for using Anvayan's services and website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[88px]">
        <article className="py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-[760px]">
              <Reveal>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold-ink font-medium mb-6">
                  Legal
                </p>
                <h1
                  className="font-display font-normal text-midnight leading-[1.05] tracking-[-0.025em] mb-10"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
                >
                  Terms of Service
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[13px] text-muted mb-12">
                  Last updated: November 2026
                </p>
              </Reveal>

              <div className="space-y-10">
                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Agreement to terms
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      By accessing or using the Anvayan website
                      (anvayan.com), you agree to be bound by these terms. If
                      you do not agree, please do not use our website or
                      services.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Services
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Anvayan provides AI automation consulting and
                      implementation services. The specific scope, deliverables,
                      and terms of any project engagement will be outlined in a
                      separate agreement between Anvayan and the client.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Intellectual property
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      All content on this website, including text, graphics,
                      logos, and design, is the property of Anvayan and is
                      protected by applicable intellectual property laws. You
                      may not reproduce, distribute, or create derivative works
                      from this content without our written permission.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Case studies and testimonials
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Case studies and results displayed on our website reflect
                      specific client engagements. Individual results vary and
                      are not guaranteed for future projects. All case study
                      information is shared with client approval.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Limitation of liability
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      This website and its content are provided &ldquo;as
                      is&rdquo; without warranties of any kind. Anvayan shall
                      not be liable for any damages arising from your use of
                      the website or reliance on any information provided here.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Third-party links and tools
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Our website may contain links to third-party services such
                      as Calendly. We are not responsible for the content,
                      privacy practices, or terms of any third-party sites or
                      services.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Changes to these terms
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      We may revise these terms at any time. Changes take effect
                      when posted on this page. Continued use of the website
                      constitutes acceptance of the updated terms.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Contact
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Questions about these terms? Email us at{" "}
                      <a
                        href="mailto:hello@anvayan.com"
                        className="text-gold-ink hover:text-midnight transition-colors underline underline-offset-2"
                      >
                        hello@anvayan.com
                      </a>
                      .
                    </p>
                  </section>
                </Reveal>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
