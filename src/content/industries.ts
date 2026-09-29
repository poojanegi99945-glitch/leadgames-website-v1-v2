export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  capturedData: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  subtitle: string;
  examples: string[];
  note?: string;
  hotspots: Hotspot[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    subtitle: 'Clinical intake & consultation qualification',
    examples: ['Skin & wellness assessment', 'Treatment finder', 'Appointment qualification'],
    note: 'Informational only. This is not a medical diagnosis or clinical advice.',
    hotspots: [
      { id: 'h1', x: 25, y: 35, title: 'Concern Area', capturedData: 'Symptoms category and duration' },
      { id: 'h2', x: 70, y: 40, title: 'Triage Urgency', capturedData: 'Consultation timeframe (<7 days)' },
      { id: 'h3', x: 50, y: 75, title: 'Intake Consent', capturedData: 'Verified WhatsApp notification opt-in' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
    subtitle: 'Property finder & budget qualification',
    examples: ['Property finder', 'Budget qualifier', 'EMI calculator', 'Site-visit booking'],
    hotspots: [
      { id: 'r1', x: 30, y: 30, title: 'Budget Band', capturedData: '₹60L–80L or ₹1Cr+ verified budget' },
      { id: 'r2', x: 65, y: 45, title: 'Unit Layout', capturedData: '2 BHK / 3 BHK / Villa specification' },
      { id: 'r3', x: 45, y: 80, title: 'Buying Timeline', capturedData: 'Immediate (<30 days) vs 6 months' },
    ],
  },
  {
    id: 'saas-erp',
    name: 'SaaS & Enterprise ERP',
    subtitle: 'B2B requirement assessment & demo triage',
    examples: ['Software recommender', 'ROI calculator', 'Requirement assessment', 'Demo qualifier'],
    hotspots: [
      { id: 's1', x: 25, y: 35, title: 'Seat Count', capturedData: 'Team size & active user licenses' },
      { id: 's2', x: 70, y: 35, title: 'Core Bottleneck', capturedData: 'Manual reporting / legacy ERP friction' },
      { id: 's3', x: 50, y: 75, title: 'Implementation', capturedData: 'Target rollout quarter & budget scope' },
    ],
  },
  {
    id: 'education',
    name: 'Education & Academies',
    subtitle: 'Career guidance & admission eligibility',
    examples: ['Course finder', 'Eligibility checker', 'Career assessment'],
    hotspots: [
      { id: 'e1', x: 30, y: 40, title: 'Academic Profile', capturedData: 'Prior degree and work experience' },
      { id: 'e2', x: 70, y: 65, title: 'Program Interest', capturedData: 'Full-time vs Executive weekend format' },
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive & Dealerships',
    subtitle: 'Vehicle matching & test-drive triage',
    examples: ['Vehicle finder', 'EMI calculator', 'Test-drive qualifier'],
    hotspots: [
      { id: 'a1', x: 35, y: 35, title: 'Powertrain & Style', capturedData: 'Electric vs Hybrid SUV interest' },
      { id: 'a2', x: 65, y: 70, title: 'Financing & Trade-in', capturedData: 'Monthly installment & trade-in valuation' },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Brands',
    subtitle: 'Product finders & preference segmentation',
    examples: ['Product finder', 'Promotional games with opt-in', 'Preference segmentation'],
    hotspots: [
      { id: 'm1', x: 30, y: 45, title: 'Customer Profile', capturedData: 'Skin type, style, or diet preference' },
      { id: 'm2', x: 70, y: 55, title: 'Reward Delivery', capturedData: 'WhatsApp voucher claim code' },
    ],
  },
];
