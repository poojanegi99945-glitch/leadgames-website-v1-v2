export interface CaseStudy {
  id: string;
  clientIndustry: string;
  challenge: string;
  campaign: string;
  experience: string;
  qualificationApproach: string;
  automation: string;
  results: string;
  learning: string;
}

// Data-driven array: outputs nothing on the site until real case studies are approved and added here.
export const caseStudies: CaseStudy[] = [];
