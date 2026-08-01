import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
        <span className="text-4xl" aria-hidden>
          {cert.badgeEmoji}
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-foreground text-balance sm:text-3xl">{cert.name}</h1>
          <p className="mt-1 text-muted">{cert.provider}</p>
        </div>
      </div>

      {/* Official certificate image — not fabricated. Drop the real file at
          public/certifications/<slug>/certificate.png (or .pdf) and swap
          this placeholder for an <Image> once it exists. */}
      <div className="mt-8 flex h-48 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card text-center text-sm text-muted">
        <p>Official certificate image not yet uploaded — add it at:</p>
        <code className="font-mono text-xs">public/certifications/{cert.slug}/certificate.png</code>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-4">
        <div>
          <dt className="text-xs text-muted">Provider</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.provider}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Issued</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.issued}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Valid until</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.validUntil ?? "No expiration"}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Credential ID</dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{cert.credentialId ?? "Not published yet"}</dd>
        </div>
      </dl>

      {cert.verificationUrl ? (
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-medium text-accent hover:text-cyan"
        >
          Verify this credential ↗
        </a>
      ) : (
        <p className="mt-4 text-sm text-muted">Verification link not published yet.</p>
      )}

      <p className="mt-8 leading-relaxed text-muted">{cert.summary}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">Skills validated</h2>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {cert.skillsValidated.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <h2 className="mt-10 text-sm font-medium text-foreground">What I learned</h2>
      <p className="mt-2 leading-relaxed text-muted">{cert.whatLearned}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">Real-world application</h2>
      <p className="mt-2 leading-relaxed text-muted">{cert.realWorldApplication}</p>

      <h2 className="mt-10 text-sm font-medium text-foreground">Related portfolio projects</h2>
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
