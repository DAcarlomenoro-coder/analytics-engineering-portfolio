import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClassificationTag } from "@/components/certifications/CertificationCard";
import { Tag } from "@/components/ui/Tag";
import { certifications } from "@/lib/content";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  return { title: cert ? cert.name : "Certification" };
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/certifications" className="text-sm text-muted hover:text-cyan">
        ← All credentials
      </Link>

      <div className="mt-6 flex items-start gap-4">
        {cert.badgeImage ? (
          <Image
            src={cert.badgeImage}
            alt={`${cert.name} official badge`}
            width={72}
            height={72}
            className="rounded-xl"
          />
        ) : (
          <span className="text-4xl" aria-hidden>
            {cert.badgeEmoji}
          </span>
        )}
        <div>
          <h1 className="text-2xl font-semibold text-foreground text-balance sm:text-3xl">{cert.name}</h1>
          <p className="mt-1 text-muted">{cert.provider}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {cert.classification.map((c) => (
              <ClassificationTag key={c} label={c} />
            ))}
          </div>
        </div>
      </div>

      {cert.certificatePreview ? (
        <a
          href={cert.certificateFile}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open the official ${cert.name} certificate PDF in a new tab`}
          className="mt-8 block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent focus-visible:border-accent"
        >
          <Image
            src={cert.certificatePreview}
            alt={`Preview of the official ${cert.name} certificate — click to open the full PDF`}
            width={1200}
            height={800}
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full"
          />
        </a>
      ) : null}

      <dl className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-4">
        <div>
          <dt className="text-xs text-muted">Provider</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.provider}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Issued</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.issued}</dd>
        </div>
        {cert.validUntil ? (
          <div>
            <dt className="text-xs text-muted">Valid until</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{cert.validUntil}</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-xs text-muted">Credential ID</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.credentialId ?? "Not published yet"}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-3">
        {cert.certificateFile ? (
          <a
            href={cert.certificateFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            View official certificate ↗
          </a>
        ) : null}
        {cert.verificationUrl ? (
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Verify credential ↗
          </a>
        ) : (
          <p className="flex items-center text-sm text-muted">No public verification link for this credential.</p>
        )}
      </div>

      <p className="mt-8 leading-relaxed text-muted">{cert.summary}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">Skills demonstrated</h2>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {cert.skillsValidated.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <h2 className="mt-10 text-sm font-medium text-foreground">What I learned</h2>
      <p className="mt-2 leading-relaxed text-muted">{cert.whatLearned}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">How it supports my analytics career</h2>
      <p className="mt-2 leading-relaxed text-muted">{cert.realWorldApplication}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">Related projects</h2>
      <ul className="mt-3 space-y-2">
        {cert.relatedProjects.map((p) => (
          <li key={p}>
            <Link href="/projects" className="text-sm text-accent hover:text-cyan">
              {p} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
