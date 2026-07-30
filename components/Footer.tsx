import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.supportingLine}
        </p>
        <a href="#top" className="text-white/60 hover:text-cyan">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
