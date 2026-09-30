import React, { useState } from 'react';
import { ArrowLeftRight, Check, X, Sparkles, UserX, UserCheck, ChevronRight, Sliders } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 15 to 85

  return (
    <section id="problem" className="py-20 md:py-28 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5B3DF5]/10 text-[#5B3DF5] mb-3">
            <Sparkles size={13} />
            Why Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Static Forms Capture Details.{' '}
            <span className="text-[#5B3DF5]">Lead Games.com Captures Intent.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#45516B] leading-relaxed">
            A static form tells you who submitted. An interactive Lead Games.com experience tells you{' '}
            <strong className="text-[#0B1B3A]">what they need</strong>,{' '}
            <strong className="text-[#0B1B3A]">why they need it</strong>, and{' '}
            <strong className="text-[#0B1B3A]">how ready they are to buy</strong>.
          </p>

          {/* Quick Slider Presets */}
          <div className="mt-6 inline-flex items-center gap-1 bg-[#F4F5F8] p-1 rounded-full border border-[#E4E7F0] text-xs">
            <button
              type="button"
              onClick={() => setSliderPos(25)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                sliderPos < 40 ? 'bg-white shadow-xs text-[#0B1B3A] font-bold' : 'text-[#6B7280] hover:text-[#0B1B3A]'
              }`}
            >
              Plain Form (25%)
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                sliderPos >= 40 && sliderPos <= 60
                  ? 'bg-[#5B3DF5] text-white font-bold shadow-xs'
                  : 'text-[#6B7280] hover:text-[#0B1B3A]'
              }`}
            >
              Split View (50/50)
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(75)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                sliderPos > 60 ? 'bg-white shadow-xs text-[#0B1B3A] font-bold' : 'text-[#6B7280] hover:text-[#0B1B3A]'
              }`}
            >
              Lead Games.com Funnel (75%)
            </button>
          </div>
        </div>

        {/* Interactive Before / After Split Showcase (Elevated Version 2 Aesthetic) */}
        <div className="relative rounded-2xl border border-[#E4E7F0] bg-white shadow-xl overflow-hidden min-h-[480px]">
          
          {/* Right Pane: Lead Games.com Funnel (Dark Premium Experience) */}
          <div className="absolute inset-0 bg-[#0B1B3A] text-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#00C2A0]">
                    Lead Games.com INTERACTIVE FUNNEL
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                    Score: 92/100 (Hot Lead)
                  </span>
                </div>
              </div>

              <div className="max-w-xl ml-auto">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                  Qualified Context & Intent
                </h3>

                {/* Context Chips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-semibold">Goal</span>
                      <strong className="text-white">3 BHK Luxury Apartment</strong>
                    </div>
                    <Check size={16} className="text-emerald-400 shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-semibold">Budget Range</span>
                      <strong className="text-emerald-300">₹80L – ₹1.2 Cr Verified</strong>
                    </div>
                    <Check size={16} className="text-emerald-400 shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-semibold">Buying Timeline</span>
                      <strong className="text-white">Within 30 Days</strong>
                    </div>
                    <Check size={16} className="text-emerald-400 shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-semibold">Financing</span>
                      <strong className="text-white">Pre-approved Bank Loan</strong>
                    </div>
                    <Check size={16} className="text-emerald-400 shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between sm:col-span-2">
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-semibold">Consent & Contact</span>
                      <strong className="text-white">WhatsApp & SMS Instant Dispatch Verified</strong>
                    </div>
                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                      Ready to Close
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <UserCheck size={15} />
                You know who they are, what they need, and how ready they are.
              </span>
              <span className="hidden md:inline font-mono text-[11px] text-white/50">
                Conversion: 4.8x higher than forms
              </span>
            </div>
          </div>

          {/* Left Pane: Plain Form (Clipped Layer) */}
          <div
            className="absolute inset-y-0 left-0 bg-[#F8F9FD] border-r-2 border-[#5B3DF5] p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-[width] duration-75 ease-out"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="w-[520px]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5484D]" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5484D]">
                    TRADITIONAL PLAIN FORM
                  </span>
                </div>
                <span className="text-xs text-[#8A94A6] font-medium">
                  Zero Buyer Context
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A] mb-4">
                Basic Contact Details
              </h3>

              {/* Fake Inputs */}
              <div className="space-y-2.5 max-w-md">
                <div className="p-3 rounded-lg bg-white border border-[#E4E7F0] text-xs flex justify-between items-center text-[#45516B]">
                  <span>Full Name</span>
                  <strong className="text-[#0B1B3A]">Jordan Lee</strong>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E4E7F0] text-xs flex justify-between items-center text-[#45516B]">
                  <span>Email Address</span>
                  <span className="text-[#0B1B3A]">jordan@example.com</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E4E7F0] text-xs flex justify-between items-center text-[#45516B]">
                  <span>Phone Number</span>
                  <span className="text-[#0B1B3A]">+91 98765 43210</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E4E7F0] text-xs flex justify-between items-center text-[#45516B]">
                  <span>Message</span>
                  <span className="italic text-[#8A94A6]">"Please send details"</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E7F0] flex items-center justify-between text-xs text-[#8A94A6] w-[520px]">
              <span className="text-[#E5484D] font-semibold flex items-center gap-1.5">
                <UserX size={15} />
                You only know who submitted. Sales team calls blind.
              </span>
              <span className="hidden md:inline font-mono text-[11px]">
                Drop-off rate: 72%
              </span>
            </div>
          </div>

          {/* Slider Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-[#5B3DF5] text-white shadow-xl flex items-center justify-center border-3 border-white ring-4 ring-[#5B3DF5]/30">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          {/* Invisible Interactive Range Input */}
          <input
            type="range"
            min="15"
            max="85"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-40"
            aria-label="Drag to compare plain form with Lead Games.com interactive funnel"
          />
        </div>

        {/* Bottom Comparison Cards (Matching Version 2 Clarity) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[#E4E7F0] bg-[#F8F9FD]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]" />
              <strong className="text-sm font-bold text-[#0B1B3A]">Plain Form Submissions</strong>
            </div>
            <p className="text-xs text-[#45516B] leading-relaxed mb-3">
              Name · Email · Phone · Message box. Leads are treated as identical rows in a spreadsheet with no idea who is serious.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E5484D]">
              <X size={14} />
              <span>Result: 70%+ junk or cold leads wasting sales time.</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <strong className="text-sm font-bold text-[#0B1B3A]">Lead Games.com Interactive Funnels</strong>
            </div>
            <p className="text-xs text-[#45516B] leading-relaxed mb-3">
              Goal · Verified Budget · Timeline · Urgency · Automatic Lead Score (Hot/Warm/Cold) routed to WhatsApp or CRM instantly.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Check size={14} />
              <span>Result: Sales calls only the hottest leads with complete context.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
