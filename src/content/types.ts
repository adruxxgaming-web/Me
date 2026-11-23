export interface Project {
  id: string;
  title: string;
  /** Short label for the kind of work, e.g. "SaaS concept". */
  type: string;
  summary: string;
  focus: string[];
  /** true while the real case-study summary is still to be written. */
  draft: boolean;
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
    draftBadge: string;
    focusLabel: string;
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
    viewCredential: string;
    totalLabel: string;
    highlightsTitle: string;
    moreTitle: string;
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
  footer: { rights: string; builtWith: string };
}
