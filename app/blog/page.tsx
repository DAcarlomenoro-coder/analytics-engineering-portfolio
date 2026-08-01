import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="A learning journal — not written yet, but the topics are planned."
      intro="Nothing below is published. These are the articles I intend to write as I complete each stage of the Learning Roadmap — listed honestly as upcoming, not backfilled after the fact."
    >
      <BlogList />
    </Section>
  );
}
