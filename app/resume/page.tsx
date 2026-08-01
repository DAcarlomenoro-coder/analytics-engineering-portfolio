import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site, summary } from "@/lib/content";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={site.title}
      intro={summary.body[0]}
    >
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={site.resumeFile}
          download
          className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
        >
          Download PDF
        </a>
        <a
          href={site.resumeFile}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          Open in new tab ↗
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
        <object data={site.resumeFile} type="application/pdf" className="h-[75vh] w-full">
          <p className="p-6 text-sm text-muted">
            Your browser can&apos;t preview PDFs inline —{" "}
            <a href={site.resumeFile} className="text-accent hover:text-cyan">
              download the resume directly
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </Section>
  );
}
