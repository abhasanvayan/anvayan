import type { Metadata } from "next";
import { Header, Footer, Reveal } from "@/components/shared";

export const metadata: Metadata = {
  title: "Privacy Policy — Anvayan",
  description: "How Anvayan collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px]">
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
                  Privacy Policy
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[13px] text-muted mb-12">
                  Last updated: November 2026
                </p>
              </Reveal>

              <div className="prose-anvayan space-y-10">
                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Who we are
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Anvayan is an AI automation consultancy based in London,
                      United Kingdom. When we refer to &ldquo;we&rdquo;,
                      &ldquo;us&rdquo;, or &ldquo;our&rdquo; in this policy, we
                      mean Anvayan.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Information we collect
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed mb-3">
                      We collect information you provide directly when you book a
                      call through our scheduling tool (Calendly), contact us via
                      email, or engage with our services. This may include your
                      name, email address, company name, and details about your
                      business needs.
                    </p>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Our website does not use tracking cookies or third-party
                      analytics. The Calendly embed on our contact page is subject
                      to Calendly&rsquo;s own privacy policy.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      How we use your information
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      We use your information to respond to your enquiries,
                      schedule and conduct consultations, deliver our services, and
                      communicate with you about projects. We do not sell, rent, or
                      share your personal information with third parties for
                      marketing purposes.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Data storage and security
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      We store your data securely using industry-standard tools and
                      cloud services. We retain your information only as long as
                      necessary to fulfil the purposes described in this policy or
                      as required by law.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Your rights
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Under UK data protection law (UK GDPR), you have the right
                      to access, correct, or delete the personal data we hold about
                      you. You may also object to or restrict our processing of
                      your data. To exercise any of these rights, contact us at{" "}
                      <a
                        href="mailto:hello@anvayan.com"
                        className="text-champagne hover:text-gold-ink transition-colors underline underline-offset-2"
                      >
                        hello@anvayan.com
                      </a>
                      .
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Third-party services
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      Our website uses Calendly for appointment scheduling. When
                      you interact with the Calendly widget, your data is processed
                      according to{" "}
                      <a
                        href="https://calendly.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-champagne hover:text-gold-ink transition-colors underline underline-offset-2"
                      >
                        Calendly&rsquo;s privacy policy
                      </a>
                      .
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Changes to this policy
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      We may update this policy from time to time. Any changes will
                      be reflected on this page with an updated revision date.
                    </p>
                  </section>
                </Reveal>

                <Reveal delay={0.15}>
                  <section>
                    <h2 className="font-display text-[20px] text-midnight mb-3">
                      Contact
                    </h2>
                    <p className="text-[15px] text-midnight/80 leading-relaxed">
                      If you have questions about this privacy policy or how we
                      handle your data, email us at{" "}
                      <a
                        href="mailto:hello@anvayan.com"
                        className="text-champagne hover:text-gold-ink transition-colors underline underline-offset-2"
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
