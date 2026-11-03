# Anvayan Website

## Project Overview
Professional website for **Anvayan** (anvayan.com) — a boutique AI studio (label lives in STUDIO_LABEL, src/lib/site.ts; "AI automation agency" is deliberately NOT used, it is overplayed). Built as a static site with Next.js 16.

## Tech Stack
- **Next.js 16** (App Router) + TypeScript + **Tailwind CSS 4** + **Framer Motion** v14.6.0
- **Static export** (`output: "export"` in `next.config.ts`)
- **Turbopack** with `@tailwindcss/turbopack` loader
- Self-hosted fonts via `next/font/local` + `@fontsource` packages (Instrument Serif + DM Sans)

## Key Commands
```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Static export to ./out
npx serve out -p 3000  # Serve the static build (NOT next start)
```

## Architecture
```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata, skip link, reduced-motion provider)
│   ├── robots.ts         # robots.txt (static)
│   ├── sitemap.ts        # sitemap.xml (static)
│   ├── opengraph-image.png / twitter-image.png  # DRAFT share image (type-only), pending approval
│   ├── globals.css       # Design tokens (@theme inline), animations
│   ├── page.tsx          # Homepage: hero, ticker, problem, case studies, services, approach, founders, final CTA (FAQ removed by owner)
│   ├── contact/page.tsx  # Contact page with Calendly embed
│   ├── privacy/page.tsx  # Privacy Policy
│   ├── terms/page.tsx    # Terms of Service
│   ├── not-found.tsx     # Custom 404
│   ├── icon.svg / favicon.ico / apple-icon.png  # favicon set (cyan mark on dark tile)
├── components/
│   ├── shared.tsx        # Header, Footer, BrandMark, ArrowUpRight, Reveal
│   ├── calendly-embed.tsx  # Calendly inline widget (client component)
│   ├── legal.tsx           # Shared layout for Privacy and Terms
│   └── motion-provider.tsx # MotionConfig reducedMotion="user"
├── lib/
│   └── site.ts             # SITE_URL, BOOKING_URL, CONTACT_EMAIL (shared by server + client)
├── fonts/                # Self-hosted .woff2 files
public/brand/             # Logo master files (SVG + 1024px PNG): -midnight (light bg), -ivory (dark bg), -cyan (original colour)
```

## Design System
- **Palette**: Midnight #182139, Midnight Deep #101827, Champagne #C0A46E, Gold Ink #8A6A34, Warm Ivory #F7F5F0, Soft Grey #DDDCD9, Mist #EEECE7, Muted #5F6A7D (darkened from #667085 for WCAG AA contrast)
- **Typography**: Instrument Serif (display, `--font-display`) + DM Sans (body, `--font-body`)
- **Hero heading**: `clamp(2.5rem, 8vw, 7rem)` (min lowered from 3rem so the rotating word doesn't reflow the headline on 360-430px phones), line-height 0.98, letter-spacing -0.035em
- **Container**: max-width 1280px (`container-wide`), reading width 760px (`container-reading`)
- **Motion**: "Quietly alive" — scroll-triggered reveals via framer-motion `useInView`, rotating words in hero, shimmer effects on accents

## Important Notes
- **Next.js 16 has breaking changes** — always check `node_modules/next/dist/docs/` before using unfamiliar APIs
- `LayoutProps<"/">` type is the Next.js 16 convention for root layout props
- The Calendly widget loads via external script on the contact page — it won't render in static screenshots but works live
- Logo: hub-and-spoke mark supplied by Abhas (cyan on black). Redrawn as a clean vector (91% pixel match to the original). BrandMark in shared.tsx draws in currentColor: text-midnight on light, text-ivory on dark. Original cyan only reads on dark (1.8:1 on ivory)
- Founder photos are placeholder typographic initials (A/N) by decision for now; swap in real photos later
- Anvayan is India-based and not a UK company. Do NOT claim a London/UK base anywhere; location copy is neutral ("Remote-first"). Privacy/Terms are deliberately light and jurisdiction-neutral (no governing-law clause yet)
- Calendly: event "15 min audit" (slug 15-min-system-audit). Custom embed colours need a paid Calendly plan, so the colour params are ignored until upgraded. Calendly's own cookie banner is left visible
- Engagement model (confirmed by Abhas): builds the system, then stays on to maintain and improve it. So "AI growth partner" is honest and is used ONCE, in the How we work section. The company label stays "Boutique AI studio".
- Hosting decision: Netlify (free plan, custom domain anvayan.com). Base directory `site`, config in netlify.toml
- Primary CTA URL: `https://calendly.com/abhas-anvayan/15-min-system-audit`
- Email: abhas@anvayan.com (hello@ is not used)

## Clients Featured (Case Studies)
- **JG Asbestos** — Lead capture + quoting automation (GHL + n8n). Metrics (confirmed by Abhas, Nov 2026): sub-25-second response, 28% more quotes. All three clients have consented to being named.
- **Featherbank Selection** — AI recruitment pipeline (sourcing, screening, ranking with human sign-off)
- **Certus Recruitment** — Business development funnel (prospect research, outreach sequencing, CRM sync)

## Copy Guidelines
Source of truth: Abhas's "anti-AI writing style" voice guide (Nov 2026). Spirit over letter. Hard rules:
- NO em dashes or en dashes anywhere (copy, titles, meta). Use commas, colons, full stops.
- NO negative parallelisms or reframes: "This isn't X, it's Y", "Not X. Y.", "No X, no Y, just Z", "Less X, more Y", "Stop X. Start Y", "You don't need X. You need Y", "Sure, X. But Y". Just state the positive claim.
- Banned vocabulary includes: leverage, streamline, seamless, unlock, empower, elevate, integrated, accelerate, scalable, robust, transparent, innovative, modern-as-hype, and the rest of the list in the voice guide. Also no "nobody", "furthermore", "in order to", "straightforward".
- Lists: use 2 or 4 items, not 3. Sentence case headings. Contractions. Numbers as digits.
- Short paragraphs, uneven rhythm, specific scenes over abstractions, take a stance, no filler summaries.
- Audience: recruitment firms, specialist contractors and other service businesses. Write scenes they recognise (enquiry sits until Monday, CV retyped into the CRM, quote with no follow-up).
- Only claim what is confirmed: JG Asbestos = sub-25-second response + 28% more quotes. No new numbers without Abhas's say-so. No time-to-reply promises.
- Check: render the site and run a copy lint over the visible text before shipping (banned words/phrases, dashes, parallelisms).

## Gold (champagne) usage
- Lines, rules, rings and icons: champagne (#C0A46E). Text on light backgrounds: gold-ink (#8A6A34) only. Text on dark: champagne.
- Every section label uses the Eyebrow component (gold rule). Each H2 has one gold accent phrase. Primary buttons use PrimaryCta (gold ring + gold arrow). Section edges use .gold-hairline.
