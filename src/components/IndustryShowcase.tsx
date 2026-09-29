import React, { useState } from 'react';
import { 
  Stethoscope, 
  Building2, 
  Cloud, 
  GraduationCap, 
  Car, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  DollarSign, 
  Briefcase 
} from 'lucide-react';

export const IndustryShowcase: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<'healthcare' | 'realestate' | 'saas'>('healthcare');

  // Healthcare Demo State
  const [healthConcern, setHealthConcern] = useState('Skin Rejuvenation & Laser');
  const [healthDuration, setHealthDuration] = useState('3–6 Months');
  const [healthUrgency, setHealthUrgency] = useState('Within 7 Days');
  const [healthBooked, setHealthBooked] = useState(false);

  // Real Estate Demo State
  const [propertyBudget, setPropertyBudget] = useState('$500,000 – $850,000');
  const [propertyType, setPropertyType] = useState('3 BHK Luxury Apartment');
  const [propertyTimeline, setPropertyTimeline] = useState('Immediate (< 30 Days)');
  const [propertyBooked, setPropertyBooked] = useState(false);

  // SaaS Demo State
  const [saasSize, setSaasSize] = useState('50–200 Employees');
  const [saasChallenge, setSaasChallenge] = useState('Lead drop-off & manual qualification');
  const [saasBudget, setSaasBudget] = useState('$15,000 – $30,000 / year');
  const [saasBooked, setSaasBooked] = useState(false);

  return (
    <section id="industries" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Vertical-Specific Architectures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Interactive Lead Generation for High-Value Industries
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Different industries require different qualification signals. Explore working, interactive funnels engineered specifically for your vertical.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedIndustry('healthcare')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedIndustry === 'healthcare'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Healthcare & Clinics</span>
          </button>

          <button
            onClick={() => setSelectedIndustry('realestate')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedIndustry === 'realestate'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Real Estate & Builders</span>
          </button>

          <button
            onClick={() => setSelectedIndustry('saas')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedIndustry === 'saas'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Cloud className="w-4 h-4" />
            <span>SaaS & Enterprise Software</span>
          </button>
        </div>

        {/* Industry Interactive Showcase Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl">
          
          {/* 1. HEALTHCARE CLINIC SHOWCASE */}
          {selectedIndustry === 'healthcare' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Clinical Intake & Triage Assessment</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  "Find the Right Care Path" — Aesthetic & Specialist Clinic Funnel
                </h3>

                <p className="text-sm text-slate-300">
                  Instead of asking patients to fill out a blank "Contact Us" box, this assessment triages their primary condition, symptoms duration, and appointment urgency before clinic staff reply.
                </p>

                {/* Micro Funnel Questions */}
                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">1. Clinical Area / Concern:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Skin Rejuvenation & Laser', 'Hair Restoration', 'Orthodontic Aligners', 'General Wellness'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setHealthConcern(c)}
                          className={`p-2 rounded-lg border text-left text-[11px] transition-all ${
                            healthConcern === c
                              ? 'border-emerald-500 bg-emerald-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">2. Consultation Urgency:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Within 7 Days', 'Next 2–3 Weeks', 'Just Comparing'].map((u) => (
                        <button
                          key={u}
                          onClick={() => setHealthUrgency(u)}
                          className={`p-2 rounded-lg border text-center text-[11px] transition-all ${
                            healthUrgency === u
                              ? 'border-emerald-500 bg-emerald-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Note: Assessment is informational intake and does not replace in-person physician diagnosis.
                </p>
              </div>

              {/* Healthcare Live Outcome Card */}
              <div className="lg:col-span-6 rounded-xl border border-emerald-500/40 bg-slate-950 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase">Triage Result & Routing</span>
                  <span className="text-xs text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded font-mono">
                    High Priority Patient
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Assigned Department:</span>
                    <span className="font-semibold text-white">Dermatology & Aesthetic Medicine</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Patient Readiness Score:</span>
                    <span className="font-semibold text-emerald-400 font-mono-numbers">94 / 100</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Next Action:</span>
                    <span className="font-semibold text-indigo-300">WhatsApp Intake Form + Slot Booking</span>
                  </div>
                </div>

                {!healthBooked ? (
                  <button
                    onClick={() => setHealthBooked(true)}
                    className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Confirm Consultation Request</span>
                  </button>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-800/80 text-xs text-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Intake record generated. Clinic coordinator notified on WhatsApp!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. REAL ESTATE SHOWCASE */}
          {selectedIndustry === 'realestate' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-amber-950/80 border border-amber-800/60 text-amber-400">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Property Buyer Intent Qualification</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  "Find Your Ideal Property" — Real Estate Funnel
                </h3>

                <p className="text-sm text-slate-300">
                  Real estate developers and brokers receive hundreds of non-serious calls. TezPlay qualifies budget, bedroom requirements, and buying timeline beforehand.
                </p>

                {/* Micro Funnel Questions */}
                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">1. Verified Investment / Purchase Budget:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['$300,000 – $500,000', '$500,000 – $850,000', '$850k – $1.5M', '$1.5M+ Luxury'].map((b) => (
                        <button
                          key={b}
                          onClick={() => setPropertyBudget(b)}
                          className={`p-2 rounded-lg border text-left text-[11px] transition-all ${
                            propertyBudget === b
                              ? 'border-amber-500 bg-amber-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">2. Property Configuration:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['2 BHK Condo', '3 BHK Luxury Apartment', '4 BHK / Penthouse'].map((p) => (
                        <button
                          key={p}
                          onClick={() => setPropertyType(p)}
                          className={`p-2 rounded-lg border text-center text-[11px] transition-all ${
                            propertyType === p
                              ? 'border-amber-500 bg-amber-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Outcome Card */}
              <div className="lg:col-span-6 rounded-xl border border-amber-500/40 bg-slate-950 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase">Buyer Match Output</span>
                  <span className="text-xs text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded font-mono">
                    High Purchase Intent (91/100)
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Matched Inventory:</span>
                    <span className="font-semibold text-white">3 Available Units in Zone 1</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Target Timeline:</span>
                    <span className="font-semibold text-emerald-400">Ready to Book Site Visit</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Broker Assignment:</span>
                    <span className="font-semibold text-indigo-300">Senior Real Estate Advisor</span>
                  </div>
                </div>

                {!propertyBooked ? (
                  <button
                    onClick={() => setPropertyBooked(true)}
                    className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Send Floor Plans & Schedule Site Tour</span>
                  </button>
                ) : (
                  <div className="p-3 rounded-lg bg-amber-950/70 border border-amber-800/80 text-xs text-amber-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Floor plans dispatched via WhatsApp! VIP site tour slot held.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. SAAS & ERP SHOWCASE */}
          {selectedIndustry === 'saas' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-sky-950/80 border border-sky-800/60 text-sky-400">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>SaaS & ERP Demo Qualification</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  "Find the Right Software Fit" — B2B Qualification
                </h3>

                <p className="text-sm text-slate-300">
                  End generic demo requests. Pre-qualify team size, existing tech stack, and annual software budget before assigning your solutions engineering team.
                </p>

                {/* Micro Funnel Questions */}
                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">1. Organization Size:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['10–50 Team', '50–200 Employees', '200+ Enterprise'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSaasSize(s)}
                          className={`p-2 rounded-lg border text-center text-[11px] transition-all ${
                            saasSize === s
                              ? 'border-sky-500 bg-sky-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1 font-medium">2. Annual Tech Budget:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['$5k – $15k', '$15,000 – $30,000 / year', '$30k+ Enterprise'].map((b) => (
                        <button
                          key={b}
                          onClick={() => setSaasBudget(b)}
                          className={`p-2 rounded-lg border text-center text-[11px] transition-all ${
                            saasBudget === b
                              ? 'border-sky-500 bg-sky-950/50 text-white font-semibold'
                              : 'border-slate-800 bg-slate-950/60 text-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SaaS Outcome Card */}
              <div className="lg:col-span-6 rounded-xl border border-sky-500/40 bg-slate-950 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase">Demo Qualification Route</span>
                  <span className="text-xs text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded font-mono">
                    Tier 1 Enterprise Match
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Recommended Plan:</span>
                    <span className="font-semibold text-white">TezPlay Enterprise Platform</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Projected Pipeline Lift:</span>
                    <span className="font-semibold text-emerald-400">+180% Qualified Opportunities</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-400">Assigned Solutions Architect:</span>
                    <span className="font-semibold text-indigo-300">Dedicated Enterprise Engineer</span>
                  </div>
                </div>

                {!saasBooked ? (
                  <button
                    onClick={() => setSaasBooked(true)}
                    className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Book Tailored Technical Walkthrough</span>
                  </button>
                ) : (
                  <div className="p-3 rounded-lg bg-sky-950/70 border border-sky-800/80 text-xs text-sky-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Architecture dossier generated. Calendar link emailed!</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
