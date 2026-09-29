export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  focus: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description: 'We align on your commercial goals, target audience, sales process, and what criteria define a truly qualified lead for your team.',
    focus: 'Alignment on ICP and qualification rules',
  },
  {
    step: 2,
    title: 'Design',
    description: 'We develop the interactive experience concept, question sequencing, transparent scoring rules, and high-converting result screens.',
    focus: 'Psychology, user journey & conversion copy',
  },
  {
    step: 3,
    title: 'Build & Connect',
    description: 'We build the responsive interactive funnel, develop the dedicated landing page, and configure CRM, WhatsApp, and email automations.',
    focus: 'Custom development & system integration',
  },
  {
    step: 4,
    title: 'Launch',
    description: 'We execute the go-live deployment, verify tracking and conversion events, and connect to ad campaigns where in scope.',
    focus: 'Go-live testing & attribution setup',
  },
  {
    step: 5,
    title: 'Optimize',
    description: 'We continuously analyze question drop-offs, completion rates, and lead quality signals to iterate and improve conversion performance.',
    focus: 'CRO, question performance & lead feedback',
  },
];
