import React, { useState } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, User, Mail, Phone, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export const ProblemComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'Lead Games.com'>('Lead Games.com');

  return (
    <section className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            The Fundamental Shift
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            A Form Tells You Who They Are. <br className="hidden sm:inline" />
            <span className="text-indigo-400">Lead Games.com Helps You Understand What They Need.</span>
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Static web forms suffer from 80%+ bounce rates and low buyer qualification. Lead Games.com engages visitors with interactive micro-steps, qualifying their intent before your sales reps ever dial.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Traditional Form */}
          <div className="rounded-2xl border border-rose-950/40 bg-gradient-to-b from-rose-950/10 via-slate-900/50 to-slate-950 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-base font-bold text-white font-display">
                    Traditional Static Lead Form
                  </span>
                </div>
                <span className="text-xs text-rose-400/90 font-medium bg-rose-950/60 border border-rose-900/50 px-2.5 py-0.5 rounded-full">
                  Passive & Low Context
                </span>
              </div>

              {/* Mock Form */}
              <div className="space-y-3 opacity-80 pointer-events-none mb-6">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Full Name</label>
                  <div className="h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 px-3 flex items-center text-xs text-slate-300">
                    Alex Mercer
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Business Email</label>
                  <div className="h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 px-3 flex items-center text-xs text-slate-300">
                    alex@gmail.com (Personal domain)
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Phone Number</label>
                  <div className="h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 px-3 flex items-center text-xs text-slate-300">
                    +1 (555) 019-2834
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Message / Requirements</label>
                  <div className="h-16 rounded-lg bg-slate-800/60 border border-slate-700/60 p-2.5 text-xs text-slate-400">
                    "Send brochure and pricing details please."
                  </div>
                </div>
              </div>

              {/* What You Actually Get */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="font-semibold text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  What Your Sales Team Actually Gets:
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Unknown budget, zero understanding of urgency, no idea if they are qualified, high chance of incorrect phone number, reps spend hours dialing dead ends.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-rose-400/90 font-medium">
              <span>Avg Conversion: 1.2% – 2.4%</span>
              <span>Qualification Rate: ~18%</span>
            </div>
          </div>

          {/* Right Card: Lead Games.com Interactive Funnel */}
          <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-950/20 via-slate-900/70 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-indigo-950/30 relative">
            <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
              High-Converting Standard
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-base font-bold text-white font-display">
                    Lead Games.com Interactive Funnel
                  </span>
                </div>
                <span className="text-xs text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-900/50 px-2.5 py-0.5 rounded-full">
                  Intent-Driven & Qualified
                </span>
              </div>

              {/* Multi-parameter interactive preview */}
              <div className="space-y-2.5 mb-6 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">01. Declared Need:</span>
                  <span className="font-semibold text-white">Full Clinic Treatment Package</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">02. Verified Budget Range:</span>
                  <span className="font-semibold text-emerald-400 font-mono-numbers">$5,000 – $10,000 Approved</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">03. Purchase / Booking Urgency:</span>
                  <span className="font-semibold text-indigo-300">Within Next 7 Days</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">04. Contact & WhatsApp Opt-In:</span>
                  <span className="font-semibold text-white">Verified SMS / WhatsApp Consent</span>
                </div>
              </div>

              {/* What You Actually Get */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/50 space-y-2 text-xs">
                <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  What Your Sales Team Receives Instantly:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A 360-degree buyer profile with AI lead score (92/100), segmented as "Hot", synced to HubSpot/Salesforce, with auto-generated WhatsApp consultation summary ready for closing.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-medium">
              <span>Avg Conversion: 6.8% – 14.5% (3.4x Uplift)</span>
              <span>Qualification Rate: ~74%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
