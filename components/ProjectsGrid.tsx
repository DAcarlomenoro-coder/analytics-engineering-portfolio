import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import {
  PROJECT_CATEGORIES,
  additionalCaseStudies,
  featuredProjects,
  powerPlatformConcept,
  type ProjectCategory,
} from "@/lib/content";

type AnyProject = {
  title: string;
  status: string;
  categories: ProjectCategory[];
  note?: string;
  description: string;
  focus?: string[];
  tech?: string[];
  links?: { label: string; href: string }[];
};

const allProjects: AnyProject[] = [
  ...featuredProjects,
  powerPlatformConcept,
  ...additionalCaseStudies,
];

const flagshipTitles = new Set(featuredProjects.map((p) => p.title));

function ProjectCard({ p }: { p: AnyProject }) {
  const tags = p.focus ?? p.tech ?? [];
  const isFlagship = flagshipTitles.has(p.title);
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground text-balance">{p.title}</h3>
        {isFlagship ? (
          <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-strong uppercase">
            On resume
          </span>
        ) : null}
      </div>
      <div className="mt-2">
        <StatusBadge status={p.status} />
      </div>
      {p.note ? <p className="mt-3 text-sm italic text-muted">{p.note}</p> : null}
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
      {tags.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}
      {p.links ? (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent hover:text-cyan"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectsGrid() {
  return (
    <div className="space-y-14">
      {PROJECT_CATEGORIES.map((category) => {
        const projects = allProjects.filter((p) => p.categories.includes(category));
        if (!projects.length) return null;
        return (
          <div key={category}>
            <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">{category}</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title + category} p={p} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
