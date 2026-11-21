import type { Dictionary } from "./types";

export type { Dictionary };

export const en: Dictionary = {
  meta: {
    title: "Adrián Hinojosa — Technology Solutions Engineer",
    description:
      "Business Management Engineer building practical solutions at the intersection of AI, automation, project management and business operations.",
  },
  nav: {
    about: "About",
    work: "Work",
    skills: "Skills",
    certifications: "Certifications",
    experience: "Experience",
    contact: "Contact",
    cv: "CV",
    switchTo: "ES",
    switchToLabel: "Cambiar a español",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Technology Solutions Engineer · AI & Automation · Project Lead",
    tagline:
      "I turn business problems into structured, scalable and useful digital systems: automation workflows, AI-assisted processes and tools that help teams work with more clarity and speed.",
    ctaWork: "See my work",
    ctaCv: "Download CV",
    ctaContact: "Get in touch",
    scroll: "Scroll",
  },
  about: {
    title: "About me",
    paragraphs: [
      "Business Management Engineer from Universidad de Monterrey (UDEM), with experience leading innovation, entrepreneurship and digital transformation projects.",
      "I currently work as a Technology Solutions Engineer at STT, turning operational needs into clear, functional and scalable technology solutions — from spotting improvement opportunities to proposing, coordinating and implementing the project.",
      "My goal is to combine business strategy with technical execution: AI-powered tools, automation infrastructure and systems that reduce manual work and help companies make better decisions.",
    ],
    focusTitle: "Current focus",
    focus: [
      "Building stronger technical skills in AI engineering, automation and software prototyping",
      "Designing workflows with n8n, AI tools, Google Workspace and business systems",
      "Exploring B2B SaaS opportunities for operations and construction planning",
      "Creating reusable documentation, playbooks and solution frameworks",
    ],
    areasTitle: "Core areas",
    areas: [
      "AI automation & agents",
      "Technology consulting",
      "Project management",
      "Business process improvement",
      "SaaS B2B strategy",
      "Digital transformation",
      "Lean, Agile, Scrum & Kanban",
      "Data-driven decisions",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "English", level: "Full professional" },
      { name: "French", level: "Basic" },
      { name: "Spanish", level: "Native" },
    ],
    photoPending: "Photo — pending",
  },
  work: {
    title: "Selected work",
    intro:
      "A snapshot of projects I've built or contributed to. Detailed case studies are coming soon.",
    draftBadge: "Summary coming soon",
    focusLabel: "Focus",
    projects: [
      {
        id: "bsoft",
        title: "B.soft — Lean BIM SaaS",
        type: "SaaS concept",
        summary:
          "A SaaS concept that connects BIM models with Lean Construction planning for Latin American construction companies.",
        focus: [
          "IFC ingestion",
          "Pre-WBS generation",
          "Kanban / VSM",
          "Lookahead planning",
          "Restriction tracking",
        ],
        draft: true,
        url: null,
      },
      {
        id: "ai-automation-lab",
        title: "AI Business Automation Lab",
        type: "Automation",
        summary:
          "Practical automation experiments for business operations, documentation, client workflows, internal support and productivity.",
        focus: ["AI tools", "n8n", "APIs", "Workflow design", "Business logic"],
        draft: true,
        url: null,
      },
      {
        id: "tech-playbook",
        title: "Technology Solutions Playbook",
        type: "Consulting",
        summary:
          "A structured playbook for technology solution design, client discovery, proposals, service communication and reusable consulting documentation.",
        focus: [
          "Technical consulting",
          "Documentation",
          "Solution architecture",
          "Business analysis",
        ],
        draft: true,
        url: null,
      },
      {
        id: "ai-agents",
        title: "AI Agent Prototypes",
        type: "AI",
        summary:
          "Small AI agent experiments for research, process support, documentation and business decision-making.",
        focus: [
          "Prompt engineering",
          "AI workflows",
          "Agent behavior",
          "Operational support",
        ],
        draft: true,
        url: null,
      },
    ],
  },
  skills: {
    title: "Skills & tools",
    groups: [
      {
        title: "AI & automation",
        items: ["n8n", "Prompt engineering", "Claude / ChatGPT", "AI agents", "APIs"],
      },
      {
        title: "Data & development",
        items: ["Python", "Excel", "Power BI", "GitHub", "AWS EC2"],
      },
      {
        title: "Project management",
        items: ["Scrum", "Kanban", "Lean", "Change management", "KPI dashboards"],
      },
      {
        title: "Workspace",
        items: ["Microsoft 365", "Google Workspace", "Notion"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    intro: "Continuous learning in project management, innovation and AI.",
    pendingLabel: "Year pending",
    viewCredential: "View credential",
    items: [
      {
        id: "pm-upv",
        name: "Project Management",
        issuer: "Universitat Politècnica de València",
        year: null,
        url: null,
      },
      {
        id: "marketing-umd",
        name: "Marketing Innovative Products and Services",
        issuer: "University System of Maryland",
        year: null,
        url: null,
      },
      {
        id: "entrepreneurial-mindset",
        name: "The Entrepreneurial Mindset",
        issuer: "edX (Verified Certificate)",
        year: null,
        url: null,
      },
      {
        id: "powerbi",
        name: "Power BI",
        issuer: "Empower Data",
        year: null,
        url: null,
      },
      {
        id: "python-ibm",
        name: "Python Basics for Data Science",
        issuer: "IBM",
        year: null,
        url: null,
      },
      {
        id: "ai-productivity",
        name: "AI for Productivity",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "n8n",
        name: "Automations with n8n",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "prompt-engineering",
        name: "Prompt Engineering",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "claude-ai",
        name: "Claude AI",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "ai-video",
        name: "AI Video Generation",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "critical-thinking-ai",
        name: "Critical Thinking for Using AI",
        issuer: "Platzi",
        year: null,
        url: null,
      },
    ],
  },
  experience: {
    title: "Experience",
    roles: [
      {
        id: "stt",
        title: "Technology Solutions Engineer",
        org: "STT — Soporte Técnico Total",
        period: "Dec 2025 — Present",
        location: "Monterrey, Nuevo León",
        summary:
          "Turning operational needs into clear, functional and scalable technology solutions, from detecting improvement opportunities to proposing, coordinating and implementing projects across infrastructure, connectivity, support and digital tools.",
        bullets: [
          "Solution design, business analysis and client-facing proposals",
          "Technical documentation and close client follow-up for effective implementations",
        ],
      },
      {
        id: "udem-hub",
        title: "Innovation & Entrepreneurship Project Coordinator",
        org: "Entrepreneurship & Innovation HUB — UDEM",
        period: "Jun 2024 — Dec 2025",
        location: "Monterrey, Nuevo León",
        bullets: [
          "Supervised and mentored 100+ innovation and entrepreneurship projects",
          "Designed and implemented 9 incubation programs and 12 specialized workshops",
          "Implemented Scrum frameworks with interdisciplinary teams of 20+ collaborators",
          "Built executive dashboards in Power BI for KPI monitoring and strategic decisions",
        ],
      },
      {
        id: "xpertal",
        title: "Change Management Project Intern",
        org: "FEMSA — Xpertal Global Services",
        period: "Aug 2023 — May 2024",
        bullets: [
          "Supported corporate change management and technology adoption initiatives",
          "Analyzed operational data and designed dashboards to improve efficiency",
          "Managed structured project documentation and progress tracking",
        ],
      },
      {
        id: "freelance-pm",
        title: "Freelance Junior Project Manager",
        org: "Industrial & Administrative sector",
        period: "Jan 2023 — May 2024",
        location: "Monterrey, Nuevo León",
        bullets: [
          "Planned and executed projects: scope, timelines, resources and deliverables",
          "Coordinated multidisciplinary teams and monitored progress",
          "Identified risks and ensured milestone compliance through structured tracking",
        ],
      },
    ],
    complementaryTitle: "Complementary experience",
    complementary: [
      {
        id: "drivers-of-change",
        title: "Junior Social Entrepreneurship Lead",
        org: "Drivers of Change",
        period: "Jan 2021 — May 2024",
        bullets: [
          "Analyzed social challenges and tracked project impact metrics",
          "Coordinated with partners, beneficiaries and internal teams",
        ],
      },
      {
        id: "udem-fellow",
        title: "Entrepreneurship Fellow",
        org: "Entrepreneurship HUB — UDEM",
        period: "Jan 2022 — May 2024",
        bullets: [
          "Coordinated fellow teams and tracked project progress",
          "Supported event logistics and strengthened the entrepreneurial ecosystem",
        ],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        id: "udem-bachelor",
        degree: "B.S. in Business Management Engineering",
        school: "Universidad de Monterrey (UDEM)",
        period: "2020 — 2025",
      },
      {
        id: "ib",
        degree: "International Baccalaureate (IB)",
        school: "Universidad de Monterrey (UDEM)",
        period: "2018 — 2020",
      },
      {
        id: "udem-hs",
        degree: "Engineering High School",
        school: "Universidad de Monterrey (UDEM)",
        period: "2017 — 2020",
      },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "Interested in AI automation, technology consulting or a project in mind? I'd love to hear from you.",
    emailLabel: "Email",
    socialsTitle: "Find me online",
    downloadCv: "Download CV (PDF)",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, GSAP and Lenis.",
  },
};
