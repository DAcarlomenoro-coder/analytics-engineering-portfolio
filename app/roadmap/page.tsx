import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";

export const metadata: Metadata = { title: "Learning Roadmap" };

export default function RoadmapPage() {
  return (
    <Section
      id="roadmap"
      eyebrow="Learning Roadmap"
      title="What's done, what's in progress, and what's next."
      intro="Updated as I complete each certification — this page is a live log, not a one-time plan."
    >
      <RoadmapTimeline />
    </Section>
  );
}
