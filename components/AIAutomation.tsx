import { Section } from "@/components/ui/Section";
import { aiAutomation } from "@/lib/content";

export function AIAutomation() {
  return (
    <Section
      id="ai-automation"
      eyebrow="AI-Assisted Solution Development"
      title="AI accelerates the work. I own every decision."
      intro={aiAutomation.intro}
      tone="surface"
    >
      <p className="mb-8 max-w-2xl rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground/90">
        {aiAutomation.ownership}
      </p>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {aiAutomation.items.map((item) => (
          <div key={item.title}>
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
