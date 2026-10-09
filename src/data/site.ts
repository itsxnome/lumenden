export const site = {
  brand: "Lumenden",
  name: "Saad Fazal",
  role: "Automation & Backend Developer · AI Systems",
  email: "saadfl2000@gmail.com",
  location: "Open to remote",
  tagline:
    "I build end-to-end AI pipelines: YouTube factories, RAG systems, WhatsApp bots, voice agents, and the glue that keeps them shipping.",
  links: {
    email: "mailto:saadfl2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/mrsaadfazal1",
    kaggle: "https://www.kaggle.com/mrsaadfazal",
  },
} as const;

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  /** Short “what I actually built” for hiring managers */
  overview: string;
  /** Pipeline / architecture steps */
  pipeline: string[];
  body: string[];
  impact: string;
  tags: string[];
  stack: string[];
  category: "Product" | "AI" | "Automation" | "Shopify" | "Motion" | "Content";
  status: "Live" | "Shipping" | "Case study";
  size: "xl" | "lg" | "md" | "sm";
  image?: string;
  video?: string;
  poster?: string;
  gallery?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "yt-content-factory",
    title: "YouTube content factory",
    eyebrow: "Topic → finished video",
    summary:
      "Give it a topic (or lyrics) and it runs the full loop: script, images, animation prompts, songs, then a combined video, start to finish.",
    overview:
      "Built a multi-step production app for small YouTube / kids channels. One input kicks off song generation, duration-aware image prompts, style-locked image batches, per-verse video prompts, then packaging for final edit, with project save, resume, and ZIP export.",
    pipeline: [
      "Topic / lyrics in → structured generation job",
      "Song generation (Mureka) with retry + variants",
      "Duration-aware image prompt set (OpenAI)",
      "Style-locked image batch (Replicate) with reference chaining",
      "Per-verse video / animation prompts in parallel",
      "Persist to MongoDB + object storage · ZIP download",
    ],
    body: [
      "Built for channel operators who need volume: nursery / cartoon niches and other small-creation pipelines where “topic in → assets out” beats hand-building every episode.",
      "Wizard UI with progress, back/forward without losing state, regenerate song variants, and an All Projects library for saved runs.",
    ],
    impact: "Script · images · song · animate prompts · package",
    tags: ["YouTube", "Mureka", "Replicate", "OpenAI"],
    stack: ["React", "Node", "MongoDB", "Object storage", "Mureka", "Replicate", "OpenAI"],
    category: "Content",
    status: "Live",
    size: "xl",
    image: "/work/generated/yt-pipeline.jpg",
    gallery: [
      "/work/generated/yt-pipeline.jpg",
      "/work/generated/yt-ui-1.png",
      "/work/generated/yt-ui-2.png",
    ],
    featured: true,
  },
  {
    slug: "codebuddy",
    title: "CodeBuddy",
    eyebrow: "WhatsApp AI bot",
    summary:
      "WhatsApp bot with admin allowlist, AI chat, model switching, and group /ask: personal coding and ops buddy on WhatsApp Web.",
    overview:
      "Shipped a whatsapp-web.js bot with QR session auth, admin/allowlist ACL, command router, and Requesty-routed AI chat (free models + optional web search). Built for DMs and groups without spamming every message.",
    pipeline: [
      "QR link → persistent WhatsApp Web session",
      "ACL: admins + allowlisted numbers only",
      "Command layer (/menu, /ask, /model, /allow…)",
      "AI on/off + per-user model selection",
      "DM free-chat · groups via /ask (configurable)",
    ],
    body: [
      "Useful as a private AI channel on the app people already live in, not another web UI nobody opens.",
      "Graceful Puppeteer shutdown, phone number normalization, and config-driven behavior.",
    ],
    impact: "WhatsApp · AI chat · ACL · commands",
    tags: ["WhatsApp", "Bots", "AI", "Node"],
    stack: ["Node.js", "whatsapp-web.js", "OpenAI SDK", "Requesty"],
    category: "Automation",
    status: "Live",
    size: "lg",
    image: "/work/generated/codebuddy.jpg",
    gallery: ["/work/generated/codebuddy.jpg"],
    featured: true,
  },
  {
    slug: "lumenden",
    title: "Lumenden",
    eyebrow: "Prompt library",
    summary:
      "Largest prompt library I’ve built: 100k+ prompts, skills, and reusable AI workflows for discovery and reuse.",
    overview:
      "Productized a library-scale prompt + skills surface: indexing, categorization, and discovery UX so high-volume collections stay searchable instead of dumped into folders.",
    pipeline: [
      "Ingest / author prompts & skills",
      "Normalize + tag for discovery",
      "Browse / filter / reuse in product UI",
      "Package workflows for repeat use",
    ],
    body: [
      "Lumenden is the brand name of this portfolio, originally the prompt library project, now the home for selected systems.",
    ],
    impact: "100k+ prompts · skills · discovery UX",
    tags: ["Product", "Prompts", "Skills", "RAG-ready"],
    stack: ["Product design", "Content systems", "AI workflows"],
    category: "Product",
    status: "Live",
    size: "md",
    image: "/work/lumenden/avatar.jpg",
    gallery: ["/work/lumenden/avatar.jpg", "/work/lumenden/ui-1.jpg"],
    featured: true,
  },
  {
    slug: "rag-systems",
    title: "RAG knowledge systems",
    eyebrow: "Retrieval + generation",
    summary:
      "Document ingestion, chunking, embeddings, and grounded Q&A over private knowledge, built for support, ops, and internal tools.",
    overview:
      "Designed retrieval stacks where answers must cite sources: ingest → chunk → embed → rank → generate with grounding. Aimed at support bots and internal assistants that can’t invent policy.",
    pipeline: [
      "Ingest docs / FAQs / policies",
      "Chunk + embed into vector index",
      "Retrieve top-k with ranking",
      "Generate answer with citations",
      "Expose via bot or dashboard",
    ],
    body: [
      "Used where hallucination is expensive: customer support, ops knowledge, and product help that has to quote the right SKU or policy line.",
    ],
    impact: "Ingest · retrieve · cite · answer",
    tags: ["RAG", "Embeddings", "Vector search", "Agents"],
    stack: ["Python / Node", "Embeddings", "Vector DB", "LLM APIs"],
    category: "AI",
    status: "Shipping",
    size: "md",
    image: "/work/generated/rag-system.jpg",
    gallery: ["/work/generated/rag-system.jpg"],
    featured: true,
  },
  {
    slug: "whatsapp-bots",
    title: "WhatsApp automations & bots",
    eyebrow: "Conversational ops",
    summary:
      "WhatsApp bots and automations for order updates, support triage, keyword flows, and CRM handoff via Cloud API through to inbox.",
    overview:
      "Production WhatsApp automations on Cloud API: keyword bots, AI-assisted replies, broadcasts, and Shopify order/shipping notifications wired into team inbox and CRM.",
    pipeline: [
      "Webhook ingest + signature verify",
      "Intent / keyword routing",
      "Bot reply or human handoff",
      "CRM / sheets sync",
      "Templates when 24h window expires",
    ],
    body: [
      "Designed as ops tooling, not a toy chatbot. Inbox, windows, templates, and automations that hold at 2am.",
    ],
    impact: "Bots · inbox · broadcasts · CRM sync",
    tags: ["WhatsApp", "Bots", "Automation", "Cloud API"],
    stack: ["Meta Cloud API", "Workers", "n8n", "Node"],
    category: "Automation",
    status: "Live",
    size: "sm",
    image: "/work/generated/whatsapp-bots.jpg",
    gallery: ["/work/generated/whatsapp-bots.jpg", "/work/easycloud/feature.jpg"],
  },
  {
    slug: "voice-ai-saas",
    title: "Voice AI SaaS + dashboard",
    eyebrow: "In progress",
    summary:
      "End-to-end voice agent product: GHL workflows, email flows, booking agents, and a client/admin dashboard with usage, tickets, and payments.",
    overview:
      "Building the full product surface around voice agents: configuration, call history, live transcriptions, usage metering, tickets, and billing, tied into GHL and email lifecycle flows.",
    pipeline: [
      "Agent config + phone routing",
      "Call ingest · transcription",
      "Booking / CRM actions",
      "Usage metering + admin ops",
      "GHL + email lifecycle hooks",
    ],
    body: [
      "Not a demo agent: ops-ready SaaS for businesses that need the dashboard and the workflows, not just a cool phone call.",
    ],
    impact: "Voice agents · GHL · dashboard · metering",
    tags: ["Voice AI", "GHL", "SaaS", "Bots"],
    stack: ["Dashboard UI", "APIs", "GHL", "n8n", "Twilio-class telephony"],
    category: "AI",
    status: "Shipping",
    size: "sm",
    image: "/work/generated/voice-dashboard.jpg",
    gallery: ["/work/generated/voice-dashboard.jpg"],
  },
  {
    slug: "easycloudapi",
    title: "EasyCloudAPI",
    eyebrow: "WhatsApp platform",
    summary:
      "Multi-tenant WhatsApp Business platform on Meta Cloud API: team inbox, campaigns, AI agents, automations, and Shopify order updates.",
    overview:
      "Multi-tenant WhatsApp Business platform: brand isolation, BYOA connect wizard, webhook workers, team inbox, broadcasts, keyword automation, and BYOK AI assist.",
    pipeline: [
      "Multi-tenant schema + brand switcher",
      "BYOA connect · token verify · register number",
      "Webhook → queue workers",
      "Inbox · campaigns · automations",
      "Developer API keys + REST",
    ],
    body: [
      "Credential security with AES-GCM key ring; workers kept out of the request path so Meta gets 200s in milliseconds.",
    ],
    impact: "Multi-tenant · inbox · broadcasts · AI assist",
    tags: ["WhatsApp", "Postgres", "Workers", "APIs"],
    stack: ["Postgres", "Redis/BullMQ", "Auth", "Meta Cloud API"],
    category: "Product",
    status: "Case study",
    size: "sm",
    image: "/work/easycloud/feature.jpg",
    gallery: ["/work/easycloud/feature.jpg", "/work/easycloud/inbox.png"],
  },
  {
    slug: "motion-graphics-skill",
    title: "Motion graphics skill",
    eyebrow: "Claude skill",
    summary:
      "Claude skill that directs After Effects-level short-form editing with HeyGen, Higgsfield, and HTML motion templates. Script to finished reel.",
    overview:
      "Production skill for Claude: beat planning, locked brand styles, move catalogues, and a path through HeyGen / Higgsfield / Hyperframes to export-ready shorts.",
    pipeline: [
      "Script / transcript → beat map",
      "Pick locked style (A/B/C)",
      "Apply move catalogue (whip, scanline…)",
      "Render via HTML motion + AI footage",
      "QA posters · final export",
    ],
    body: [
      "Includes style sheets and real client reel outputs as proof, not just a prompt paste.",
    ],
    impact: "Style systems · move catalogues · production shorts",
    tags: ["Claude Skill", "HeyGen", "Higgsfield", "Motion"],
    stack: ["Claude skills", "HeyGen", "Higgsfield", "Hyperframes", "FFmpeg"],
    category: "Motion",
    status: "Shipping",
    size: "sm",
    video: "/work/motion/welcome-discount.mp4",
    poster: "/work/motion/welcome-poster.jpg",
    gallery: ["/work/motion/welcome-poster.jpg", "/work/motion/ad-library-poster.jpg"],
  },
  {
    slug: "n8n-systems",
    title: "Automation systems",
    eyebrow: "Workflows",
    summary:
      "Production workflows tying bots, CRM, sheets, and ops: the glue behind SaaS delivery and client automation.",
    overview:
      "Workflow automation across n8n / Make / Zapier: webhooks, CRM sync, retail AI backends, scrapers, and meeting pipelines that replace manual ops.",
    pipeline: [
      "Trigger (webhook / schedule / form)",
      "Transform + branch logic",
      "Call APIs / bots / sheets",
      "Error handling + retries",
      "Notify ops / write back CRM",
    ],
    body: [
      "The unsexy layer that makes voice, WhatsApp, and dashboards actually stay alive in production.",
    ],
    impact: "Ops automation · webhook pipelines",
    tags: ["n8n", "Make", "Zapier", "Integrations"],
    stack: ["n8n", "Make", "Zapier", "REST APIs"],
    category: "Automation",
    status: "Live",
    size: "sm",
    image: "/work/generated/automation-nodes.jpg",
  },
  {
    slug: "shopify-apps",
    title: "Shopify apps & backend",
    eyebrow: "E-commerce",
    summary:
      "Custom Shopify apps and Node/Express backends for merchants — including Vulgrco’s custom product reorder flow that Shopify does not support natively.",
    overview:
      "Custom Shopify apps + Node/Express backends under Disruptive Brain / Flaxen delivery. Flagship hard case: Vulgrco custom product reordering — Shopify won’t give a native path for reordering configured products, so the full cart/config rebuild had to be engineered outside the defaults.",
    pipeline: [
      "App scaffold + auth",
      "Admin UI / extensions",
      "GraphQL / REST store access",
      "Vulgrco: reconstruct custom product config → reorder cart → checkout",
      "External service sync · ship + iterate with merchants",
    ],
    body: [
      "Vulgrco reorder: customers can repeat complex custom products without rebuilding options and attributes by hand — the part Shopify leaves you to invent.",
      "Day-job track that funds and informs the AI/automation systems work.",
    ],
    impact: "Vulgrco reorder · Shopify apps · Node APIs",
    tags: ["Shopify", "Vulgrco", "Reorder", "Node.js"],
    stack: ["Shopify", "Node.js", "Express", "React"],
    category: "Shopify",
    status: "Case study",
    size: "sm",
    image: "/work/shopify/automation.png",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  /** Work track label shown as a small badge */
  track: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Shopify Developer",
    org: "Disruptive Brain Pvt Ltd",
    period: "Feb 2023 - Present",
    track: "Shopify · Apps",
    points: [
      "Build and ship custom Shopify apps for merchants: admin UIs, extensions, and GraphQL / REST store access.",
      "Wire store data to external services (CRM, fulfillment, messaging) through Node APIs and webhooks.",
      "Own auth, app scaffolding, and iteration with merchants after install, not just the happy-path demo.",
    ],
  },
  {
    role: "Custom product reordering",
    org: "Vulgrco · via Disruptive Brain",
    period: "Client delivery",
    track: "Shopify · Hard problem",
    points: [
      "Shopify has no native flow for reordering custom / configured products the way Vulgrco needed, so the stock reorder path was a dead end.",
      "Designed and shipped a custom reorder system that reconstructs complex product configurations, line items, and cart state outside Shopify’s defaults.",
      "Handled the hectic edge cases: options, variants, custom attributes, and repeat checkout so customers can reorder without rebuilding the product from scratch.",
    ],
  },
  {
    role: "Back End Developer",
    org: "Flaxen Media",
    period: "Feb 2021 - Present",
    track: "Backend · APIs",
    points: [
      "Build scalable server-side apps and APIs with Node.js and Express for client delivery.",
      "Design data models, auth, and service boundaries so bots, dashboards, and Shopify tools share a stable backend.",
      "Ship production-ready integrations: retries, logging, and ops-friendly failure modes instead of fragile scripts.",
    ],
  },
  {
    role: "Automation Engineer",
    org: "Flaxen Media",
    period: "2021 - Present",
    track: "Automation · Ops",
    points: [
      "Design workflow automations in n8n, Make, and Zapier that connect APIs, CRMs, sheets, and messaging.",
      "Replace repetitive manual ops with multi-step pipelines: webhooks, branching, retries, and human handoff.",
      "Keep client systems alive after launch: monitoring hooks, error paths, and glue between SaaS tools.",
    ],
  },
  {
    role: "AI Systems Builder",
    org: "Flaxen Media · Client delivery",
    period: "2023 - Present",
    track: "AI · Agents",
    points: [
      "Deliver RAG knowledge systems: ingest, chunk, embed, retrieve with citations for support and internal tools.",
      "Ship WhatsApp Cloud API bots: keyword flows, AI assist, broadcasts, Shopify order updates, CRM sync.",
      "Build voice-agent product surfaces: GHL workflows, booking agents, transcriptions, metering, and dashboards.",
    ],
  },
  {
    role: "Web Developer",
    org: "Flaxen Media",
    period: "Jul 2020 - Feb 2021",
    track: "Frontend",
    points: [
      "Joined as an intern and moved full-time building web fronts with HTML, CSS, JavaScript, and React.",
      "Learned delivery under real client deadlines: components, responsive UI, and handoff to backend APIs.",
    ],
  },
  {
    role: "Founder / Builder",
    org: "EasyCloudAPI (own product)",
    period: "Case study",
    track: "Product · WhatsApp",
    points: [
      "Multi-tenant WhatsApp Business platform on Meta Cloud API: brand isolation, BYOA connect, webhook workers.",
      "Team inbox, campaigns, keyword automations, BYOK AI assist, and Shopify order / shipping notifications.",
      "Developer API keys + REST; AES-GCM credential vault; workers kept out of the request path so Meta gets fast 200s.",
    ],
  },
  {
    role: "Independent products",
    org: "Own projects",
    period: "Ongoing",
    track: "AI · Content · Bots",
    points: [
      "YouTube content factory: topic → script / song → images → animation prompts → packaged video for small channels.",
      "CodeBuddy: WhatsApp Web AI buddy with ACL, model switching, DM free-chat, and group /ask.",
      "Lumenden prompt library: 100k+ prompts and skills with discovery UX for reuse.",
      "Claude motion graphics skill: beat maps, locked styles, HeyGen / Higgsfield / HTML motion to finished shorts.",
    ],
  },
];

export const education = [
  {
    school: "National University of Modern Languages (NUML)",
    detail: "BS Computer Science",
    period: "Sep 2023",
  },
  {
    school: "KIPS College, 6th Road",
    detail: "ICS, Computer Science",
    period: "2020 - 2022",
  },
] as const;

export const stack = [
  "Python",
  "JavaScript",
  "Node.js",
  "React",
  "RAG",
  "WhatsApp bots",
  "Cloud API",
  "YouTube pipelines",
  "n8n / Make / Zapier",
  "Shopify apps",
  "Voice AI",
  "GHL",
  "Claude skills",
  "MongoDB",
  "Postgres",
] as const;

export const focusItems = [
  {
    title: "YouTube content factory",
    detail: "Topic → script/song → images → animation prompts → packaged video for small channels.",
  },
  {
    title: "RAG knowledge systems",
    detail: "Ingest, embed, retrieve with citations, ship grounded answers into bots and tools.",
  },
  {
    title: "WhatsApp bots + CodeBuddy",
    detail: "Cloud API automations and a personal WhatsApp AI buddy with ACL + commands.",
  },
  {
    title: "Voice AI agents + dashboard",
    detail: "Booking agents, transcriptions, metering, GHL/email: full product surface.",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;

export const categories = [
  "All",
  "Product",
  "AI",
  "Automation",
  "Content",
  "Shopify",
  "Motion",
] as const;
