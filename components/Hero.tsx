import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { site, summary } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 border-b border-border bg-grid">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
              {site.supportingLine}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              {site.title}
            </h1>
          </div>
          <Avatar size={88} />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{summary.body[0]}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={site.resumeFile}
            download
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Download Resume
          </a>
          <Link
            href="/projects"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted">{summary.notOverstating}</p>
      </div>
    </section>
  );
}
