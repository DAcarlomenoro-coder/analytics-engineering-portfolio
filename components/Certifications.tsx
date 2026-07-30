import { Section } from "@/components/ui/Section";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Professional Development"
      title="Exactly what's in progress, completed, or self-directed — nothing more."
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {certifications.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
