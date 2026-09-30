import React, { useState } from 'react';
import { 
  Megaphone, 
  Gamepad2, 
  UserCheck, 
  Filter, 
  Target, 
  Cpu, 
  Zap, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export const ConversionFramework: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(3); // default to step 4 (Qualify)

  const steps = [
    {
      num: '01',
      title: 'Attract',
      icon: Megaphone,
      summary: 'Ad & Traffic Inbound',
      channels: ['Meta & Google Ads', 'Organic Landing Pages', 'QR Codes at Events', 'Email Campaigns'],
      whatHappens: 'Visitors land on an engaging interactive experience instead of an intimidating long-form or dry pitch.',
      metricUplift: '84% Lower Initial Bounce Rate',
    },
    {
      num: '02',
      title: 'Engage',
      icon: Gamepad2,
      summary: 'Interactive Mechanics',
      channels: ['Quiz Funnels', 'Assessments & Triage', 'ROI & Cost Calculators', 'Recommendation Finders'],
      whatHappens: 'Prospects answer 3–5 tailored micro-questions that give them immediate clarity or personalized value.',
      metricUplift: '68% Funnel Completion Rate',
    },
    {
      num: '03',
      title: 'Capture',
      icon: UserCheck,
      summary: 'High-Intent Opt-In',
      channels: ['Mobile / Phone', 'WhatsApp Verification', 'Business Email', 'First-Party Preferences'],
      whatHappens: 'Users willingly provide contact information to unlock their tailored recommendation or score.',
      metricUplift: '3.4x Higher Lead Opt-In vs Static Form',
    },
    {
      num: '04',
      title: 'Qualify',
      icon: Filter,
      summary: 'Intent & Fit Analysis',
      channels: ['Budget Bracket', 'Buying Urgency', 'Project Scope', 'Specific Constraints'],
      whatHappens: 'Lead Games.com captures explicit buying signals so you know exactly which leads match your Ideal Customer Profile.',
      metricUplift: 'Eliminates 90% of Unqualified Tyre-Kickers',
    },
    {
      num: '05',
      title: 'Score',
      icon: Target,
      summary: 'AI Lead Scoring',
      channels: ['0–100 Point Rating', 'Hot / Warm / Nurture', 'Decision Authority Fit', 'Deal Value Estimation'],
      whatHappens: 'Real-time algorithm grades the prospect and tags the lead with actionable sales intelligence.',
      metricUplift: 'Prioritizes Top 20% Highest-Value Leads',
    },
    {
      num: '06',
      title: 'Automate',
      icon: Cpu,
      summary: 'Multi-Channel Workflows',
      channels: ['WhatsApp Follow-Up', 'HubSpot / Salesforce Sync', 'Instant Sales Alert', 'Personalized PDF/Dossier'],
      whatHappens: 'Zero lag. High-scoring leads trigger instant WhatsApp conversations and calendar bookings.',
      metricUplift: '< 60-Second Lead Response Time',
    },
    {
      num: '07',
      title: 'Convert',
      icon: TrendingUp,
      summary: 'Closed Revenue',
      channels: ['Clinic Consultation', 'Property Site Visit', 'Executive SaaS Demo', 'Direct Transaction'],
      whatHappens: 'Your sales reps open conversations with complete context, closing deals faster with higher ticket sizes.',
      metricUplift: '+140% Closed Pipeline Growth',
    },
  ];

  return (
    <section id="framework" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            The Conversion Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            From Visitor to Qualified Opportunity
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            A cohesive 7-stage engine that turns passive browsing into deep buyer qualification and automated sales velocity.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-indigo-300 font-mono">
            <span>Play</span>
            <span>→</span>
            <span>Capture</span>
            <span>→</span>
            <span>Qualify</span>
            <span>→</span>
            <span>Score</span>
            <span>→</span>
            <span>Automate</span>
            <span>→</span>
            <span>Convert</span>
          </div>
        </div>

        {/* Step Selector Horizontal Bar (Desktop) & Grid (Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {steps.map((st, idx) => {
            const isSelected = selectedStep === idx;
            const Icon = st.icon;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-600/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {st.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{st.title}</div>
                  <div className="text-[10px] text-slate-400 truncate">{st.summary}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector Box */}
        <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-0.5 rounded-md">
                  Step {steps[selectedStep].num}
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  {steps[selectedStep].title}: {steps[selectedStep].summary}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {steps[selectedStep].whatHappens}
              </p>

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Drivers & Integrations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {steps[selectedStep].channels.map((ch, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-200"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase">Impact Metric</span>
                <span className="text-xs text-emerald-400 font-medium">Verified Commercial Outcome</span>
              </div>

              <div className="text-2xl font-extrabold text-white font-mono-numbers">
                {steps[selectedStep].metricUplift}
              </div>

              <p className="text-xs text-slate-400">
                Data collected during this stage feeds directly into the AI scoring algorithm and automated dispatch triggers.
              </p>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-slate-400">Next Pipeline Stage:</span>
                <button
                  onClick={() => setSelectedStep((selectedStep + 1) % steps.length)}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  <span>Advance to {steps[(selectedStep + 1) % steps.length].title}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
