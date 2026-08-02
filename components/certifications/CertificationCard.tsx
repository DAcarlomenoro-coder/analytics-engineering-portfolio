import Image from "next/image";
import Link from "next/link";
import type { Certification, FutureCredential } from "@/lib/content";

const CLASSIFICATION_STYLE: Record<string, string> = {
  Certification: "bg-[var(--status-complete-bg)] text-[var(--status-complete-fg)]",
  "Professional Learning": "bg-[var(--status-architecture-bg)] text-[var(--status-architecture-fg)]",
  "Badge and Achievement": "bg-[var(--status-development-bg)] text-[var(--status-development-fg)]",
};

export function ClassificationTag({ label }: { label: string }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${CLASSIFICATION_STYLE[label] ?? "bg-surface-strong text-muted"}`}>
      {label}
    </span>
  );
}

export function CertificationCard({ cert, compact = false }: { cert: Certification; compact?: boolean }) {
  return (
    <Link
      href={`/certifications/${cert.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-3">
        {cert.badgeImage ? (
          <Image
            src={cert.badgeImage}
            alt={`${cert.name} badge`}
            width={44}
            height={44}
            className="rounded-lg"
          />
        ) : (
          <span className="text-2xl" aria-hidden>
            {cert.badgeEmoji}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground text-balance">{cert.name}</h3>
      <p className="mt-1 text-sm text-muted">{cert.provider}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {cert.classification.map((c) => (
          <ClassificationTag key={c} label={c} />
        ))}
      </div>
      {!compact ? <p className="mt-3 text-sm leading-relaxed text-muted">{cert.summary}</p> : null}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
        <span className="font-mono">Issued {cert.issued}</span>
        <span className="font-medium text-accent transition-colors group-hover:text-cyan">View details →</span>
      </div>
    </Link>
  );
}

export function FutureCredentialCard({ credential }: { credential: FutureCredential }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-dashed border-border p-4 text-sm">
      <span className="text-muted">{credential.provider}</span>
      <span className="font-mono text-[11px] tracking-wide text-muted/70 uppercase">{credential.status}</span>
    </div>
  );
}
