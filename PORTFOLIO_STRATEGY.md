# Portfolio Strategy & Brand Guide

Companion document to the redesigned site. Covers the planning/strategy
deliverables that don't belong in code comments: information architecture,
folder structure, branding, SEO, ATS alignment, and where to take this next.

---

## 1. Information Architecture

```
/                     Home — hero, credentials teaser, "Why Work With Me," CTA band
/about                 Bio, career journey, career-direction (BI → Analytics Engineering)
/experience             Professional experience (real employment only)
/projects                Categorized project catalog (SQL / Power BI / Python /
                          Analytics Engineering / AI Automation / Business
                          Intelligence / Data Engineering)
/certifications           Professional Credentials hub — 3 tiers:
                            🎓 Certifications, 📚 Professional Learning, 🏅 Badges
  /certifications/[slug]    Individual certification detail page (one per real cert)
/skills                  Core Capabilities, Power Platform breakdown, Analytics
                          Engineering, AI & Automation
/tech-stack               Technology grid, grouped by category
/roadmap                 Learning Roadmap — Completed / In Progress / Planned
/blog                     Article topics, honestly marked "coming soon"
/resume                  Inline PDF preview + download
/contact                 Email, GitHub, location
```

Rationale: the original site was a single infinitely-scrolling page. A
recruiter evaluating "does this person do Analytics Engineering work" needs
`/projects` to be a destination they can open in its own tab and share, not
a scroll position on the homepage. Real routes also give each page its own
`<title>` and meta description — meaningfully better for SEO and for
sharing a specific link (e.g., "check out my SQL Associate cert" →
`/certifications/sql-associate`, not "scroll to the third section").

## 2. Wireframe logic (not literal wireframes — the structural intent)

- **Home** is a *summary*, not a container for everything. Hero → credentials
  teaser → recruiter pitch → a single CTA band pointing to the deeper pages.
  A recruiter should be oriented and moving within 10 seconds.
- **Every content page** follows the same shell: eyebrow label → H1 → one
  intro sentence → content. This is the one layout pattern (`<Section>`)
  reused everywhere, which is what makes the site fast to extend — a new
  page is "pick a heading and drop content in," not a new layout.
- **Every project/certification card** carries a status indicator in the
  same visual position (top of card, under the title) so a reader scanning
  the page can tell what's shipped vs. planned without reading prose.

## 3. Folder structure

```
analytics-engineering-portfolio/
├── app/
│   ├── layout.tsx           Root layout — Nav + Footer + SEO metadata (shared, all pages)
│   ├── page.tsx              Home
│   ├── globals.css            Design tokens (dark theme, single source of truth for color)
│   └── <route>/page.tsx        One folder per nav item, some with generateMetadata
├── components/
│   ├── ui/                    Primitives: Section, StatusBadge, Tag, Avatar
│   ├── certifications/         CertificationCard, CredentialsHub
│   └── *.tsx                    One component per page-section, named for what it renders
├── lib/
│   └── content.ts               Single source of truth for ALL copy and data — edit here,
│                                  not in components, for any content change
└── public/
    ├── resume/                   The resume PDF (filename referenced from lib/content.ts)
    └── certifications/<slug>/     Real certificate/badge images go here (not yet populated)
```

This structure is what makes "add a new certification" or "add a new
project" a data change, not a redesign — see Section 8 (Future Expansion).

## 4. SEO strategy

- Per-page `<title>` via Next.js metadata `template` — every page reads
  `"<Page Name> — Carlo Menoro"` instead of one generic title site-wide.
- `metadataBase` set from `site.siteUrl`, so relative OG image/URL
  resolution is correct once deployed.
- Keywords list in `lib/content.ts` → `seo.keywords` covers the actual
  target roles (Business Intelligence Analyst, Analytics Engineering, Power
  BI, Power Platform) without stuffing — each term appears naturally in
  page copy, not just the meta tag.
- Static generation (`○` and `●` routes in the build output) means every
  page is plain prerendered HTML — no client-side-only content for search
  engines to miss.
- **Not yet done, worth adding next**: an `og-image` per page (Next's
  `opengraph-image.tsx` convention) and a `sitemap.xml` — both are small,
  mechanical additions once the site has a stable production URL.

## 5. Branding guide

**Voice**: direct, specific, quietly confident. Never "passionate about
data" — always the concrete claim ("raised team data accuracy to 98%," not
"detail-oriented"). Every capability claim on this site is traceable to a
real project or role — that discipline *is* the brand.

**The one rule that shapes every other section**: status labels are not
decoration. `Complete`, `In Development`, `Architecture Complete`, `Planned
Prototype` appear identically everywhere (projects, the roadmap, the
credentials hub) so a reader learns the vocabulary once and can apply it
across the whole site.

## 6. Color palette

| Token | Hex | Use |
|---|---|---|
| `--background` / `--navy` | `#05070d` | Page background, header |
| `--card` | `#0b0f1a` | Card surfaces |
| `--surface` | `#0d1220` | Alternating section background |
| `--surface-strong` | `#131a2c` | Elevated surface (avatar placeholder, etc.) |
| `--foreground` | `#eef1f8` | Primary text |
| `--muted` | `#8892a8` | Secondary text |
| `--border` | `#1b2233` | All borders |
| `--accent` | `#5b8cf5` | Primary interactive color (buttons, active nav) |
| `--cyan` | `#22d3ee` | Secondary accent — hover states, credential icons |
| Status: green / amber / blue / gray | see `globals.css` | Complete / In Development / Architecture Complete / Planned |

Semantic status colors are deliberately **separate** from the brand accent
(`--accent`/`--cyan`) — so "this is my brand" and "this project is X% done"
never get visually confused.

## 7. Typography

Single family (Geist, self-hosted via `next/font`) for both display and
body — no second display face. This is a restraint choice: the site's
personality comes from color, spacing, and the status-label system, not
from an ornamental headline font. Scale: `text-3xl`→`text-5xl` for H1s,
`text-2xl`→`text-3xl` for section H2s, `text-sm`/`text-base` for body,
`font-mono` reserved for eyebrows, labels, and dates (a deliberate "this is
metadata, not prose" signal, consistent everywhere it appears).

## 8. Future expansion strategy

The whole point of `lib/content.ts` as a single data file is that these
additions require **no new components, no redesign**:

- **New certification**: add one object to the `certifications` array
  (with a new `slug`) → it automatically appears on `/certifications` and
  gets its own detail page at `/certifications/<slug>` via
  `generateStaticParams`. Move it out of `futureCredentials` if it was
  already listed there.
- **New project**: add one object to `featuredProjects` or
  `additionalCaseStudies` with a `categories` array → it appears under
  every matching category on `/projects` automatically.
- **New roadmap item**: move an entry between `roadmap.planned` →
  `roadmap.inProgress` → `roadmap.completed` as it actually happens.
- **First blog post**: once an article is actually written, the natural
  next step is `app/blog/[slug]/page.tsx` (same pattern as certifications)
  — not built yet, since there's no content to serve.
- **Real photo**: drop a file at `public/photo.jpg`, set `site.photo` in
  `lib/content.ts` — `Avatar` swaps from initials to the real image
  automatically, no component change needed.

## 9. ATS alignment

This is a portfolio site, not the resume itself — ATS systems parse the
resume PDF, not this website. What this site does for ATS purposes:
consistent, exact-match terminology with the resume (job titles, dates,
certification names) so a recruiter cross-checking the two never finds a
discrepancy — which was itself the subject of the "Final Deployment
Verification" audit earlier in this project. Keep it that way: whenever the
resume changes, `lib/content.ts` should change with it, not drift.

## 10. Professional recommendations

To make this read as comparable to a Senior Analytics Engineer's site at a
company like the ones named in the brief:

1. **Real certificate images are the single highest-leverage next step.**
   Every cert page currently shows an honest placeholder. Dropping in the
   actual DataCamp/IBM certificate PNGs (`public/certifications/<slug>/certificate.png`)
   takes this from "credible" to "verified at a glance."
2. **A real photo** matters more for BI/analytics roles than it might seem
   — these are relationship-heavy, stakeholder-facing roles, and a face
   makes the "stakeholder communication" and "leadership" claims land.
3. **Write the first blog post before applying broadly.** "How I Earned SQL
   Associate" is short, low-effort, and immediately proves the "continuous
   learning" claim with something dated and specific, not just asserted.
4. **The `/projects` page needs real screenshots.** Every card currently
   has zero visual evidence. Even one annotated screenshot per flagship
   project (Executive Sales Performance Dashboard, Commercial Analytics
   Dashboard) would meaningfully raise perceived credibility.
5. **A LinkedIn URL is still missing everywhere** (`site.linkedin` is
   `null`). For BI/analytics roles specifically, recruiters check LinkedIn
   before GitHub — this is a real gap, not a nice-to-have.
6. **Once deployed, add a sitemap and per-page OG images** (Section 4) —
   cheap, mechanical, and closes the SEO gap completely.

None of the above are blocking — the site is coherent and honest as it
stands. They're the difference between "good portfolio" and "obviously the
work of someone who's going to keep shipping."
