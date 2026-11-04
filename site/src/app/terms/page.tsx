import type { Metadata } from "next";
import { LegalPage, LegalLink } from "@/components/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service | Anvayan",
  description: "The terms for using the Anvayan website and working with us.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="November 2026"
      sections={[
        {
          heading: "Using this site",
          body: [
            "By using anvayan.com you agree to these terms. If you don't agree, please don't use the site.",
          ],
        },
        {
          heading: "Our services",
          body: [
            "Anvayan is an AI growth partner. We provide consulting and build work. We also stay on to maintain and improve what we build. The scope and terms of any project go in a separate written agreement between us and the client.",
          ],
        },
        {
          heading: "Our content",
          body: [
            "Everything on this site belongs to Anvayan: the text, graphics, logo and design. Please don't copy or reuse it without our written permission.",
          ],
        },
        {
          heading: "Case studies",
          body: [
            "The case studies show results from specific client projects. Your results will differ, and we can't promise the same outcome. We publish each case study with the client's approval.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We provide this site as is, with no warranties. We aren't liable for any loss that comes from using the site or relying on what's on it.",
          ],
        },
        {
          heading: "Other people's tools",
          body: [
            "This site links to third-party tools such as Calendly and YouTube. We don't control them, and we aren't responsible for their content or for how they handle your data.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: ["We may change these terms. Changes apply once we post them here."],
        },
        {
          heading: "Contact",
          body: [
            <>
              Questions about these terms? Email{" "}
              <LegalLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </LegalLink>
              .
            </>,
          ],
        },
      ]}
    />
  );
}
