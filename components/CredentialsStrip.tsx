import Image from "next/image";
import Link from "next/link";
import { ClassificationTag } from "@/components/certifications/CertificationCard";
import { certifications } from "@/lib/content";

export function CredentialsStrip() {
  const badge = certifications.find((c) => c.badgeImage);

  return (
    <section className="border-b border-border py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Professional Credentials
          </p>
          <Link href="/certifications" className="text-xs font-medium text-accent hover:text-cyan">
            View all credentials →
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          {badge?.badgeImage ? (
            <Link href={`/certifications/${badge.slug}`} className="shrink-0" aria-label={`${badge.name} — view credential details`}>
              <Image
                src={badge.badgeImage}
                alt={`${badge.name} official badge`}
                width={96}
                height={96}
                className="rounded-xl"
              />
            </Link>
          ) : null}

          <div className="grid flex-1 gap-3 sm:grid-cols-3">
            {certifications.map((c) => (
              <Link
                key={c.slug}
                href={`/certifications/${c.slug}`}
                className="flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <p className="text-sm font-medium text-foreground text-balance">{c.name}</p>
                <p className="mt-0.5 text-xs text-muted">{c.provider}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {c.classification.map((cl) => (
                    <ClassificationTag key={cl} label={cl} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
