# Senior BI & Analytics Portfolio (Version B)

Carlo Menoro's Version B portfolio. Official positioning: **Senior Business
Intelligence Analyst & Analytics Specialist** — 5+ years of BI, executive
reporting, and data-quality experience, with Analytics Engineering, the
Microsoft Power Platform, Python automation, and AI-assisted solution
design positioned explicitly as a developing specialization / career
direction, not current professional experience. This is a standalone site,
separate from the Version A (BI-leadership) portfolio.

Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4. Single-page site,
one route (`/`), content-driven from `lib/content.ts`.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or whatever port is printed — 3000 may be in use
if you're also running a sibling project).

## Updating content

Everything on the page — copy, project statuses, certifications, tech stack,
contact info — comes from **`lib/content.ts`**. That file is the single
source of truth; edit it and every section that uses that data updates
automatically. You should not need to touch the component files under
`components/` for a normal content update.

To change project status labels, keep to one of the four values already
used: `"Complete"`, `"In Development"`, `"Architecture Complete"`, or
`"Planned Prototype"` — these map to specific colors in
`components/ui/StatusBadge.tsx`. Adding a new status string will still
render (falls back to a neutral gray) but won't get its own color unless you
add one to `STYLES` in that file.

To update the resume file: replace
`public/resume/Carlo_Menoro_Senior_BI_Analytics_Resume.pdf` with the new
PDF, keeping the exact same filename — every "View/Download Resume" link on
the site points to that path via `site.resumeFile` in `lib/content.ts`.

## Build & verify before deploying

```bash
npm run build   # production build — must succeed with no errors
npm run lint     # ESLint — should report no issues
```

Both verified clean again on re-check: `npm run build` succeeds (static output for `/` and `/_not-found`), `npm run lint` reports no issues, and every internal anchor / external link (GitHub repo, live demo, resume PDF route) resolves.

## Deployment

Not yet deployed — no Vercel/Netlify/GitHub account access was available to
do this automatically. Shortest path, in order of preference:

### Option 1 — Vercel (recommended, easiest for Next.js)

```bash
npx vercel login   # opens a browser to authenticate — no install needed
npx vercel          # from this directory; follow the prompts
npx vercel --prod   # promote to your production URL
```

Or without the CLI: push this repo to GitHub (see below), then at
vercel.com → "Add New Project" → import the GitHub repo → it auto-detects
Next.js and deploys with no configuration needed.

### Option 2 — Netlify

```bash
npx netlify-cli login
npx netlify-cli init    # from this directory; choose "Next.js" when prompted
npx netlify-cli deploy --prod
```

### Option 3 — GitHub Pages

Not recommended for this project — GitHub Pages serves static files only,
and this site currently renders server-side (needed for `next/font` and the
metadata API to work as configured). It would require adding
`output: "export"` to `next.config.ts` and losing some optimizations. Use
Vercel or Netlify instead unless GitHub Pages is a hard requirement.

## Publishing the GitHub repository

This directory is already a local git repo with an initial commit. To push
it to GitHub:

```bash
gh auth login    # gh CLI is already installed on this machine — just needs your login
gh repo create analytics-engineering-portfolio --public --source=. --remote=origin --push
```

Or manually — no `gh` CLI needed: create an empty repo on github.com, then:

```bash
git remote add origin https://github.com/<your-username>/analytics-engineering-portfolio.git
git branch -M main
git push -u origin main
```

## Future updates

1. Edit `lib/content.ts` (and/or the resume PDF in `public/resume/`).
2. `npm run build` locally to confirm it still builds clean.
3. Commit and push — if connected to Vercel/Netlify via GitHub, this
   redeploys automatically. Otherwise re-run the CLI deploy command above.

To keep this in sync with the resume going forward: whenever Resume Version
B changes, update `lib/content.ts` to match (job titles, dates, project
statuses, certifications) the same way this file's `Portfolio v3 Content
Package.md` counterpart does for Version A.
