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
    basedLabel: "Based in",
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
    intro: "Continuous learning in AI, agile, data and project management.",
    pendingLabel: "Date pending",
    viewCredential: "View credential",
    totalLabel: "certifications & courses",
    highlightsTitle: "Highlights",
    moreTitle: "More courses",
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
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, GSAP and Lenis.",
  },
};
