"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, Eyebrow, ArrowUpRight } from "@/components/shared";
import { REVIEWS, TESTIMONIAL_VIDEO, UPWORK_URL, type Review } from "@/lib/clients";

/* ───────────────────────────────────────────
   VIDEO TESTIMONIAL
   Click to play. The poster is a local image, so nothing is requested from
   YouTube (and no cookies are set) until the visitor presses play.
   ─────────────────────────────────────────── */
function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);
  const { youtubeId, poster, name, detail, duration } = TESTIMONIAL_VIDEO;
  return (
    <figure className="bg-white rounded-xl p-3 md:p-4 ring-1 ring-champagne/40 shadow-[0_24px_60px_rgba(16,24,39,0.10)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-midnight-deep">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${name}, client testimonial`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play the video testimonial from ${name}`}
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* brand grade: deep navy rising from the bottom and in from the right */}
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(16,24,39,0.82) 0%, rgba(16,24,39,0.12) 46%, transparent 68%), linear-gradient(to left, rgba(16,24,39,0.62) 0%, transparent 58%)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 ring-1 ring-inset ring-champagne/40"
            />
            <span
              aria-hidden="true"
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-midnight-deep/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-champagne ring-1 ring-champagne/40 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
              Client story
            </span>
            {/* play button: dead centre, like any video */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-24 md:w-24"
            >
              <span className="absolute inset-0 rounded-full bg-champagne/50 animate-ping motion-reduce:animate-none [animation-duration:2.8s]" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-champagne text-midnight shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-4 ring-ivory/60 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-midnight-deep/80 px-3.5 py-1.5 text-[12px] text-ivory ring-1 ring-champagne/40 backdrop-blur-sm"
            >
              Watch
              <span className="text-champagne">·</span>
              {duration}
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
        <div>
          <p className="text-[15px] font-medium text-midnight">{name}</p>
          <p className="text-[12px] text-muted">{detail}</p>
        </div>
        <p
          className="text-gold-ink tracking-[0.2em] text-[13px]"
          role="img"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </p>
      </figcaption>
    </figure>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="h-full bg-white rounded-xl p-8 ring-1 ring-champagne/40 flex flex-col justify-between gap-7">
      <div>
        <p
          aria-hidden="true"
          className="font-display text-champagne text-[56px] leading-none h-7"
        >
          &ldquo;
        </p>
        <blockquote
          className="font-display text-midnight leading-[1.3] tracking-[-0.02em] mt-3"
          style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)" }}
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
        <p className="text-[14px] font-medium text-midnight mt-2">{review.who}</p>
        <p className="text-[12px] text-muted">{review.project}</p>
      </figcaption>
    </figure>
  );
}

/* ───────────────────────────────────────────
   REVIEWS
   One video, then written reviews word for word from Upwork
   ─────────────────────────────────────────── */
export function Reviews() {
  const [first, ...rest] = REVIEWS;
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
                In their
                <br />
                <em className="not-italic text-gold-ink">own words.</em>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <Reveal>
              <VideoTestimonial />
            </Reveal>
            {first && (
              <Reveal delay={0.1} className="flex-1">
                <ReviewCard review={first} />
              </Reveal>
            )}
          </div>
          <div className="flex flex-col gap-6">
            {rest.map((review, i) => (
              <Reveal key={review.quote} delay={0.1 + i * 0.1} className="flex-1">
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
