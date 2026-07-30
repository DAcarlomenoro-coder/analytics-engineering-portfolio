import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 ${tone === "surface" ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-balance">{title}</h2>
          {intro ? <p className="mt-3 text-muted leading-relaxed">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
