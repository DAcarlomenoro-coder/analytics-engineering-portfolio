import Link from "next/link";
import type { Certification } from "@/lib/content";

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Link
      href={`/certifications/${cert.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
    >
      <span className="text-2xl" aria-hidden>
        {cert.badgeEmoji}
      </span>
      <h3 className="mt-3 text-base font-semibold text-foreground text-balance">{cert.name}</h3>
      <p className="mt-1 text-sm text-muted">{cert.provider}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{cert.summary}</p>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
        <span className="font-mono">Issued {cert.issued}</span>
        <span className="font-medium text-accent transition-colors group-hover:text-cyan">View details →</span>
      </div>
    </Link>
  );
}

export function FutureCredentialCard({ provider }: { provider: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-dashed border-border p-4 text-sm">
      <span className="text-muted">{provider}</span>
      <span className="font-mono text-[11px] tracking-wide text-muted/70 uppercase">Planned</span>
    </div>
  );
}
