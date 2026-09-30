export const serviceGroups = [
  { title: "Gamified & Interactive Lead Generation", promise: "Give visitors something worth completing.", links: [["Gamified lead generation", "/services/gamified-lead-generation"], ["Interactive lead funnels", "/services/interactive-lead-funnels"], ["Quiz lead generation", "/services/quiz-lead-generation"]] },
  { title: "Assessments & Recommendations", promise: "Score, calculate and recommend from real answers.", links: [["Assessment funnels", "/services/assessment-funnels"], ["Interactive calculators", "/services/interactive-calculators"], ["Recommendation funnels", "/services/recommendation-funnels"]] },
  { title: "Lead Qualification & Scoring", promise: "Know who’s ready before your team calls.", links: [["Lead qualification funnels", "/services/lead-qualification-funnels"], ["Lead scoring", "/services/lead-scoring"]] },
  { title: "CRM & Follow-up Automation", promise: "Send the right message when a lead qualifies.", links: [["WhatsApp automation", "/services/whatsapp-lead-automation"], ["CRM integration", "/services/crm-integration"], ["Marketing automation", "/services/marketing-automation"]] },
  { title: "Campaign Development & Optimization", promise: "Landing pages, ads and analytics working together.", links: [["Landing pages", "/services/landing-page-development"], ["Campaign management", "/services/campaign-management"], ["Analytics & CRO", "/services/analytics-and-cro"]] },
] as const;

export const industries = [
  { name: "Healthcare", slug: "healthcare", example: "Care-path assessments", items: ["Care-path assessment", "Appointment qualifier", "Service finder"] },
  { name: "Real Estate", slug: "real-estate", example: "Property finders", items: ["Property finder", "Budget matcher", "Site-visit qualifier"] },
  { name: "SaaS & ERP", slug: "saas-erp", example: "Software selectors", items: ["Module selector", "Readiness check", "ROI calculator"] },
  { name: "Education", slug: "education", example: "Course finders", items: ["Course finder", "Career quiz", "Admissions qualifier"] },
  { name: "Automotive", slug: "automotive", example: "EMI calculators", items: ["EMI calculator", "Model matcher", "Test-drive qualifier"] },
  { name: "E-commerce", slug: "ecommerce", example: "Product quizzes", items: ["Product quiz", "Gift finder", "Offer game"] },
] as const;

export const faqs = [
  ["What does Lead Games.com do?", "We design, build and manage interactive lead-generation campaigns—quizzes, assessments, calculators, games and recommendation funnels—that capture and qualify leads and automate follow-up."],
  ["Is Lead Games.com software I can subscribe to?", "No. Lead Games.com is a done-for-you service. We build, launch and manage the campaign with you."],
  ["What is an interactive lead funnel?", "A short sequence of questions or interactions that ends with a personalized result and a lead capture, instead of a plain form."],
  ["How do you qualify leads?", "We collect details such as need, budget, location and timeline, then apply scoring rules agreed with your team to label each lead Hot, Warm or Cold."],
  ["Do you use AI?", "We use transparent, rule-based scoring as a foundation. Any AI-assisted recommendations would be described in your proposal."], // TODO(owner): confirm AI wording
  ["Which CRMs and tools can you connect?", "We can connect leads to systems such as HubSpot, Zoho, Salesforce and Twenty CRM, plus email and WhatsApp Business, depending on your setup and access."],
  ["How does WhatsApp follow-up work?", "After a lead gives consent, an automated message can be sent. We only contact people who have opted in, and we follow WhatsApp Business policies."],
  ["Do you guarantee results?", "No. Results depend on offer, audience, budget and follow-up. We focus on measurable, well-qualified lead flow and continuous optimization."],
  ["What does it cost?", "Every campaign is scoped individually. Request a proposal and we’ll outline scope and pricing."],
  ["How long does a campaign take to launch?", "It depends on scope and integrations; we confirm a timeline in your proposal."],
] as const;

export const stubRoutes: Record<string, { title: string; intro: string }> = {
  "/services": { title: "Interactive Lead Generation Services", intro: "Explore the campaigns, qualification systems and follow-up journeys we build and manage." },
  "/industries": { title: "Industry Solutions", intro: "Interactive lead journeys shaped around how your customers decide." },
  "/sample-experiences": { title: "Sample Experiences", intro: "Try examples of the quizzes, assessments, calculators and games we build." },
  "/how-we-work": { title: "How We Work", intro: "A clear path from campaign idea to launch and ongoing optimization." },
  "/about": { title: "About Lead Games.com", intro: "We help teams learn more from every lead interaction." },
  "/case-studies": { title: "Case Studies", intro: "We’re preparing detailed case studies. Request a proposal to discuss your campaign." },
  "/resources": { title: "Resources", intro: "Practical guidance on interactive lead generation, qualification and follow-up." },
  "/contact": { title: "Book a Strategy Call", intro: "Tell us what you want your next campaign to achieve." },
  "/request-proposal": { title: "Request a Proposal", intro: "Share your goals and we’ll shape a campaign scope around them." },
  "/privacy-policy": { title: "Privacy Policy", intro: "[ADD: approved privacy policy]" },
  "/terms": { title: "Terms", intro: "[ADD: approved terms]" },
  "/cookie-policy": { title: "Cookie Policy", intro: "[ADD: approved cookie policy]" },
};