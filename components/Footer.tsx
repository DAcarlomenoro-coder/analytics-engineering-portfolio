import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.supportingLine}
        </p>
        <a href="#top" className="text-muted hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
