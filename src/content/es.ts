import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Adrián Hinojosa — Ingeniero de Soluciones Tecnológicas",
    description:
      "Ingeniero en Gestión Empresarial que construye soluciones prácticas en la intersección de IA, automatización, gestión de proyectos y operaciones de negocio.",
  },
  nav: {
    about: "Sobre mí",
    work: "Proyectos",
    skills: "Habilidades",
    certifications: "Certificaciones",
    experience: "Experiencia",
    contact: "Contacto",
    cv: "CV",
    switchTo: "EN",
    switchToLabel: "Switch to English",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Ingeniero de Soluciones Tecnológicas · IA y Automatización · Líder de Proyectos",
    tagline:
      "Convierto problemas de negocio en sistemas digitales estructurados, escalables y útiles: flujos de automatización, procesos asistidos por IA y herramientas que ayudan a los equipos a trabajar con más claridad y rapidez.",
    ctaWork: "Ver mi trabajo",
    ctaCv: "Descargar CV",
    ctaContact: "Contáctame",
    scroll: "Desliza",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Ingeniero en Gestión Empresarial por la Universidad de Monterrey (UDEM), con experiencia liderando proyectos de innovación, emprendimiento y transformación digital.",
      "Actualmente trabajo como Ingeniero de Soluciones Tecnológicas en STT, convirtiendo necesidades operativas en soluciones tecnológicas claras, funcionales y escalables: desde detectar oportunidades de mejora hasta proponer, coordinar e implementar el proyecto.",
      "Mi objetivo es combinar estrategia de negocio con ejecución técnica: herramientas con IA, infraestructura de automatización y sistemas que reducen el trabajo manual y ayudan a las empresas a decidir mejor.",
    ],
    focusTitle: "Enfoque actual",
    focus: [
      "Fortalecer mis habilidades técnicas en ingeniería de IA, automatización y prototipado de software",
      "Diseñar flujos con n8n, herramientas de IA, Google Workspace y sistemas de negocio",
      "Explorar oportunidades de SaaS B2B para operaciones y planeación de construcción",
      "Crear documentación, playbooks y marcos de solución reutilizables",
    ],
    areasTitle: "Áreas principales",
    areas: [
      "Automatización con IA y agentes",
      "Consultoría tecnológica",
      "Gestión de proyectos",
      "Mejora de procesos de negocio",
      "Estrategia SaaS B2B",
      "Transformación digital",
      "Lean, Agile, Scrum y Kanban",
      "Decisiones basadas en datos",
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Profesional completo" },
      { name: "Francés", level: "Básico" },
    ],
    photoPending: "Foto — pendiente",
  },
  work: {
    title: "Proyectos destacados",
    intro:
      "Un vistazo a proyectos que he construido o en los que he participado. Los casos de estudio detallados llegarán pronto.",
    draftBadge: "Resumen próximamente",
    focusLabel: "Enfoque",
    projects: [
      {
        id: "bsoft",
        title: "B.soft — SaaS Lean BIM",
        type: "Concepto SaaS",
        summary:
          "Concepto de SaaS que conecta modelos BIM con la planeación Lean Construction para constructoras de Latinoamérica.",
        focus: [
          "Ingesta de IFC",
          "Generación de Pre-WBS",
          "Kanban / VSM",
          "Lookahead planning",
          "Control de restricciones",
        ],
        draft: true,
        url: null,
      },
      {
        id: "ai-automation-lab",
        title: "AI Business Automation Lab",
        type: "Automatización",
        summary:
          "Experimentos prácticos de automatización para operaciones de negocio, documentación, flujos con clientes, soporte interno y productividad.",
        focus: [
          "Herramientas de IA",
          "n8n",
          "APIs",
          "Diseño de flujos",
          "Lógica de negocio",
        ],
        draft: true,
        url: null,
      },
      {
        id: "tech-playbook",
        title: "Technology Solutions Playbook",
        type: "Consultoría",
        summary:
          "Playbook estructurado para el diseño de soluciones tecnológicas, descubrimiento con clientes, propuestas, comunicación de servicios y documentación de consultoría reutilizable.",
        focus: [
          "Consultoría técnica",
          "Documentación",
          "Arquitectura de soluciones",
          "Análisis de negocio",
        ],
        draft: true,
        url: null,
      },
      {
        id: "ai-agents",
        title: "AI Agent Prototypes",
        type: "IA",
        summary:
          "Pequeños experimentos con agentes de IA para investigación, soporte de procesos, documentación y toma de decisiones de negocio.",
        focus: [
          "Prompt engineering",
          "Flujos con IA",
          "Comportamiento de agentes",
          "Soporte operativo",
        ],
        draft: true,
        url: null,
      },
    ],
  },
  skills: {
    title: "Habilidades y herramientas",
    groups: [
      {
        title: "IA y automatización",
        items: ["n8n", "Prompt engineering", "Claude / ChatGPT", "Agentes de IA", "APIs"],
      },
      {
        title: "Datos y desarrollo",
        items: ["Python", "Excel", "Power BI", "GitHub", "AWS EC2"],
      },
      {
        title: "Gestión de proyectos",
        items: ["Scrum", "Kanban", "Lean", "Gestión del cambio", "Dashboards de KPIs"],
      },
      {
        title: "Entorno de trabajo",
        items: ["Microsoft 365", "Google Workspace", "Notion"],
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    intro: "Aprendizaje continuo en gestión de proyectos, innovación e IA.",
    pendingLabel: "Año pendiente",
    viewCredential: "Ver credencial",
    items: [
      {
        id: "pm-upv",
        name: "Gestión de proyectos",
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
        issuer: "edX (Certificado verificado)",
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
        name: "IA para la productividad",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "n8n",
        name: "Automatizaciones con n8n",
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
        name: "Generación de videos con IA",
        issuer: "Platzi",
        year: null,
        url: null,
      },
      {
        id: "critical-thinking-ai",
        name: "Pensamiento crítico para usar IA",
        issuer: "Platzi",
        year: null,
        url: null,
      },
    ],
  },
  experience: {
    title: "Experiencia",
    roles: [
      {
        id: "stt",
        title: "Ingeniero de Soluciones Tecnológicas",
        org: "STT — Soporte Técnico Total",
        period: "Dic 2025 — Presente",
        location: "Monterrey, Nuevo León",
        summary:
          "Convierto necesidades operativas en soluciones tecnológicas claras, funcionales y escalables, desde la detección de oportunidades de mejora hasta la propuesta, coordinación e implementación de proyectos de infraestructura, conectividad, soporte y herramientas digitales.",
        bullets: [
          "Diseño de soluciones, análisis de negocio y propuestas para clientes",
          "Documentación técnica y acompañamiento cercano al cliente para implementaciones efectivas",
        ],
      },
      {
        id: "udem-hub",
        title: "Coordinador de Proyectos de Emprendimiento e Innovación",
        org: "HUB de Emprendimiento e Innovación — UDEM",
        period: "Jun 2024 — Dic 2025",
        location: "Monterrey, Nuevo León",
        bullets: [
          "Supervisión y mentoría de más de 100 proyectos de emprendimiento e innovación",
          "Diseño e implementación de 9 programas de incubación y 12 talleres especializados",
          "Implementación de Scrum con equipos interdisciplinarios de más de 20 colaboradores",
          "Dashboards ejecutivos en Power BI para seguimiento de KPIs y decisiones estratégicas",
        ],
      },
      {
        id: "xpertal",
        title: "Practicante de Gestión del Cambio",
        org: "FEMSA — Xpertal Global Services",
        period: "Ago 2023 — May 2024",
        bullets: [
          "Soporte a iniciativas de gestión del cambio y adopción tecnológica corporativa",
          "Análisis de datos y diseño de dashboards para mejorar la eficiencia operativa",
          "Gestión estructurada de documentación y seguimiento de avances de proyecto",
        ],
      },
      {
        id: "freelance-pm",
        title: "Freelance Project Manager Junior",
        org: "Sector industrial y administrativo",
        period: "Ene 2023 — May 2024",
        location: "Monterrey, Nuevo León",
        bullets: [
          "Planeación y ejecución de proyectos: alcance, cronogramas, recursos y entregables",
          "Coordinación de equipos multidisciplinarios y seguimiento de avances",
          "Identificación de riesgos y cumplimiento de hitos mediante seguimiento estructurado",
        ],
      },
    ],
    complementaryTitle: "Experiencia complementaria",
    complementary: [
      {
        id: "drivers-of-change",
        title: "Líder de Emprendimiento Social Junior",
        org: "Drivers of Change",
        period: "Ene 2021 — May 2024",
        bullets: [
          "Análisis de problemáticas sociales y seguimiento de métricas de impacto",
          "Coordinación con equipos, aliados y beneficiarios",
        ],
      },
      {
        id: "udem-fellow",
        title: "Becario de Emprendimiento",
        org: "HUB de Emprendimiento — UDEM",
        period: "Ene 2022 — May 2024",
        bullets: [
          "Coordinación de equipo de becarios y seguimiento de proyectos",
          "Apoyo en logística de eventos y fortalecimiento del ecosistema emprendedor",
        ],
      },
    ],
    educationTitle: "Formación",
    education: [
      {
        id: "udem-bachelor",
        degree: "Licenciatura en Ingeniería en Gestión Empresarial",
        school: "Universidad de Monterrey (UDEM)",
        period: "2020 — 2025",
      },
      {
        id: "ib",
        degree: "Bachillerato Internacional (IB)",
        school: "Universidad de Monterrey (UDEM)",
        period: "2018 — 2020",
      },
      {
        id: "udem-hs",
        degree: "Bachillerato en Ingeniería",
        school: "Universidad de Monterrey (UDEM)",
        period: "2017 — 2020",
      },
    ],
  },
  contact: {
    title: "Hablemos",
    text: "¿Te interesa la automatización con IA, consultoría tecnológica o tienes un proyecto en mente? Me encantaría escucharte.",
    emailLabel: "Correo",
    socialsTitle: "Encuéntrame en línea",
    downloadCv: "Descargar CV (PDF)",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    builtWith: "Hecho con Next.js, GSAP y Lenis.",
  },
};
