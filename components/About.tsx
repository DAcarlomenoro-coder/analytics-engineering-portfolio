import { Section } from "@/components/ui/Section";
import { journey, site, summary } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={summary.heading}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4 text-muted leading-relaxed">
          {summary.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">{site.versionANote}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">The journey so far</h3>
          <ol className="mt-4 space-y-0">
            {journey.map((step, i) => (
              <li key={step.label} className="relative pl-7">
                {i !== journey.length - 1 ? (
                  <span aria-hidden className="absolute top-2.5 left-[5px] h-full w-px bg-border" />
                ) : null}
                <span
                  aria-hidden
                  className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 border-accent bg-card"
                />
                <div className="pb-6">
                  <p className="text-sm font-medium text-foreground">{step.label}</p>
                  <p className="text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
