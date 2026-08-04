import { Section } from "@/components/ui/Section";
import { approach, brandTheme, processFlow } from "@/lib/content";

export function MyApproach() {
  return (
    <Section id="approach" eyebrow={approach.eyebrow} title={approach.title}>
      <p className="max-w-2xl text-sm leading-relaxed text-muted">{approach.body}</p>

      <div className="mt-8 rounded-xl border border-border bg-card p-4 sm:p-6">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">{brandTheme}</p>
        <div className="mt-5 flex flex-col">
          {processFlow.map((step, i) => (
            <div key={step.phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent font-mono text-xs text-accent">
                  {i + 1}
                </span>
                {i !== processFlow.length - 1 ? <span aria-hidden className="my-1 w-px flex-1 bg-border" /> : null}
              </div>
              <div className="pb-6">
                <p className="text-sm font-medium text-foreground">{step.phase}</p>
                <p className="mt-0.5 text-sm text-muted">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
