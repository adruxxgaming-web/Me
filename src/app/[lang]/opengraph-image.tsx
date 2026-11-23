import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, locales } from "@/i18n";
import { site } from "@/content/site";

export const alt = `${site.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Social preview in the professional page's palette (ink, crimson, paper).
// Also inherited by /[lang]/me.
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "en");
  const [first, ...rest] = site.name.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(ellipse at 85% 20%, #510a10 0%, #050505 60%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 3, background: "#b71925" }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#b5b5b5",
            }}
          >
            {dict.hero.kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -4,
              textTransform: "uppercase",
            }}
          >
            {first}
          </div>
          <div
            style={{
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -4,
              textTransform: "uppercase",
              color: "#e32636",
            }}
          >
            {rest.join(" ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #262626",
            paddingTop: 28,
            fontSize: 26,
            color: "#b5b5b5",
          }}
        >
          <div style={{ display: "flex", maxWidth: 760 }}>
            {dict.meta.description}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#f5f5f5" }}>
            AH<span style={{ color: "#b71925" }}>.</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
