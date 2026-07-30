import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { featuredProjects } from "@/lib/content";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Enterprise Projects"
      title="Four flagship projects — each clearly labeled by how finished it is."
      tone="surface"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {featuredProjects.map((p) => (
          <article key={p.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground text-balance">{p.title}</h3>
            </div>
            <div className="mt-2">
              <StatusBadge status={p.status} />
            </div>
            {p.note ? <p className="mt-3 text-sm italic text-muted">{p.note}</p> : null}
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.focus.map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
            {p.links ? (
              <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-accent hover:text-accent-strong"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
