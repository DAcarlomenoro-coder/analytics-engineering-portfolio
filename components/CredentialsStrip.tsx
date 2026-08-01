import Link from "next/link";
import { certifications, futureCredentials } from "@/lib/content";

export function CredentialsStrip() {
  return (
    <section className="border-b border-border py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Professional Credentials
          </p>
          <Link href="/certifications" className="text-xs font-medium text-accent hover:text-cyan">
            View all credentials →
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((c) => (
            <Link
              key={c.slug}
              href={`/certifications/${c.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent"
            >
              <span aria-hidden>{c.badgeEmoji}</span>
              {c.name}
            </Link>
          ))}
          {futureCredentials.slice(0, 6).map((f) => (
            <span
              key={f.provider}
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3.5 py-1.5 text-sm text-muted"
            >
              {f.provider}
              <span className="text-[10px] tracking-wide uppercase">planned</span>
            </span>
          ))}
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm text-muted">+ more</span>
        </div>
      </div>
    </section>
  );
}
