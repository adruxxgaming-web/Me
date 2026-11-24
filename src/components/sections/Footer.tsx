import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n";
import { site } from "@/content/site";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="label mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 text-mute sm:flex-row sm:items-center md:px-10">
        <p>
          © {site.fullName}. {dict.footer.rights}
        </p>
        <Link
          href={`/${lang}/links`}
          className="rounded-[2px] border border-line px-4 py-2 text-silver transition-colors hover:border-crimson hover:text-paper"
        >
          {dict.footer.links} →
        </Link>
      </div>
    </footer>
  );
}
