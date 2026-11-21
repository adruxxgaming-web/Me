// Non-translated site data (URLs, handles, contact).
export const site = {
  name: "Adrián Hinojosa",
  fullName: "Adrián Hinojosa Gutierrez",
  email: "adrian.hinojosa@sotesa.mx",
  location: "Monterrey, Nuevo León, México",
  // Production URL (used for metadata / hreflang). Update if a custom domain is added.
  url: "https://adrianportfolio-blush.vercel.app",
  cv: {
    en: "/cv/AdrianHinojosa_CV_EN.pdf",
    es: "/cv/AdrianHinojosa_CV_ES.pdf",
  },
  socials: [
    {
      id: "linkedin",
      professional: true,
      label: "LinkedIn",
      handle: "adrián-hinojosa",
      url: "https://www.linkedin.com/in/adri%C3%A1n-hinojosa-082548180/",
    },
    {
      id: "github",
      professional: true,
      label: "GitHub",
      handle: "adruxxgaming-web",
      url: "https://github.com/adruxxgaming-web",
    },
    {
      id: "instagram",
      professional: false,
      label: "Instagram",
      handle: "@adrian.hinojosag",
      url: "https://www.instagram.com/adrian.hinojosag/",
    },
    {
      id: "youtube",
      professional: false,
      label: "YouTube",
      handle: "@Ing_adru",
      url: "https://www.youtube.com/@Ing_adru",
    },
  ],
} as const;
