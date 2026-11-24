import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n";

// Every page exists once per locale; each entry lists its translations.
const paths = ["", "/me", "/links"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
