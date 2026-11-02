"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal, ArrowUpRight, Header, Footer } from "@/components/shared";

/* ───────────────────────────────────────────
   ROTATING WORDS
   Vertical slide with crossfade, premium feel
   ─────────────────────────────────────────── */
const ROTATING_WORDS = [
  "modern",
  "growing",
  "ambitious",
  "evolving",
  "thriving",
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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] tracking-[0.2em] uppercase text-gold-ink font-medium mb-8"
        >
          AI automation · Connected systems · Designed to work
        </motion.p>

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
            Intelligent systems for modern businesses.
          </span>
          <span aria-hidden="true">
            Intelligent systems
            <br />
            for{" "}
            <em className="not-italic shimmer-text">
              <RotatingWords /> businesses.
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
          Leads slip through. Handoffs break. The same data gets entered
          three times. We build AI agents and automation that connect your
          tools and teams — so the work keeps moving.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9"
        >
          <a
            href="https://calendly.com/abhas-anvayan/15-min-system-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-midnight text-ivory text-[13px] font-medium px-7 py-3.5 rounded-full hover:bg-midnight-deep transition-all duration-300 hover:shadow-[0_8px_32px_rgba(24,33,57,0.3)] cta-glow group"
          >
            Discuss your project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-4 border border-soft-grey text-midnight text-[13px] font-medium px-7 py-3.5 rounded-full hover:bg-mist transition-all duration-300 group"
          >
            Explore our work
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[12px] text-muted mt-7 tracking-[0.02em]"
        >
          No templates. No guesswork. Just systems that fit.
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
   §2 — CAPABILITIES TICKER
   Thin band, pause on hover, accessible
   ─────────────────────────────────────────── */
function Ticker() {
  const items = [
    "Enquiries answered",
    "Candidates surfaced",
    "Systems connected",
    "Teams unblocked",
    "Leads qualified",
    "Workflows automated",
    "Operations streamlined",
    "Decisions accelerated",
  ];
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="bg-mist border-t border-b border-soft-grey overflow-hidden relative"
      role="marquee"
      aria-label="Capabilities"
    >
      <div
        className="marquee-track flex gap-12 min-w-max py-5"
        style={{
          animation: paused ? "none" : "marquee 40s linear infinite",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12"
            aria-hidden={i >= items.length ? true : undefined}
          >
            <span className="whitespace-nowrap text-[12px] tracking-[0.12em] uppercase text-midnight/70">
              {item}
            </span>
            <span className="text-champagne text-[10px]" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
      <button
        onClick={() => setPaused(!paused)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-muted hover:text-midnight transition-colors px-2 py-1 rounded"
        aria-label={paused ? "Resume ticker" : "Pause ticker"}
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}

/* ───────────────────────────────────────────
   §3 — THE PROBLEM
   Large two-column statement
   ─────────────────────────────────────────── */
function Problem() {
  return (
    <section
      className="bg-ivory"
      style={{ padding: "clamp(96px, 10vw, 168px) 0" }}
      aria-labelledby="problem-title"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[70px] items-end">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-5">
                Why we exist
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="problem-title"
                className="font-display leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.75rem, 5.3vw, 4.6rem)" }}
              >
                Good businesses are
                <br />
                held back by <em className="not-italic text-champagne/80">bad handoffs.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div className="lg:max-w-[400px] lg:ml-auto">
              <p className="text-[16px] text-muted leading-[1.75] mb-6">
                A lead sitting unanswered. A candidate hidden in a spreadsheet.
                A team copying the same data into three tools.
              </p>
              <p className="text-[16px] text-midnight leading-[1.75] font-medium">
                These aren&apos;t people problems. They&apos;re system problems.
              </p>
              <p className="text-[16px] text-muted leading-[1.75] mt-2">
                We build the connections that close those gaps.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §4 — SELECTED WORK
   Three equal-weight client cards
   ─────────────────────────────────────────── */
function CaseStudies() {
  return (
    <section
      id="work"
      className="bg-ivory"
      style={{ paddingBottom: "clamp(96px, 10vw, 168px)" }}
      aria-labelledby="work-title"
    >
      <div className="container-wide">
        {/* Section heading */}
        <div className="border-t border-soft-grey pt-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-4">
                  Selected work
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2
                  id="work-title"
                  className="font-display leading-[1.06] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(2.5rem, 4.7vw, 4.3rem)" }}
                >
                  Built for the way
                  <br />
                  your business works.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <a
                href="#contact"
                className="text-[12px] text-muted border-b border-muted/40 pb-1.5 inline-flex items-center gap-4 hover:text-midnight hover:border-midnight transition-colors"
              >
                From our portfolio
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* ── Card 1: JG Asbestos ── dark, text left */}
        <Reveal>
          <article className="bg-midnight-deep rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[440px] lg:min-h-[520px] shadow-[0_24px_80px_rgba(16,24,39,0.35)]">
            <div className="p-8 md:p-12 lg:p-[clamp(36px,4.5vw,64px)] flex flex-col justify-between gap-10 text-ivory">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-champagne font-medium mb-5">
                  01 / Lead management · JG Asbestos
                </p>
                <h3
                  className="font-display leading-[1.09] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
                >
                  An enquiry shouldn&apos;t become a loose end.
                </h3>
                <p className="text-ivory/70 text-[15px] leading-[1.8] mt-5 max-w-[400px]">
                  Connecting incoming enquiries, timely responses, and CRM
                  updates — so the next action is clear, and opportunities
                  don&apos;t disappear between tools. Sub-25-second response
                  times. 45% more leads captured.
                </p>
              </div>
              <a
                href="#contact"
                className="text-[12px] text-champagne/80 border-b border-champagne/30 pb-1 inline-flex items-center gap-3 self-start hover:text-champagne hover:border-champagne/60 transition-colors"
              >
                Ask about this project
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            {/* Visual — process flow */}
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
                  { icon: "✉", label: "New enquiry received", step: "01" },
                  { icon: "✧", label: "Response prepared", step: "02" },
                  { icon: "✓", label: "CRM record updated", step: "03" },
                ].map((pill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="flex items-center gap-3.5 px-5 py-4 bg-white/[0.92] backdrop-blur-sm rounded-xl shadow-[0_14px_40px_rgba(4,7,18,0.15)]"
                    style={{ marginLeft: `${i * 44}px` }}
                  >
                    <span className="flex items-center justify-center w-8 h-8 bg-mist rounded-full text-champagne text-[15px]">
                      {pill.icon}
                    </span>
                    <span className="text-[13px] font-semibold text-midnight">
                      {pill.label}
                    </span>
                    <span className="ml-auto text-[10px] text-muted">
                      {pill.step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── Card 2: Featherbank Selection ── light, text right */}
        <Reveal>
          <article className="bg-mist rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[440px] lg:min-h-[520px] mt-8">
            {/* Visual — candidate cards (left on desktop) */}
            <div className="relative flex items-center justify-center min-h-[280px] lg:min-h-0 overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-5 border border-soft-grey/60 rounded-lg" />
              <div className="relative z-10 w-[72%] max-w-[380px] grid gap-3 rotate-[3deg]">
                {[
                  { initial: "A", label: "Candidate profile", tag: "94%" },
                  { initial: "B", label: "Skills assessment", tag: "87%" },
                  { initial: "C", label: "Availability confirmed", tag: "✓" },
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
            {/* Text (right on desktop) */}
            <div className="p-8 md:p-12 lg:p-[clamp(36px,4.5vw,64px)] flex flex-col justify-between gap-10 order-1 lg:order-2">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-5">
                  02 / Recruitment automation · Featherbank Selection
                </p>
                <h3
                  className="font-display leading-[1.09] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
                >
                  Better sourcing. More considered decisions.
                </h3>
                <p className="text-[15px] text-muted leading-[1.8] mt-5 max-w-[400px]">
                  From a recruiter&apos;s brief to a review-ready shortlist:
                  connected candidate search, AI-assisted ranking, and human
                  approval before any outreach goes out.
                </p>
              </div>
              <a
                href="#contact"
                className="text-[12px] text-muted border-b border-muted/40 pb-1 inline-flex items-center gap-3 self-start hover:text-midnight hover:border-midnight transition-colors"
              >
                Ask about this project
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        </Reveal>

        {/* ── Card 3: Certus Recruitment ── dark, text left */}
        <Reveal>
          <article className="bg-midnight rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[440px] lg:min-h-[520px] mt-8 shadow-[0_24px_80px_rgba(16,24,39,0.25)]">
            <div className="p-8 md:p-12 lg:p-[clamp(36px,4.5vw,64px)] flex flex-col justify-between gap-10 text-ivory">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-champagne font-medium mb-5">
                  03 / BD automation · Certus Recruitment
                </p>
                <h3
                  className="font-display leading-[1.09] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
                >
                  A pipeline that fills itself.
                </h3>
                <p className="text-ivory/70 text-[15px] leading-[1.8] mt-5 max-w-[400px]">
                  Structured outreach, automated follow-ups, and a
                  pipeline that keeps new business moving without
                  manual chasing.
                </p>
              </div>
              <a
                href="#contact"
                className="text-[12px] text-champagne/80 border-b border-champagne/30 pb-1 inline-flex items-center gap-3 self-start hover:text-champagne hover:border-champagne/60 transition-colors"
              >
                Ask about this project
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            {/* Visual — pipeline stages */}
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
                  { icon: "◎", label: "Lead identified", status: "Done", state: "done" as const },
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
                    }`}
                    style={{ marginLeft: `${i * 20}px` }}
                  >
                    <span className={`text-[14px] ${step.state === "next" ? "text-ivory/40" : "text-champagne"}`}>
                      {step.icon}
                    </span>
                    <span className={`text-[13px] font-medium flex-1 ${
                      step.state === "done" ? "text-midnight" : step.state === "active" ? "text-ivory" : "text-ivory/50"
                    }`}>
                      {step.label}
                    </span>
                    <span className={`text-[10px] font-medium tracking-wide uppercase ${
                      step.state === "done" ? "text-muted" : step.state === "active" ? "text-champagne" : "text-ivory/30"
                    }`}>
                      {step.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
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
      title: "Sales & revenue systems",
      desc: "Lead capture, qualification, timed follow-up sequences, and CRM workflows that stay in sync.",
    },
    {
      num: "02",
      title: "AI agents & assistants",
      desc: "Voice receptionists, triage bots, and internal assistants that handle the repeatable so your team can focus.",
    },
    {
      num: "03",
      title: "Operations & integration",
      desc: "Pass data between tools automatically, close the gaps between teams, and cut the admin that nobody should be doing by hand.",
    },
    {
      num: "04",
      title: "Recruitment workflows",
      desc: "Source, screen, rank, and reach out — with human sign-off at every step that matters.",
    },
  ];

  return (
    <section
      id="solutions"
      className="bg-mist"
      style={{ padding: "clamp(96px, 10vw, 160px) 0" }}
      aria-labelledby="solutions-title"
    >
      <div className="container-wide">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-4">
                What we build
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="solutions-title"
                className="font-display leading-[1.06] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.6rem)" }}
              >
                Less busywork.
                <br />
                More business.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} direction="right">
            <p className="text-[16px] text-muted leading-[1.75] lg:max-w-[410px] lg:ml-auto lg:self-end">
              We don&apos;t fit your business into a prebuilt template. Every
              system starts with the outcome, then works backwards.
            </p>
          </Reveal>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group grid grid-cols-[44px_1fr_28px] md:grid-cols-[70px_minmax(240px,1fr)_1fr_36px] items-center gap-4 md:gap-7 border-t border-soft-grey py-8 md:py-9 transition-all duration-300 hover:pl-3 cursor-pointer">
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
      {/* Decorative ring */}
      <div
        className="absolute -right-48 -top-20 w-[540px] h-[540px] rounded-full border border-ivory/[0.06] pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 80px rgba(192,164,110,0.02), 0 0 0 160px rgba(192,164,110,0.01)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] uppercase text-champagne font-medium mb-6">
            Our approach / designed before automated
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[1.03] tracking-[-0.035em] max-w-[950px]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            We don&apos;t start with a bot.
            <br />
            <em className="not-italic text-champagne/70" style={{
              background: "linear-gradient(110deg, rgba(192,164,110,0.7) 0%, rgba(212,188,138,0.7) 30%, rgba(240,228,200,0.85) 50%, rgba(212,188,138,0.7) 70%, rgba(192,164,110,0.7) 100%)",
              backgroundSize: "250% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 5s ease-in-out infinite",
            }}>
              We start with the bottleneck.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-ivory/70 text-[17px] leading-[1.8] max-w-[600px] mt-8">
            We sit with the process before we touch the tooling. Once we see
            where the real friction is, we design a system around it — then
            stay close while it beds in.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-2.5 mt-16">
            {["Understand", "Design", "Build", "Refine"].map((step, i) => (
              <span key={step} className="flex items-center gap-2.5">
                <span className="px-5 py-3.5 border border-ivory/20 rounded-full text-[12px] text-ivory/90 hover:border-champagne/40 transition-colors">
                  {step}
                </span>
                {i < 3 && (
                  <span className="text-champagne/50 text-[13px] hidden sm:inline">
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
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-4">
                The people behind Anvayan
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.75rem, 5vw, 4.6rem)" }}
              >
                Systems thinking.
                <br />A human perspective.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[16px] text-muted leading-[1.85] mt-8 max-w-[500px]">
                We&apos;ve built systems for recruitment firms, specialist
                contractors, and growing service businesses. What they have in
                common: tight teams, real constraints, and no patience for
                tools that create more work than they save.
              </p>
              <p className="text-[16px] text-muted leading-[1.85] mt-5 max-w-[500px]">
                You&apos;ll work directly with us — not an account manager,
                not a sales team. The people who design the system are the
                people who build it.
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
                  <div key={person.name} className="border-t border-soft-grey pt-5">
                    <div
                      className="h-[200px] md:h-[220px] rounded-lg flex items-center justify-center font-display text-[72px] md:text-[80px] relative overflow-hidden"
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
              <p className="text-[12px] text-muted/60 mt-4 italic">
                Founder photography and individual biographies to be added with
                approved assets.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   §8 — FAQ
   Accordion, 5 objections
   ─────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "We already use a CRM and some automation. Can you work with what we have?",
      a: "Yes. We work with the tools you already have — your CRM, email platform, spreadsheets, whatever runs the day-to-day. The point is to connect what's there, not replace it.",
    },
    {
      q: "How do you decide what to automate?",
      a: "We start by understanding where time is lost and where handoffs break down. Not everything should be automated. We focus on the steps that are repetitive, error-prone, or create bottlenecks — and leave the judgement calls to your team.",
    },
    {
      q: "Do we own the systems you build?",
      a: "Entirely. Every workflow, integration, and configuration belongs to you. We document everything and hand it over so your team (or another partner) can maintain and extend the system.",
    },
    {
      q: "What does a typical engagement look like?",
      a: "We start with a few calls to understand the process, the tools, and what's not working. From there we design and build in short stages, with your team reviewing each one before we move on. Most implementations take two to six weeks.",
    },
    {
      q: "What happens after launch?",
      a: "The system is designed to run without us. We document everything and set up monitoring so your team can see what's happening and make changes. We're around if you want ongoing support, but you won't need it to keep things running.",
    },
  ];

  return (
    <section
      className="bg-mist"
      style={{ padding: "clamp(96px, 10vw, 148px) 0" }}
      aria-labelledby="faq-title"
    >
      <div className="container-wide max-w-[860px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-4">
            Common questions
          </p>
          <h2
            id="faq-title"
            className="font-display leading-[1.08] tracking-[-0.035em] mb-12"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Before you get in touch
          </h2>
        </Reveal>

        <div>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-t border-soft-grey">
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                >
                  <span className="text-[16px] md:text-[17px] text-midnight font-medium leading-[1.5] pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-champagne text-xl mt-0.5 transition-transform duration-300 shrink-0 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  inert={open !== i}
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[15px] text-muted leading-[1.75] pb-6 max-w-[640px]">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-soft-grey" />
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
      className="bg-ivory border-t border-soft-grey"
      style={{ padding: "clamp(96px, 10vw, 148px) 0" }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-medium mb-4">
                The next step
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display leading-[1.05] tracking-[-0.035em]"
                style={{ fontSize: "clamp(3rem, 5.9vw, 5.25rem)" }}
              >
                There&apos;s a better way
                <br />
                for this to run.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div>
              <p className="text-[17px] text-muted leading-[1.75] mb-8">
                Tell us what keeps slowing your team down. We&apos;ll tell you
                where automation would help — and where it wouldn&apos;t.
              </p>
              <a
                href="https://calendly.com/abhas-anvayan/15-min-system-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-midnight text-ivory text-[14px] font-medium px-8 py-4 rounded-full hover:bg-midnight-deep transition-all duration-300 hover:shadow-[0_8px_32px_rgba(24,33,57,0.3)] group"
              >
                Start the conversation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
        <Ticker />
        <Problem />
        <CaseStudies />
        <Services />
        <Philosophy />
        <Founders />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
