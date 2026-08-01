"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/content";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Credentials" },
  { href: "/skills", label: "Skills" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur supports-[backdrop-filter]:bg-navy/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="shrink-0 font-semibold tracking-tight text-white">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:min-w-0 lg:items-center lg:gap-1">
          {LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                  active ? "text-cyan" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href="/resume"
            className="rounded-md border border-white/15 px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
          >
            Resume
          </Link>
          <a
            href={site.resumeFile}
            download
            className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-navy transition-colors hover:bg-cyan-soft"
          >
            Download
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-white/10 bg-navy lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-md px-2 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-cyan"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume"
                className="block rounded-md px-2 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-cyan"
                onClick={() => setOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                href={site.resumeFile}
                download
                className="mt-1 block rounded-md bg-white px-2 py-2 text-center text-sm font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
