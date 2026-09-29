import { FunnelConfig, Band } from './types';

export const defaultBands: Band[] = [
  {
    id: 'hot',
    min: 75,
    label: 'Hot Lead',
    action: 'Priority immediate outreach via WhatsApp or phone call',
  },
  {
    id: 'warm',
    min: 45,
    label: 'Warm Lead',
    action: 'Provide tailored case study and invite to calendar booking',
  },
  {
    id: 'cold',
    min: 0,
    label: 'Cold / Nurture',
    action: 'Add to automated educational email nurture sequence',
  },
];

export const heroFunnelConfig: FunnelConfig = {
  id: 'hero',
  title: 'Find Your Interactive Campaign Strategy',
  bands: defaultBands,
  steps: [
    {
      id: 'goal',
      question: "What's your main goal?",
      type: 'single',
      options: [
        { id: 'leads', label: 'Generate leads', hint: 'High-volume acquisition', score: 25 },
        { id: 'qualify', label: 'Qualify prospects', hint: 'Pre-screen budget & intent', score: 30 },
        { id: 'sales', label: 'Increase sales', hint: 'Direct conversion boost', score: 25 },
        { id: 'engage', label: 'Engage customers', hint: 'Interactive brand loyalty', score: 20 },
      ],
    },
    {
      id: 'industry',
      question: 'Your industry?',
      type: 'single',
      options: [
        { id: 'healthcare', label: 'Healthcare & Clinics', score: 25 },
        { id: 'realestate', label: 'Real Estate', score: 25 },
        { id: 'saas', label: 'SaaS & ERP', score: 25 },
        { id: 'education', label: 'Education', score: 20 },
        { id: 'automotive', label: 'Automotive', score: 20 },
        { id: 'ecommerce', label: 'E-commerce', score: 20 },
        { id: 'other', label: 'Other B2B / High-Ticket', score: 20 },
      ],
    },
    {
      id: 'volume',
      question: 'Monthly enquiries you handle?',
      type: 'single',
      options: [
        { id: 'under50', label: 'Under 50', score: 15 },
        { id: '50-200', label: '50 – 200', score: 22 },
        { id: '200-1000', label: '200 – 1,000', score: 28 },
        { id: '1000plus', label: '1,000+', score: 30 },
      ],
    },
    {
      id: 'followup',
      question: 'How do you follow up today?',
      type: 'single',
      options: [
        { id: 'manual_calls', label: 'Manual phone calls', score: 20 },
        { id: 'manual_whatsapp', label: 'WhatsApp manually', score: 22 },
        { id: 'crm_sequences', label: 'CRM sequences', score: 28 },
        { id: 'no_process', label: 'No fixed process', score: 18 },
      ],
    },
  ],
  result: (answers, score, band) => {
    let rec = 'Interactive Quiz & Lead Scoring Funnel';
    if (answers.industry === 'healthcare') rec = 'Clinical Intake Assessment & WhatsApp Triage Funnel';
    else if (answers.industry === 'realestate') rec = 'Property Budget Matcher & Site-Visit Booking Funnel';
    else if (answers.industry === 'saas') rec = 'B2B Software ROI Calculator & Demo Triage Funnel';
    else if (answers.goal === 'engage') rec = 'Gamified Promotion / Spin & Win Reward Campaign';

    return {
      headline: `Suggested starting point: ${rec}`,
      experienceRecommendation: rec,
      body: `Based on your profile, an intent-driven interactive funnel with rule-based qualification will filter out tyre-kickers and automate WhatsApp / CRM dispatch.`,
      cta: 'Request a proposal to build this for you',
    };
  },
};

export const healthcareFunnelConfig: FunnelConfig = {
  id: 'healthcare-care-path',
  title: 'Clinical Consultation Intake Assessment',
  disclaimer: 'Informational only. This is not a medical diagnosis or clinical advice.',
  bands: defaultBands,
  steps: [
    {
      id: 'concern',
      question: 'Area of primary aesthetic or clinical interest?',
      type: 'single',
      options: [
        { id: 'skin', label: 'Skin Health & Laser Care', score: 20 },
        { id: 'hair', label: 'Hair Restoration & Scalp Care', score: 20 },
        { id: 'dental', label: 'Orthodontics & Aesthetic Dentistry', score: 20 },
        { id: 'wellness', label: 'Preventative Wellness & Longevity', score: 20 },
      ],
    },
    {
      id: 'duration',
      question: 'How long have you noticed this concern?',
      type: 'single',
      options: [
        { id: 'recent', label: 'Less than 1 month', score: 15 },
        { id: 'few_months', label: '1 to 6 months', score: 22 },
        { id: 'chronic', label: 'Over 6 months', score: 28 },
      ],
    },
    {
      id: 'prior_treatment',
      question: 'Have you received clinical treatment for this previously?',
      type: 'single',
      options: [
        { id: 'first_time', label: 'First time seeking clinical care', score: 25 },
        { id: 'past_treatment', label: 'Treated in the past, seeking new opinion', score: 28 },
        { id: 'home_remedies', label: 'Only over-the-counter / home products', score: 20 },
      ],
    },
    {
      id: 'urgency',
      question: 'How soon would you like to speak with a doctor or specialist?',
      type: 'single',
      options: [
        { id: 'urgent', label: 'Within the next 7 days', score: 30 },
        { id: 'moderate', label: 'Within 2 to 3 weeks', score: 20 },
        { id: 'research', label: 'Currently researching options', score: 10 },
      ],
    },
    {
      id: 'contact_time',
      question: 'Preferred consultation timing?',
      type: 'single',
      options: [
        { id: 'morning', label: 'Morning slot (9 AM – 12 PM)', score: 15 },
        { id: 'afternoon', label: 'Afternoon slot (12 PM – 4 PM)', score: 15 },
        { id: 'evening', label: 'Evening slot (4 PM – 8 PM)', score: 15 },
        { id: 'weekend', label: 'Weekend appointment only', score: 15 },
      ],
    },
  ],
  result: (answers, score, band) => ({
    headline: 'Consultation Suggested: Aesthetic & Specialist Triage',
    body: 'The clinic coordinator receives your symptom history, urgency, and preferred slot for instant WhatsApp booking.',
    cta: 'Discuss this healthcare campaign in a proposal',
  }),
};

export const realEstateFunnelConfig: FunnelConfig = {
  id: 'real-estate-finder',
  title: 'Property Matcher & Buyer Budget Qualifier',
  bands: defaultBands,
  steps: [
    {
      id: 'budget',
      question: "What's your target property budget?",
      type: 'single',
      options: [
        { id: 'b1', label: '₹40L – ₹60L', score: 15 },
        { id: 'b2', label: '₹60L – ₹80L', score: 20 },
        { id: 'b3', label: '₹80L – ₹1Cr', score: 25 },
        { id: 'b4', label: '₹1Cr+ Luxury', score: 30 },
      ],
    },
    {
      id: 'location',
      question: 'Preferred geographic zone?',
      type: 'single',
      options: [
        { id: 'central', label: 'City Central / Downtown', score: 20 },
        { id: 'tech_corridor', label: 'IT & Tech Corridor', score: 20 },
        { id: 'suburbs', label: 'Emerging Suburban Enclave', score: 20 },
        { id: 'gated', label: 'Scenic Gated Community', score: 20 },
      ],
    },
    {
      id: 'property_type',
      question: 'Property configuration?',
      type: 'single',
      options: [
        { id: '2bhk', label: '2 BHK Apartment', score: 15 },
        { id: '3bhk', label: '3 BHK Premium Apartment', score: 25 },
        { id: 'villa', label: 'Independent Villa / Row House', score: 30 },
        { id: 'plot', label: 'Residential Plot / Land', score: 18 },
      ],
    },
    {
      id: 'timeline',
      question: 'When are you planning to finalize purchase?',
      type: 'single',
      options: [
        { id: 't1', label: '< 1 month (Immediate)', score: 30 },
        { id: 't2', label: '1 – 3 months', score: 25 },
        { id: 't3', label: '3 – 6 months', score: 12 },
        { id: 't4', label: '6+ months (Exploring)', score: 4 },
      ],
    },
    {
      id: 'purpose',
      question: 'Primary purpose of purchase?',
      type: 'single',
      options: [
        { id: 'self_use', label: 'Self-use / Family residence', score: 10 },
        { id: 'investment', label: 'Rental income / Capital appreciation', score: 8 },
      ],
    },
    {
      id: 'site_visit',
      question: 'Would you be interested in a scheduled site tour?',
      type: 'single',
      options: [
        { id: 'yes_weekend', label: 'Yes, this upcoming weekend', score: 25 },
        { id: 'yes_weekday', label: 'Yes, on a weekday afternoon', score: 20 },
        { id: 'virtual_first', label: 'Share video walkthrough first', score: 15 },
      ],
    },
  ],
  result: (answers, score, band) => ({
    headline: '3 Matching Properties Identified in Verified Inventory',
    body: 'The real estate advisory team receives budget tier, bedroom specification, and site tour readiness before dialing.',
    cta: 'Discuss this real estate campaign in a proposal',
  }),
};

export const saasErpFunnelConfig: FunnelConfig = {
  id: 'saas-erp-finder',
  title: 'B2B Software Solution & ROI Triage',
  bands: defaultBands,
  steps: [
    {
      id: 'company_size',
      question: 'Total team / company headcount?',
      type: 'single',
      options: [
        { id: 's1', label: '10 – 50 employees', score: 12 },
        { id: 's2', label: '50 – 200 employees', score: 22 },
        { id: 's3', label: '200 – 1,000 employees', score: 28 },
        { id: 's4', label: '1,000+ enterprise', score: 30 },
      ],
    },
    {
      id: 'industry',
      question: 'Your operating industry?',
      type: 'single',
      options: [
        { id: 'mfg', label: 'Manufacturing & Distribution', score: 20 },
        { id: 'retail', label: 'Retail & Multi-Store Commerce', score: 20 },
        { id: 'services', label: 'Professional & Technical Services', score: 20 },
        { id: 'healthcare', label: 'Healthcare & Pharma', score: 20 },
      ],
    },
    {
      id: 'current_software',
      question: 'Current operational system?',
      type: 'single',
      options: [
        { id: 'spreadsheets', label: 'Spreadsheets & Manual Paperwork', score: 25 },
        { id: 'point_solutions', label: 'Disconnected Point Solutions', score: 22 },
        { id: 'legacy_erp', label: 'Older On-Premise Legacy ERP', score: 28 },
      ],
    },
    {
      id: 'main_challenge',
      question: 'Primary operational pain point?',
      type: 'single',
      options: [
        { id: 'inventory', label: 'Inventory tracking & stockouts', score: 25 },
        { id: 'reporting', label: 'Slow month-end financial reporting', score: 25 },
        { id: 'lead_followup', label: 'Slow lead qualification & sales leaks', score: 30 },
      ],
    },
    {
      id: 'budget_range',
      question: 'Expected annual software budget bracket?',
      type: 'single',
      options: [
        { id: 'b1', label: '$5k – $15k / year', score: 15 },
        { id: 'b2', label: '$15k – $35k / year', score: 25 },
        { id: 'b3', label: '$35k+ / year', score: 30 },
      ],
    },
    {
      id: 'timeline',
      question: 'Target deployment timeline?',
      type: 'single',
      options: [
        { id: 't1', label: 'Immediate (< 30 days)', score: 30 },
        { id: 't2', label: 'Next quarter (30 – 90 days)', score: 22 },
        { id: 't3', label: 'Exploring options for next fiscal year', score: 10 },
      ],
    },
  ],
  result: (answers, score, band) => ({
    headline: 'Recommended Module Architecture: Custom Growth Stack',
    body: 'The enterprise solutions consultant receives organization size, core challenge, and budget parameters prior to the demo call.',
    cta: 'Discuss this B2B qualification funnel in a proposal',
  }),
};
