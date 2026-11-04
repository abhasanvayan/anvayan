"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal, ArrowUpRight, Eyebrow } from "@/components/shared";
import { CLIENTS, type Client, type Stat } from "@/lib/clients";

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

export function CaseStudies() {
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
