# Anvayan Website

## Project Overview
Professional website for **Anvayan** (anvayan.com) — an AI automation agency. Built as a static site with Next.js 16.

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
│   └── motion-provider.tsx # MotionConfig reducedMotion="user"
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
- Hosting decision: Netlify (free plan, custom domain anvayan.com). Base directory `site`, config in netlify.toml
- Primary CTA URL: `https://calendly.com/abhas-anvayan/15-min-system-audit`
- Email: hello@anvayan.com

## Clients Featured (Case Studies)
- **JG Asbestos** — Lead capture + quoting automation (GHL + n8n). Metrics (confirmed by Abhas, Nov 2026): sub-25-second response, 28% more quotes. All three clients have consented to being named.
- **Featherbank Selection** — AI recruitment pipeline (sourcing, screening, ranking with human sign-off)
- **Certus Recruitment** — Business development funnel (prospect research, outreach sequencing, CRM sync)

## Copy Guidelines
- No AI-sounding language, no em dashes, no filler
- Direct, confident, specific — every line should feel like a person wrote it
- No "pain points", "streamline", "leverage", "revolutionise"
