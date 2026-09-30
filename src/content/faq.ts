export interface FaqItem {
  q: string;
  a: string;
}

export const faqList: FaqItem[] = [
  {
    q: 'What does Lead Games.com do?',
    a: 'We design, build and manage interactive lead-generation campaigns (quizzes, assessments, calculators, games and recommendation funnels) that capture and qualify leads and automate follow-up.',
  },
  {
    q: 'Is Lead Games.com software I can subscribe to?',
    a: 'No. Lead Games.com is a done-for-you service. We build, launch and manage the campaign with you.',
  },
  {
    q: 'What is an interactive lead funnel?',
    a: 'A short sequence of questions or interactions that ends with a personalized result and a lead capture, instead of a plain form.',
  },
  {
    q: 'How do you qualify leads?',
    a: 'We collect details such as need, budget, location and timeline, then apply scoring rules agreed with your team to label each lead Hot, Warm or Cold.',
  },
  {
    q: 'Do you use AI?',
    // TODO(owner): confirm AI wording
    a: 'We use transparent, rule-based scoring as a foundation. // TODO(owner): confirm AI wording. Any AI-assisted recommendations would be described in your proposal.',
  },
  {
    q: 'Which CRMs and tools can you connect?',
    a: 'We can connect leads to systems such as HubSpot, Zoho, Salesforce and Twenty CRM, plus email and WhatsApp Business, depending on your setup and access.',
  },
  {
    q: 'How does WhatsApp follow-up work?',
    a: 'After a lead gives consent, an automated message can be sent. We only contact people who have opted in and follow WhatsApp Business policies.',
  },
  {
    q: 'Do you guarantee results?',
    a: 'No. Results depend on offer, audience, budget and follow-up. We focus on measurable, well-qualified lead flow and continuous optimization.',
  },
  {
    q: 'What does it cost?',
    a: "Every campaign is scoped individually. Request a proposal and we'll outline scope and pricing.",
  },
  {
    q: 'How long does a campaign take to launch?',
    a: 'It depends on scope and integrations; we confirm a timeline in your proposal.',
  },
];
