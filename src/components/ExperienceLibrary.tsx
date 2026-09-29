import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  Calculator, 
  Compass, 
  RotateCw, 
  Gift, 
  ArrowRight, 
  Sparkles,
  Play,
  RotateCcw,
  Zap,
  Flame,
  Check
} from 'lucide-react';

export const ExperienceLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'quiz' | 'assessment' | 'calculator' | 'wheel' | 'scratch'>('quiz');
  
  // Interactive mini-experience states
  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  
  // Spin wheel state
  const [spinning, setSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wheelPrize, setWheelPrize] = useState<string | null>(null);

  // Scratch card state
  const [scratched, setScratched] = useState(false);

  // Mini calculator state
  const [monthlyTraffic, setMonthlyTraffic] = useState(15000);
  const [currentConversion, setCurrentConversion] = useState(1.5);

  const handleSpinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWheelPrize(null);
    const randomSpins = 5 + Math.floor(Math.random() * 4);
    const extraDegrees = [30, 90, 150, 210, 270, 330][Math.floor(Math.random() * 6)];
    const totalRotation = wheelRotation + randomSpins * 360 + extraDegrees;
    setWheelRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      const prizes = [
        'Free VIP Consultation Call',
        '20% Off Implementation',
        '1-Month Priority Support',
        '$500 Funnel Strategy Credit',
        'Free CRM Integration Audit',
      ];
      setWheelPrize(prizes[Math.floor(Math.random() * prizes.length)]);
    }, 2800);
  };

  const experienceTypes = [
    {
      id: 'quiz',
      title: 'Quiz Funnels',
      badge: 'Most Popular',
      category: 'Lead Qualification',
      description: 'Turn multi-choice questions into qualified buyer profiles. Perfect for discovering customer constraints and routing to sales.',
      completionRate: '72% Avg Completion',
      bestFor: 'Agencies, SaaS, Education, B2B',
      cta: 'Try Live Quiz',
    },
    {
      id: 'assessment',
      title: 'Assessment Funnels',
      badge: 'High Intent',
      category: 'Triage & Diagnostics',
      description: 'In-depth diagnostic triage that scores severity, readiness, and fit before scheduling professional consultations.',
      completionRate: '64% Avg Completion',
      bestFor: 'Healthcare, Clinics, Financial Advisors',
      cta: 'Try Assessment',
    },
    {
      id: 'calculator',
      title: 'Interactive Calculators',
      badge: 'High Conversion',
      category: 'ROI & Pricing Estimators',
      description: 'Prospects calculate personalized ROI, mortgage costs, or savings. Contact info is collected to email the detailed PDF breakdown.',
      completionRate: '81% Avg Completion',
      bestFor: 'Real Estate, Solar, FinTech, Enterprise Software',
      cta: 'Test Calculator',
    },
    {
      id: 'wheel',
      title: 'Spin & Win',
      badge: 'Viral Engagement',
      category: 'Gamified Promotions',
      description: 'Boost on-site engagement with an interactive wheel. Qualified contact details and WhatsApp opt-in are required to redeem winnings.',
      completionRate: '89% Participation',
      bestFor: 'E-commerce, Retail Events, Trade Shows',
      cta: 'Play Wheel',
    },
    {
      id: 'scratch',
      title: 'Scratch & Win',
      badge: 'Instant Rewards',
      category: 'Micro-Interactions',
      description: 'Simulate scratch-off cards that trigger dopamine and unlock exclusive discount codes with verified mobile numbers.',
      completionRate: '85% Participation',
      bestFor: 'Product Drops, Seasonal Sales, App Installs',
      cta: 'Scratch Card',
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Interactive Experience Library
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Build Experiences People Actually Want to Complete
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Replace boring forms with gamified, intent-driven formats that captivate visitors and deliver deep buyer qualification.
          </p>
        </div>

        {/* Format Selector Pills / Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {experienceTypes.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === item.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{item.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === item.id ? 'bg-indigo-500/80 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {item.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Playable Sandbox for the Selected Experience */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Tab 1: Quiz Funnel Interactive Sandbox */}
          {activeTab === 'quiz' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                  Interactive Quiz Demo
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Lead Qualification Quiz: What is your primary conversion bottleneck?
                </h3>
                <p className="text-sm text-slate-300">
                  Quiz funnels gather specific pain points. Depending on what the user answers, TezPlay branches logic and personalizes the follow-up pitch.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Visitors bounce without filling out our lead form',
                    'Sales reps waste 60% of their day calling unqualified leads',
                    'Slow lead response times (> 2 hours to first contact)',
                    'Poor attribution between ad campaigns and closed deals',
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuizAnswer(option)}
                      className={`w-full p-3 text-left rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                        quizAnswer === option
                          ? 'border-indigo-500 bg-indigo-950/40 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {quizAnswer === option && <Check className="w-4 h-4 text-indigo-400 shrink-0" />}
                    </button>
                  ))}
                </div>

                {quizAnswer && (
                  <div className="p-3.5 rounded-xl bg-indigo-950/50 border border-indigo-800/60 text-xs text-indigo-200 flex items-center justify-between">
                    <span>Identified Solution: <strong>Interactive Qualification & WhatsApp Routing</strong></span>
                    <span className="text-emerald-400 font-mono font-semibold">Fit: 96%</span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-slate-400 uppercase">Quiz Funnel Specs</span>
                  <span className="text-emerald-400 font-medium">Ready to Deploy</span>
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Typical Completion:</span>
                    <span className="font-semibold text-white font-mono-numbers">72% – 84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Conditional Logic:</span>
                    <span className="font-semibold text-white">Multi-Branching Supported</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Zero-Party Data:</span>
                    <span className="font-semibold text-emerald-400">Captured at every question</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Follow-up Action:</span>
                    <span className="font-semibold text-indigo-300">Dynamic Result Page & WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Assessment Funnels */}
          {activeTab === 'assessment' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  Triage & Assessment Demo
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Clinical / Strategic Needs Diagnostic
                </h3>
                <p className="text-sm text-slate-300">
                  Assessments ask structured clinical, financial, or operational questions, scoring prospect urgency before their initial consultation.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                  <div className="font-semibold text-white">Diagnostic Question Sample:</div>
                  <div className="text-slate-300">"How severe is the issue affecting daily operations or comfort?"</div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="p-2 text-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs">Mild / Early</button>
                    <button className="p-2 text-center rounded-lg bg-indigo-600/30 border border-indigo-500 text-white text-xs font-semibold">Moderate</button>
                    <button className="p-2 text-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs">Urgent / Critical</button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-slate-400 uppercase">Assessment Capabilities</span>
                  <span className="text-emerald-400 font-medium">HIPAA / GDPR Ready</span>
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Diagnostic Scoring:</span>
                    <span className="font-semibold text-white">Multi-Category Severity Matrix</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Consultation Triage:</span>
                    <span className="font-semibold text-white">Directs to specific specialist</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Notice:</span>
                    <span className="text-slate-400 text-[11px]">Informational intake triage, not clinical diagnosis</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Calculator */}
          {activeTab === 'calculator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                  Live Calculator Demo
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Estimate Inbound Lead Uplift
                </h3>
                <p className="text-sm text-slate-300">
                  Slide below to see how interactive funnels outperform static forms on your current website traffic:
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Monthly Website Visitors:</span>
                      <span className="font-bold text-white font-mono-numbers">{monthlyTraffic.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="100000"
                      step="2000"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Current Static Form Conversion:</span>
                      <span className="font-bold text-white font-mono-numbers">{currentConversion}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="4.0"
                      step="0.1"
                      value={currentConversion}
                      onChange={(e) => setCurrentConversion(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 uppercase pb-2 border-b border-slate-800">
                  Calculated Monthly Impact
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-slate-400">Current Leads / Mo</div>
                    <div className="text-lg font-bold text-slate-300 font-mono-numbers mt-1">
                      {Math.round((monthlyTraffic * currentConversion) / 100)} leads
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-700/60">
                    <div className="text-indigo-300">TezPlay Projected Leads</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono-numbers mt-1">
                      {Math.round((monthlyTraffic * (currentConversion * 3.2)) / 100)} leads
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 flex items-center justify-between">
                  <span>Estimated Net New Qualified Leads:</span>
                  <span className="font-bold font-mono-numbers text-sm">
                    +{Math.round((monthlyTraffic * (currentConversion * 2.2)) / 100)} / month
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Spin & Win Mini Game */}
          {activeTab === 'wheel' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                  Playable Spin & Win Simulator
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Gamified Reward Wheel
                </h3>
                <p className="text-sm text-slate-300">
                  Hit "Spin the Wheel" to test live gameplay. To claim the reward, users enter their phone number for instant WhatsApp voucher dispatch!
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleSpinWheel}
                    disabled={spinning}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCw className={`w-4 h-4 ${spinning ? 'animate-spin' : ''}`} />
                    <span>{spinning ? 'Spinning Wheel...' : 'Spin The Wheel Now'}</span>
                  </button>
                </div>

                {wheelPrize && (
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 text-xs text-amber-200 space-y-2 animate-fade-in">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
                      <Gift className="w-4 h-4" />
                      <span>Congratulations! You won: {wheelPrize}</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      In production, the user is prompted: "Enter your WhatsApp number to receive your claim code within 30 seconds."
                    </p>
                  </div>
                )}
              </div>

              {/* Graphic Wheel Simulation Container */}
              <div className="lg:col-span-6 flex items-center justify-center py-6">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-amber-400/80 p-2 bg-slate-900 shadow-2xl flex items-center justify-center">
                  
                  {/* Wheel Pointer */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-rose-500 drop-shadow-md" />

                  {/* Rotating Wheel Disc */}
                  <div 
                    className="w-full h-full rounded-full border-2 border-slate-700 relative overflow-hidden transition-transform duration-[2800ms] cubic-bezier(0.15, 0.9, 0.25, 1)"
                    style={{ transform: `rotate(${wheelRotation}deg)` }}
                  >
                    <div className="absolute inset-0 bg-[conic-gradient(#6366f1_0deg_60deg,#3b82f6_60deg_120deg,#10b981_120deg_180deg,#f59e0b_180deg_240deg,#8b5cf6_240deg_300deg,#ec4899_300deg_360deg)] opacity-85" />
                    
                    {/* Inner Center Hub */}
                    <div className="absolute inset-1/4 rounded-full bg-slate-950 border-2 border-amber-400/70 flex items-center justify-center z-10 shadow-inner">
                      <span className="text-[11px] font-bold text-white font-mono uppercase tracking-wider text-center">
                        TEZPLAY<br /><span className="text-amber-400 text-[10px]">SPIN</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Scratch & Win */}
          {activeTab === 'scratch' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
                  Interactive Scratch Card Demo
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Scratch to Reveal Mystery Reward
                </h3>
                <p className="text-sm text-slate-300">
                  Customers scratch the card on their touch screen or click below to reveal a secret discount or consultation voucher.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setScratched(!scratched)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{scratched ? 'Cover Card Again' : 'Click to Scratch & Reveal'}</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center">
                <div 
                  onClick={() => setScratched(true)}
                  className="w-full max-w-sm h-48 rounded-2xl border-2 border-dashed border-indigo-400/50 p-6 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden transition-all group"
                >
                  {!scratched ? (
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-4">
                      <Gift className="w-8 h-8 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-sm font-bold text-white">SCRATCH HERE TO REVEAL</div>
                      <div className="text-xs text-slate-400 mt-1">Tap to scratch your exclusive code</div>
                    </div>
                  ) : (
                    <div className="space-y-2 animate-fade-in">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Code Unlocked!</div>
                      <div className="text-xl font-extrabold text-white font-mono bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                        TEZPLAY-VIP-2026
                      </div>
                      <div className="text-[11px] text-slate-400">
                        100% Free Strategy Session + $300 Setup Credit
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
