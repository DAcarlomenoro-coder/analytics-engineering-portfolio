import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { powerPlatform } from "@/lib/content";

export function PowerPlatform() {
  return (
    <Section
      id="power-platform"
      eyebrow="Microsoft Power Platform"
      title="Extending Business Intelligence into apps, workflow, and governed data."
      intro={powerPlatform.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {powerPlatform.pillars.map((p) => (
          <div key={p.name} className="rounded-xl border border-border p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  p.role === "Current capability"
                    ? "bg-[var(--status-complete-bg)] text-[var(--status-complete-fg)]"
                    : "bg-[var(--status-development-bg)] text-[var(--status-development-fg)]"
                }`}
              >
                {p.role}
              </span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {p.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-dashed border-border p-6">
        <h3 className="text-sm font-semibold text-foreground">{powerPlatform.exploring.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{powerPlatform.exploring.body}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {powerPlatform.exploring.items.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-foreground">Current capability</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {powerPlatform.current.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-foreground">Developing capability</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {powerPlatform.developing.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
