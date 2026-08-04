import Image from "next/image";
import Link from "next/link";
import { ClassificationTag } from "@/components/certifications/CertificationCard";
import { certifications, summary } from "@/lib/content";

export function CredentialsStrip() {
  const [primary, ...rest] = certifications;

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
        <p className="mt-2 text-sm text-muted">{summary.credentialLine}</p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          {primary?.badgeImage ? (
            <Link
              href={`/certifications/${primary.slug}`}
              className="shrink-0"
              aria-label={`${primary.name} — view credential details`}
            >
              <Image
                src={primary.badgeImage}
                alt={`${primary.name} official badge`}
                width={96}
                height={96}
                className="rounded-xl"
              />
            </Link>
          ) : null}

          <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[primary, ...rest].map((c) => (
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
