import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Organized by category — flagship work marked 'On resume,' everything else is supporting evidence."
      intro="Every card is labeled by status: Complete, In Development, Architecture Complete, or Planned Prototype. A project can appear under more than one category when it genuinely spans both."
    >
      <ProjectsGrid />
    </Section>
  );
}
