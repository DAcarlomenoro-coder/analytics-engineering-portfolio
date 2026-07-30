const STYLES: Record<string, string> = {
  Complete: "bg-[var(--status-complete-bg)] text-[var(--status-complete-fg)]",
  "In Development": "bg-[var(--status-development-bg)] text-[var(--status-development-fg)]",
  "Architecture Complete": "bg-[var(--status-architecture-bg)] text-[var(--status-architecture-fg)]",
  "Planned Prototype": "bg-[var(--status-planned-bg)] text-[var(--status-planned-fg)]",
  "Implemented Workflow": "bg-[var(--status-complete-bg)] text-[var(--status-complete-fg)]",
  "Portfolio Analysis Project": "bg-[var(--status-planned-bg)] text-[var(--status-planned-fg)]",
};

export function StatusBadge({ status }: { status: string }) {
  const cls = STYLES[status] ?? "bg-surface-strong text-muted";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
