import { blogTopics } from "@/lib/content";

export function BlogList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {blogTopics.map((post) => (
        <div key={post.title} className="flex flex-col rounded-xl border border-dashed border-border p-6">
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
            Coming soon
          </span>
          <h3 className="mt-2 text-base font-semibold text-foreground/90 text-balance">{post.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{post.teaser}</p>
        </div>
      ))}
    </div>
  );
}
