import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { additionalCaseStudies } from "@/lib/content";

export function AdditionalCaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Additional Analytics Case Studies"
      title="Supporting evidence — not on the resume, still real work."
      tone="surface"
      intro="These expand my range beyond the four flagship projects above: reporting automation, financial reconciliation, and SQL analytics."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {additionalCaseStudies.map((c) => (
          <article key={c.title} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
            <div className="mt-2">
              <StatusBadge status={c.status} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
