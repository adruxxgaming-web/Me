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

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** null = still to fill in. */
  year: string | null;
  /** Credential / verification link. null = still to fill in. */
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
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    ctaWork: string;
    ctaCv: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focus: string[];
    areasTitle: string;
    areas: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    photoPending: string;
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
    items: Certification[];
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
  };
  footer: { rights: string; builtWith: string };
}
