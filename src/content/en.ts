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
    personal: "Beyond work",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    kicker: "Technology Solutions Engineer",
    tagline:
      "I turn business problems into structured, scalable and useful digital systems: automation workflows, AI-assisted processes and tools that help teams work with more clarity and speed.",
    currentLabel: "Currently",
    currentValue: "Technology Solutions Engineer at STT",
    photoPending: "Photo — pending",
    ctaWork: "See my work",
    ctaCv: "Download CV",
  },
  stats: {
    items: [
      { value: 100, suffix: "+", label: "Innovation projects mentored" },
      { value: 9, suffix: "", label: "Incubation programs designed" },
      { value: 12, suffix: "", label: "Specialized workshops" },
      { value: 20, suffix: "+", label: "Collaborators in Scrum teams" },
    ],
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
  },
  work: {
    title: "Selected work",
    intro:
      "Case studies where I put my training in AI, automation, data and agile delivery to work on real business problems. Open any of them to see the challenge, the approach and what it delivers.",
    openCase: "View case",
    challengeLabel: "Challenge",
    approachLabel: "Approach",
    deliverablesLabel: "Deliverables",
    toolsLabel: "Tools",
    coursesLabel: "Built on",
    projects: [
      {
        id: "bsoft",
        title: "B.soft — Lean BIM SaaS",
        type: "SaaS concept · Product",
        summary:
          "A B2B SaaS concept that turns BIM models into Lean Construction plans for Latin American builders.",
        challenge:
          "Mid-size construction companies plan in spreadsheets that are disconnected from their BIM models. Work breakdowns are rebuilt by hand and Last Planner restrictions get lost in chats, so delays show up when it's already too late.",
        approach: [
          "Discovery interviews with site managers to map the current planning flow as a value stream",
          "Product vision, personas and a prioritized MVP backlog working as Product Owner",
          "Data model that reads IFC files and proposes a pre-WBS by level, zone and trade",
          "Six-week lookahead with a restriction log and a Kanban board per crew",
        ],
        deliverables: [
          "Product vision and prioritized MVP backlog",
          "IFC → WBS data model in SQL",
          "Clickable prototype of the planning dashboard",
          "Go-to-market hypotheses for B2B validation",
        ],
        tools: ["Python", "IFC", "SQL", "v0", "Notion", "Scrum", "Kanban / VSM"],
        courses: [
          "Product Owner Fundamentals",
          "Databases & SQL",
          "Web pages with v0",
          "Marketing Innovative Products",
          "The Entrepreneurial Mindset",
        ],
        url: null,
      },
      {
        id: "ai-automation-lab",
        title: "AI Business Automation Lab",
        type: "Automation · AI",
        summary:
          "Reusable n8n workflows that take repetitive operations work off people's desks, with AI where judgment is needed.",
        challenge:
          "Leads, quotes, follow-ups and weekly reports move between email, spreadsheets and the CRM by copy-and-paste. It's slow, error-prone and depends on who remembers to do it.",
        approach: [
          "Mapped each process end to end and marked which steps are rules, which need judgment and which need a person",
          "Built n8n workflows connecting Gmail, Google Sheets and external APIs through webhooks",
          "Added LLM steps (Claude / GPT) to classify requests, extract data and draft replies with structured outputs",
          "Kept a human approval step before anything reaches a client, plus error handling and run logs",
        ],
        deliverables: [
          "Lead intake → classification → CRM workflow",
          "Automated weekly KPI report from Sheets",
          "Meeting notes → task list and follow-up email",
          "One-page documentation and runbook per workflow",
        ],
        tools: ["n8n", "Claude", "ChatGPT", "Google Workspace", "APIs & webhooks", "JSON"],
        courses: [
          "n8n Automations",
          "AI for Productivity",
          "Claude AI",
          "Prompt Engineering",
          "Professional Generative AI Adoption",
        ],
        url: null,
      },
      {
        id: "tech-playbook",
        title: "Technology Solutions Playbook",
        type: "Consulting · Process",
        summary:
          "A repeatable method for IT services projects, from the first discovery call to a signed, well-scoped proposal.",
        challenge:
          "In technology services every project started from scratch: discovery depended on the person, proposals were rewritten each time and scope kept growing after the deal was closed.",
        approach: [
          "Standardized discovery with questionnaires by solution type: infrastructure, connectivity, support and digital tools",
          "Solution-architecture and proposal templates with explicit scope, assumptions and exclusions",
          "Adoption plan based on change-management practices so clients actually use what they buy",
          "AI assistant with curated context that drafts proposals straight from discovery notes",
        ],
        deliverables: [
          "Playbook in Notion with templates for every stage",
          "Proposal and scope-of-work kit",
          "Context pack and prompts for proposal drafting",
          "Pipeline and delivery dashboard in Power BI",
        ],
        tools: ["Notion", "Google Workspace", "Claude", "Power BI", "Excel"],
        courses: [
          "Met Conecta Consultant",
          "Change Management for Companies",
          "Context Engineering",
          "Huawei Sales-IP Network",
          "Project Management (UPV)",
        ],
        url: null,
      },
      {
        id: "ai-agents",
        title: "AI Agent Prototypes",
        type: "AI · Prototyping",
        summary:
          "Small, focused AI agents for research, internal documentation and decision support, designed to be evaluated and trusted.",
        challenge:
          "Teams lose hours searching for information across documents and writing first drafts. Generic chatbots answer confidently but without sources, so nobody trusts them for real decisions.",
        approach: [
          "Defined each agent's role, tools and limits before writing a single prompt",
          "Context engineering: retrieved documents, examples and output formats instead of long, fragile prompts",
          "Prototyped with Claude Code and Python, comparing models on the same set of test cases",
          "Responsible-use guidelines: sources always cited, sensitive data kept out, a person makes the final call",
        ],
        deliverables: [
          "Research agent that summarizes with cited sources",
          "Internal documentation assistant",
          "Decision-memo generator with pros, cons and risks",
          "Evaluation checklist and responsible-use guide",
        ],
        tools: ["Claude Code", "Claude API", "Python", "MCP", "Gemini", "ChatGPT"],
        courses: [
          "Claude Code 101",
          "AI Fluency",
          "LLM Fundamentals",
          "Critical Thinking for AI",
          "Data Ethics for AI",
        ],
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
    intro: "Continuous learning in AI, agile, data and project management.",
    pendingLabel: "Date pending",
    linkedinCta: "See all credentials on LinkedIn",
    totalLabel: "certifications & courses",
    highlightsTitle: "Highlights",
    moreTitle: "More courses",
    showMore: "Show all courses",
    showLess: "Hide courses",
    expiresLabel: "Expires",
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
    personalText: "Want to know the person behind the work?",
    personalLink: "Beyond work",
  },
  personal: {
    meta: {
      title: "Adrián Hinojosa — Beyond work",
      description:
        "Games, sports, superheroes and movies: the person behind the portfolio.",
    },
    nav: {
      portfolio: "Portfolio",
      hobbies: "Hobbies",
      games: "Games",
      social: "Find me",
    },
    eyebrow: "Beyond work",
    title: "Off the clock",
    intro:
      "Engineer by day. Gamer, athlete and superhero fan the rest of the time. This is the side of me that doesn't fit on a CV.",
    ctaPrimary: "Find me online",
    sceneLabel:
      "Illustration of Adrián as a Minecraft-style character with curly hair, glasses and a beard, sitting on a grass ledge with a laptop and a beagle, looking over a voxel village.",
    sceneCaption: "My happy place: a laptop, a good view and a world made of blocks.",
    aboutTitle: "The real me",
    about: [
      "I like building things, whether it's a business automation or a world made of blocks. I recharge by playing, training and getting lost in a good story.",
      "Football and golf keep me moving, the gym keeps me consistent, and Xbox or PC keeps me entertained. And yes, I always have time for a superhero movie.",
    ],
    hobbiesTitle: "What I'm into",
    hobbies: [
      {
        id: "sports",
        title: "Sports",
        text: "Moving is part of the routine.",
        items: ["Football", "Golf", "Gym"],
      },
      {
        id: "gaming",
        title: "Gaming",
        text: "Xbox and PC player.",
        items: ["Xbox", "PC"],
      },
      {
        id: "heroes",
        title: "Heroes & worlds",
        text: "Capes, wands and huge universes.",
        items: ["Marvel", "Batman", "Harry Potter"],
      },
      {
        id: "movies",
        title: "Movies",
        text: "Always up for a good one.",
        items: ["Action", "Comedy"],
      },
    ],
    gamesTitle: "Worlds I come back to",
    gamesIntro: "A few of the games that never leave my rotation.",
    games: [
      "Minecraft",
      "Grounded",
      "Assassin's Creed",
      "Halo",
      "Call of Duty",
      "Pokémon",
      "EA Sports FC",
    ],
    socialsTitle: "Find me online",
    socialsText: "Come say hi. I'm around on all of these.",
    closingTitle: "Prefer the professional side?",
    closingText: "Projects, experience and certifications are one click away.",
    back: "Back to portfolio",
  },
  links: {
    meta: {
      title: "Adrián Hinojosa — Links",
      description:
        "Portfolio, CV and social profiles of Adrián Hinojosa, Technology Solutions Engineer.",
    },
    avatarAlt: "Adrián as a block-style character with a laptop and his beagle",
    tagline: "AI, automation and technology projects that make teams work better.",
    portfolio: { label: "Professional portfolio", hint: "Projects, experience & certifications" },
    personal: { label: "Beyond work", hint: "Games, sports and the person behind the work" },
    cv: { label: "Download CV", hint: "PDF · English" },
    socialsTitle: "Find me on",
    emailLabel: "Email",
  },
  footer: {
    rights: "All rights reserved.",
    links: "Links",
  },
};
