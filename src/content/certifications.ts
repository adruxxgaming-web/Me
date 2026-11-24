// Certifications are issued under their original (mostly Spanish) names, so
// they are shared by both languages instead of living in the dictionaries.

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** "YYYY-MM". null = still to fill in. */
  date: string | null;
  /** "YYYY-MM", for credentials that expire. */
  expires?: string;
  /** Issuer credential ID; not shown on the page. */
  credentialId?: string;
  /** 1–9: position among the top certifications shown as cards. The rest
   *  go in the collapsible list. Links to every credential live on LinkedIn. */
  rank?: number;
}

/** Issuer logos in /public. Issuers without one get a monogram. */
export const issuerLogos: Record<string, { src: string; bg?: "white"; svg?: boolean }> = {
  Platzi: { src: "/images/issuers/platzi.webp" },
  Anthropic: { src: "/images/issuers/anthropic.svg", svg: true },
  edX: { src: "/images/issuers/edx.png", bg: "white" },
};

const platzi = (
  id: string,
  name: string,
  date: string,
  credentialId: string,
  rank?: number,
): Certification => ({
  id,
  name,
  issuer: "Platzi",
  date,
  credentialId,
  rank,
});

export const certifications: Certification[] = [
  // ── Main certifications (top 9 ranked with `rank`) ──
  {
    id: "anthropic-ai-fluency",
    rank: 2,
    name: "AI Fluency for Small Businesses",
    issuer: "Anthropic",
    date: "2026-07",
    credentialId: "6zwm87sius4q",
  },
  {
    id: "anthropic-claude-code-101",
    rank: 1,
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026-07",
    credentialId: "x7ybyom62y2p",
  },
  {
    id: "huawei-sales-ip",
    rank: 3,
    name: "Huawei Certified Specialist Associate – Sales-IP Network",
    issuer: "Huawei",
    date: "2026-08",
    expires: "2028-08",
    credentialId: "033152101521810446851409",
  },
  {
    id: "edx-entrepreneurial-mindset",
    rank: 9,
    name: "The Entrepreneurial Mindset",
    issuer: "edX",
    date: "2025-07",
    credentialId: "b45569f3964f42c9a7d44930c3f674b3",
  },
  {
    id: "met-conecta",
    rank: 8,
    name: "Consultor de Met Conecta",
    issuer: "Met Conecta",
    date: "2025-04",
    credentialId: "418cb318-fc15-4b32-9e5f-79a7d2b0499b",
  },
  platzi("scrum-master", "Scrum Master", "2026-07", "4e66ec7a-9feb-4602-a150-c08cc4e9b24a-f06550fd-04ed-457d-bc6d-d526e6d7a493", 4),
  platzi("claude-ai", "Curso de Claude AI", "2026-04", "1aab017b-08d9-45d3-bdd0-18f267c669f3-111814ed-eff7-42f2-9f99-e256569dd86a"),
  platzi("context-engineering", "Curso de Context Engineering", "2026-09", "a2d38af5-1611-4f94-9b62-463647a56089-b7fb991d-b2d7-4dc6-89cf-f2210ed301ae", 6),
  platzi("genai-adoption", "Adopción Profesional de AI Generativa", "2026-05", "f7a649ce-046d-4193-8505-cc89b8d36be4"),
  {
    id: "upv-project-management",
    rank: 5,
    name: "Project Management",
    issuer: "Universitat Politècnica de València",
    date: null,
  },
  {
    id: "umd-marketing",
    name: "Marketing Innovative Products and Services",
    issuer: "University System of Maryland",
    date: null,
  },
  {
    id: "empower-powerbi",
    rank: 7,
    name: "Power BI",
    issuer: "Empower Data",
    date: null,
  },
  {
    id: "ibm-python",
    name: "Python Basics for Data Science",
    issuer: "IBM",
    date: null,
  },

  // ── Platzi courses ──
  platzi("ai-video", "Curso de Generación de Videos con IA", "2026-11", "09b40f2c-4c81-4b50-86df-1fc597fb9c87-a3ff5c2c-9fc3-4ab8-a891-cf98f1093877"),
  platzi("email-marketing", "Curso de Email Marketing", "2026-10", "cef2b2e2-bfc8-49e1-aa91-f8290a2939db-fd0994bd-48b8-47c6-ac53-100ba2abdc62"),
  platzi("gpt-5-6", "Curso de GPT-5.6", "2026-07", "fec3aadc-86d1-486e-8fbb-9aa79f81a2f6-491fb87f-0250-452c-af4b-600617d18829"),
  platzi("python-data-science", "Curso de Python para Ciencia de Datos", "2026-06", "9a3f7b12-8488-49d1-908c-9bef69f0c451-21719d94-1a5b-4541-a340-f7402e626b23"),
  platzi("sql-databases", "Curso de Fundamentos de Bases de Datos y SQL", "2026-06", "9daf1326-7377-4ee3-b906-27b4a86eb336-4997793e-2487-4041-94b6-7486646e5673"),
  platzi("data-engineering", "Curso de Fundamentos de Ingeniería de Datos", "2026-06", "a69f8f8c-553a-4902-b658-0539f837ac91-ec227c30-8e03-427e-9a1c-23f8bffd65f1"),
  platzi("change-management", "Gestión del Cambio para Empresas", "2026-06", "51f3d3b8-c2c6-4cde-8b6b-5736b371c084-f8fb022b-236d-48f2-9dbe-312cd5696a87"),
  platzi("critical-thinking-ai", "Curso de Pensamiento Crítico para usar Inteligencia Artificial", "2026-06", "25e2a4c5-6df2-4947-a941-5d9afce80868-421b881f-0208-48aa-99b1-eee8fdb028cf"),
  platzi("llm-fundamentals", "Curso de Fundamentos de LLMs", "2026-05", "ab43d012-e3b6-4f31-a25f-32dd38a0f96f-5c299f75-5827-457a-8178-ba299ab92916"),
  platzi("scrum-professional", "Curso Profesional de Scrum", "2026-05", "3b0daa69-c6ea-4f3f-a094-8fe323cdbb1b-e8a905ca-fe30-4fae-8366-1311e0529b09"),
  platzi("product-owner", "Curso de Fundamentos de Product Owner", "2026-05", "2407f5aa-b822-4c41-91ec-c77a653bd3e1-3e807d39-9b58-4bf9-a58d-17db93b8e8e5"),
  platzi("logical-thinking", "Curso de Pensamiento Lógico", "2026-05", "4e4710a5-7c4c-442c-915f-5334b1eabc1f-23637156-8f1d-4469-abc7-00d9efd0520a"),
  platzi("ai-images", "Curso de Generación de Imágenes con Inteligencia Artificial", "2026-04", "dc335179-c429-42fd-aa0a-a551a528423e-a0981943-a783-4fae-a9b5-c8ba47ab4cd9"),
  platzi("ai-finance", "Curso de Inteligencia Artificial para Finanzas", "2026-04", "5de82155-9651-4b72-8459-a94f807cb187-75af7779-04cf-43d7-83bb-09785be8cd7c"),
  platzi("english-ai", "Curso de Inglés para el Uso de Inteligencia Artificial", "2026-04", "b2807d94-b90e-48f5-9856-e8047897fd57-2bd15e42-91d2-4d84-a8f7-e57a558644b6"),
  platzi("ethical-design-ai", "Curso de Diseño Ético para el Desarrollo de Productos Digitales con IA", "2026-04", "af180f2b-ffff-4444-afd7-db7072550a01-b9a6a282-7d73-4149-b533-0b3b04c1d470"),
  platzi("web-intro", "Curso de Introducción a la Web: Historia y Funcionamiento de Internet", "2026-04", "6d0f7d22-16d8-43ed-8999-a90b7d54351e-0eb05114-e5cf-4f61-a4c6-0ab953ae070f"),
  platzi("data-ethics", "Curso de Ética y Manejo de Datos para Data Science e Inteligencia Artificial", "2026-04", "1f837733-951a-44a6-9cd6-236ed4dd4976-bdf18b80-bdff-418f-bd7e-f8b2e59bee2c"),
  platzi("gemini", "Curso de Gemini", "2026-04", "1da08f03-8b39-40c1-bff5-7f60669234be-83d0dc82-6f61-4530-ae3a-8410e91235fe"),
  platzi("v0", "Curso de Creación de Páginas Web con v0", "2026-04", "c2249a0c-efc3-47bf-a384-f62bb0d5f40a-d147c63b-cd93-44be-8130-88c2b2540ba4"),
  platzi("networks", "Curso de Redes Informáticas de Internet", "2026-03", "7f0af73d-793c-438a-8adc-dcd07eb3db5a-14bcdc1a-9ccf-4c78-9c2c-6321be949b3d"),
  platzi("ai-tips", "Curso de tips y trucos de IA", "2026-03", "f96cfbca-b3b2-4b30-b87b-94bcbbcee043-f94c1bba-fc60-434b-95f8-bbd33ee7a702"),
  platzi("chatgpt", "Curso de ChatGPT", "2026-03", "35c8f09f-783e-4eb1-a608-44873d3d13dd-d5424ed1-4c4e-44c0-8ded-afba188b26ef"),
  platzi("prompt-engineering", "Curso de Prompt Engineering", "2026-03", "56c72fb1-90f3-490b-805d-d798a5261790-03f1ada9-01b1-425d-90ae-5f3a670823fe"),
  platzi("ai-intro", "Curso de Introducción a la Inteligencia Artificial", "2026-02", "d89e5cc1-2d51-45b5-ae03-296dc172bf33-1f5b8ead-1825-41e2-b93f-6d75a9a524ec"),
  platzi("math-notation", "Curso de Lenguaje y Notación Matemática", "2026-01", "9b88672f-3238-4421-8dc9-0d2ac5e40f6c-dea86d26-4a50-4fc2-94b9-c3e205c7bc7e"),
  platzi("math-fundamentals", "Curso de Fundamentos de Matemáticas", "2025-12", "cee8ada0-97e9-47dc-858e-e8c47b866e53-f80211b6-d14f-4fc0-8307-d3ad4af169e3"),
  platzi("software-engineering", "Curso de Fundamentos de Ingeniería de Software", "2025-12", "2f1d7ebe-375c-4902-8fe1-af0df425ec2f-d0bc473a-d48d-49bd-bdef-b29dbfe1b33b"),
  platzi("computers-basics", "Curso Básico de Computadores e Informática", "2025-12", "1ca729c5-2ed8-4e31-8c50-aa3850a23984"),
];
