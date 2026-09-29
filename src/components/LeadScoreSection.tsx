import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Flame, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export const LeadScoreSection: React.FC = () => {
  const [budgetConfirmed, setBudgetConfirmed] = useState<'yes' | 'no'>('yes');
  const [timeline, setTimeline] = useState<'<1mo' | '1-3mo' | '3-6mo' | '6+mo'>('<1mo');
  const [needClarity, setNeedClarity] = useState<'vague' | 'specific' | 'detailed'>('detailed');
  const [contactPref, setContactPref] = useState<'email' | 'whatsapp' | 'call'>('call');
  const [showHow, setShowHow] = useState(false);

  // Exact weights from prompt:
  // Budget confirmed: +25 (yes) or 0 (no)
  const budgetPts = budgetConfirmed === 'yes' ? 25 : 0;

  // Timeline: <1 month +30, 1-3 months +25, 3-6 months +12, 6+ months +4
  const timelinePts = timeline === '<1mo' ? 30 : timeline === '1-3mo' ? 25 : timeline === '3-6mo' ? 12 : 4;

  // Need clarity: vague +10, specific +20, detailed +30
  const needPts = needClarity === 'detailed' ? 30 : needClarity === 'specific' ? 20 : 10;

  // Contact preference: call +15, WhatsApp +12, email +6
  const contactPts = contactPref === 'call' ? 15 : contactPref === 'whatsapp' ? 12 : 6;

  const totalScore = budgetPts + timelinePts + needPts + contactPts; // Max 100

  // Bands: Hot >= 75, Warm 45-74, Cold < 45
  let band = {
    id: 'hot',
    label: 'Hot Lead',
    action: 'Priority immediate outreach: call or WhatsApp within 10 minutes',
    badgeClass: 'bg-rose-50 text-[#E5484D] border-rose-200',
    icon: Flame,
  };

  if (totalScore < 45) {
    band = {
      id: 'cold',
      label: 'Cold / Nurture',
      action: 'Enter automated educational email sequence; invite to webinar or guide',
      badgeClass: 'bg-blue-50 text-[#3B82F6] border-blue-200',
      icon: Clock,
    };
  } else if (totalScore < 75) {
    band = {
      id: 'warm',
      label: 'Warm Lead',
      action: 'Share tailored customer case study and calendar booking link',
      badgeClass: 'bg-amber-50 text-[#F5A524] border-amber-200',
      icon: AlertCircle,
    };
  }

  const BandIcon = band.icon;

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Qualification & Scoring Rules
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Not Every Lead Is Equal
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            We turn answers into a clear score and next action your sales team can act on. Scoring rules are agreed with you so they match how you actually sell.
          </p>
        </div>

        {/* Lead Score Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 Interactive Controls */}
          <div className="lg:col-span-6 card-soft p-6 sm:p-8 space-y-5 bg-[#F6F7FB]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7F0]">
              <span className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">
                Lead Score Playground
              </span>
              <span className="text-[11px] bg-white text-[#45516B] px-2 py-0.5 rounded border border-[#E4E7F0]">
                Sample scoring logic
              </span>
            </div>

            {/* Control 1: Budget confirmed */}
            <div>
              <label className="block text-xs font-semibold text-[#0B1B3A] mb-1.5">
                1. Budget Confirmed:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'yes', label: 'Yes, Budget Confirmed (+25 pts)' },
                  { id: 'no', label: 'No / Unspecified (0 pts)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudgetConfirmed(item.id as any)}
                    className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                      budgetConfirmed === item.id
                        ? 'border-[#5B3DF5] bg-white text-[#0B1B3A] shadow-xs'
                        : 'border-[#E4E7F0] bg-white/60 text-[#45516B] hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Timeline */}
            <div>
              <label className="block text-xs font-semibold text-[#0B1B3A] mb-1.5">
                2. Purchase Timeline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: '<1mo', label: '< 1 month (+30)' },
                  { id: '1-3mo', label: '1–3 months (+25)' },
                  { id: '3-6mo', label: '3–6 months (+12)' },
                  { id: '6+mo', label: '6+ months (+4)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    className={`p-2 rounded-lg border text-center font-medium transition-all ${
                      timeline === item.id
                        ? 'border-[#5B3DF5] bg-white text-[#0B1B3A] shadow-xs'
                        : 'border-[#E4E7F0] bg-white/60 text-[#45516B] hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Need clarity */}
            <div>
              <label className="block text-xs font-semibold text-[#0B1B3A] mb-1.5">
                3. Need Clarity / Problem Scope:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'vague', label: 'Vague (+10)' },
                  { id: 'specific', label: 'Specific (+20)' },
                  { id: 'detailed', label: 'Detailed (+30)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setNeedClarity(item.id as any)}
                    className={`p-2 rounded-lg border text-center font-medium transition-all ${
                      needClarity === item.id
                        ? 'border-[#5B3DF5] bg-white text-[#0B1B3A] shadow-xs'
                        : 'border-[#E4E7F0] bg-white/60 text-[#45516B] hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Contact preference */}
            <div>
              <label className="block text-xs font-semibold text-[#0B1B3A] mb-1.5">
                4. Preferred Contact Method:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'call', label: 'Phone Call (+15)' },
                  { id: 'whatsapp', label: 'WhatsApp (+12)' },
                  { id: 'email', label: 'Email (+6)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setContactPref(item.id as any)}
                    className={`p-2 rounded-lg border text-center font-medium transition-all ${
                      contactPref === item.id
                        ? 'border-[#5B3DF5] bg-white text-[#0B1B3A] shadow-xs'
                        : 'border-[#E4E7F0] bg-white/60 text-[#45516B] hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Output Scorecard */}
          <div className="lg:col-span-6 card-soft p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#E4E7F0]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#45516B] tracking-wider">
                    Calculated Result
                  </span>
                  <h3 className="text-base font-bold text-[#0B1B3A]">
                    Lead Scoring & Routing Verdict
                  </h3>
                </div>

                {/* Hot / Warm / Cold Badge (Icon + Text, never color alone) */}
                <div className={`px-3 py-1 rounded-full border text-xs font-bold flex items-center gap-1.5 ${band.badgeClass}`}>
                  <BandIcon className="w-3.5 h-3.5 fill-current" />
                  <span>{band.label}</span>
                </div>
              </div>

              {/* Gauge & Total Number */}
              <div className="p-4 rounded-xl bg-[#F6F7FB] border border-[#E4E7F0] mb-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-[#45516B]">Total Lead Score:</span>
                  <div className="text-3xl font-extrabold text-[#0B1B3A] font-tabular">
                    {totalScore} <span className="text-sm font-normal text-[#45516B]">/ 100</span>
                  </div>
                </div>

                <div className="w-full bg-[#E4E7F0] h-2 rounded-full overflow-hidden mt-3">
                  <div
                    className={`h-full transition-all duration-300 ${
                      totalScore >= 75 ? 'bg-[#E5484D]' : totalScore >= 45 ? 'bg-[#F5A524]' : 'bg-[#3B82F6]'
                    }`}
                    style={{ width: `${totalScore}%` }}
                  />
                </div>
              </div>

              {/* Factor Breakdown Bars */}
              <div className="space-y-2 text-xs mb-5">
                <div className="text-[11px] font-bold text-[#0B1B3A] uppercase tracking-wider">
                  Factor Contributions:
                </div>
                <div className="flex justify-between py-1 border-b border-[#E4E7F0]">
                  <span className="text-[#45516B]">Budget Factor:</span>
                  <span className="font-semibold text-[#0B1B3A] font-tabular">+{budgetPts} pts</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E4E7F0]">
                  <span className="text-[#45516B]">Timeline Factor:</span>
                  <span className="font-semibold text-[#0B1B3A] font-tabular">+{timelinePts} pts</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E4E7F0]">
                  <span className="text-[#45516B]">Need Clarity Factor:</span>
                  <span className="font-semibold text-[#0B1B3A] font-tabular">+{needPts} pts</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E4E7F0]">
                  <span className="text-[#45516B]">Contact Preference Factor:</span>
                  <span className="font-semibold text-[#0B1B3A] font-tabular">+{contactPts} pts</span>
                </div>
              </div>

              {/* Suggested Action Box */}
              <div className="p-3.5 rounded-lg bg-[#5B3DF5]/5 border border-[#5B3DF5]/20 text-xs">
                <span className="font-bold text-[#5B3DF5] block mb-0.5">Suggested Sales Action:</span>
                <p className="text-[#0B1B3A] leading-relaxed">{band.action}</p>
              </div>
            </div>

            {/* Expandable Explanation */}
            <div className="mt-5 pt-3 border-t border-[#E4E7F0]">
              <button
                type="button"
                onClick={() => setShowHow(!showHow)}
                className="text-xs text-[#5B3DF5] hover:text-[#4527D6] font-semibold flex items-center justify-between w-full focus:outline-none"
              >
                <span>How this sample score is calculated</span>
                {showHow ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showHow && (
                <div className="mt-2 text-xs text-[#45516B] leading-relaxed bg-[#F6F7FB] p-3 rounded-lg border border-[#E4E7F0]">
                  Weights: Budget confirmed (+25), Timeline (&lt;1 mo +30, 1-3 mo +25, 3-6 mo +12, 6+ mo +4), Need clarity (vague +10, specific +20, detailed +30), Contact preference (call +15, WhatsApp +12, email +6). Total normalized 0–100. Hot ≥ 75, Warm 45–74, Cold &lt; 45. In production, these criteria are tuned specifically to your company’s sales qualification requirements.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
