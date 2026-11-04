"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Eyebrow, PrimaryCta } from "@/components/shared";
import { POSITIONING_LABEL } from "@/lib/site";
import { INDUSTRIES } from "@/lib/clients";

/* ───────────────────────────────────────────
   HERO DYNAMIC ELEMENT
   Four animation styles and two keyword sets.
   While we decide, add ?options to the address to get a picker, or set
   them directly: /?hero=typewriter&words=jobs
   Once chosen, set DEFAULT_STYLE / DEFAULT_WORDS and delete the picker.
   ─────────────────────────────────────────── */
export type HeroStyle = "typewriter" | "highlight" | "roll" | "fade";
export type WordSetKey = "segments" | "jobs";

const STYLES: { key: HeroStyle; label: string }[] = [
  { key: "typewriter", label: "Typewriter" },
  { key: "highlight", label: "Highlight" },
  { key: "roll", label: "Roll" },
  { key: "fade", label: "Fade" },
];

const WORD_SETS: Record<
  WordSetKey,
  { label: string; lead: string; words: string[]; accessible: string }
> = {
  segments: {
    label: "Who we work with",
    lead: "Automation for",
    words: [
      "recruitment firms",
      "contractors",
      "home services",
      "building suppliers",
    ],
    accessible:
      "Automation for recruitment firms, contractors, home services and building suppliers.",
  },
  jobs: {
    label: "What it does",
    lead: "Automation that",
    words: [
      "answers enquiries",
      "chases quotes",
      "screens candidates",
      "updates the CRM",
    ],
    accessible:
      "Automation that answers enquiries, chases quotes, screens candidates and updates the CRM.",
  },
};

export const DEFAULT_STYLE: HeroStyle = "highlight";
export const DEFAULT_WORDS: WordSetKey = "segments";

/* Read a ?param from the address without a hydration mismatch */
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("heroparams", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("heroparams", callback);
  };
}

function useSearchParams() {
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  return new URLSearchParams(search);
}

function setParam(name: string, value: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event("heroparams"));
}

/* Steps through the words on a timer. Stays on the first word if the visitor
   prefers reduced motion. */
function useCycle(length: number, ms: number, active: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => setIndex((i) => i + 1), ms);
    return () => clearInterval(timer);
  }, [ms, active]);
  return active ? index % length : 0;
}

/* Types a word, holds, deletes it, then moves on. */
function useTypewriter(words: string[], active: boolean) {
  const [state, setState] = useState({ index: 0, text: "", deleting: false });
  useEffect(() => {
    if (!active) return;
    const word = words[state.index % words.length];
    let delay = state.deleting ? 30 : 70;
    if (!state.deleting && state.text === word) delay = 1900;
    else if (state.deleting && state.text === "") delay = 380;
    const timer = setTimeout(() => {
      setState((s) => {
        const current = words[s.index % words.length];
        if (!s.deleting && s.text === current) return { ...s, deleting: true };
        if (s.deleting && s.text === "") {
          return { index: s.index + 1, text: "", deleting: false };
        }
        return {
          ...s,
          text: s.deleting
            ? current.slice(0, s.text.length - 1)
            : current.slice(0, s.text.length + 1),
        };
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [state, words, active]);
  return active ? state.text : words[0];
}

function Typewriter({ words, active }: { words: string[]; active: boolean }) {
  const text = useTypewriter(words, active);
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  return (
    <span className="relative inline-block text-left" aria-hidden="true">
      {/* invisible copy of the longest word holds the width steady */}
      <span className="invisible">{longest}.</span>
      <span className="absolute left-0 top-0 whitespace-nowrap">
        <span className="shimmer-text">{text}</span>
        <span className="hero-caret" />
      </span>
    </span>
  );
}

function StackedWords({
  words,
  variant,
  activeIndex,
}: {
  words: string[];
  variant: "highlight" | "roll" | "fade";
  activeIndex: number;
}) {
  const clip = variant !== "fade";
  return (
    <span
      className={`inline-grid align-top ${clip ? "overflow-hidden pb-[0.14em] -mb-[0.14em] px-[0.04em]" : ""}`}
      aria-hidden="true"
    >
      {words.map((word, i) => {
        const active = i === activeIndex;
        const previous = i === (activeIndex - 1 + words.length) % words.length;
        const state =
          variant === "fade"
            ? active
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-[6px] translate-y-3"
            : active
              ? "opacity-100 translate-y-0"
              : previous
                ? "opacity-0 -translate-y-full"
                : "opacity-0 translate-y-full";
        const look =
          variant === "highlight"
            ? "shimmer-gold text-midnight rounded-[0.16em] px-[0.22em]"
            : "shimmer-text";
        return (
          <span
            key={word}
            className={`col-start-1 row-start-1 justify-self-center whitespace-nowrap transition-all duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] ${state}`}
          >
            <span className={`inline-block ${look}`}>
              {word}
              {variant === "highlight" ? "" : "."}
            </span>
            {variant === "highlight" ? (
              <span className="-ml-[0.09em]">.</span>
            ) : (
              ""
            )}
          </span>
        );
      })}
    </span>
  );
}

function HeroHeadline({
  style,
  wordSet,
  animate,
}: {
  style: HeroStyle;
  wordSet: WordSetKey;
  animate: boolean;
}) {
  const set = WORD_SETS[wordSet];
  const index = useCycle(set.words.length, 2800, animate && style !== "typewriter");
  return (
    <>
      <span className="sr-only">{set.accessible}</span>
      <span aria-hidden="true">
        {set.lead}
        <br />
        {style === "typewriter" ? (
          <Typewriter key={wordSet} words={set.words} active={animate} />
        ) : (
          <StackedWords
            key={`${wordSet}-${style}`}
            words={set.words}
            variant={style}
            activeIndex={index}
          />
        )}
      </span>
    </>
  );
}

/* Review-phase picker. Only shows when the address contains ?options */
function HeroOptionsPicker({
  style,
  wordSet,
}: {
  style: HeroStyle;
  wordSet: WordSetKey;
}) {
  const button = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors ${
      active
        ? "bg-champagne text-midnight"
        : "bg-ivory/10 text-ivory hover:bg-ivory/20"
    }`;
  return (
    <div
      className="fixed bottom-4 left-4 z-[70] max-w-[calc(100vw-2rem)] rounded-2xl bg-midnight-deep p-4 text-ivory shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-champagne/50"
      role="group"
      aria-label="Hero options (review only)"
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-champagne">
        Hero options (review only)
      </p>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {STYLES.map((s) => (
          <button
            key={s.key}
            className={button(style === s.key)}
            onClick={() => setParam("hero", s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(WORD_SETS) as WordSetKey[]).map((k) => (
          <button
            key={k}
            className={button(wordSet === k)}
            onClick={() => setParam("words", k)}
          >
            {WORD_SETS[k].label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   HERO
   ─────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const params = useSearchParams();
  const styleParam = params.get("hero");
  const wordsParam = params.get("words");
  const style: HeroStyle = STYLES.some((s) => s.key === styleParam)
    ? (styleParam as HeroStyle)
    : DEFAULT_STYLE;
  const wordSet: WordSetKey =
    wordsParam === "segments" || wordsParam === "jobs"
      ? wordsParam
      : DEFAULT_WORDS;

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[min(900px,92svh)] flex flex-col justify-center overflow-hidden pt-28 pb-14"
      aria-labelledby="hero-title"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,197,160,0.28) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 text-center">
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

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-midnight leading-[0.98] tracking-[-0.035em] mx-auto max-w-[1040px]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        >
          <HeroHeadline
            style={style}
            wordSet={wordSet}
            animate={!reduceMotion}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[17px] md:text-[18px] text-muted leading-[1.7] text-balance max-w-[620px] mx-auto mt-8 tracking-[-0.01em]"
        >
          Your team spends too much of the day chasing leads and updating
          records. We build the automation that handles it, inside the tools
          you already pay for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9"
        >
          <PrimaryCta className="cta-glow">Book a free 15-minute call</PrimaryCta>
          <a
            href="#work"
            className="inline-flex items-center gap-4 border border-champagne/60 text-midnight text-[13px] font-medium px-7 py-3.5 rounded-full hover:bg-mist hover:border-champagne transition-all duration-300 group"
          >
            See what we&apos;ve built
            <ArrowUpRight className="w-4 h-4 text-gold-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-col items-center gap-2 text-[12px] text-muted"
        >
          <p className="tracking-[0.02em]">
            Free, 15 minutes. If automation won&apos;t help, we&apos;ll say so.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span
              className="text-gold-ink tracking-[0.18em]"
              role="img"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
            <span>
              5.0 from 4 client reviews. Clients in{" "}
              {INDUSTRIES.slice(0, -1).join(", ").toLowerCase()} and{" "}
              {INDUSTRIES[INDUSTRIES.length - 1].toLowerCase()}.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Orbit lines: subtle SVG, parallax */}
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

      {params.has("options") && (
        <HeroOptionsPicker style={style} wordSet={wordSet} />
      )}
    </section>
  );
}
