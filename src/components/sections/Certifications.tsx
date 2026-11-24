import Image from "next/image";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n";
import { certifications, issuerLogos } from "@/content/certifications";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
};

function formatDate(date: string, lang: Locale) {
  const [year, month] = date.split("-");
  return `${MONTHS[lang][Number(month) - 1]} ${year}`;
}

function initials(text: string) {
  return text
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ú]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/** Issuer logo, or a monogram until a logo is added in certifications.ts. */
function IssuerMark({ issuer, size }: { issuer: string; size: number }) {
  const logo = issuerLogos[issuer];
  const box = { width: size, height: size };
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={issuer}
        width={size}
        height={size}
        style={box}
        unoptimized={logo.svg}
        className={
          logo.bg === "white"
            ? "shrink-0 rounded-[3px] bg-white object-contain"
            : "shrink-0 rounded-full"
        }
      />
    );
  }
  return (
    <span
      aria-hidden
      style={box}
      className="label flex shrink-0 items-center justify-center rounded-[2px] border border-line text-silver"
    >
      {initials(issuer)}
    </span>
  );
}

export function Certifications({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.certifications;
  // Newest first; entries without a date sink to the end.
  const sorted = [...certifications].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
  const featured = sorted.filter((c) => c.featured);
  const rest = sorted.filter((c) => !c.featured);

  return (
    <Section
      id="certifications"
      index="04"
      label={t.title}
      title={t.title}
      intro={t.intro}
    >
      <div
        data-reveal
        className="flex flex-wrap items-end justify-between gap-6"
      >
        <div className="flex items-end gap-4">
          <span className="display text-[clamp(4rem,10vw,7rem)] text-crimson">
            {certifications.length}
          </span>
          <span className="label pb-3 text-silver">{t.totalLabel}</span>
        </div>
        <a
          href={site.linkedinCertifications}
          target="_blank"
          rel="noopener noreferrer"
          className="label mb-3 rounded-[2px] border border-line px-5 py-3 text-paper transition-colors hover:border-crimson hover:text-crimson-bright"
        >
          {t.linkedinCta} ↗
        </a>
      </div>

      <p className="label mt-12 text-mute">{t.highlightsTitle}</p>
      <ul className="mt-4 grid border-l border-t border-line sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((cert, i) => (
          <li
            key={cert.id}
            data-reveal
            className="group flex min-h-44 flex-col justify-between border-b border-r border-line p-6 transition-colors hover:bg-graphite"
          >
            <div className="flex items-start justify-between">
              <IssuerMark issuer={cert.issuer} size={44} />
              <span className="display text-3xl text-line transition-colors group-hover:text-crimson">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium leading-snug text-paper">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-silver">{cert.issuer}</p>
              <p className="label mt-4 text-mute">
                {cert.date ? formatDate(cert.date, lang) : t.pendingLabel}
                {cert.expires
                  ? ` · ${t.expiresLabel} ${formatDate(cert.expires, lang)}`
                  : null}
                {cert.url ? (
                  <>
                    {" · "}
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crimson-bright underline underline-offset-4"
                    >
                      {t.viewCredential}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="label mt-16 text-mute">
        {t.moreTitle} · {rest.length}
      </p>
      <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
        {rest.map((cert) => (
          <li
            key={cert.id}
            data-reveal
            className="flex items-center gap-3 border-b border-line py-3"
          >
            <IssuerMark issuer={cert.issuer} size={24} />
            <span className="min-w-0 flex-1 text-sm leading-snug text-bone">
              {cert.name}
            </span>
            <span className="label shrink-0 text-mute">
              {cert.date ? formatDate(cert.date, lang) : t.pendingLabel}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
