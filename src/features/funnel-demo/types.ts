export type Option = {
  id: string;
  label: string;
  hint?: string;
  score: number;
  tags?: string[];
};

export type StepType = 'single' | 'multi' | 'slider' | 'contact';

export type Step = {
  id: string;
  question: string;
  helper?: string;
  type: StepType;
  options?: Option[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  unit?: string;
};

export type BandId = 'hot' | 'warm' | 'cold';

export type Band = {
  id: BandId;
  min: number;
  label: string;
  action: string;
};

export type FunnelResult = {
  headline: string;
  body: string;
  cta: string;
  experienceRecommendation?: string;
};

export type FunnelConfig = {
  id: string;
  title: string;
  steps: Step[];
  bands: Band[];
  result: (answers: Record<string, any>, score: number, band: Band) => FunnelResult;
  disclaimer?: string;
};

export function calculateNormalizedScore(config: FunnelConfig, answers: Record<string, any>): number {
  let rawScore = 0;
  let maxPossibleScore = 0;

  config.steps.forEach((step) => {
    if (step.options && step.options.length > 0) {
      const stepMax = Math.max(...step.options.map((o) => o.score));
      maxPossibleScore += stepMax;

      const userVal = answers[step.id];
      if (step.type === 'single' && typeof userVal === 'string') {
        const match = step.options.find((o) => o.id === userVal);
        if (match) rawScore += match.score;
      } else if (step.type === 'multi' && Array.isArray(userVal)) {
        userVal.forEach((optId) => {
          const match = step.options?.find((o) => o.id === optId);
          if (match) rawScore += match.score;
        });
      }
    }
  });

  if (maxPossibleScore === 0) return 75; // fallback
  const normalized = Math.round((rawScore / maxPossibleScore) * 100);
  return Math.min(Math.max(normalized, 10), 98);
}

export function getLeadBand(score: number, bands: Band[]): Band {
  const sorted = [...bands].sort((a, b) => b.min - a.min);
  for (const band of sorted) {
    if (score >= band.min) return band;
  }
  return sorted[sorted.length - 1];
}
