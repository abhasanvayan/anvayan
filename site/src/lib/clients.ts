// Client proof and product content shown on the homepage.
// Edit this file to change any claim.
//
// RULES
// - Only real, approved facts. No invented numbers, no invented quotes.
// - Reviews are quoted word for word from the owner's public Upwork reviews.
//   Never reword a review. Excerpt only contiguous sentences.
// - Product claims follow the Anvayan decks: targets are targets, not results.
// - "source" notes say where each fact came from, so it can be re-checked.

export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01738ebb4b0a725303";

/* ─────────────── Clients (ticker + industries) ─────────────── */

// Names shown in the "worked with" ticker. Supplied by the owner (Nov 2026).
export const CLIENT_NAMES = [
  "JG Asbestos",
  "nailprinter.ca",
  "Angelo's Cleaning",
  "Certus Recruitment",
  "Featherbank Selection",
  "Woodland Building Supply",
  "Pert Home Brokers",
];

// Only industries we know for sure. nailprinter.ca and Pert Home Brokers are
// NOT listed here until the owner confirms what industry they sit in.
export const INDUSTRIES = [
  "Recruitment",
  "Specialist contracting",
  "Home services",
  "Building supply",
];

/* ─────────────── Case studies ─────────────── */

export type Stat = { value: string; label: string };

export type Client = {
  name: string;
  sector: string;
  headline: string;
  summary: string;
  built: string[];
  results: Stat[];
  tools: string[];
};

export const CLIENTS: { jg: Client; featherbank: Client; certus: Client } = {
  jg: {
    name: "JG Asbestos",
    sector: "Specialist contractor",
    headline: "Enquiries get a reply in under 25 seconds.",
    summary: "A new enquiry comes in. The system replies and updates the CRM.",
    built: [
      "Instant replies to new enquiries, logged straight into the CRM",
      "Follow-ups that go out on schedule",
      "A back-office system: 11 scheduled routines across 6 connected tools",
      "Confirmations, invoicing, filing and reporting handled automatically",
    ],
    // source: sub-25s and 28% confirmed by the owner (Nov 2026)
    results: [
      { value: "<25s", label: "to reply to a new enquiry" },
      { value: "28%", label: "more quotes sent" },
    ],
    // source: owner's Upwork profile and case study titles
    tools: ["GoHighLevel", "n8n", "Claude"],
  },
  featherbank: {
    name: "Featherbank Selection",
    sector: "Recruitment firm",
    headline: "From brief to shortlist, without the CV pile.",
    summary:
      "A recruiter's brief goes in and an AI-ranked shortlist comes out. A recruiter approves every candidate before anyone gets contacted.",
    built: [
      "Candidate sourcing from the recruiter's brief",
      "AI matching and ranking",
      "Recruit CRM updated automatically",
      "Recruiter sign-off before any outreach",
    ],
    // source: owner's Upwork profile says "3 additional placements (~$50k)".
    // The dollar figure is left out on purpose (client fee data).
    // NEEDS OWNER OK before the site goes public.
    results: [{ value: "3", label: "extra placements" }],
    tools: ["n8n", "Claude", "Recruit CRM"],
  },
  certus: {
    name: "Certus Recruitment",
    sector: "Recruitment firm",
    headline: "Follow-ups happen even when everyone's busy.",
    summary:
      "We find the prospects and run the outreach. Replies sync straight into the CRM. Manual work gets removed, and the sales team spends its time on calls.",
    built: [
      "Prospect research and outreach sequences",
      "Every reply synced into the CRM",
    ],
    // No confirmed result yet. Add one here when the owner provides it.
    results: [],
    tools: [],
  },
};

// The four headline numbers in the dark band under the hero.
export const PROOF_STATS: { value: string; label: string; who: string }[] = [
  { value: "<25s", label: "to reply to a new enquiry", who: "JG Asbestos" },
  { value: "28%", label: "more quotes sent", who: "JG Asbestos" },
  { value: "3", label: "extra placements", who: "Featherbank Selection" },
  // source: owner's Upwork profile (Top Rated, 4 reviews, all 5 stars)
  { value: "5.0", label: "from 4 client reviews", who: "Upwork, Top Rated" },
];

/* ─────────────── Video testimonial ─────────────── */

// Unlisted YouTube video supplied by the owner. The poster is a frame from
// the original mp4. Nothing loads from YouTube until someone presses play.
// NEEDS from owner: Jon's surname, company and role, plus OK to publish.
export const TESTIMONIAL_VIDEO = {
  youtubeId: "nbeFW7Sw-hw",
  poster: "/testimonials/jon-poster.jpg",
  name: "Jon",
  detail: "Client testimonial",
};

/* ─────────────── Written reviews ─────────────── */

export type Review = {
  quote: string;
  who: string;
  project: string;
};

// Word for word from public 5-star Upwork reviews. Do not edit the quotes.
//
// ATTRIBUTION NOTE (Nov 2026): the owner asked for one review to be credited
// to Featherbank Selection and one to nailprinter.ca. Upwork's contract data
// does not record either as a client of these four reviews:
//   - Luke W.   two contracts titled "JG Asbestos - Proposal Phase 1"
//   - Jon N.    org "TSE", GHL + CRM integrations contract
//   - Ron H.    n8n contract: "Integrate our clients CRM with our AI platform"
// So labels stay as Upwork records them until the owner says which is which.
export const REVIEWS: Review[] = [
  {
    quote:
      "He worked across GoHighLevel and n8n, cleaned up the logic, handled edge cases, and made the system reliable in real-world use.",
    who: "JG Asbestos",
    project: "5-star Upwork review",
  },
  {
    quote:
      "He is a wizard when it comes to understanding how automation systems work and connect together. Plus he is a product engineer so he understands the connection points very well. I would and will rehire Abhas.",
    who: "Upwork client",
    project: "5-star review, GoHighLevel integrations",
  },
  {
    quote:
      "Before starting any build, he takes the time to clearly map out the scope of work so expectations, logic, and deliverables are aligned from the beginning. That level of clarity saves time and prevents rework.",
    who: "Upwork client",
    project: "5-star review, n8n integrations",
  },
];

// Not shown. Same client (Luke W.) as the first review above, so it is held
// back until the owner confirms which company it should be credited to.
export const HELD_REVIEWS: Review[] = [
  {
    quote:
      "Never felt that anything was an issue for him, regular updates all the way through the project. Completed faster than expected and to a far better outcome based on some suggestion he made. Highly recommended!",
    who: "TO CONFIRM (owner says nailprinter.ca)",
    project: "5-star Upwork review",
  },
];

/* ─────────────── Products ─────────────── */

export type Product = {
  name: string;
  audience: string;
  promise: string;
  body: string;
  included: string[];
  proof: string;
  timeline?: string;
};

// Source: Anvayan decks (Recruitment Growth Systems, Enquiry-to-Job Engine),
// Oct 2026, and the owner's Upwork profile for the Claude Operating System.
// Prices from the decks are deliberately NOT shown.
export const PRODUCTS: Product[] = [
  {
    name: "Claude Operating System",
    audience: "For businesses",
    promise: "Your back office, run by Claude.",
    body: "Scheduled routines, custom Claude skills and connected tools take over the admin your team does by hand.",
    included: [
      "Enquiry replies and customer confirmations",
      "Invoicing and document filing",
      "Unanswered-email checks",
      "Reconciliation and weekly reporting",
    ],
    // source: owner's Upwork profile. NEEDS OWNER OK.
    proof: "Running at JG Asbestos: 11 scheduled routines across 6 connected tools.",
  },
  {
    name: "Enquiry-to-Job Engine",
    audience: "For trades and service businesses",
    promise: "Every enquiry gets a fast reply, then a follow-up until it books.",
    body: "Your lead sources feed one record. A reply goes out in seconds and the right person gets the next action.",
    included: [
      "Google and Meta Ads, directories, website forms, email and calls in one place",
      "A first reply in your business's own words",
      "Follow-ups that stop when the customer replies or books",
      "A weekly view of which sources turn into jobs",
    ],
    proof: "Built from our work with JG Asbestos.",
    timeline: "Typical setup: about 2 weeks once access is ready.",
  },
  {
    name: "Recruitment Growth Systems",
    audience: "For recruitment firms",
    promise: "Shortlists for your candidates. Introductions for your clients.",
    body: "A recruiter's brief becomes a review-ready shortlist. A hiring signal becomes a drafted introduction to the right decision-maker.",
    included: [
      "Candidate engine: live role to shortlist",
      "Client growth engine: hiring signal to decision-maker",
      "Market visibility engine: regular insight for priority employers",
      "A recruiter approves every message and candidate",
    ],
    proof: "Built with Featherbank Selection and Certus Recruitment.",
    timeline: "Candidate engine: about 2 weeks once access is ready.",
  },
];
