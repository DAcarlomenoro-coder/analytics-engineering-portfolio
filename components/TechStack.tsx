import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <Section id="stack" eyebrow="Technology Stack" title="Tools, grouped by where they actually get used." tone="surface">
      <div className="grid gap-6 sm:grid-cols-2">
        {techStack.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-sm font-medium text-foreground">{cat.category}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cat.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
