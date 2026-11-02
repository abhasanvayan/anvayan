import type { ReactNode } from "react";
import { Header, Footer, Reveal, Eyebrow } from "@/components/shared";

export type LegalSection = { heading: string; body: ReactNode[] };

/** Shared layout for the Privacy and Terms pages. */
export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main id="main" className="pt-[88px]">
        <article className="py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-[760px]">
              <Reveal>
                <Eyebrow tone="gold" className="mb-6">
                  Legal
                </Eyebrow>
                <h1
                  className="font-display font-normal text-midnight leading-[1.05] tracking-[-0.025em] mb-6"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
                >
                  {title}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[13px] text-muted mb-12">
                  Last updated: {updated}
                </p>
              </Reveal>

              <div className="space-y-10">
                {sections.map((section) => (
                  <Reveal key={section.heading} delay={0.1}>
                    <section>
                      <h2 className="font-display text-[20px] text-midnight mb-3 border-l-2 border-champagne pl-4">
                        {section.heading}
                      </h2>
                      <div className="space-y-3">
                        {section.body.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-[15px] text-midnight/80 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** Link style used inside legal copy. */
export function LegalLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-gold-ink hover:text-midnight transition-colors underline underline-offset-2"
    >
      {children}
    </a>
  );
}
