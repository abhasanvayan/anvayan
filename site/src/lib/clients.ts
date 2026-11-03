// Client proof shown on the homepage. Edit this file to change any claim.
//
// RULES
// - Only real, approved facts. No invented numbers, no invented quotes.
// - Reviews are quoted word for word from the owner's public Upwork reviews.
//   Never reword a review. Excerpt only contiguous sentences.
// - "source" notes say where each fact came from, so it can be re-checked.

export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01738ebb4b0a725303";

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

export type Review = {
  quote: string;
  who: string;
  project: string;
};

// Word for word from public 5-star Upwork reviews. Do not edit the quotes.
export const REVIEWS: Review[] = [
  {
    quote:
      "He worked across GoHighLevel and n8n, cleaned up the logic, handled edge cases, and made the system reliable in real-world use.",
    who: "JG Asbestos",
    project: "5-star Upwork review",
  },
  {
    quote:
      "Never felt that anything was an issue for him, regular updates all the way through the project. Completed faster than expected and to a far better outcome based on some suggestion he made. Highly recommended!",
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
