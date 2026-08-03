import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { BlogList } from "@/components/BlogList";
import { BLOG_ENABLED } from "@/lib/flags";

// noindex regardless of the flag below — belt-and-suspenders in case this
// page is ever reachable (cached link, flag toggled without redeploy, etc.)
// while there's still no real article published.
export const metadata: Metadata = {
  title: "Blog",
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  // Temporarily disabled: only "Coming Soon" placeholder topics exist so
  // far, no real article. Flip BLOG_ENABLED in lib/flags.ts back to `true`
  // once the first one is published — this page, BlogList, and the
  // blogTopics data are untouched and ready to go.
  if (!BLOG_ENABLED) {
    redirect("/");
  }

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="A learning journal — not written yet, but the topics are planned."
      intro="Nothing below is published. These are the articles I intend to write as I complete each stage of the Learning Roadmap — listed honestly as upcoming, not backfilled after the fact."
    >
      <BlogList />
    </Section>
  );
}
