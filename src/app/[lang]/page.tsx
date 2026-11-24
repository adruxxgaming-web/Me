import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/ui/Nav";
import { Animations } from "@/components/motion/Animations";
import { site } from "@/content/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Nav
        lang={lang}
        cvHref={site.cv[lang]}
        name={site.name}
        labels={dict.nav}
      />
      <main>
        <Hero lang={lang} dict={dict} />
        <Marquee items={dict.about.areas} />
        <About dict={dict} />
        <Stats dict={dict} />
        <Work dict={dict} />
        <Skills dict={dict} />
        <Certifications lang={lang} dict={dict} />
        <Experience dict={dict} />
        <Contact lang={lang} dict={dict} />
        {/* Mounted inside the page so its effects run only after the page has
            hydrated; animating server HTML earlier causes hydration mismatches. */}
        <Animations />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
