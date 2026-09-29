export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  letter: string;
  title: string;
  tagline: string;
  goalValue: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'gamified-lead-gen',
    letter: 'A',
    title: 'Gamified & Interactive Lead Generation',
    tagline: 'Give visitors something worth completing.',
    goalValue: 'Promotion or contest',
    services: [
      {
        name: 'Gamified Lead Generation',
        description: 'Spin wheel, scratch card, memory match, challenges, and score-based interactive games.',
      },
      {
        name: 'Interactive Lead Funnels',
        description: 'Visitor → targeted questions → personalized result → verified lead capture.',
      },
      {
        name: 'Quiz Lead Generation',
        description: 'Engaging B2B and consumer diagnostic quizzes that collect buyer intent.',
      },
    ],
  },
  {
    id: 'assessments-recommendations',
    letter: 'B',
    title: 'Assessments & Personalized Recommendations',
    tagline: 'Score, calculate and recommend from real answers.',
    goalValue: 'Product recommendation',
    services: [
      {
        name: 'Assessment Funnels',
        description: 'Diagnostic assessments such as Skin Score, Marketing Maturity Score, or Business Readiness.',
      },
      {
        name: 'Interactive Calculators',
        description: 'Dynamic ROI, mortgage/EMI, pricing, cost savings, and budget calculators.',
      },
      {
        name: 'Recommendation Funnels',
        description: 'Tailored recommendations matching customer answers with products or services.',
      },
    ],
  },
  {
    id: 'qualification-scoring',
    letter: 'C',
    title: 'Lead Qualification & Scoring',
    tagline: "Know who's ready before your team calls.",
    goalValue: 'Qualify leads',
    services: [
      {
        name: 'Lead Qualification Funnels',
        description: 'Triage budget, specific requirements, location, and purchase timeline before sales outreach.',
      },
      {
        name: 'Lead Scoring',
        description: 'Rule-based Hot / Warm / Cold classification aligned with your actual sales criteria.',
      },
    ],
  },
  {
    id: 'crm-automation',
    letter: 'D',
    title: 'CRM & Follow-up Automation',
    tagline: 'The right message, the moment a lead qualifies.',
    goalValue: 'Follow-up automation',
    services: [
      {
        name: 'WhatsApp Lead Automation',
        description: 'Automated follow-up sequences sent immediately after explicit prospect consent.',
      },
      {
        name: 'CRM Integration',
        description: 'Push structured leads to systems such as HubSpot, Zoho, Salesforce, or Twenty CRM.',
      },
      {
        name: 'Marketing Automation',
        description: 'Coordinated email, WhatsApp, CRM, and internal sales-notification workflows.',
      },
    ],
  },
  {
    id: 'campaign-cro',
    letter: 'E',
    title: 'Campaign Development & Optimization',
    tagline: 'Landing pages, ads and analytics that work together.',
    goalValue: 'Generate leads',
    services: [
      {
        name: 'Landing Page Development',
        description: 'Conversion-focused landing pages designed specifically around each game or quiz.',
      },
      {
        name: 'Campaign Management',
        description: 'Connecting Google/Meta ad traffic directly into high-converting interactive funnels.',
      },
      {
        name: 'Analytics & CRO',
        description: 'Monitoring start rate, completion rate, cost per lead, and qualified-lead percentage.',
      },
    ],
  },
];
