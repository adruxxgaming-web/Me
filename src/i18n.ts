import "server-only";
import { en } from "@/content/en";
import type { Dictionary } from "@/content/types";
import { es } from "@/content/es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
