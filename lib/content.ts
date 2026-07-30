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
  siteUrl: "https://analytics-engineering.carlomenoro.dev", // placeholder — update once a real domain/deployment URL exists
  versionANote:
    "This site is the technical companion to my primary Business Intelligence resume and portfolio (Version A), which covers BI leadership, governance, and executive reporting in more depth. This site adds detail on where I'm expanding next — Analytics Engineering, the Microsoft Power Platform, and AI-assisted solution design.",
};

export const seo = {
  title: "Carlo Menoro — Senior Business Intelligence Analyst & Analytics Specialist",
  description:
    "Portfolio of Carlo Menoro: 5+ years in Business Intelligence, executive reporting, and data quality, now expanding into Analytics Engineering, Microsoft Power Platform, Python automation, and AI-assisted solution design.",
  keywords: [
    "Business Intelligence",
    "Business Intelligence Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Dashboard Development",
    "Executive Reporting",
    "Data Quality",
    "Data Governance",
    "KPI Reporting",
    "Reporting Automation",
    "Microsoft Power Platform",
    "Power Automate",
    "Power Apps",
    "Dataverse",
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

export type Project = {
  title: string;
  status: Status;
  note?: string;
  description: string;
  focus: string[];
  links?: { label: string; href: string }[];
};

export const featuredProjects: Project[] = [
  {
    title: "Enterprise Sales Intelligence Platform (ESIP)",
    status: "In Development",
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
    description:
      "A finished, standalone Power BI deliverable built from the ESIP dataset — sales, profitability, product, and regional performance with a reusable DAX measure library, executive KPI cards, and drill-through analysis. Distinct from the broader ESIP platform above, which is still in development as a whole.",
    focus: ["Power BI", "DAX", "Executive dashboards", "KPI reporting", "Sales analytics", "Operational reporting"],
  },
  {
    title: "Commercial Analytics Dashboard",
    status: "Complete",
    note: "Originally developed as the Grace & Stella Commercial Intelligence Platform.",
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
    note: "Prototype planned next.",
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
    description:
      "Automated financial reconciliation and balance-monitoring system for patient-ledger monitoring, revenue reconciliation, adjustments, and exception review.",
    tech: ["Google Sheets", "Google Apps Script", "Excel", "Reporting Automation"],
  },
  {
    title: "Operational Reporting Automation",
    status: "Implemented Workflow" as const,
    description:
      "A governed ETL pipeline (Google Sheets + Apps Script) moving synthetic commerce data through validation into clean analytical tables, deterministic KPI aggregation, and a 5-page interactive dashboard. 43 of 43 automated tests passing.",
    tech: ["Google Apps Script", "Google Sheets", "Workflow Automation"],
  },
  {
    title: "SQL Business Analytics Portfolio",
    status: "Portfolio Analysis Project" as const,
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
  items: [
    { title: "AI-assisted software engineering", detail: "Used throughout this site's own development, documented rather than hidden." },
    { title: "Python automation", detail: "Data generation, validation, and analytics pipelines across ESIP and the Commercial Analytics Dashboard." },
    { title: "Validation workflows", detail: "Rules enforced at generation/ETL time rather than manually checked after the fact." },
    { title: "Human-in-the-loop review", detail: "Every AI-assisted design here — the PIM platform especially — keeps a human approval step by design." },
    { title: "Explainable business rules", detail: "Validation and governance logic that can be read and audited, not opaque model output." },
    { title: "Documentation-driven development", detail: "Architecture decisions, risk registers, and open questions tracked explicitly before code is written." },
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

// Pulled verbatim from Resume Version B — do not add certifications not on the resume.
export const certifications = [
  {
    category: "In Progress",
    items: ["Google Advanced Data Analytics Professional Certificate", "DataCamp SQL & Analytics Training"],
  },
  {
    category: "Completed",
    items: ["IBM Business Intelligence Professional Certificate — Completed, Jul 2026", "Data Engineering Philippines Scholar — 2025"],
  },
  {
    category: "Professional Development",
    items: [
      "Enterprise BI Platform Development",
      "Advanced Power BI Development",
      "Enterprise Analytics Engineering",
      "AI Solution Architecture",
      "Python Automation Projects",
    ],
  },
];
