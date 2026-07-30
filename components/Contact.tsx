import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about Business Intelligence, analytics engineering, or Power Platform work."
      tone="surface"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={`mailto:${site.email}`}
          className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
        >
          {site.email}
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background"
        >
          GitHub ↗
        </a>
        {site.linkedin ? (
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background"
          >
            LinkedIn ↗
          </a>
        ) : null}
        <span className="text-sm text-muted">{site.location}</span>
      </div>
    </Section>
  );
}
