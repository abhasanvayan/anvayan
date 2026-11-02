import Link from "next/link";
import { Header, Footer, Eyebrow } from "@/components/shared";

export const metadata = {
  title: "Page not found | Anvayan",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[88px]">
        <section className="py-24 md:py-36">
          <div className="container-wide text-center">
            <Eyebrow tone="gold" align="center" className="mb-8">
              404
            </Eyebrow>
            <h1
              className="font-display font-normal text-midnight leading-[1.05] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              This page <em className="not-italic text-gold-ink">isn&rsquo;t here.</em>
            </h1>
            <p className="text-[15px] md:text-[17px] text-muted leading-relaxed mb-10 max-w-[440px] mx-auto">
              The link might be wrong, or the page might have moved. The
              homepage is a good place to start.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-4 bg-midnight text-ivory text-[13px] font-medium px-7 py-3.5 rounded-full ring-1 ring-champagne/60 hover:ring-champagne hover:bg-midnight-deep transition-all duration-300 hover:shadow-[0_4px_20px_rgba(24,33,57,0.25)]"
            >
              Back to the homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
