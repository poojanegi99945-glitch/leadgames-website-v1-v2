import React, { useState } from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingProps {
  onStartFunnel: () => void;
  onBookDemo: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onStartFunnel, onBookDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Single Campaign',
      priceMonthly: 119,
      priceAnnual: 89,
      description: 'Ideal for early-stage founders and single-campaign marketing tests.',
      features: [
        'Up to 3 Active Interactive Funnels',
        '2,500 Qualified Lead Submissions / mo',
        'Basic Quiz & Assessment Templates',
        'Standard Email Follow-up',
        'Google Sheets & Zapier Integration',
        'Standard Support',
      ],
      cta: 'Start 14-Day Free Trial',
      highlighted: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      badge: 'Most Popular',
      priceMonthly: 299,
      priceAnnual: 239,
      description: 'Built for scaling performance marketing teams and high-ticket service brands.',
      features: [
        'Unlimited Interactive Funnels & Quizzes',
        '15,000 Qualified Lead Submissions / mo',
        'AI Lead Qualification & Intent Scoring',
        'Instant WhatsApp Follow-Up Triggers',
        'Native CRM Sync (HubSpot, Salesforce, Zoho)',
        'A/B Multivariate Testing & Drop-off Heatmaps',
        'Custom Brand Kits, Fonts & Styling',
        'Priority Slack & Email Support',
      ],
      cta: 'Start Growth Free Trial',
      highlighted: true,
    },
    {
      id: 'business',
      name: 'Business',
      badge: 'Multi-Brand',
      priceMonthly: 699,
      priceAnnual: 549,
      description: 'For established enterprises, multi-location clinics, and large real estate developers.',
      features: [
        'Everything in Growth + Unlimited Leads',
        'Multi-Domain & White-Label Embeds',
        'Advanced Multi-Tier AI Scoring Rules',
        'Dedicated WhatsApp Business API Routing',
        'Custom Webhooks & REST API Access',
        'Role-Based Access Control (RBAC)',
        'HIPAA & GDPR Compliance Pack',
        'Dedicated Technical Account Manager',
      ],
      cta: 'Scale with Business',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Predictable Pricing for Qualified Pipeline Growth
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Start with our 14-day free trial. Scale as your inbound lead qualification and sales velocity expand.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.2 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => {
            const price = billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly;
            return (
              <div
                key={p.id}
                className={`rounded-2xl border p-8 flex flex-col justify-between transition-all relative ${
                  p.highlighted
                    ? 'border-indigo-500/80 bg-slate-900/90 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/40'
                    : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-sky-400 text-slate-950 text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
                    {p.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display">{p.name}</h3>
                    {!p.highlighted && (
                      <span className="text-[11px] text-slate-400 font-medium">{p.badge}</span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-6 mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-mono-numbers">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-400">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {billingCycle === 'annual' ? 'Billed annually · 14-day free trial' : 'Billed monthly · Cancel anytime'}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 text-xs text-slate-300">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={p.highlighted ? onStartFunnel : onBookDemo}
                  className={`w-full py-3 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    p.highlighted
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Managed Agency Banner */}
        <div className="mt-12 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
              Need Done-For-You Strategy & Build?
            </span>
            <h4 className="text-lg font-bold text-white font-display">
              Enterprise Bespoke Funnel & Managed Campaign Retainers
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              For organizations with $50k+ monthly ad spend seeking end-to-end custom development, copywriting, bespoke interactive design, and full-funnel CRO management.
            </p>
          </div>

          <button
            onClick={onBookDemo}
            className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs rounded-xl transition-all whitespace-nowrap shadow-lg cursor-pointer"
          >
            Schedule Enterprise Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
