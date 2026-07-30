"use client";

import { useState } from "react";
import { site } from "@/lib/content";

const LINKS = [
  { href: "#about", label: "About", fullLabel: "About" },
  { href: "#experience", label: "Experience", fullLabel: "Experience" },
  { href: "#career-direction", label: "Career Direction", fullLabel: "Career Direction" },
  { href: "#power-platform", label: "Power Platform", fullLabel: "Power Platform" },
  { href: "#projects", label: "Projects", fullLabel: "Projects" },
  { href: "#case-studies", label: "Cases", fullLabel: "Case Studies" },
  { href: "#capabilities", label: "Skills", fullLabel: "Skills" },
  { href: "#certifications", label: "Certs", fullLabel: "Certifications" },
  { href: "#contact", label: "Contact", fullLabel: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="shrink-0 font-semibold tracking-tight text-white">
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden md:flex md:min-w-0 md:items-center md:gap-3 lg:gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-[13px] text-white/70 transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeFile}
            download
            className="shrink-0 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-navy transition-colors hover:bg-cyan-soft"
          >
            Download Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
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
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-white/10 bg-navy md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-md px-2 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-cyan"
                  onClick={() => setOpen(false)}
                >
                  {l.fullLabel}
                </a>
              </li>
            ))}
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
