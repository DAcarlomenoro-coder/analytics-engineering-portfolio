import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { coreCapabilities } from "@/lib/content";

export function CoreCapabilities() {
  return (
    <Section id="capabilities" eyebrow="Core Capabilities" title="What I bring to a BI or analytics engineering team.">
      <div className="flex flex-wrap gap-2">
        {coreCapabilities.map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>
    </Section>
  );
}
