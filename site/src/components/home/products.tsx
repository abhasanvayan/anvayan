"use client";

import { Reveal, Eyebrow, ArrowUpRight } from "@/components/shared";
import { PRODUCTS } from "@/lib/clients";

/* ───────────────────────────────────────────
   PRODUCTS
   Three specialised systems, one card each
   ─────────────────────────────────────────── */
export function Products() {
  return (
    <section
      id="products"
      className="bg-mist"
      style={{ padding: "clamp(80px, 9vw, 140px) 0" }}
      aria-labelledby="products-title"
    >
      <div className="container-wide">
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">What we build</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="products-title"
                className="font-display leading-[1.06] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.6rem)" }}
              >
                Three systems.
                <br />
                Start{" "}
                <em className="not-italic text-gold-ink">where it hurts.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} direction="right">
            <p className="text-[16px] text-muted leading-[1.75] text-balance lg:max-w-[430px] lg:ml-auto lg:self-end">
              Each one is built around how your business already works. Your
              team runs it, and we stay on to maintain and improve it.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.1} className="h-full">
              <article className="relative flex h-full flex-col rounded-xl bg-white p-8 md:p-9 ring-1 ring-champagne/40 shadow-[0_20px_60px_rgba(16,24,39,0.06)]">
                <span
                  aria-hidden="true"
                  className="gold-hairline absolute top-0 left-6 right-6"
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="font-display text-[44px] leading-none text-gold-ink"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[170px] pt-2 text-right text-[11px] uppercase leading-snug tracking-[0.14em] text-muted">
                    {product.audience}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-[clamp(1.9rem,2.6vw,2.2rem)] leading-[1.08] tracking-[-0.03em]">
                  {product.name}
                </h3>
                <p className="mt-4 font-display text-[22px] leading-[1.25] tracking-[-0.02em] text-gold-ink">
                  {product.promise}
                </p>
                <p className="mt-4 text-[14px] leading-[1.7] text-muted">
                  {product.body}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {product.included.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-[1.6] text-midnight/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-champagne"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="border-t border-champagne/40 pt-5">
                    <p className="text-[12px] leading-snug text-midnight/80">
                      {product.proof}
                    </p>
                    {product.timeline && (
                      <p className="mt-2 text-[12px] leading-snug text-muted">
                        {product.timeline}
                      </p>
                    )}
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-3 border-b border-champagne pb-1 text-[12px] text-midnight transition-colors hover:border-gold-ink hover:text-gold-ink"
                    >
                      Discuss this system
                      <ArrowUpRight className="h-3 w-3 text-gold-ink" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
