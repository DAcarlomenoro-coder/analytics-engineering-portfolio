import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CredentialsHub } from "@/components/certifications/CredentialsHub";

export const metadata: Metadata = { title: "Professional Credentials" };

export default function CertificationsPage() {
  return (
    <Section
      id="credentials"
      eyebrow="Professional Credentials"
      title="Certifications, professional learning, and badges — built to grow over a career, not a snapshot."
      intro="Three real, verifiable certifications today. Every future-provider card below is an intentional placeholder — nothing is claimed until it's actually earned."
    >
      <CredentialsHub />
    </Section>
  );
}
