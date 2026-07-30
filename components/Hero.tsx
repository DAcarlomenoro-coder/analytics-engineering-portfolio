import { site, summary } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
          {site.supportingLine}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          {site.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {summary.body[0]}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={site.resumeFile}
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            View Resume
          </a>
          <a
            href={site.resumeFile}
            download
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Download Resume
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            View GitHub
          </a>
          <a
            href="#projects"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            View Projects
          </a>
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted">{summary.notOverstating}</p>
      </div>
    </section>
  );
}
