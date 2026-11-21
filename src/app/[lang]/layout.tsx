import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Anton, Inter, Press_Start_2P } from "next/font/google";
import { getDictionary, hasLocale, locales } from "@/i18n";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "../globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });
// Blocky pixel face for the personal page headlines.
const pixel = Press_Start_2P({
  variable: "--font-press",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${anton.variable} ${inter.variable} ${pixel.variable}`}
    >
      <body>
        <noscript>
          {/* Without JS nothing should stay hidden waiting for an animation */}
          <style>{`[data-line] > span{transform:none!important}[data-reveal],[data-hero-fade]{opacity:1!important}`}</style>
        </noscript>
        {/* Each page brings its own header/footer and theme. */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
