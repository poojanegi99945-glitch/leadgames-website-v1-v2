import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Target, 
  Building,
  Send,
  MessageSquare
} from 'lucide-react';
import { LeadScoreProfile } from '../types';

interface HeroProps {
  onStartFunnel: () => void;
  onBookDemo: () => void;
}

export const HeroInteractiveDemo: React.FC<HeroProps> = ({ onStartFunnel, onBookDemo }) => {
  // Step in interactive hero demo (0 to 3, 4 is completed)
  const [currentStep, setCurrentStep] = useState(0);
  
  // Selected answers
  const [answers, setAnswers] = useState({
    goal: 'Qualify Existing Leads',
    industry: 'Real Estate / Property',
    dealValue: '$3,000 – $15,000',
    timeline: 'Within 14 Days',
  });

  const [submittedLead, setSubmittedLead] = useState(false);
  const [leadPhone, setLeadPhone] = useState('');

  // Dynamically calculate lead score based on answers
  const calculateScore = () => {
    let score = 65;
    if (answers.goal === 'Qualify Existing Leads' || answers.goal === 'Automate WhatsApp / CRM') score += 12;
    if (answers.industry === 'Real Estate / Property' || answers.industry === 'Healthcare / Clinic') score += 10;
    if (answers.dealValue === '$3,000 – $15,000' || answers.dealValue === '$15,000+') score += 10;
    if (answers.timeline === 'Within 14 Days') score += 8;
    return Math.min(score, 96);
  };

  const currentScore = calculateScore();

  const questions = [
    {
      title: 'What is your primary commercial goal?',
      key: 'goal' as const,
      options: [
        'Generate More Inbound Leads',
        'Qualify Existing Leads',
        'Automate WhatsApp / CRM',
        'Increase Sales Conversion Rate',
      ],
    },
    {
      title: 'Which industry vertical are you in?',
      key: 'industry' as const,
      options: [
        'Real Estate / Property',
        'Healthcare / Clinic',
        'SaaS & B2B Software',
        'Agency & Consulting',
      ],
    },
    {
      title: 'What is your average customer ticket or contract size?',
      key: 'dealValue' as const,
      options: [
        'Under $500',
        '$500 – $3,000',
        '$3,000 – $15,000',
        '$15,000+ Enterprise',
      ],
    },
    {
      title: 'What is your expected deployment timeline?',
      key: 'timeline' as const,
      options: [
        'Within 14 Days (Urgent)',
        '3–6 Weeks',
        'Next Quarter',
        'Just Researching',
      ],
    },
  ];

  const handleSelectOption = (option: string) => {
    const activeKey = questions[currentStep].key;
    setAnswers(prev => ({ ...prev, [activeKey]: option }));
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSubmittedLead(false);
    setLeadPhone('');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-4">
          <Zap className="w-3.5 h-3.5 fill-indigo-400" />
          <span>Interactive Lead Generation & AI Qualification</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">Play → Capture → Qualify → Convert</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display text-balance">
              Turn Clicks Into Play. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                Turn Play Into Qualified Leads.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Replace passive contact forms with interactive quizzes, clinical assessments, ROI calculators, and gamified funnels that capture genuine buyer intent, calculate AI lead scores, and trigger automated multi-channel follow-up.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onStartFunnel}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Build Your First Funnel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onBookDemo}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 rounded-lg transition-all text-center cursor-pointer"
              >
                Book Live Walkthrough
              </button>
            </div>

            {/* Supporting Micro-Proof */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No-code experience builder
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Real-time lead scoring
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp & CRM ready
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Demo Simulator */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black/60 p-5 sm:p-7 backdrop-blur-xl">
              
              {/* Header Bar of Demo Simulator */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-medium text-slate-400 ml-2">
                    Lead Games.com Interactive Funnel Preview
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-indigo-400 flex items-center gap-1 transition-colors"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Progress & Step Indicator */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                  <span>Step {currentStep + 1} of 4</span>
                  <span className="text-indigo-400">
                    {Math.round(((currentStep + 1) / 4) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Main Interactive Question Area */}
              <div className="min-h-[220px]">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                  {questions[currentStep].title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {questions[currentStep].options.map((option, idx) => {
                    const activeKey = questions[currentStep].key;
                    const isSelected = answers[activeKey] === option;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option)}
                        className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm shadow-indigo-500/20'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                        }`}
                      >
                        <span className="line-clamp-2">{option}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected ? 'border-indigo-400 bg-indigo-500' : 'border-slate-700 group-hover:border-slate-500'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation between steps */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                    className="text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← Previous
                  </button>

                  {currentStep < 3 ? (
                    <button
                      onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Funnel Parameters Captured
                    </span>
                  )}
                </div>
              </div>

              {/* Dynamic Live Lead Intelligence & Scoring Card */}
              <div className="mt-5 pt-4 border-t border-slate-800/90 bg-slate-950/70 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Live Lead Intelligence
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded-md font-mono-numbers">
                    Hot Intent · High Priority
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">AI Lead Score</div>
                    <div className="text-lg font-bold text-white font-mono-numbers mt-0.5">
                      {currentScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Buyer Intent</div>
                    <div className="text-sm font-semibold text-emerald-400 mt-1">
                      High (Sales Ready)
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Segment Fit</div>
                    <div className="text-xs font-medium text-slate-200 mt-1 truncate" title={answers.industry}>
                      {answers.industry.split('/')[0]}
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Auto-Trigger</div>
                    <div className="text-xs font-medium text-indigo-300 mt-1 truncate">
                      WhatsApp + CRM
                    </div>
                  </div>
                </div>

                {/* Conversion Action */}
                {!submittedLead ? (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (leadPhone.trim()) setSubmittedLead(true);
                    }}
                    className="mt-3.5 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Enter mobile / WhatsApp for instant report..."
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      required
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
                    >
                      <span>Unlock Report</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                ) : (
                  <div className="mt-3.5 p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Report sent via WhatsApp! Lead record synced to CRM & assigned to VIP rep.</span>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
