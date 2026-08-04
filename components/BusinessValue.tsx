import { Section } from "@/components/ui/Section";
import { businessValue } from "@/lib/content";

export function BusinessValue() {
  return (
    <Section id="business-value" eyebrow="Business Value" title={businessValue.eyebrow} intro={businessValue.intro} tone="surface">
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {businessValue.items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            <div>
              <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
