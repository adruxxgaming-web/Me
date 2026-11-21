import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

function initials(text: string) {
  return text
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ú]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function Certifications({ dict }: { dict: Dictionary }) {
  const { certifications } = dict;
  return (
    <Section
      id="certifications"
      title={certifications.title}
      intro={certifications.intro}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.items.map((cert) => (
          <li
            key={cert.id}
            data-anim="cert-card"
            className="flex gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            {/* Issuer logo placeholder — swap for real logos/badges later */}
            <div
              aria-hidden
              className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-zinc-100 font-mono text-sm font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {initials(cert.issuer)}
            </div>
            <div className="min-w-0">
              <h3 className="font-medium leading-snug">{cert.name}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {cert.issuer}
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                {cert.year ?? certifications.pendingLabel}
                {cert.url ? (
                  <>
                    {" · "}
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {certifications.viewCredential}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
