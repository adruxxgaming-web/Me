import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";
import type { Locale } from "@/i18n";

export function Contact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { contact } = dict;
  const professional = site.socials.filter((s) => s.professional);

  return (
    <section
      id="contact"
      data-section="contact"
      className="scroll-mt-16 border-t border-line bg-gradient-to-b from-ink via-ink to-oxblood/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="label flex items-center gap-3 text-silver">
          <span className="text-crimson-bright">(06)</span>
          {dict.nav.contact}
        </p>

        <h2
          data-reveal
          className="display mt-8 text-[clamp(4rem,15vw,15rem)] leading-[0.88]"
        >
          {contact.title}
        </h2>
        <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-silver">
          {contact.text}
        </p>

        <div className="mt-16 grid gap-12 border-t border-line pt-10 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <p className="label text-mute">{contact.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-2xl font-medium underline-offset-8 transition-colors hover:text-crimson-bright hover:underline sm:text-4xl"
            >
              {site.email}
            </a>
            <a
              href={site.cv[lang]}
              download
              className="label mt-10 inline-block rounded-[2px] bg-crimson px-6 py-4 text-paper transition-colors hover:bg-crimson-bright"
            >
              {contact.downloadCv}
            </a>
          </div>

          <div data-reveal className="lg:col-span-5">
            <p className="label text-mute">{contact.socialsTitle}</p>
            <ul className="mt-3 border-t border-line">
              {professional.map((social) => (
                <li key={social.id} className="border-b border-line">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="display text-3xl transition-colors group-hover:text-crimson">
                      {social.label}
                    </span>
                    <span className="label text-mute">{social.handle} ↗</span>
                  </a>
                </li>
              ))}
              <li className="border-b border-line">
                <a
                  href={`/${lang}/me`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="text-sm text-silver">
                    {contact.personalText}
                  </span>
                  <span className="label shrink-0 text-crimson-bright transition-transform group-hover:translate-x-1">
                    {contact.personalLink} →
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
