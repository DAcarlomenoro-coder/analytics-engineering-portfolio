import { Section } from "@/components/ui/Section";
import { careerDirection } from "@/lib/content";

export function CareerDirection() {
  return (
    <Section
      id="career-direction"
      eyebrow={careerDirection.eyebrow}
      title={careerDirection.title}
      intro={careerDirection.intro}
      tone="surface"
    >
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {careerDirection.items.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
