// Single source of truth for site copy. Update here — every section reads from this file.
// Grounded in Resume Version B and this project's actual repos; nothing here should
// claim more than what's documented in WIA_Executive_Interview_Project / the dataset
// and platform repos this portfolio describes.

export type Status = "Complete" | "In Development" | "Architecture Complete" | "Planned Prototype";

export const site = {
  name: "Carlo Menoro",
  title: "Senior Business Intelligence Analyst & Analytics Specialist",
  titleShort: "Senior Business Intelligence & Analytics Professional",
  supportingLine: "Business Intelligence • Power BI • SQL • Python • Power Platform • AI-Assisted Automation",
  location: "Philippines",
  email: "plukcarlo.menoro@gmail.com",
  github: "https://github.com/DAcarlomenoro-coder",
  linkedin: null as string | null, // no LinkedIn URL has been provided — omit until one exists
  resumeFile: "/resume/Carlo_Menoro_Senior_BI_Analytics_Resume.pdf",
  siteUrl: "https://analytics-engineering-portfolio-one.vercel.app",
  // No headshot has been provided yet — Avatar renders initials until a real
  // photo is added at public/photo.jpg (then set this to "/photo.jpg").
  photo: null as string | null,
  versionANote:
    "This site is the technical companion to my primary Business Intelligence resume and portfolio (Version A), which covers BI leadership, governance, and executive reporting in more depth. This site adds detail on where I'm expanding next — Analytics Engineering, the Microsoft Power Platform, and AI-assisted solution design.",
};

export const seo = {
  title: "Carlo Menoro — Senior Business Intelligence Analyst & Analytics Specialist",
  description:
    "Portfolio of Carlo Menoro, DataCamp Certified Data Analyst and Senior Business Intelligence Analyst: 5+ years transforming business processes through analytics, reporting, and intelligent automation — Power BI, SQL, Python, and AI-assisted solution design.",
  keywords: [
    "DataCamp Certified Data Analyst",
    "Business Intelligence",
    "Senior Business Intelligence Analyst",
    "Analytics Specialist",
    "Data Analytics",
    "Power BI",
    "SQL",
    "Python",
    "Dashboard Development",
    "Executive Reporting",
    "Data Quality",
    "Data Governance",
    "KPI Reporting",
    "Reporting Automation",
    "Process Improvement",
    "Microsoft Power Platform",
    "Analytics Engineering",
    "AI-Assisted Automation",
  ],
};

export const summary = {
  heading: "Senior BI and analytics expertise, expanding deliberately into what's next.",
  body: [
    "I'm a Senior Business Intelligence Analyst with 5+ years of experience delivering executive reporting, dashboard development, data quality, data governance, KPI reporting, reporting automation, and operational analytics — mainly through SQL and Power BI, with Python and AI-assisted workflows supporting the work naturally as needed.",
    "Alongside that core BI practice, I'm intentionally expanding into Analytics Engineering, the Microsoft Power Platform, and AI-assisted enterprise solutions — documented on this site as a developing specialization, not existing production experience.",
  ],
  notOverstating:
    "I'm explicit throughout this site about what's current BI experience, what's a developing specialization, and what's a concept — see the status label on every project and capability.",
  // Subtle credential mention for Home/About — keep accurate to how each
  // credential is actually classified elsewhere on this site (IBM's is a
  // single Coursera course, not a full IBM Professional Certificate).
  credentialLine: "DataCamp Certified Data Analyst and SQL Associate, with IBM Business Intelligence (BI) Essentials.",
};

// ============================================================
// Personal brand — Business Process Improvement & AI-Assisted Delivery
// ============================================================
// Central positioning theme, referenced from the Hero/About intro.
export const brandTheme = "Transforming Business Processes Through Analytics, Intelligent Automation, and Data-Driven Decision Making";

export const approach = {
  eyebrow: "My Approach",
  title: "Technology supports the story. Business improvement is the story.",
  body: "I believe the purpose of analytics extends beyond reporting. The real value comes from improving how people work, strengthening business processes, increasing data quality, and enabling better decisions. My approach combines Business Intelligence, analytics, automation, and AI-assisted solution design to create practical solutions that reduce manual effort, improve governance, and deliver measurable business value.",
};

// The signature visual — one consolidated methodology, not three
// overlapping lists. Phase labels double as the "Solution Delivery
// Methodology" lifecycle; the step detail is written in the "How I Deliver
// Solutions" voice.
export const processFlow = [
  { phase: "Business Understanding", detail: "Start from the business challenge, not the tool." },
  { phase: "Current-Process Analysis", detail: "Understand how the work actually happens today, and where it breaks down." },
  { phase: "Pain-Point & Root-Cause Analysis", detail: "Diagnose the specific problem, not just its symptoms." },
  { phase: "Requirements & Data Analysis", detail: "Analyze the data available and define what a solution needs to do." },
  { phase: "Solution Architecture & Design", detail: "Design a practical solution scoped to the actual problem." },
  { phase: "Analytics & Automation Development", detail: "Build the reporting, analytics, and automation the design calls for." },
  { phase: "Validation", detail: "Validate results with the stakeholders who'll actually use them." },
  { phase: "Deployment", detail: "Deploy into real operational use, not just a demo." },
  { phase: "Measuring Business Impact", detail: "Measure the outcome against the original business challenge." },
  { phase: "Continuous Improvement", detail: "Treat the solution as a starting point, not a finish line." },
];

export const businessValue = {
  eyebrow: "How I Create Business Value",
  intro: "Organized around outcomes, not tools — every item below ties back to specific work in my Professional Experience or Projects.",
  items: [
    { title: "Improving Data Quality", detail: "Led enterprise-level Salesforce data validation at N2S, raising team data accuracy to a sustained 98%." },
    { title: "Strengthening Data Governance", detail: "CRM health standards, structured QA workflows, and reporting standards built to hold up under audit, not just look good in a demo." },
    { title: "Automating Manual Processes", detail: "Replaced manual Excel and internal-system workflows with automated reporting at Vector — real hours saved, not just a cleaner spreadsheet." },
    { title: "Increasing Reporting Efficiency", detail: "Daily, weekly, and monthly KPI reporting engineered to run consistently instead of being rebuilt by hand each cycle." },
    { title: "Supporting Executive Decision-Making", detail: "Advised C-suite leaders at JACCS through executive reports and strategic presentations grounded in the underlying data." },
    { title: "Standardizing Business Processes", detail: "Structured quality-assurance workflows and reporting standards that replaced ad hoc, inconsistent processes at every stop." },
    { title: "Improving Operational Visibility", detail: "Power BI monitoring views that surface data-quality and performance issues before they become executive-level problems." },
    { title: "Enabling Cross-functional Collaboration", detail: "Coordinated stakeholders across departments at JACCS around shared business goals and reporting requirements." },
    { title: "Building Scalable Reporting Solutions", detail: "Configuration-driven platforms like ESIP, designed to be reconfigured for new data rather than rebuilt from scratch." },
    { title: "Driving Continuous Improvement", detail: "Root-cause analysis and process-improvement action built into the day-to-day work, not a separate initiative." },
  ],
};

export const aiAssistedDevelopment = {
  eyebrow: "AI-Assisted Solution Development",
  title: "AI accelerates the work. I own every decision.",
  intro:
    "I use AI responsibly to accelerate business analysis, requirements gathering, architecture exploration, technical documentation, prototype development, code assistance, testing support, and solution refinement.",
  ownership:
    "AI accelerates my work, but every business decision, architecture choice, validation, testing, and final approval remains under my ownership.",
};

export const careerDirection = {
  eyebrow: "Career Direction",
  title: "Where my Business Intelligence foundation is intentionally headed next.",
  intro:
    "This is direction, not current employment experience. My professional background is Business Intelligence and Analytics — the areas below are where I'm deliberately investing my learning and personal project time right now.",
  items: [
    { title: "Analytics Engineering", detail: "Dimensional modeling, validation frameworks, and configuration-driven data platforms, built on top of BI reporting fundamentals." },
    { title: "Microsoft Power Platform", detail: "Extending Power BI reporting into Power Automate, Power Apps, and Dataverse for governed, low-code business applications." },
    { title: "Python Automation", detail: "Using Python to accelerate data preparation, validation, and reporting pipelines that previously required manual effort." },
    { title: "AI-Assisted Business Solutions", detail: "Applying AI as an accelerant for solution design, with human review built into every workflow." },
    { title: "Enterprise Data Quality", detail: "Formalizing the data-quality and governance discipline from my BI work into repeatable, documented frameworks." },
    { title: "Workflow Automation", detail: "Reducing manual, spreadsheet-driven processes through structured, auditable automation." },
    { title: "Data Governance", detail: "Single, agreed KPI definitions and clear ownership — the foundation every reporting layer above it depends on." },
  ],
};

export const journey = [
  { label: "Business Intelligence", detail: "Executive dashboards and reporting foundations" },
  { label: "Reporting & Analytics", detail: "KPI design, financial and operational analysis" },
  { label: "Automation", detail: "Reporting and workflow automation to remove manual effort" },
  { label: "Analytics Engineering", detail: "Dimensional modeling, validation, configuration-driven platforms" },
  { label: "Power Platform", detail: "Extending BI into low-code apps, workflow, and governed data" },
  { label: "AI-Assisted Business Solutions", detail: "Using AI to accelerate design while keeping humans in the loop" },
];

export type ExperienceEntry = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Lead Data Quality Analyst",
    company: "N2S Global Workforce Solutions LLC · Contract",
    dates: "Sep 2025 – Jul 2026",
    bullets: [
      "Led end-to-end Salesforce customer-entity validation, strengthening data governance, mapping integrity, and structural control across the Atlassian engagement.",
      "Built Power BI monitoring views and SQL-based validation queries that supported a rise in team data accuracy to a consistent 98%, through cross-functional calibration, structured coaching, and performance feedback.",
      "Diagnosed systemic discrepancies through SQL-based QA audits and root-cause analysis, using Python-assisted scripts to speed up recurring validation checks and enable faster remediation.",
      "Designed structured quality assurance workflows and Excel-based reporting standards that improved consistency and stakeholder confidence.",
      "Aligned project stakeholders on data-quality priorities, CRM health standards, and process-improvement actions.",
    ],
    tech: ["Power BI", "SQL", "Python", "Excel", "CRM Data Quality", "Data Governance"],
  },
  {
    title: "Senior Data Analyst",
    company: "Vector Outsourcing Solutions Philippines Inc.",
    dates: "May 2024 – Aug 2025",
    bullets: [
      "Engineered daily, weekly, and monthly KPI reporting in Power BI and Excel, with DAX-based measures, that improved consistency and enabled faster operational decisions.",
      "Used Python and Google Apps Script to automate recurring reporting and reduce manual consolidation across Excel and Google Workspace workflows, shortening turnaround time and limiting processing error.",
      "Applied SQL-based analysis to convert medical-billing, insurance, and accounts-receivable data into financial and operational reporting for management planning.",
      "Partnered with QA and operations leaders to validate performance data, identify trends, and drive process improvements.",
    ],
    tech: ["Power BI", "DAX", "SQL", "Python", "Excel", "Google Apps Script", "Google Workspace"],
  },
  {
    title: "Business Analyst",
    company: "JACCS Finance Philippines Corp.",
    dates: "Feb 2023 – Apr 2024",
    bullets: [
      "Analyzed financial and industry KPIs using SQL-based queries and Excel models to surface trends and support revenue-oriented business propositions.",
      "Built supporting Power BI dashboards and reporting views used to advise C-suite leaders through executive reports, competitive research, and strategic presentation decks.",
      "Used Python for lightweight data preparation and analysis where it sped up recurring reporting tasks.",
      "Standardized cross-department data collection by coordinating stakeholders around shared business goals and reporting requirements.",
    ],
    tech: ["Power BI", "SQL", "Python", "Excel", "Financial Analytics", "Process Improvement"],
  },
  {
    title: "AI Data Quality Specialist",
    company: "Appen",
    dates: "Apr 2021 – Feb 2023",
    bullets: [
      "Evaluated AI training datasets, metadata quality, and search relevance across multiple AI programs using SQL-based queries and Python-assisted validation scripts, ensuring dataset integrity and consistent operational quality.",
      "Performed structured data validation, metadata auditing, and quality assurance using established evaluation frameworks, translating findings into Excel and Google Sheets quality reports and improvement recommendations for program stakeholders.",
      "Analyzed quality trends, identified recurring issues, and collaborated with cross-functional stakeholders using Google Workspace to improve annotation consistency and operational efficiency.",
      "Supported data governance initiatives through root-cause analysis and continuous process improvement — early groundwork for the data-quality and BI work that followed.",
    ],
    tech: ["SQL", "Python", "Excel", "Google Workspace", "AI Data Quality"],
  },
];

export const powerPlatform = {
  intro:
    "The Microsoft Power Platform extends Business Intelligence and Analytics Engineering past reporting — into the workflows, applications, and governed data that decisions actually run on. Power BI is where I have real reporting depth today; Power Automate, Power Apps, and Dataverse are the direction I'm deliberately building toward next.",
  pillars: [
    {
      name: "Power BI",
      role: "Current capability",
      items: ["Executive dashboards", "KPI reporting", "Semantic models", "Data visualization", "DAX", "Power Query"],
    },
    {
      name: "Power Automate",
      role: "Developing capability",
      items: ["Workflow automation", "Approval routing", "Notifications", "Scheduled processes"],
    },
    {
      name: "Power Apps",
      role: "Developing capability",
      items: ["Internal operational applications", "Guided review workflows", "Business process digitization"],
    },
    {
      name: "Microsoft Dataverse",
      role: "Developing capability",
      items: ["Business entities", "Data governance", "Business rules", "Relationships", "Audit history"],
    },
  ],
  exploring: {
    heading: "Exploring — not production experience",
    body: "Power Pages and Copilot Studio are technologies I'm currently exploring. I'm naming them here for transparency about direction, not claiming hands-on production work with either.",
    items: ["Power Pages", "Copilot Studio"],
  },
  current: [
    "Power BI",
    "Power Query",
    "DAX",
    "SQL",
    "Python",
    "Dashboard Development",
    "Business Intelligence Reporting",
    "Data Validation",
    "Reporting Automation",
  ],
  developing: [
    "Power Automate",
    "Power Apps",
    "Dataverse",
    "Microsoft 365 Integration",
    "SharePoint Integration",
    "Power Platform Governance Fundamentals",
  ],
};

export type ProjectCategory =
  | "SQL"
  | "Power BI"
  | "Python"
  | "Analytics Engineering"
  | "AI Automation"
  | "Business Intelligence"
  | "Data Engineering";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "SQL",
  "Power BI",
  "Python",
  "Analytics Engineering",
  "AI Automation",
  "Business Intelligence",
  "Data Engineering",
];

export type Project = {
  title: string;
  status: Status;
  categories: ProjectCategory[];
  note?: string;
  description: string;
  // Business-first framing (flagship projects only) — shown ahead of the
  // technical description so each project reads as a business-improvement
  // initiative first, a technology demonstration second.
  businessChallenge?: string;
  businessSolution?: string;
  businessOutcome?: string;
  focus: string[];
  links?: { label: string; href: string }[];
};

export const featuredProjects: Project[] = [
  {
    title: "Enterprise Sales Intelligence Platform (ESIP)",
    status: "In Development",
    categories: ["Analytics Engineering", "Data Engineering", "Power BI"],
    businessChallenge:
      "Enterprise sales & operations reporting is only as trustworthy as the data model underneath it — most reporting projects jump straight to dashboards without validating that foundation first.",
    businessSolution:
      "A configuration-driven, validated data platform (Kimball-modeled) built to be trustworthy before any dashboard sits on top of it — foundation-first, not dashboard-first.",
    businessOutcome:
      "In Development — the validated data foundation is built; the goal is a platform other reports (like the Executive Sales Performance Dashboard below) can build on without re-validating the data every time.",
    description:
      "A configuration-driven enterprise sales analytics platform built on a large-scale synthetic B2B manufacturing dataset, using Kimball dimensional modeling. Completed: the dataset architecture, dimensional model, validation framework, documentation, and supporting BI reporting work. The broader platform — the full semantic and reporting layer across all of it — remains in development.",
    focus: [
      "Configuration-driven architecture",
      "Data validation",
      "Synthetic enterprise dataset",
      "Kimball dimensional modeling",
      "Semantic reporting",
      "Governance",
      "Auditability",
    ],
  },
  {
    title: "Executive Sales Performance Dashboard",
    status: "Complete",
    categories: ["Power BI", "Business Intelligence"],
    businessChallenge:
      "Leadership needed a trustworthy, self-service view of sales and profitability performance without waiting on a manual report cycle.",
    businessSolution:
      "An interactive Power BI report with a reusable DAX measure library so every page uses the same KPI definitions, plus drill-through from summary KPIs to transaction-level detail.",
    businessOutcome:
      "A single source of truth for sales performance — no reconciling numbers that differ depending on which report or analyst produced them.",
    description:
      "A finished, standalone Power BI deliverable built from the ESIP dataset — sales, profitability, product, and regional performance with a reusable DAX measure library, executive KPI cards, and drill-through analysis. Distinct from the broader ESIP platform above, which is still in development as a whole.",
    focus: ["Power BI", "DAX", "Executive dashboards", "KPI reporting", "Sales analytics", "Operational reporting"],
  },
  {
    title: "Commercial Analytics Dashboard",
    status: "Complete",
    categories: ["Python", "Business Intelligence"],
    note: "Originally developed as the Grace & Stella Commercial Intelligence Platform.",
    businessChallenge:
      "Commercial and leadership teams needed to explore revenue, profitability, and promotional performance themselves, not wait on a static export.",
    businessSolution:
      "A live, interactive Streamlit application (Python/Pandas/Plotly) covering revenue, margin, promotions, channels, products, and country performance.",
    businessOutcome:
      "A deployed application stakeholders can open and explore directly — real evidence of shipped, usable output, not a screenshot.",
    description:
      "An executive dashboard analyzing revenue, gross profit, promotions, channels, products, and country performance — deployed as a live, interactive Streamlit application using portfolio-safe synthetic data. No private client, customer, or employer information is displayed.",
    focus: ["Python", "Pandas", "Plotly", "Streamlit", "Commercial analytics"],
    links: [
      { label: "Live application", href: "https://commercial-intelligence-portal.plukcarlo-menoro.chatgpt.site" },
      { label: "GitHub repository", href: "https://github.com/DAcarlomenoro-coder/grace-stella-commercial-dashboard" },
    ],
  },
  {
    title: "AI-Assisted Product Information Management Platform",
    status: "Architecture Complete",
    categories: ["AI Automation", "Data Engineering"],
    note: "Prototype planned next.",
    businessChallenge:
      "Manually identifying supplier products from photos and drafting listings is slow, inconsistent, and doesn't scale.",
    businessSolution:
      "A human-in-the-loop AI-assisted design — AI accelerates identification and drafting, a person makes every publish decision — with full audit history built into the architecture from the start.",
    businessOutcome:
      "Architecture Complete — the design de-risks the build phase before a line of code is written; no application exists yet, so there's no production outcome to report.",
    description:
      "A designed (not yet built) system for AI-assisted product enrichment from supplier photos, with a human-in-the-loop review and approval workflow, product governance, and full audit history. Solution architecture, data model, and integration design are complete; a mocked-data prototype is the next planned phase — no application code exists yet.",
    focus: [
      "AI-assisted product enrichment",
      "Human review workflow",
      "Product governance",
      "Audit history",
      "Cloud-based intake (Google Drive)",
      "Shopify integration concept",
    ],
  },
];

export const powerPlatformConcept: Project = {
  title: "Data Quality Review & Approval Platform",
  status: "Planned Prototype",
  categories: ["Analytics Engineering", "Data Engineering", "AI Automation"],
  description:
    "A conceptual architecture — not a deployed or production solution — for an enterprise data-quality review platform built entirely on the Microsoft Power Platform, connected to Python validation services already proven in my other projects.",
  focus: ["Data quality review", "Business rules", "Guided approvals", "Audit trail", "Executive reporting"],
};

export const powerPlatformConceptFlow = [
  { step: "Power Apps", detail: "Guided review interface for analysts and stakeholders" },
  { step: "Power Automate", detail: "Approval routing, notifications, and scheduled validation runs" },
  { step: "Dataverse", detail: "Governed business entities, business rules, and audit history" },
  { step: "Power BI", detail: "Executive reporting on data-quality trends and outstanding exceptions" },
  { step: "Python validation services", detail: "The same validation logic already used in ESIP and the reporting automation projects" },
];

export const additionalCaseStudies = [
  {
    title: "Healthcare Revenue Dashboard",
    status: "Implemented Workflow" as const,
    categories: ["Business Intelligence"] as ProjectCategory[],
    description:
      "Automated financial reconciliation and balance-monitoring system for patient-ledger monitoring, revenue reconciliation, adjustments, and exception review.",
    tech: ["Google Sheets", "Google Apps Script", "Excel", "Reporting Automation"],
  },
  {
    title: "Operational Reporting Automation",
    status: "Implemented Workflow" as const,
    categories: ["Data Engineering", "Business Intelligence"] as ProjectCategory[],
    description:
      "A governed ETL pipeline (Google Sheets + Apps Script) moving synthetic commerce data through validation into clean analytical tables, deterministic KPI aggregation, and a 5-page interactive dashboard. 43 of 43 automated tests passing.",
    tech: ["Google Apps Script", "Google Sheets", "Workflow Automation"],
  },
  {
    title: "SQL Business Analytics Portfolio",
    status: "Portfolio Analysis Project" as const,
    categories: ["SQL", "Business Intelligence"] as ProjectCategory[],
    description:
      "PostgreSQL analysis for business performance and decision support — data validation, customer segmentation, trend queries, and ranking logic using CTEs and window functions.",
    tech: ["SQL", "PostgreSQL", "CTEs", "Window Functions"],
  },
];

export const analyticsEngineering = {
  intro: "A developing specialization, built directly on top of the BI foundation above — not a separate track.",
  items: [
    { title: "Data Modeling", detail: "Kimball dimensional modeling applied to the ESIP star schema." },
    { title: "ETL Concepts", detail: "Power Query and governed ETL pipelines moving raw data into clean, validated tables." },
    { title: "Validation Frameworks", detail: "Rules applied at generation/ingestion time rather than discovered downstream." },
    { title: "Semantic Models", detail: "Reusable DAX measure libraries defining each KPI once, referenced consistently across reports." },
    { title: "Enterprise Reporting", detail: "Executive-facing dashboards built on governed, documented data models." },
    { title: "Testing", detail: "Automated test coverage on ETL logic (43/43 passing on the reporting-automation pipeline)." },
    { title: "Documentation", detail: "Data dictionaries, relationship diagrams, and architecture decision records as standard practice." },
    { title: "Reusable Architectures", detail: "Configuration-driven, seed-driven systems designed to be reconfigured, not rewritten." },
  ],
};

export const aiAutomation = {
  intro: "AI as an accelerant for solution design — not a replacement for engineering judgment, and never auto-publishing without review.",
  ownership:
    "AI accelerates my work, but every business decision, architecture choice, validation, testing, and final approval remains under my ownership.",
  items: [
    { title: "Business analysis & requirements gathering", detail: "AI accelerates surfacing and structuring requirements — I own what actually goes into the scope." },
    { title: "Architecture exploration", detail: "Used to compare design options quickly, as with the three architecture paths evaluated for the PIM platform — the recommendation and decision are mine." },
    { title: "Technical documentation", detail: "Architecture decisions, risk registers, and open questions tracked explicitly before code is written." },
    { title: "Prototype development & code assistance", detail: "Used throughout this site's own development, documented rather than hidden." },
    { title: "Testing support", detail: "Validation rules enforced at generation/ETL time, with AI helping generate test coverage — not replace it." },
    { title: "Solution refinement", detail: "Iterating on a working design faster, with every refinement reviewed before it ships." },
    { title: "Python automation", detail: "Data generation, validation, and analytics pipelines across ESIP and the Commercial Analytics Dashboard." },
    { title: "Human-in-the-loop review", detail: "Every AI-assisted design here — the PIM platform especially — keeps a human approval step by design." },
    { title: "Explainable business rules", detail: "Validation and governance logic that can be read and audited, not opaque model output." },
  ],
};

export const coreCapabilities = [
  "Business Intelligence",
  "Analytics Engineering",
  "Microsoft Power Platform",
  "Power BI",
  "Power Automate",
  "Power Apps",
  "Dataverse",
  "SQL",
  "Python",
  "Power Query",
  "DAX",
  "Data Validation",
  "Data Governance",
  "Workflow Automation",
  "Low-Code Application Design",
  "Executive Reporting",
  "Dashboard Development",
  "Stakeholder Management",
  "AI-Assisted Solution Design",
];

export const techStack = [
  { category: "Business Intelligence", items: ["Power BI", "DAX", "Power Query", "Excel"] },
  { category: "Data & Analytics", items: ["SQL", "PostgreSQL", "Python", "Pandas", "Kimball Dimensional Modeling"] },
  {
    category: "Microsoft Power Platform",
    items: ["Power BI", "Power Automate", "Power Apps", "Dataverse", "Microsoft 365 Integration", "SharePoint Integration"],
  },
  { category: "Automation", items: ["Streamlit", "VBA", "Google Apps Script", "Workflow Automation"] },
  { category: "Engineering", items: ["Git", "GitHub", "VS Code", "Configuration-driven Development", "Testing", "Documentation"] },
  { category: "AI-Assisted Development", items: ["Claude", "ChatGPT", "AI-Assisted Software Engineering Practices"] },
];

// ============================================================
// Professional Credentials — Certifications / Professional Learning / Badges
// ============================================================
// Every field here is verified against the actual certificate PDF/badge
// files in public/credentials/<slug>/ — cross-checked, for the ones with a
// public verification link, against the issuer's own verification page.
// Never invent a credential ID or verification URL for a *future* entry —
// those stay in futureCredentials with no dates/IDs until actually earned.

export type CredentialClassification = "Certification" | "Professional Learning" | "Badge and Achievement";

export type Certification = {
  slug: string;
  badgeEmoji: string;
  name: string;
  provider: string;
  classification: CredentialClassification[];
  issued: string;
  validUntil?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeImage?: string;
  certificateFile?: string;
  certificatePreview?: string;
  summary: string;
  skillsValidated: string[];
  whatLearned: string;
  realWorldApplication: string;
  relatedProjects: string[]; // Project titles — matched against featuredProjects/additionalCaseStudies
};

export const certifications: Certification[] = [
  {
    slug: "datacamp-certified-data-analyst",
    badgeEmoji: "🎖️",
    name: "DataCamp Certified Data Analyst",
    provider: "DataCamp",
    classification: ["Certification", "Badge and Achievement"],
    issued: "August 3, 2026",
    validUntil: "August 2, 2028",
    credentialId: "DA0020890574399",
    verificationUrl: "https://www.datacamp.com/certificate/DA0020890574399",
    badgeImage: "/credentials/datacamp-certified-data-analyst/badge.png",
    certificateFile: "/credentials/datacamp-certified-data-analyst/certificate.pdf",
    certificatePreview: "/credentials/datacamp-certified-data-analyst/certificate-preview.png",
    summary:
      "DataCamp's full Certified Data Analyst credential — a multi-stage assessment (timed testing, an open-ended coding challenge, and a manually-graded practical exam) validating practical capability in data analysis, SQL, data management, analytical reporting, and communicating insights through applied assessment, not a single short course.",
    skillsValidated: [
      "Analytic Fundamentals",
      "Exploratory Analysis",
      "Data Management",
      "Visualization and Reporting",
      "SQL",
      "Analytical Problem-Solving",
      "Technical Reporting",
      "Communicating Insights to Non-Technical Audiences",
    ],
    whatLearned:
      "The certification's practical exam required building a technical report for a data-science-manager audience and then adapting the same findings into a non-technical presentation — the same translation between technical depth and stakeholder-facing communication that executive reporting requires day to day, assessed under exam conditions rather than self-reported.",
    realWorldApplication:
      "Directly the discipline behind every stakeholder-facing deliverable in my Professional Experience — executive reports at JACCS, KPI reporting at Vector, and the governance/reporting standards I led at N2S — and the same translation-to-audience skill behind every project write-up on this site.",
    relatedProjects: ["Executive Sales Performance Dashboard", "Commercial Analytics Dashboard", "SQL Business Analytics Portfolio"],
  },
  {
    slug: "datacamp-sql-associate",
    badgeEmoji: "🏅",
    name: "SQL Associate",
    provider: "DataCamp",
    classification: ["Certification", "Badge and Achievement"],
    issued: "August 1, 2026",
    validUntil: "July 31, 2028",
    credentialId: "SQA0017590201915",
    badgeImage: "/credentials/datacamp-sql-associate/badge.png",
    certificateFile: "/credentials/datacamp-sql-associate/certificate.pdf",
    certificatePreview: "/credentials/datacamp-sql-associate/certificate-preview.png",
    summary:
      "A practical SQL certification involving hands-on assessment work — live problem-solving against relational data, not multiple-choice recall.",
    skillsValidated: [
      "SQL",
      "PostgreSQL",
      "Data Cleaning",
      "Data Type Conversion",
      "Categorical-data Standardization",
      "Aggregations",
      "Filtering",
      "Multi-table JOINs",
      "Relational Database Analysis",
      "Business Reporting",
      "Analytical Problem-Solving",
    ],
    whatLearned:
      "Writing and reasoning through SQL under exam conditions — cleaning and standardizing relational data, converting data types, joining across multiple tables, filtering, and building aggregations that answer a specific business question rather than just returning a technically correct result set.",
    realWorldApplication:
      "The same SQL discipline shows up directly in my Professional Experience — QA validation queries and root-cause analysis at N2S, and the SQL-based reporting behind KPI and financial analysis at Vector and JACCS.",
    relatedProjects: ["SQL Business Analytics Portfolio", "Executive Sales Performance Dashboard"],
  },
  {
    slug: "ibm-bi-essentials",
    badgeEmoji: "📊",
    name: "Business Intelligence (BI) Essentials",
    provider: "IBM (via Coursera)",
    classification: ["Professional Learning"],
    issued: "July 21, 2026",
    credentialId: "8PU3O8X5O4NU",
    verificationUrl: "https://coursera.org/verify/8PU3O8X5O4NU",
    certificateFile: "/credentials/ibm-bi-essentials/certificate.pdf",
    certificatePreview: "/credentials/ibm-bi-essentials/certificate-preview.png",
    summary:
      "An IBM course on Coursera covering what Business Intelligence is and how organizations turn raw data into decisions — the conceptual foundation underneath the dashboards I build. A single course, not a full IBM Professional Certificate.",
    skillsValidated: [
      "Business Intelligence Fundamentals",
      "KPI Concepts",
      "Reporting",
      "Dashboards",
      "Data-informed Decision-Making",
      "BI Roles, Processes, and Business Applications",
    ],
    whatLearned:
      "How BI programs are structured end to end — from defining KPIs and reporting requirements through dashboard design and decision support — and the shared vocabulary to talk with stakeholders about BI maturity, not just build the reports.",
    realWorldApplication:
      "Directly underneath my day-to-day work: KPI design and executive reporting at N2S, Vector, and JACCS, and the governance/KPI-definition discipline behind the Enterprise Sales Intelligence Platform.",
    relatedProjects: ["Enterprise Sales Intelligence Platform (ESIP)", "Executive Sales Performance Dashboard"],
  },
  {
    slug: "datacamp-ai-for-data-analysts",
    badgeEmoji: "🤖",
    name: "AI for Data Analysts",
    provider: "DataCamp",
    classification: ["Professional Learning"],
    issued: "July 9, 2026",
    credentialId: "Statement of Accomplishment #48,589,544",
    certificateFile: "/credentials/datacamp-ai-for-data-analysts/certificate.pdf",
    certificatePreview: "/credentials/datacamp-ai-for-data-analysts/certificate-preview.png",
    summary:
      "A 4-hour DataCamp course on how AI tools accelerate a modern analytics workflow — prompt-driven exploration, drafting, and reporting — without replacing the analyst's own judgment. A course completion, not a professional certification.",
    skillsValidated: [
      "AI-assisted Analytics",
      "Generative AI in Analyst Workflows",
      "Prompting for Analytical Work",
      "Productivity and Workflow Support",
      "Responsible Use of AI",
      "Communicating and Refining Analytical Outputs",
    ],
    whatLearned:
      "Practical prompting patterns for analytics work — using generative AI to accelerate data exploration, drafting, and reporting, communicating and refining AI-assisted output, and where to keep a human in the loop rather than trust AI output blindly.",
    realWorldApplication:
      "The same discipline behind every AI-assisted design on this site — the AI-Assisted PIM Platform and the Power Platform Solution Concept both keep a human-in-the-loop review step by design, not as an afterthought.",
    relatedProjects: ["AI-Assisted Product Information Management Platform", "Data Quality Review & Approval Platform"],
  },
];

export type FutureCredential = { provider: string; status: "Planned" | "In Progress" | "Future Goal" };
// Reserved slots — intentionally not started yet. Move an entry out of this
// list and into `certifications` above once it's actually earned. Every
// entry must carry a visible, unearned status — never shown bare next to a
// completed credential.
export const futureCredentials: FutureCredential[] = [
  { provider: "Microsoft", status: "Future Goal" },
  { provider: "Azure", status: "Future Goal" },
  { provider: "Power BI", status: "Future Goal" },
  { provider: "Microsoft Fabric", status: "Future Goal" },
  { provider: "AWS", status: "Future Goal" },
  { provider: "Snowflake", status: "Future Goal" },
  { provider: "dbt", status: "Future Goal" },
  { provider: "Databricks", status: "Future Goal" },
  { provider: "Google", status: "Future Goal" },
  { provider: "Coursera", status: "Future Goal" },
  { provider: "Tableau", status: "Future Goal" },
  { provider: "Oracle", status: "Future Goal" },
  { provider: "PostgreSQL", status: "Future Goal" },
  { provider: "LinkedIn Learning", status: "Future Goal" },
  { provider: "Cisco", status: "Future Goal" },
];

// 📚 Additional Professional Learning — real, but not tied to a certificate
// file/detail page (a scholarship program and self-directed practice, not
// course completions with issuer-verified documents).
export const professionalLearning = [
  "Data Engineering Philippines Scholar — 2025",
  "Enterprise BI Platform Development (self-directed)",
  "Advanced Power BI Development (self-directed)",
  "Enterprise Analytics Engineering (self-directed)",
  "AI Solution Architecture (self-directed)",
  "Python Automation Projects (self-directed)",
];

export const professionalLearningFuture: FutureCredential[] = [
  { provider: "Coursera Professional Certificates", status: "Future Goal" },
  { provider: "DataCamp Skill Tracks", status: "In Progress" },
  { provider: "Microsoft Learn Achievements", status: "Future Goal" },
  { provider: "IBM Learning Paths", status: "Future Goal" },
];

export const badgesAchievementsFuture: FutureCredential[] = [
  { provider: "Microsoft Applied Skills", status: "Future Goal" },
  { provider: "GitHub Achievements", status: "Future Goal" },
  { provider: "Kaggle", status: "Future Goal" },
  { provider: "Hackathons or speaking engagements", status: "Future Goal" },
];

// ============================================================
// Learning Roadmap
// ============================================================

export const roadmap = {
  completed: [
    { title: "AI for Data Analysts", provider: "DataCamp", date: "Jul 2026" },
    { title: "IBM BI Essentials", provider: "IBM via Coursera", date: "Jul 2026" },
    { title: "SQL Associate", provider: "DataCamp", date: "Aug 2026" },
    { title: "Certified Data Analyst", provider: "DataCamp", date: "Aug 2026" },
  ],
  inProgress: [
    { title: "Microsoft Power BI", detail: "Deepening semantic modeling and DAX beyond current reporting work" },
    { title: "Microsoft Fabric", detail: "Understanding the unified data platform Power BI now sits inside" },
    { title: "Python", detail: "Extending automation and validation scripting beyond current ad hoc use" },
  ],
  planned: [
    { title: "Azure Data Engineering", detail: "" },
    { title: "dbt", detail: "" },
    { title: "Snowflake", detail: "" },
    { title: "Databricks", detail: "" },
    { title: "Analytics Engineering", detail: "A formal credential to back the developing specialization already documented on this site" },
  ],
};

// ============================================================
// Why Work With Me (recruiter section)
// ============================================================

export const whyWorkWithMe = [
  { title: "Business-first thinking", detail: "Every dashboard and query starts from the business question — KPI design at N2S, Vector, and JACCS was always in service of a specific decision, not a technical exercise." },
  { title: "SQL expertise", detail: "DataCamp SQL Associate–certified, with SQL-based validation and reporting work across every role since 2021." },
  { title: "Business Intelligence", detail: "5+ years building executive dashboards and reporting layers people actually rely on, backed by IBM BI Essentials." },
  { title: "Reporting automation", detail: "Replaced manual Excel and internal-system workflows with automated reporting at Vector — measured in hours saved, not just cleaner spreadsheets." },
  { title: "Dashboard development", detail: "Power BI and Streamlit dashboards shipped from KPI definition through to a deployed, usable interface — not just static exports." },
  { title: "AI-assisted analytics", detail: "AI for Data Analysts–certified, and I use AI daily to accelerate analysis while keeping a human review step in every workflow." },
  { title: "Data quality", detail: "Led enterprise-level Salesforce data validation at N2S, raising team data accuracy to a sustained 98%." },
  { title: "Process improvement", detail: "Structured QA workflows and reporting standards that replaced ad hoc, inconsistent processes at every stop." },
  { title: "Stakeholder communication", detail: "Advised C-suite leaders directly at JACCS through executive reports and strategic presentations." },
  { title: "Continuous learning", detail: "Four certifications completed within weeks of each other while working full-time — the Learning Roadmap on this site is kept current, not a one-time snapshot." },
  { title: "Leadership", detail: "Led enterprise-level data validation initiatives and coached team members to a consistent, measurable accuracy standard." },
];

// ============================================================
// Blog — topics only. No article bodies exist yet; don't fabricate them.
// ============================================================

export type BlogTopic = { title: string; teaser: string };

export const blogTopics: BlogTopic[] = [
  { title: "How I Earned SQL Associate", teaser: "What the DataCamp SQL Associate exam actually tests, and how I prepared for it." },
  { title: "My Business Intelligence Journey", teaser: "From ad hoc reporting to structured BI — how the last five years actually went." },
  { title: "Using AI as a Data Analyst", teaser: "Where AI genuinely speeds up analytics work, and where it doesn't." },
  { title: "Learning PostgreSQL", teaser: "Notes from going deeper into PostgreSQL specifically, beyond generic SQL." },
  { title: "Building Dashboards with Power BI", teaser: "A walkthrough of how I actually build a Power BI report, start to finish." },
  { title: "Preparing for Microsoft Fabric", teaser: "What I'm learning as Power BI reporting moves into the wider Fabric platform." },
  { title: "Transitioning Toward Analytics Engineering", teaser: "Why I'm building this specialization deliberately, and what's still missing." },
];
