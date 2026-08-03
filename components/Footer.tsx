import Link from "next/link";
import { site } from "@/lib/content";
import { BLOG_ENABLED } from "@/lib/flags";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/experience", label: "Experience" },
      { href: "/projects", label: "Projects" },
      { href: "/skills", label: "Skills" },
      { href: "/tech-stack", label: "Tech Stack" },
    ],
  },
  {
    heading: "Growth",
    links: [
      { href: "/certifications", label: "Credentials" },
      { href: "/roadmap", label: "Learning Roadmap" },
      ...(BLOG_ENABLED ? [{ href: "/blog", label: "Blog" }] : []),
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "/resume", label: "Resume" },
      { href: "/contact", label: "Contact" },
      { href: site.github, label: "GitHub ↗", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-semibold text-white">
              {site.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-white/60">{site.supportingLine}</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] font-medium tracking-[0.14em] text-white/40 uppercase">
                {col.heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) =>
                  "external" in l && l.external ? (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-cyan">
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/70 hover:text-cyan">
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <Link href="/" className="text-white/40 hover:text-cyan">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
