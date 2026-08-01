import Link from "next/link";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Hero } from "@/components/Hero";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsStrip />
      <WhyWorkWithMe />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-foreground">See the full picture</h2>
              <p className="mt-1 text-sm text-muted">
                Professional experience, categorized projects, tech stack, and where I&apos;m headed next.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Projects
              </Link>
              <Link
                href="/roadmap"
                className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Learning Roadmap
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
