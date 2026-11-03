"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Reveal,
  ArrowUpRight,
  Eyebrow,
  PrimaryCta,
  Header,
  Footer,
} from "@/components/shared";
import { POSITIONING_LABEL } from "@/lib/site";
import {
  CLIENTS,
  PROOF_STATS,
  REVIEWS,
  UPWORK_URL,
  type Client,
  type Stat,
} from "@/lib/clients";

/* ───────────────────────────────────────────
   ROTATING WORDS
   Vertical slide with crossfade, premium feel
   ─────────────────────────────────────────── */
const ROTATING_WORDS = [
  "recruitment firms",
  "contractors",
  "service businesses",
];

function RotatingWords() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Respect "reduce motion": keep the first word, no rotation.
    if (reduceMotion) return;
    let swap: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      setIsAnimating(true);
      swap = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 400);
    }, 2800);
    return () => {
      clearInterval(timer);
      clearTimeout(swap);
    };
  }, [reduceMotion]);

  return (
    <motion.span
      className="inline-block"
      animate={{
        opacity: isAnimating ? 0 : 1,
        y: isAnimating ? -12 : 0,
        filter: isAnimating ? "blur(3px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      {ROTATING_WORDS[wordIndex]}
    </motion.span>
  );
}

/* ───────────────────────────────────────────
   §1 — HERO
   Typography-dominated, warm ivory, no dashboards
   ─────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[min(900px,90svh)] flex flex-col justify-center overflow-hidden pt-24 pb-8"
      aria-labelledby="hero-title"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,197,160,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Eyebrow tone="gold" align="center">
            {POSITIONING_LABEL}
          </Eyebrow>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-midnight leading-[0.98] tracking-[-0.035em] mx-auto max-w-[1040px]"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
          }}
        >
          <span className="sr-only">
            Automation for recruitment firms and service businesses.
          </span>
          <span aria-hidden="true">
            Automation for
            <br />
            <em className="not-italic shimmer-text">
              <RotatingWords />.
            </em>
          </span>
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[17px] md:text-[18px] text-muted leading-[1.7] max-w-[620px] mx-auto mt-8 tracking-[-0.01em]"
        >
          An enquiry lands at 6pm and sits there until Monday. A CV gets
          retyped into the CRM by hand. We build the automation that deals
          with it, inside the tools you already pay for.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9"
        >
          <PrimaryCta className="cta-glow">
            Book a free 15-minute call
          </PrimaryCta>
          <a
            href="#work"
            className="inline-flex items-center gap-4 border border-champagne/60 text-midnight text-[13px] font-medium px-7 py-3.5 rounded-full hover:bg-mist hover:border-champagne transition-all duration-300 group"
          >
            See what we&apos;ve built
            <ArrowUpRight className="w-4 h-4 text-gold-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[12px] text-muted mt-7 tracking-[0.02em]"
        >
          Free, 15 minutes. If automation won&apos;t help, we&apos;ll say so.
        </motion.p>
      </div>

      {/* Orbit lines — subtle SVG, parallax */}
      <motion.div
        style={{ y: orbY }}
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none opacity-60"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {[0, 20, 40].map((offset) => (
            <path
              key={offset}
              d={`M-60 ${155 + offset}C165 ${10 + offset} 249 ${225 + offset} 482 ${112 + offset}C668 ${23 + offset} 794 ${191 + offset} 1022 ${68 + offset}C1235 ${-48 + offset} 1334 ${124 + offset} 1500 ${48 + offset}`}
              stroke="var(--color-champagne)"
              strokeWidth="1"
              fill="none"
              opacity={0.4 - offset * 0.008}
            />
          ))}
          <circle cx="482" cy="112" r="4" fill="var(--color-champagne)" opacity="0.5" />
          <circle cx="1022" cy="68" r="4" fill="var(--color-champagne)" opacity="0.5" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §2 — RESULTS BAND
   Dark strip straight under the hero: the numbers
   ─────────────────────────────────────────── */
function ProofBar() {
  return (
    <section
      className="relative bg-midnight-deep text-ivory"
      aria-label="Results so far"
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-80"
      />
      <div className="container-wide py-14 md:py-16">
        <Reveal>
          <Eyebrow tone="dark" className="mb-10">
            Results so far
          </Eyebrow>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-0 lg:divide-x lg:divide-champagne/25">
          {PROOF_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="lg:px-8 lg:first:pl-0"
            >
              <div>
                <p
                  className="font-display text-champagne leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4.6rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[14px] text-ivory/85 mt-3 leading-snug">
                  {stat.label}
                </p>
                <p className="text-[11px] tracking-[0.14em] uppercase text-ivory/55 mt-1.5">
                  {stat.who}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-[13px] text-ivory/60 mt-12 pt-6 border-t border-champagne/20">
          Built for JG Asbestos, Featherbank Selection and Certus Recruitment.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §3 — THE PROBLEM
   Large two-column statement
   ─────────────────────────────────────────── */
function Problem() {
  return (
    <section
      className="bg-mist"
      style={{ padding: "clamp(96px, 10vw, 168px) 0" }}
      aria-labelledby="problem-title"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[70px] items-end">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">Sound familiar?</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="problem-title"
                className="font-display leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.75rem, 5.3vw, 4.6rem)" }}
              >
                Too much of the day
                <br />
                goes on <em className="not-italic text-gold-ink">copy and paste.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div className="lg:max-w-[420px] lg:ml-auto lg:border-l lg:border-champagne/60 lg:pl-8">
              <p className="text-[16px] text-muted leading-[1.75] mb-6">
                The enquiry form lands in one inbox. The CV lands in another.
                Someone retypes both into the CRM on Friday afternoon, if
                there&apos;s time.
              </p>
              <p className="text-[16px] text-midnight leading-[1.75] font-medium">
                The tools don&apos;t talk to each other, so your people do the
                talking for them.
              </p>
              <p className="text-[16px] text-muted leading-[1.75] mt-2">
                We make the tools talk.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §3 — CLIENT WORK
   One card per client: what we built, what it did
   ─────────────────────────────────────────── */
type Tone = "dark" | "light";

function BuiltList({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul className="mt-6 space-y-2.5 max-w-[440px]">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-[14px] leading-[1.6] ${
            tone === "dark" ? "text-ivory/80" : "text-midnight/80"
          }`}
        >
          <span
            aria-hidden="true"
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-champagne"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ResultStats({ stats, tone }: { stats: Stat[]; tone: Tone }) {
  if (stats.length === 0) return null;
  return (
    <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-champagne/30 pt-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p
            className={`font-display leading-none tracking-[-0.03em] ${
              tone === "dark" ? "text-champagne" : "text-gold-ink"
            }`}
            style={{ fontSize: "clamp(2.2rem, 3.4vw, 3rem)" }}
          >
            {stat.value}
          </p>
          <p
            className={`text-[12px] mt-2 ${
              tone === "dark" ? "text-ivory/70" : "text-muted"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function ToolChips({ tools, tone }: { tools: string[]; tone: Tone }) {
  if (tools.length === 0) return null;
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
      {tools.map((tool) => (
        <li
          key={tool}
          className={`rounded-full border px-3 py-1 text-[11px] tracking-[0.04em] ${
            tone === "dark"
              ? "border-champagne/40 text-ivory/80"
              : "border-champagne/60 text-midnight/80"
          }`}
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}

function CaseCard({
  client,
  index,
  variant,
  visual,
}: {
  client: Client;
  index: number;
  variant: "deep" | "light" | "navy";
  visual: ReactNode;
}) {
  const tone: Tone = variant === "light" ? "light" : "dark";
  const shell =
    variant === "deep"
      ? "bg-midnight-deep ring-champagne/25 shadow-[0_24px_80px_rgba(16,24,39,0.35)]"
      : variant === "navy"
        ? "bg-midnight ring-champagne/25 shadow-[0_24px_80px_rgba(16,24,39,0.25)]"
        : "bg-mist ring-champagne/40";
  return (
    <Reveal>
      <article
        className={`${shell} ring-1 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[440px] lg:min-h-[520px] ${
          index > 0 ? "mt-8" : ""
        }`}
      >
        <div
          className={`p-8 md:p-12 lg:p-[clamp(36px,4.5vw,64px)] flex flex-col justify-between gap-10 ${
            tone === "dark" ? "text-ivory" : ""
          } ${variant === "light" ? "order-1 lg:order-2" : ""}`}
        >
          <div>
            <Eyebrow tone={tone === "dark" ? "dark" : "light"} className="mb-5">
              {String(index + 1).padStart(2, "0")} / {client.name} · {client.sector}
            </Eyebrow>
            <h3
              className="font-display leading-[1.09] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              {client.headline}
            </h3>
            <p
              className={`text-[15px] leading-[1.8] mt-5 max-w-[420px] ${
                tone === "dark" ? "text-ivory/70" : "text-muted"
              }`}
            >
              {client.summary}
            </p>
            <BuiltList items={client.built} tone={tone} />
            <ResultStats stats={client.results} tone={tone} />
            <ToolChips tools={client.tools} tone={tone} />
          </div>
          <a
            href="#contact"
            className={`text-[12px] border-b pb-1 inline-flex items-center gap-3 self-start transition-colors ${
              tone === "dark"
                ? "text-champagne/80 border-champagne/30 hover:text-champagne hover:border-champagne/60"
                : "text-muted border-champagne hover:text-midnight hover:border-gold-ink"
            }`}
          >
            Ask about this one
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        {visual}
      </article>
    </Reveal>
  );
}

function JGVisual() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[280px] lg:min-h-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 56% 40%, #1A2949, #0C1629 66%, #101B2E)",
      }}
    >
      <div className="absolute inset-[8%] border border-ivory/[0.08] rounded-full scale-125" />
      <div className="absolute inset-[17%] border border-ivory/[0.08] rounded-full scale-125" />
      <div className="relative z-10 w-[76%] max-w-[420px] grid gap-3 -rotate-[4deg]">
        {[
          { icon: "✉", label: "Enquiry comes in", step: "01" },
          { icon: "✧", label: "Reply goes out", step: "02" },
          { icon: "✓", label: "CRM updated", step: "03" },
        ].map((pill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="flex items-center gap-3.5 px-5 py-4 bg-white/[0.92] backdrop-blur-sm rounded-xl shadow-[0_14px_40px_rgba(4,7,18,0.15)] ml-[calc(var(--i)*20px)] sm:ml-[calc(var(--i)*44px)]"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="flex items-center justify-center w-8 h-8 bg-mist rounded-full text-champagne text-[15px]">
              {pill.icon}
            </span>
            <span className="text-[13px] font-semibold text-midnight whitespace-nowrap">
              {pill.label}
            </span>
            <span className="ml-auto text-[10px] text-muted">{pill.step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeatherbankVisual() {
  return (
    <div className="relative flex items-center justify-center min-h-[280px] lg:min-h-0 overflow-hidden order-2 lg:order-1">
      <div className="absolute inset-5 border border-soft-grey/60 rounded-lg" />
      <div className="relative z-10 w-[72%] max-w-[380px] grid gap-3 rotate-[3deg]">
        {[
          { initial: "A", label: "Profile matched", tag: "✓" },
          { initial: "B", label: "Skills checked", tag: "✓" },
          { initial: "C", label: "Recruiter signs off", tag: "Next" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            className="h-[52px] rounded-lg bg-white flex items-center gap-3 px-4 shadow-[0_10px_28px_rgba(10,20,48,0.06)]"
          >
            <span className="w-7 h-7 rounded-full bg-champagne/20 flex items-center justify-center text-[10px] text-gold-ink font-semibold">
              {item.initial}
            </span>
            <span className="text-[13px] text-midnight font-medium flex-1">
              {item.label}
            </span>
            <span className="text-[12px] text-gold-ink font-semibold">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CertusVisual() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[280px] lg:min-h-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 44% 50%, #1E2D4D, #131D35 60%, #0F1829)",
      }}
    >
      <div className="absolute inset-[12%] border border-ivory/[0.06] rounded-2xl" />
      <div className="relative z-10 w-[72%] max-w-[400px] grid gap-2.5 rotate-[2deg]">
        {[
          { icon: "◎", label: "Prospect found", status: "Done", state: "done" as const },
          { icon: "◉", label: "Outreach sent", status: "Done", state: "done" as const },
          { icon: "▸", label: "Meeting booked", status: "Active", state: "active" as const },
          { icon: "○", label: "Deal closed", status: "Next", state: "next" as const },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.12, duration: 0.45 }}
            className={`flex items-center gap-3.5 px-5 py-3.5 rounded-xl ${
              step.state === "done"
                ? "bg-white/[0.92] backdrop-blur-sm shadow-[0_12px_36px_rgba(4,7,18,0.2)]"
                : step.state === "active"
                  ? "bg-champagne/[0.15] border border-champagne/20 backdrop-blur-sm"
                  : "bg-white/[0.06] border border-ivory/[0.1] backdrop-blur-sm"
            } ml-[calc(var(--i)*8px)] sm:ml-[calc(var(--i)*20px)]`}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span
              className={`text-[14px] ${step.state === "next" ? "text-ivory/40" : "text-champagne"}`}
            >
              {step.icon}
            </span>
            <span
              className={`text-[13px] font-medium flex-1 whitespace-nowrap ${
                step.state === "done"
                  ? "text-midnight"
                  : step.state === "active"
                    ? "text-ivory"
                    : "text-ivory/50"
              }`}
            >
              {step.label}
            </span>
            <span
              className={`text-[10px] font-medium tracking-wide uppercase ${
                step.state === "done"
                  ? "text-muted"
                  : step.state === "active"
                    ? "text-champagne"
                    : "text-ivory/30"
              }`}
            >
              {step.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <section
      id="work"
      className="bg-ivory"
      style={{ padding: "clamp(80px, 9vw, 140px) 0" }}
      aria-labelledby="work-title"
    >
      <div className="container-wide">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Client work</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="work-title"
                className="font-display leading-[1.06] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 4.7vw, 4.3rem)" }}
              >
                Here&apos;s what we built,
                <br />
                and <em className="not-italic text-gold-ink">what it did.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="text-[12px] text-muted border-b border-champagne pb-1.5 inline-flex items-center gap-4 hover:text-midnight hover:border-gold-ink transition-colors"
            >
              Want something like this?
              <ArrowUpRight className="w-3 h-3 text-gold-ink" />
            </a>
          </Reveal>
        </div>

        <CaseCard client={CLIENTS.jg} index={0} variant="deep" visual={<JGVisual />} />
        <CaseCard
          client={CLIENTS.featherbank}
          index={1}
          variant="light"
          visual={<FeatherbankVisual />}
        />
        <CaseCard
          client={CLIENTS.certus}
          index={2}
          variant="navy"
          visual={<CertusVisual />}
        />
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §4 — CLIENT REVIEWS
   Word for word from public Upwork reviews
   ─────────────────────────────────────────── */
function Reviews() {
  if (REVIEWS.length === 0) return null;
  return (
    <section
      id="reviews"
      className="bg-mist"
      style={{ padding: "clamp(80px, 9vw, 140px) 0" }}
      aria-labelledby="reviews-title"
    >
      <div className="container-wide">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">What clients say</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="reviews-title"
                className="font-display leading-[1.06] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 4.7vw, 4.3rem)" }}
              >
                Word for word,
                <br />
                <em className="not-italic text-gold-ink">from their reviews.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-muted border-b border-champagne pb-1.5 inline-flex items-center gap-4 hover:text-midnight hover:border-gold-ink transition-colors"
            >
              Read every review on Upwork
              <ArrowUpRight className="w-3 h-3 text-gold-ink" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote} delay={(i % 2) * 0.1} className="h-full">
              <figure className="h-full bg-white rounded-xl p-8 md:p-10 ring-1 ring-champagne/40 flex flex-col justify-between gap-8">
                <div>
                  <p
                    aria-hidden="true"
                    className="font-display text-champagne text-[64px] leading-none h-8"
                  >
                    &ldquo;
                  </p>
                  <blockquote
                    className="font-display text-midnight leading-[1.3] tracking-[-0.02em] mt-3"
                    style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.65rem)" }}
                  >
                    {review.quote}
                  </blockquote>
                </div>
                <figcaption>
                  <p
                    className="text-gold-ink tracking-[0.2em] text-[13px]"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </p>
                  <p className="text-[14px] font-medium text-midnight mt-2">
                    {review.who}
                  </p>
                  <p className="text-[12px] text-muted">{review.project}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §5 — SERVICES
   Editorial numbered rows on soft grey
   ─────────────────────────────────────────── */
function Services() {
  const services = [
    {
      num: "01",
      title: "Lead capture and follow-up",
      desc: "Enquiries get answered fast and followed up on schedule. The CRM updates itself.",
    },
    {
      num: "02",
      title: "Connecting your tools",
      desc: "Details move between your tools on their own, so your team stops retyping the same thing twice.",
    },
    {
      num: "03",
      title: "Recruitment workflows",
      desc: "Sourcing, screening, ranking and outreach drafts. A recruiter signs off before anything goes to a candidate.",
    },
  ];

  return (
    <section
      id="solutions"
      className="bg-ivory"
      style={{ padding: "clamp(96px, 10vw, 160px) 0" }}
      aria-labelledby="solutions-title"
    >
      <div className="container-wide">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">What we build</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="solutions-title"
                className="font-display leading-[1.06] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.6rem)" }}
              >
                The jobs we take
                <br />
                <em className="not-italic text-gold-ink">off your plate.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} direction="right">
            <p className="text-[16px] text-muted leading-[1.75] lg:max-w-[410px] lg:ml-auto lg:self-end">
              Every build starts with a job your team hates doing. We begin
              there, using the tools you already have.
            </p>
          </Reveal>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative grid grid-cols-[44px_1fr_28px] md:grid-cols-[70px_minmax(240px,1fr)_1fr_36px] items-center gap-4 md:gap-7 border-t border-soft-grey py-8 md:py-9 transition-all duration-300 hover:pl-3 cursor-pointer after:absolute after:left-0 after:-top-px after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-500 hover:after:w-full">
                <span className="text-[12px] text-muted">{s.num} /</span>
                <h3
                  className="text-midnight font-medium tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)" }}
                >
                  {s.title}
                </h3>
                <p className="hidden md:block text-[14px] text-muted leading-[1.7] max-w-[360px]">
                  {s.desc}
                </p>
                <span className="text-champagne text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
                {/* Mobile description */}
                <p className="md:hidden col-start-2 text-[13px] text-muted leading-[1.6] -mt-2">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-soft-grey" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §6 — PHILOSOPHY (MIDNIGHT SECTION)
   Visually generous statement with steps
   ─────────────────────────────────────────── */
function Philosophy() {
  return (
    <section
      id="approach"
      className="bg-midnight-deep text-ivory overflow-hidden relative"
      style={{ padding: "clamp(96px, 10vw, 168px) 0" }}
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-70"
      />
      {/* Decorative ring */}
      <div
        className="absolute -right-48 -top-20 w-[540px] h-[540px] rounded-full border border-champagne/20 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 80px rgba(192,164,110,0.035), 0 0 0 160px rgba(192,164,110,0.018)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <Reveal>
          <Eyebrow tone="dark" className="mb-6">
            How we work
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[1.03] tracking-[-0.035em] max-w-[950px]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            We start with
            <br />
            <em className="not-italic text-champagne/70" style={{
              background: "linear-gradient(110deg, rgba(192,164,110,0.7) 0%, rgba(212,188,138,0.7) 30%, rgba(240,228,200,0.85) 50%, rgba(212,188,138,0.7) 70%, rgba(192,164,110,0.7) 100%)",
              backgroundSize: "250% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 5s ease-in-out infinite",
            }}>
              the bottleneck.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-ivory/70 text-[17px] leading-[1.8] max-w-[600px] mt-8">
            First we watch how work moves through your business and where it
            gets stuck. Then we build the fix in small stages and stay close
            while it beds in.
          </p>
          <p className="text-ivory/70 text-[17px] leading-[1.8] max-w-[600px] mt-5">
            After launch we&apos;re still around as your{" "}
            <span className="text-champagne">AI growth partner</span>. We
            maintain what we built and keep improving it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-2.5 mt-16">
            {[
              "Understand the process",
              "Design the fix",
              "Build in stages",
              "Maintain and improve",
            ].map((step, i) => (
              <span key={step} className="flex items-center gap-2.5">
                <span className="flex items-center gap-3 px-5 py-3.5 border border-champagne/30 rounded-full text-[12px] text-ivory/90 hover:border-champagne/70 transition-colors">
                  <span className="text-[11px] text-champagne font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {i < 3 && (
                  <span className="text-champagne/70 text-[13px] hidden sm:inline">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §7 — FOUNDERS
   Real bios, typographic initials
   ─────────────────────────────────────────── */
function Founders() {
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
                  { initial: "A", name: "Abhas", role: "Co-founder" },
                  { initial: "N", name: "Nishi", role: "Co-founder" },
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

/* ───────────────────────────────────────────
   §9 — FINAL CTA
   Large editorial statement
   ─────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-mist"
      style={{ padding: "clamp(96px, 10vw, 148px) 0" }}
    >
      <span
        aria-hidden="true"
        className="gold-hairline absolute top-0 left-0 right-0 opacity-80"
      />
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Next step</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(3rem, 5.9vw, 5.25rem)" }}
              >
                Tell us what&apos;s
                <br />
                eating <em className="not-italic text-gold-ink">your week.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div>
              <p className="text-[17px] text-muted leading-[1.75] mb-8">
                Book 15 minutes and talk us through it. If automation will
                help, we&apos;ll say how. If it won&apos;t, we&apos;ll say that
                too.
              </p>
              <PrimaryCta size="lg">Book a free call</PrimaryCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   PAGE COMPOSITION
   ─────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProofBar />
        <CaseStudies />
        <Reviews />
        <Problem />
        <Services />
        <Philosophy />
        <Founders />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
