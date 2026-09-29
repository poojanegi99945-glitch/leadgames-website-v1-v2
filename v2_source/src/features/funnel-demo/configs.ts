export type Option = { id: string; label: string; hint?: string; score: number; tags?: string[] };
export type Step = { id: string; question: string; helper?: string; type: "single" | "multi" | "slider" | "contact"; options?: Option[]; min?: number; max?: number; step?: number; weight?: number };
export type Band = { id: "hot" | "warm" | "cold"; min: number; label: string; action: string };
export type FunnelConfig = { id: string; title: string; intro: string; steps: Step[]; bands: Band[]; result: (score: number, band: Band) => { headline: string; body: string; cta: string }; disclaimer?: string };

export const defaultBands: Band[] = [
  { id: "hot", min: 75, label: "Hot", action: "Notify sales and offer a call" },
  { id: "warm", min: 45, label: "Warm", action: "Send a tailored follow-up" },
  { id: "cold", min: 0, label: "Cold", action: "Add to a helpful nurture sequence" },
];
const coldFallback: Band = { id: "cold", min: 0, label: "Cold", action: "Add to a helpful nurture sequence" };

const option = (labels: string[]): Option[] => labels.map((label, index) => ({ id: `${index}`, label, score: Math.round(((index + 1) / labels.length) * 25) }));
const make = (id: string, title: string, intro: string, questions: [string, string[]][], disclaimer?: string): FunnelConfig => ({
  id, title, intro, ...(disclaimer ? { disclaimer } : {}), bands: defaultBands,
  steps: questions.map(([question, choices], index) => ({ id: `q${index}`, question, type: "single", options: option(choices) })),
  result: (score, band) => ({ headline: band.id === "hot" ? "A focused consultation is the next step" : "A guided interactive funnel fits this journey", body: `This sample lead scored ${score}/100.`, cta: "View recommended follow-up" }),
});

export const configs = {
  "homepage-hero": make("homepage-hero", "Find your campaign fit", "Four quick choices. One useful direction.", [["What is your main goal?", ["Engage customers", "Generate leads", "Qualify prospects", "Increase sales"]], ["Which industry are you in?", ["Education", "Healthcare", "Real Estate", "SaaS & ERP"]], ["Monthly enquiries?", ["Under 100", "100–500", "500–1,000", "1,000+"]], ["How do you follow up today?", ["Manually", "Email", "WhatsApp", "CRM automation"]]]),
  "healthcare-care-path": make("healthcare-care-path", "Find the right care path", "A general, informational sample.", [["What would you like help with?", ["General wellness", "A new concern", "An ongoing concern", "A follow-up"]], ["How long has this been relevant?", ["Today", "A few days", "A few weeks", "Longer"]], ["Have you consulted before?", ["No", "Yes, recently", "Yes, some time ago"]], ["Preferred contact time?", ["Morning", "Afternoon", "Evening"]], ["How soon would you like to speak?", ["This week", "Today", "As soon as available"]]], "Informational only. This is not a medical diagnosis or advice."),
  "real-estate-finder": make("real-estate-finder", "Find your ideal property", "Match preferences to the right next step.", [["What is your budget?", ["₹40–60L", "₹60–80L", "₹80L–1Cr", "₹1Cr+"]], ["Preferred location?", ["City centre", "Suburbs", "Emerging area", "Flexible"]], ["Property type?", ["Apartment", "Villa", "Plot"]], ["Bedrooms?", ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"]], ["Buying timeline?", ["6+ months", "3–6 months", "1–3 months", "Under 1 month"]], ["Purpose?", ["Investment", "Self-use"]]]),
  "saas-erp-finder": make("saas-erp-finder", "Find the right business software", "Map your needs to a useful starting point.", [["Company size?", ["1–10", "11–50", "51–200", "200+"]], ["Industry?", ["Services", "Retail", "Manufacturing", "Other"]], ["Current software?", ["Spreadsheets", "Several tools", "Legacy ERP"]], ["Main challenge?", ["Visibility", "Automation", "Reporting", "Scale"]], ["Modules needed?", ["CRM", "Finance", "Inventory", "All core modules"]], ["Budget range?", ["Exploring", "Defined", "Approved"]], ["Timeline?", ["6+ months", "3–6 months", "1–3 months", "This month"]]]),
} satisfies Record<string, FunnelConfig>;

export function calculateScore(points: number[], possible: number[]) { const max = possible.reduce((a, b) => a + b, 0); return max ? Math.round((points.reduce((a, b) => a + b, 0) / max) * 100) : 0; }
export function assignBand(score: number, bands = defaultBands): Band { return [...bands].sort((a, b) => b.min - a.min).find((band) => score >= band.min) ?? coldFallback; }