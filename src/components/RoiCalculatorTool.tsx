import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, CheckCircle2, FileSpreadsheet } from 'lucide-react';

interface RoiCalculatorProps {
  onStartFunnel: () => void;
}

export const RoiCalculatorTool: React.FC<RoiCalculatorProps> = ({ onStartFunnel }) => {
  const [monthlyTraffic, setMonthlyTraffic] = useState(25000);
  const [currentConversion, setCurrentConversion] = useState(1.8);
  const [dealValue, setDealValue] = useState(3500);
  const [closeRate, setCloseRate] = useState(12);

  // Calculations
  const currentLeads = Math.round((monthlyTraffic * currentConversion) / 100);
  const currentDeals = Math.round((currentLeads * closeRate) / 100);
  const currentRevenue = currentDeals * dealValue;

  // With Lead Games.com Interactive Funnel (conservative 3.1x lead capture + higher qualification close rate boost)
  const leadGamesConversion = Number((currentConversion * 3.1).toFixed(1));
  const leadGamesLeads = Math.round((monthlyTraffic * leadGamesConversion) / 100);
  const leadGamesCloseRate = Math.min(closeRate + 4, 35); // Qualified leads close better
  const leadGamesDeals = Math.round((leadGamesLeads * leadGamesCloseRate) / 100);
  const leadGamesRevenue = leadGamesDeals * dealValue;

  const netNewLeads = leadGamesLeads - currentLeads;
  const netNewRevenueMonthly = leadGamesRevenue - currentRevenue;
  const netNewRevenueAnnual = netNewRevenueMonthly * 12;

  return (
    <section id="calculator" className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Commercial Business Case
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Interactive Funnel ROI & Lead Uplift Calculator
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            See the exact pipeline impact of replacing your static lead form with a qualified, intent-driven Lead Games.com funnel.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>Input Your Current Funnel Metrics</span>
            </div>

            {/* Slider 1: Traffic */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Monthly Inbound Visitors:</span>
                <span className="text-white font-mono-numbers text-sm">{monthlyTraffic.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="150000"
                step="2500"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>2,000 / mo</span>
                <span>150,000 / mo</span>
              </div>
            </div>

            {/* Slider 2: Current Form Conversion */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Current Static Form Conversion:</span>
                <span className="text-white font-mono-numbers text-sm">{currentConversion}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>0.5% (Low)</span>
                <span>5.0% (High)</span>
              </div>
            </div>

            {/* Slider 3: Deal Value */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Average Deal / Customer Lifetime Value:</span>
                <span className="text-emerald-400 font-mono-numbers text-sm">${dealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>$500</span>
                <span>$25,000+</span>
              </div>
            </div>

            {/* Slider 4: Close Rate */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Sales Team Lead-to-Deal Close Rate:</span>
                <span className="text-white font-mono-numbers text-sm">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>3%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 rounded-2xl border border-indigo-500/40 bg-slate-900/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Projected Commercial Impact
                </span>
                <span className="text-xs text-emerald-400 font-mono font-semibold bg-emerald-950/80 px-2 py-0.5 rounded">
                  +310% Lead Capture Boost
                </span>
              </div>

              {/* Comparison Tiles */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase">Monthly Inbound Leads</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Static: <span className="text-white font-mono-numbers font-semibold">{currentLeads}</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-400 font-mono-numbers mt-0.5">
                    Lead Games.com: {leadGamesLeads}
                  </div>
                  <div className="text-[11px] text-emerald-400/90 mt-1 font-medium">
                    +{netNewLeads.toLocaleString()} new leads / mo
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase">Monthly Closed Revenue</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Static: <span className="text-white font-mono-numbers font-semibold">${currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-400 font-mono-numbers mt-0.5">
                    Lead Games.com: ${leadGamesRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-400/90 mt-1 font-medium">
                    +${netNewRevenueMonthly.toLocaleString()} / mo
                  </div>
                </div>
              </div>

              {/* Hero Big Stat */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/70 via-slate-950 to-indigo-950/40 border border-indigo-700/60 text-center mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Projected Annual Pipeline Gain
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono-numbers mt-1.5">
                  +${netNewRevenueAnnual.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Based on higher lead engagement, instant qualification, and 60-second follow-up automation.
                </div>
              </div>
            </div>

            <button
              onClick={onStartFunnel}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <span>Build My Interactive Funnel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
