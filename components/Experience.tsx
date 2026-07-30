import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="A continuous path into Business Intelligence and analytics engineering."
      tone="surface"
    >
      <ol className="space-y-8">
        {experience.map((role) => (
          <li key={role.title + role.company} className="rounded-xl border border-border bg-background p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
              <span className="font-mono text-xs text-muted">{role.dates}</span>
            </div>
            <p className="mt-0.5 text-sm text-muted">{role.company}</p>
            <ul className="mt-4 space-y-2">
              {role.bullets.map((b) => (
                <li key={b.slice(0, 32)} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {role.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
