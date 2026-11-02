import type { Metadata } from "next";
import { LegalPage, LegalLink } from "@/components/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy | Anvayan",
  description:
    "What Anvayan collects and how to ask us to change or delete it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const email = (
    <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>
  );
  return (
    <LegalPage
      title="Privacy policy"
      updated="November 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            "Anvayan is an AI automation agency. When this policy says “we”, it means Anvayan.",
          ],
        },
        {
          heading: "What we collect",
          body: [
            "When you book a call or get in touch, we collect what you give us. That's usually your name, email address, company name and a note about what you need.",
            <>
              This website doesn&rsquo;t run analytics or advertising cookies.
              The Calendly booking widget on our contact page comes from
              Calendly and may set its own cookies.{" "}
              <LegalLink href="https://calendly.com/privacy" external>
                Calendly&rsquo;s privacy policy
              </LegalLink>{" "}
              covers that.
            </>,
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details to reply to you, book calls, deliver projects and keep in touch about them. We don't sell your information, and we don't share it with anyone for marketing.",
          ],
        },
        {
          heading: "Where it's kept",
          body: [
            "Your details sit in the tools we use to run Anvayan, like email and our CRM. We keep them for as long as we need them for the reasons above, or as the law requires.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            <>
              You can ask what personal data we hold about you, and ask us to
              correct or delete it. You can also ask us to stop using it or
              limit how we use it. Email {email} and we&rsquo;ll deal with it.
            </>,
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy. When we do, we'll change the date at the top.",
          ],
        },
        {
          heading: "Contact",
          body: [<>Questions about this policy? Email {email}.</>],
        },
      ]}
    />
  );
}
