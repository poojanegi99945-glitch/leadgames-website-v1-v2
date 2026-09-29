import React, { useState } from 'react';
import { 
  Bot, 
  Target, 
  Flame, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Sliders, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  UserCheck 
} from 'lucide-react';
import { LeadSegment, LeadIntent } from '../types';

export const AILeadQualification: React.FC = () => {
  // Simulator input parameters
  const [budgetTier, setBudgetTier] = useState<'tier1' | 'tier2' | 'tier3' | 'tier4'>('tier3');
  const [timeline, setTimeline] = useState<'immediate' | 'month' | 'quarter' | 'curious'>('immediate');
  const [urgency, setUrgency] = useState<'critical' | 'moderate' | 'low'>('critical');
  const [role, setRole] = useState<'decision_maker' | 'department_head' | 'researcher'>('decision_maker');

  // Compute lead score dynamically
  const calculateScore = () => {
    let score = 20;

    // Budget points (max 30)
    if (budgetTier === 'tier4') score += 30;
    else if (budgetTier === 'tier3') score += 25;
    else if (budgetTier === 'tier2') score += 15;
    else score += 5;

    // Timeline points (max 25)
    if (timeline === 'immediate') score += 25;
    else if (timeline === 'month') score += 18;
    else if (timeline === 'quarter') score += 10;
    else score += 2;

    // Urgency points (max 25)
    if (urgency === 'critical') score += 25;
    else if (urgency === 'moderate') score += 15;
    else score += 5;

    // Authority points (max 20)
    if (role === 'decision_maker') score += 20;
    else if (role === 'department_head') score += 12;
    else score += 2;

    return Math.min(score, 98);
  };

  const score = calculateScore();

  // Determine segment and intent
  let segment: LeadSegment = 'Hot';
  let intent: LeadIntent = 'High';
  let recommendedAction = 'Instant VIP WhatsApp routing & Senior Director call';
  let segmentColor = 'text-emerald-400 border-emerald-800 bg-emerald-950/70';

  if (score < 55) {
    segment = 'Nurture';
    intent = 'Low';
    recommendedAction = 'Add to automated 5-step email educational newsletter';
    segmentColor = 'text-slate-400 border-slate-700 bg-slate-900';
  } else if (score < 78) {
    segment = 'Warm';
    intent = 'Medium';
    recommendedAction = 'Dispatch product case study and schedule calendar link';
    segmentColor = 'text-amber-400 border-amber-800 bg-amber-950/70';
  }

  return (
    <section id="qualification" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Intelligent Triage & Scoring
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Stop Treating Every Lead the Same.
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            TezPlay algorithms analyze responses, buying authority, timeline, and zero-party intent to calculate precise lead intelligence in real time.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-indigo-400" />
                <span>Adjust Qualification Signals</span>
              </span>
              <span className="text-[11px] text-indigo-400 font-mono">Live Simulator</span>
            </div>

            {/* Signal 1: Budget Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Declared Budget / Investment Capacity:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'tier1', label: '< $1,000' },
                  { id: 'tier2', label: '$1k – $5k' },
                  { id: 'tier3', label: '$5k – $20k' },
                  { id: 'tier4', label: '$20k+ Enterprise' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudgetTier(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      budgetTier === item.id
                        ? 'border-indigo-500 bg-indigo-600/20 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Signal 2: Implementation Urgency */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Purchase / Deployment Timeline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'immediate', label: '< 14 Days' },
                  { id: 'month', label: '1–2 Months' },
                  { id: 'quarter', label: '3–6 Months' },
                  { id: 'curious', label: 'Exploring' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      timeline === item.id
                        ? 'border-indigo-500 bg-indigo-600/20 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Signal 3: Urgency Level */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Pain Point Severity:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'critical', label: 'Critical / Painful' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'low', label: 'Low Urgency' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setUrgency(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      urgency === item.id
                        ? 'border-indigo-500 bg-indigo-600/20 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Signal 4: Decision Authority */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Buyer Decision Authority:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'decision_maker', label: 'Final Decision Maker' },
                  { id: 'department_head', label: 'Department Head' },
                  { id: 'researcher', label: 'Internal Evaluator' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRole(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      role === item.id
                        ? 'border-indigo-500 bg-indigo-600/20 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Lead Scorecard & Dispatch Card */}
          <div className="lg:col-span-6 rounded-2xl border border-indigo-500/40 bg-slate-900/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Dynamic Lead Profile</div>
                  <div className="text-lg font-bold text-white font-display mt-0.5">Alex Mercer</div>
                </div>
                <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${segmentColor}`}>
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{segment} Lead</span>
                </div>
              </div>

              {/* Main Score Display */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400">TezPlay AI Lead Score</div>
                  <div className="text-3xl font-extrabold text-white font-mono-numbers mt-1 flex items-baseline gap-1">
                    <span>{score}</span>
                    <span className="text-sm font-normal text-slate-400">/ 100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        score >= 78 ? 'bg-emerald-400' : score >= 55 ? 'bg-amber-400' : 'bg-slate-500'
                      }`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400">Buyer Intent Rating</div>
                  <div className={`text-xl font-bold mt-1.5 ${
                    intent === 'High' ? 'text-emerald-400' : intent === 'Medium' ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {intent} Intent
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {intent === 'High' ? 'Ready for sales closing' : intent === 'Medium' ? 'Needs case studies' : 'Low sales readiness'}
                  </div>
                </div>
              </div>

              {/* Automated Next Step Trigger */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/50 space-y-2 text-xs">
                <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span>Automated Workflow Routing:</span>
                </div>
                <p className="text-slate-300">
                  {recommendedAction}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Rule-based + behavioural intent engine</span>
              <span className="text-indigo-400 font-medium">Synced to CRM & WhatsApp</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
