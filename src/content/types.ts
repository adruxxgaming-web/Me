export interface Project {
  id: string;
  title: string;
  /** Short label for the kind of work, e.g. "SaaS concept". */
  type: string;
  /** One-line pitch shown on the collapsed card. */
  summary: string;
  /** The problem the case starts from. */
  challenge: string;
  /** How it was approached, step by step. */
  approach: string[];
  /** What the case produces. */
  deliverables: string[];
  tools: string[];
  /** Courses / certifications whose knowledge the case applies. */
  courses: string[];
  url: string | null;
}

export interface Role {
  id: string;
  title: string;
  org: string;
  period: string;
  location?: string;
  summary?: string;
  bullets: string[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    work: string;
    skills: string;
    certifications: string;
    experience: string;
    contact: string;
    cv: string;
    switchTo: string;
    switchToLabel: string;
    personal: string;
    menu: string;
    close: string;
  };
  hero: {
    kicker: string;
    tagline: string;
    currentLabel: string;
    currentValue: string;
    basedLabel: string;
    photoPending: string;
    ctaWork: string;
    ctaCv: string;
  };
  stats: { items: { value: number; suffix: string; label: string }[] };
  about: {
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focus: string[];
    areasTitle: string;
    areas: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  work: {
    title: string;
    intro: string;
    openCase: string;
    challengeLabel: string;
    approachLabel: string;
    deliverablesLabel: string;
    toolsLabel: string;
    coursesLabel: string;
    projects: Project[];
  };
  skills: {
    title: string;
    groups: { title: string; items: string[] }[];
  };
  certifications: {
    title: string;
    intro: string;
    pendingLabel: string;
    linkedinCta: string;
    totalLabel: string;
    highlightsTitle: string;
    moreTitle: string;
    showMore: string;
    showLess: string;
    expiresLabel: string;
  };
  experience: {
    title: string;
    roles: Role[];
    complementaryTitle: string;
    complementary: Role[];
    educationTitle: string;
    education: { id: string; degree: string; school: string; period: string }[];
  };
  contact: {
    title: string;
    text: string;
    emailLabel: string;
    socialsTitle: string;
    downloadCv: string;
    personalText: string;
    personalLink: string;
  };
  personal: {
    meta: { title: string; description: string };
    nav: { portfolio: string; hobbies: string; games: string; social: string };
    eyebrow: string;
    title: string;
    intro: string;
    ctaPrimary: string;
    sceneLabel: string;
    sceneCaption: string;
    aboutTitle: string;
    about: string[];
    hobbiesTitle: string;
    hobbies: {
      id: "sports" | "gaming" | "heroes" | "movies";
      title: string;
      text: string;
      items: string[];
    }[];
    gamesTitle: string;
    gamesIntro: string;
    games: string[];
    socialsTitle: string;
    socialsText: string;
    closingTitle: string;
    closingText: string;
    back: string;
  };
  /** Link-in-bio page (/[lang]/links). */
  links: {
    meta: { title: string; description: string };
    avatarAlt: string;
    tagline: string;
    portfolio: { label: string; hint: string };
    personal: { label: string; hint: string };
    cv: { label: string; hint: string };
    socialsTitle: string;
    emailLabel: string;
  };
  footer: { rights: string; links: string };
}
