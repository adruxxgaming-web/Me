import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <SmoothScroll>
      <Nav lang={lang} dict={dict} />
      <main>
        <Hero lang={lang} dict={dict} />
        <About dict={dict} />
        <Work dict={dict} />
        <Skills dict={dict} />
        <Certifications dict={dict} />
        <Experience dict={dict} />
        <Contact lang={lang} dict={dict} />
      </main>
      <Footer dict={dict} />
    </SmoothScroll>
  );
}
