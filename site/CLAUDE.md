# Anvayan Website

## Project Overview
Professional website for **Anvayan** (anvayan.com) — an AI growth partner (label lives in POSITIONING_LABEL, src/lib/site.ts; "AI automation agency" is deliberately NOT used, it is overplayed). Built as a static site with Next.js 16.

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
│   ├── page.tsx          # Homepage (server component) that composes src/components/home/*
│   ├── contact/page.tsx  # Contact page with Calendly embed
│   ├── privacy/page.tsx  # Privacy Policy
│   ├── terms/page.tsx    # Terms of Service
│   ├── not-found.tsx     # Custom 404
│   ├── icon.svg / favicon.ico / apple-icon.png  # favicon set (cyan mark on dark tile)
├── components/
│   ├── shared.tsx        # Header, Footer, BrandMark, ArrowUpRight, Reveal
│   ├── calendly-embed.tsx  # Calendly inline widget (client component)
│   ├── home/               # One file per homepage section: hero, proof (client ticker + results band), reviews (video + quotes), work (case studies), products, approach, team, final-cta
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
- Engagement model (confirmed by Abhas): builds the system, then stays on to maintain and improve it. So "AI growth partner" is honest, and Abhas chose it as the company label everywhere (hero label, page title, meta, legal pages, share image). Do not promise revenue results beyond the confirmed JG Asbestos numbers.
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
- Audience: recruitment firms, specialist contractors and other service businesses. Keep the hero broad enough for any visitor (chasing leads, updating records). Specific scenes (an enquiry sitting until Monday, a CV retyped into the CRM) belong lower on the page, not in the hero.
- Only claim what is confirmed: JG Asbestos = sub-25-second response + 28% more quotes. No new numbers without Abhas's say-so. No time-to-reply promises.
- Check: render the site and run a copy lint over the visible text before shipping (banned words/phrases, dashes, parallelisms).

## Social proof (client results and reviews)
- All proof lives in src/lib/clients.ts (client cards, the four headline numbers, reviews). Edit that file, not the JSX.
- NEVER invent a number, quote, logo or client. Reviews are word for word from Abhas's public Upwork reviews; excerpt only contiguous sentences, never reword.
- Confirmed by Abhas in chat: JG Asbestos sub-25-second reply and 28% more quotes; clients consent to being named.
- Taken from Abhas's public Upwork profile, STILL NEEDS HIS OK before the site goes public: "3 extra placements" (Featherbank; the ~$50k figure is deliberately left out), "11 routines across 6 tools" (JG), "5.0 from 4 reviews, Top Rated", the four reviews, tools (GoHighLevel, n8n, Claude, Recruit CRM).
- Not used on purpose: voice-agent clients (Angelo's, Woodland, Mialink; direction dropped), unnamed revenue claims ($30k+/month, $70k saved), JG "$5k-7k/month" and the old "45% more leads".
- Certus Recruitment has no result or quote yet. Add them to clients.ts when provided.
- Page order (Nov 2026, built for a senior buyer): hero, client-name ticker, dark results band with industries, reviews (Jon video + quotes), case studies, three products, how we work, founders, final CTA. The old Problem and Services sections were removed.
- Ticker names (supplied by Abhas): JG Asbestos, nailprinter.ca, Angelo's Cleaning, Certus Recruitment, Featherbank Selection, Woodland Building Supply, Perth Home Brokers. Industries are only listed where known (recruitment, specialist contracting, home services, building supply). Ask before adding an industry for nailprinter.ca or Perth Home Brokers.
- Reviews (owner instruction, 4 Nov 2026): shown as JG Asbestos, nailprinter.ca and Featherbank Selection, with the "rehire Abhas" review removed. Upwork's own contract records name the reviewers Luke W. (both JG-titled contracts), Jon N. (org TSE) and Ron H., so the owner is vouching for the mapping. Each business is named publicly, so each should be happy to be quoted. No real review text exists yet for Angelo's Cleaning; never invent one.
- Video: unlisted YouTube nbeFW7Sw-hw, click-to-play with a local poster so nothing loads from YouTube until pressed. Jon's surname, company and role still needed.

## Products (source: the two Anvayan decks, Oct 2026)
- 1 Claude Operating System (for businesses), 2 Enquiry-to-Job Engine (trades and service businesses), 3 Recruitment Growth Systems (recruitment firms). Content lives in PRODUCTS in clients.ts.
- Decks contain USD setup prices (recruitment $1,900/$2,900/$3,900; enquiry $1,200/$2,750/$3,900). Prices are deliberately NOT on the site. Deck language is careful: targets are targets, results depend on the team. Keep that register; never state a target as a result.
- Product names are proper nouns, so they stay in title case (the voice lint will flag this; that is expected).

## Hero dynamic element
- src/components/home/hero.tsx has 4 styles (typewriter, highlight, roll, fade) and 2 word sets (segments, jobs). Default: highlight + segments. Add ?options to the address for a live picker, or ?hero=roll&words=jobs. When Abhas decides, set DEFAULT_STYLE / DEFAULT_WORDS and delete the picker.
- Founder roles: Abhas = Founder and Chief AI Consultant, Nishi = Founder and Chief Technology Officer. Photos still to come.

## Gold (champagne) usage
- Lines, rules, rings and icons: champagne (#C0A46E). Text on light backgrounds: gold-ink (#8A6A34) only. Text on dark: champagne.
- Every section label uses the Eyebrow component (gold rule). Each H2 has one gold accent phrase. Primary buttons use PrimaryCta (gold ring + gold arrow). Section edges use .gold-hairline.
