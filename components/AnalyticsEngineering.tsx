import { Section } from "@/components/ui/Section";
import { analyticsEngineering } from "@/lib/content";

export function AnalyticsEngineering() {
  return (
    <Section
      id="analytics-engineering"
      eyebrow="Analytics Engineering — Developing Specialization"
      title="Not current professional experience — a specialization I'm building on my BI foundation."
      intro={analyticsEngineering.intro}
    >
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {analyticsEngineering.items.map((item) => (
          <div key={item.title}>
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
