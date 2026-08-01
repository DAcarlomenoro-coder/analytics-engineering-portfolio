import { roadmap } from "@/lib/content";

function Column({
  heading,
  accentClass,
  children,
}: {
  heading: string;
  accentClass: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className={`font-mono text-xs font-medium tracking-[0.14em] uppercase ${accentClass}`}>{heading}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

export function RoadmapTimeline() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <Column heading="Completed" accentClass="text-[var(--status-complete-fg)]">
        {roadmap.completed.map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5 text-[var(--status-complete-fg)]">
                ✓
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {item.provider} · {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Column>

      <Column heading="In Progress" accentClass="text-[var(--status-development-fg)]">
        {roadmap.inProgress.map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            {item.detail ? <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.detail}</p> : null}
          </div>
        ))}
      </Column>

      <Column heading="Planned" accentClass="text-muted">
        {roadmap.planned.map((item) => (
          <div key={item.title} className="rounded-lg border border-dashed border-border p-4">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            {item.detail ? <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.detail}</p> : null}
          </div>
        ))}
      </Column>
    </div>
  );
}
