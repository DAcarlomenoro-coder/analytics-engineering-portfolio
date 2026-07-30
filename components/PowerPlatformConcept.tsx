import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { powerPlatformConcept, powerPlatformConceptFlow } from "@/lib/content";

export function PowerPlatformConcept() {
  return (
    <Section
      id="power-platform-concept"
      eyebrow="Power Platform Solution Concept"
      title={powerPlatformConcept.title}
    >
      <div className="rounded-xl border border-dashed border-border p-6">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={powerPlatformConcept.status} />
          <span className="text-xs text-muted">Conceptual architecture — not a deployed or production solution.</span>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{powerPlatformConcept.description}</p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          {powerPlatformConceptFlow.map((step, i) => (
            <div key={step.step} className="flex items-center gap-2">
              <div className="rounded-lg border border-border bg-surface px-4 py-3">
                <p className="text-sm font-medium text-foreground">{step.step}</p>
                <p className="mt-0.5 max-w-[16rem] text-xs text-muted">{step.detail}</p>
              </div>
              {i !== powerPlatformConceptFlow.length - 1 ? (
                <span aria-hidden className="hidden shrink-0 text-muted sm:inline">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {powerPlatformConcept.focus.map((f) => (
            <Tag key={f}>{f}</Tag>
          ))}
        </div>
      </div>
    </Section>
  );
}
