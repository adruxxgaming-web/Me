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
    personal: "Más allá del trabajo",
    menu: "Menú",
    close: "Cerrar",
  },
  hero: {
    kicker: "Ingeniero de Soluciones Tecnológicas",
    tagline:
      "Convierto problemas de negocio en sistemas digitales estructurados, escalables y útiles: flujos de automatización, procesos asistidos por IA y herramientas que ayudan a los equipos a trabajar con más claridad y rapidez.",
    currentLabel: "Actualmente",
    currentValue: "Ingeniero de Soluciones Tecnológicas en STT",
    photoPending: "Foto — pendiente",
    ctaWork: "Ver mi trabajo",
    ctaCv: "Descargar CV",
  },
  stats: {
    items: [
      { value: 100, suffix: "+", label: "Proyectos de innovación mentoreados" },
      { value: 9, suffix: "", label: "Programas de incubación diseñados" },
      { value: 12, suffix: "", label: "Talleres especializados" },
      { value: 20, suffix: "+", label: "Colaboradores en equipos Scrum" },
    ],
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
  },
  work: {
    title: "Proyectos destacados",
    intro:
      "Casos donde aplico mi formación en IA, automatización, datos y metodologías ágiles a problemas reales de negocio. Abre cualquiera para ver el reto, el enfoque y lo que entrega.",
    openCase: "Ver caso",
    challengeLabel: "Reto",
    approachLabel: "Enfoque",
    deliverablesLabel: "Entregables",
    toolsLabel: "Herramientas",
    coursesLabel: "Basado en",
    projects: [
      {
        id: "bsoft",
        title: "B.soft — SaaS Lean BIM",
        type: "Concepto SaaS · Producto",
        summary:
          "Concepto de SaaS B2B que convierte modelos BIM en planes Lean Construction para constructoras de Latinoamérica.",
        challenge:
          "Las constructoras medianas planean en hojas de cálculo desconectadas de sus modelos BIM. El desglose de trabajo se rehace a mano y las restricciones del Last Planner se pierden en chats, así que los retrasos aparecen cuando ya es tarde.",
        approach: [
          "Entrevistas de descubrimiento con residentes de obra para mapear el flujo de planeación como cadena de valor",
          "Visión de producto, personas y backlog del MVP priorizado desde el rol de Product Owner",
          "Modelo de datos que lee archivos IFC y propone una pre-WBS por nivel, zona y especialidad",
          "Lookahead de seis semanas con bitácora de restricciones y tablero Kanban por cuadrilla",
        ],
        deliverables: [
          "Visión de producto y backlog del MVP priorizado",
          "Modelo de datos IFC → WBS en SQL",
          "Prototipo navegable del tablero de planeación",
          "Hipótesis de go-to-market para validación B2B",
        ],
        tools: ["Python", "IFC", "SQL", "v0", "Notion", "Scrum", "Kanban / VSM"],
        courses: [
          "Fundamentos de Product Owner",
          "Bases de Datos y SQL",
          "Páginas web con v0",
          "Marketing Innovative Products",
          "The Entrepreneurial Mindset",
        ],
        url: null,
      },
      {
        id: "ai-automation-lab",
        title: "AI Business Automation Lab",
        type: "Automatización · IA",
        summary:
          "Flujos reutilizables en n8n que quitan trabajo operativo repetitivo a las personas, con IA donde hace falta criterio.",
        challenge:
          "Prospectos, cotizaciones, seguimientos y reportes semanales se mueven entre correo, hojas de cálculo y el CRM copiando y pegando. Es lento, propenso a errores y depende de quién se acuerde de hacerlo.",
        approach: [
          "Mapeo de cada proceso de punta a punta, separando los pasos que son reglas, los que requieren criterio y los que requieren a una persona",
          "Flujos en n8n que conectan Gmail, Google Sheets y APIs externas mediante webhooks",
          "Pasos con LLM (Claude / GPT) para clasificar solicitudes, extraer datos y redactar respuestas con salidas estructuradas",
          "Aprobación humana antes de que algo llegue al cliente, más manejo de errores y bitácora de ejecuciones",
        ],
        deliverables: [
          "Flujo de captación → clasificación → CRM",
          "Reporte semanal de KPIs automatizado desde Sheets",
          "Notas de reunión → lista de tareas y correo de seguimiento",
          "Documentación y runbook de una página por flujo",
        ],
        tools: ["n8n", "Claude", "ChatGPT", "Google Workspace", "APIs y webhooks", "JSON"],
        courses: [
          "Automatizaciones con n8n",
          "IA para la productividad",
          "Claude AI",
          "Prompt Engineering",
          "Adopción Profesional de IA Generativa",
        ],
        url: null,
      },
      {
        id: "tech-playbook",
        title: "Technology Solutions Playbook",
        type: "Consultoría · Procesos",
        summary:
          "Un método repetible para proyectos de servicios de TI, desde la primera llamada de descubrimiento hasta una propuesta firmada y bien acotada.",
        challenge:
          "En servicios de tecnología cada proyecto empezaba desde cero: el descubrimiento dependía de la persona, las propuestas se reescribían cada vez y el alcance seguía creciendo después de cerrar el trato.",
        approach: [
          "Descubrimiento estandarizado con cuestionarios por tipo de solución: infraestructura, conectividad, soporte y herramientas digitales",
          "Plantillas de arquitectura de solución y de propuesta con alcance, supuestos y exclusiones explícitos",
          "Plan de adopción basado en gestión del cambio para que el cliente realmente use lo que compra",
          "Asistente de IA con contexto curado que redacta propuestas directamente desde las notas de descubrimiento",
        ],
        deliverables: [
          "Playbook en Notion con plantillas para cada etapa",
          "Kit de propuesta y alcance de trabajo",
          "Paquete de contexto y prompts para redactar propuestas",
          "Tablero de pipeline y entrega en Power BI",
        ],
        tools: ["Notion", "Google Workspace", "Claude", "Power BI", "Excel"],
        courses: [
          "Consultor Met Conecta",
          "Gestión del Cambio para Empresas",
          "Context Engineering",
          "Huawei Sales-IP Network",
          "Project Management (UPV)",
        ],
        url: null,
      },
      {
        id: "ai-agents",
        title: "AI Agent Prototypes",
        type: "IA · Prototipos",
        summary:
          "Agentes de IA pequeños y enfocados para investigación, documentación interna y apoyo a decisiones, diseñados para evaluarse y generar confianza.",
        challenge:
          "Los equipos pierden horas buscando información entre documentos y escribiendo primeros borradores. Los chatbots genéricos responden con seguridad pero sin fuentes, así que nadie confía en ellos para decisiones reales.",
        approach: [
          "Definición del rol, las herramientas y los límites de cada agente antes de escribir un solo prompt",
          "Context engineering: documentos recuperados, ejemplos y formatos de salida en lugar de prompts largos y frágiles",
          "Prototipos con Claude Code y Python, comparando modelos sobre el mismo set de casos de prueba",
          "Guía de uso responsable: siempre citar fuentes, sin datos sensibles y la decisión final la toma una persona",
        ],
        deliverables: [
          "Agente de investigación que resume con fuentes citadas",
          "Asistente de documentación interna",
          "Generador de memos de decisión con pros, contras y riesgos",
          "Checklist de evaluación y guía de uso responsable",
        ],
        tools: ["Claude Code", "Claude API", "Python", "MCP", "Gemini", "ChatGPT"],
        courses: [
          "Claude Code 101",
          "AI Fluency",
          "Fundamentos de LLMs",
          "Pensamiento Crítico para usar IA",
          "Ética y Manejo de Datos para IA",
        ],
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
    intro: "Aprendizaje continuo en IA, agilidad, datos y gestión de proyectos.",
    pendingLabel: "Fecha pendiente",
    linkedinCta: "Ver todas las credenciales en LinkedIn",
    totalLabel: "certificaciones y cursos",
    highlightsTitle: "Destacadas",
    moreTitle: "Más cursos",
    showMore: "Ver todos los cursos",
    showLess: "Ocultar cursos",
    expiresLabel: "Vence",
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
    personalText: "¿Quieres conocer a la persona detrás del trabajo?",
    personalLink: "Más allá del trabajo",
  },
  personal: {
    meta: {
      title: "Adrián Hinojosa — Más allá del trabajo",
      description:
        "Videojuegos, deporte, superhéroes y películas: la persona detrás del portafolio.",
    },
    nav: {
      portfolio: "Portafolio",
      hobbies: "Hobbies",
      games: "Juegos",
      social: "Sígueme",
    },
    eyebrow: "Más allá del trabajo",
    title: "Fuera del trabajo",
    intro:
      "Ingeniero de día. Gamer, deportista y fan de los superhéroes el resto del tiempo. Este es el lado de mí que no cabe en un CV.",
    ctaPrimary: "Encuéntrame en línea",
    sceneLabel:
      "Ilustración de Adrián como personaje estilo Minecraft con cabello rizado, lentes y barba, sentado en una repisa de pasto con una laptop y un beagle, mirando una aldea de bloques.",
    sceneCaption:
      "Mi lugar feliz: una laptop, una buena vista y un mundo hecho de bloques.",
    aboutTitle: "El yo de verdad",
    about: [
      "Me gusta construir cosas, sea una automatización para un negocio o un mundo hecho de bloques. Recargo energía jugando, entrenando y perdiéndome en una buena historia.",
      "El fútbol y el golf me mantienen en movimiento, el gym me mantiene constante y el Xbox o la PC me entretienen. Y sí, siempre hay tiempo para una película de superhéroes.",
    ],
    hobbiesTitle: "Lo que me gusta",
    hobbies: [
      {
        id: "sports",
        title: "Deportes",
        text: "Moverme es parte de la rutina.",
        items: ["Fútbol", "Golf", "Gym"],
      },
      {
        id: "gaming",
        title: "Videojuegos",
        text: "Jugador de Xbox y PC.",
        items: ["Xbox", "PC"],
      },
      {
        id: "heroes",
        title: "Héroes y mundos",
        text: "Capas, varitas y universos enormes.",
        items: ["Marvel", "Batman", "Harry Potter"],
      },
      {
        id: "movies",
        title: "Películas",
        text: "Siempre listo para una buena.",
        items: ["Acción", "Comedia"],
      },
    ],
    gamesTitle: "Mundos a los que regreso",
    gamesIntro: "Algunos de los juegos que nunca salen de mi rotación.",
    games: [
      "Minecraft",
      "Grounded",
      "Assassin's Creed",
      "Halo",
      "Call of Duty",
      "Pokémon",
      "EA Sports FC",
    ],
    socialsTitle: "Encuéntrame en línea",
    socialsText: "Ven a saludar. Estoy en todas estas.",
    closingTitle: "¿Prefieres el lado profesional?",
    closingText:
      "Proyectos, experiencia y certificaciones a un clic de distancia.",
    back: "Volver al portafolio",
  },
  links: {
    meta: {
      title: "Adrián Hinojosa — Links",
      description:
        "Portafolio, CV y redes de Adrián Hinojosa, Ingeniero de Soluciones Tecnológicas.",
    },
    avatarAlt: "Adrián como personaje de bloques con su laptop y su beagle",
    tagline: "Proyectos de IA, automatización y tecnología que hacen que los equipos trabajen mejor.",
    portfolio: { label: "Portafolio profesional", hint: "Proyectos, experiencia y certificaciones" },
    personal: { label: "Más allá del trabajo", hint: "Videojuegos, deporte y la persona detrás del trabajo" },
    cv: { label: "Descargar CV", hint: "PDF · Español" },
    companyHint: "Mi empresa · sotesa.mx",
    socialsTitle: "Encuéntrame en",
    emailLabel: "Correo",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    links: "Enlaces",
  },
};
