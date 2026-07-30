import { Section } from "@/components/ui/Section";
import { aiAutomation } from "@/lib/content";

export function AIAutomation() {
  return (
    <Section
      id="ai-automation"
      eyebrow="AI & Automation"
      title="AI as an accelerant — not a replacement for engineering judgment."
      intro={aiAutomation.intro}
      tone="surface"
    >
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
