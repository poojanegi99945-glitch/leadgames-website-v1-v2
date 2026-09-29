export type LeadIntent = 'High' | 'Medium' | 'Low';
export type LeadSegment = 'Hot' | 'Warm' | 'Nurture';

export interface LeadScoreProfile {
  name: string;
  email?: string;
  phone?: string;
  score: number;
  intent: LeadIntent;
  segment: LeadSegment;
  budgetStatus: string;
  timeline: string;
  primaryGoal: string;
  recommendedAction: string;
  details: Record<string, string>;
}

export type ExperienceCategory =
  | 'all'
  | 'quiz'
  | 'assessment'
  | 'calculator'
  | 'recommendation'
  | 'promotional';

export interface ExperienceItem {
  id: string;
  title: string;
  category: ExperienceCategory;
  headline: string;
  description: string;
  badge: string;
  completionRate: string;
  avgScore: string;
  bestFor: string;
  interactiveType: 'quiz' | 'assessment' | 'calculator' | 'wheel' | 'scratch' | 'finder';
}

export interface IndustrySolution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  qualificationSignals: string[];
  sampleUseCases: string[];
  outcomes: { label: string; value: string }[];
  demoType: 'healthcare' | 'realestate' | 'saas' | 'education' | 'automotive' | 'ecommerce';
}

export interface TemplateItem {
  id: string;
  title: string;
  industry: string;
  type: string;
  questionsCount: number;
  avgCompletion: string;
  description: string;
  previewSteps: string[];
}
