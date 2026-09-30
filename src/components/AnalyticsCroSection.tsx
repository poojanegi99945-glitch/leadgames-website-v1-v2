import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Target, ArrowDownRight, Eye, MousePointerClick, CheckCircle } from 'lucide-react';

export const AnalyticsCroSection: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const questionSteps = [
    { name: '1. Primary Goal', rate: 96, drop: 4 },
    { name: '2. Budget Bracket', rate: 89, drop: 7 },
    { name: '3. Buying Urgency', rate: 84, drop: 5 },
    { name: '4. Decision Role', rate: 78, drop: 6 },
    { name: '5. Contact & WhatsApp', rate: 72, drop: 6 },
  ];

  return (
    <section id="analytics" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Funnel Intelligence & CRO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Understand What Happens Between the Click and the Conversion
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Static analytics only tell you that 98% of people bounced. Lead Games.com gives you full question-level visibility, intent distribution, and lead quality attribution.
          </p>
        </div>

        {/* Analytics Dashboard Mockup Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Lead Games.com Funnel Analytics
              </div>
              <div className="text-lg font-bold text-white font-display mt-0.5">
                Campaign: Q3 Global Growth & Lead Qualification Funnel
              </div>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              {(['7d', '30d', '90d'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeRange(t)}
                  className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                    timeRange === t
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="text-xs text-slate-400">Total Funnel Visits</div>
              <div className="text-2xl font-bold text-white font-mono-numbers mt-1">42,850</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono-numbers">
                <span>+24.8% vs previous period</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="text-xs text-slate-400">Funnel Completion Rate</div>
              <div className="text-2xl font-bold text-white font-mono-numbers mt-1">72.4%</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono-numbers">
                <span>3.6x higher than web forms</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="text-xs text-slate-400">High-Intent Leads</div>
              <div className="text-2xl font-bold text-emerald-400 font-mono-numbers mt-1">5,820</div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono-numbers">
                <span>Avg AI Score: 86.4 / 100</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="text-xs text-slate-400">Instant WhatsApp Opt-In</div>
              <div className="text-2xl font-bold text-indigo-400 font-mono-numbers mt-1">68.2%</div>
              <div className="text-[11px] text-indigo-300 mt-1 font-mono-numbers">
                <span>&lt; 45s response latency</span>
              </div>
            </div>
          </div>

          {/* Question-by-Question Step Heatmap */}
          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-300">
                Step-by-Step Funnel Retention & Drop-off Heatmap
              </span>
              <span className="text-slate-400">Identifies exact question optimization points</span>
            </div>

            <div className="space-y-3">
              {questionSteps.map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">{step.name}</span>
                    <span className="text-white font-mono-numbers font-semibold">
                      {step.rate}% <span className="text-slate-500 font-normal">(-{step.drop}%)</span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-500"
                      style={{ width: `${step.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
