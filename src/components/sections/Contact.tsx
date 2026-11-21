import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";
import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

export function Contact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { contact } = dict;
  return (
    <Section id="contact" title={contact.title} intro={contact.text}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm text-zinc-500">{contact.emailLabel}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block text-2xl font-medium underline-offset-4 hover:underline sm:text-3xl"
          >
            {site.email}
          </a>
          <a
            href={site.cv[lang]}
            download
            className="mt-8 inline-block rounded bg-foreground px-5 py-3 font-medium text-background"
          >
            {contact.downloadCv}
          </a>
        </div>

        <div>
          <p className="text-sm text-zinc-500">{contact.socialsTitle}</p>
          <ul className="mt-3 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {site.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-anim="social-link"
                  className="flex items-center justify-between py-4 hover:text-zinc-500"
                >
                  <span className="font-medium">{social.label}</span>
                  <span className="text-sm text-zinc-500">
                    {social.handle} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
