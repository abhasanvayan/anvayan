import Link from "next/link";
import { Header, Footer, BrandMark } from "@/components/shared";

export const metadata = {
  title: "Page not found — Anvayan",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-[88px]">
        <section className="py-24 md:py-36">
          <div className="container-wide text-center">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold-ink font-medium mb-8">
              404
            </p>
            <h1
              className="font-display font-normal text-midnight leading-[1.05] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              This page doesn&rsquo;t exist.
            </h1>
            <p className="text-[15px] md:text-[17px] text-muted leading-relaxed mb-10 max-w-[440px] mx-auto">
              Whatever you were looking for, it isn&rsquo;t here. Let&rsquo;s
              get you back on track.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-midnight text-ivory text-[13px] font-medium px-7 py-3.5 rounded-full hover:bg-midnight-deep transition-all duration-300 hover:shadow-[0_4px_20px_rgba(24,33,57,0.25)]"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
