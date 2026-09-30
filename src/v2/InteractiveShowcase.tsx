import React, { useState } from "react";
import {
  BarChart3,
  Calculator,
  Car,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  HeartPulse,
  Home,
  Mail,
  MessageCircle,
  RefreshCw,
  RotateCw,
  Sparkles,
  Target,
  Building2,
  Stethoscope,
  Cloud,
  ArrowLeftRight,
  Flame,
  ShieldAlert,
  ArrowUpRight,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Award,
  CheckCheck,
  Clock,
  Bot,
  Database,
  UserCheck,
  ShieldCheck,
  PhoneCall,
  Bell,
  Smartphone,
  ArrowRight,
  Layers,
  Send,
  Play,
  Terminal,
  Table,
} from "lucide-react";
import { FunnelDemo, LeadScoreGauge, LeadStateBadge } from "./FunnelDemo";

export function BrandMark() {
  return (
    <img
      src="/lead-games-logo.png"
      alt=""
      className="h-9 w-auto max-w-[170px] object-contain"
      aria-hidden="true"
    />
  );
}

export function PhoneFrameDemo() {
  return (
    <div className="phone-stage">
      <div className="phone-profile">
        <span className="sample-badge">Sample lead profile</span>
        <strong>Intent captured</strong>
        <p>Goal, industry, volume and follow-up method</p>
      </div>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-brand">
          <BrandMark />
        </div>
        <FunnelDemo compact />
      </div>
    </div>
  );
}

interface ScenarioData {
  industry: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  plain: {
    title: string;
    fields: { label: string; value: string }[];
    problem: string;
    dropoff: string;
  };
  funnel: {
    title: string;
    score: number;
    scoreLabel: string;
    chips: { label: string; value: string }[];
    action: string;
    conversion: string;
  };
}

const scenarios: Record<string, ScenarioData> = {
  realty: {
    industry: "Real Estate",
    icon: Building2,
    plain: {
      title: "Contact Agent Form",
      fields: [
        { label: "Name", value: "Rohan Verma" },
        { label: "Email", value: "rohan.v@example.com" },
        { label: "Phone", value: "+91 98201 54321" },
        { label: "Message", value: "Please send brochure and pricing." },
      ],
      problem: "Agent calls blind with zero idea of budget, unit preference, or timeline.",
      dropoff: "73% drop-off before submission",
    },
    funnel: {
      title: "Property Preference Matcher",
      score: 94,
      scoreLabel: "Hot Lead · Ready to Buy",
      chips: [
        { label: "Unit Type", value: "3 BHK Premium High-Rise" },
        { label: "Verified Budget", value: "₹1.2 Cr – ₹1.6 Cr" },
        { label: "Possession Window", value: "Within 60 Days" },
        { label: "Financing Status", value: "HDFC Pre-Approved Loan" },
        { label: "Preferred Location", value: "Whitefield / North Corridor" },
      ],
      action: "Instant WhatsApp site-tour invite sent + Assigned to Senior Property Advisor",
      conversion: "4.8x higher qualified booking rate",
    },
  },
  health: {
    industry: "Healthcare",
    icon: Stethoscope,
    plain: {
      title: "Appointment Request Form",
      fields: [
        { label: "Patient Name", value: "Ananya Sharma" },
        { label: "Email", value: "ananya@example.com" },
        { label: "Phone", value: "+91 97112 88410" },
        { label: "Symptoms", value: "Knee pain issue" },
      ],
      problem: "Clinic staff cannot triage urgency or match the correct specialist.",
      dropoff: "68% drop-off; patients seek instant answers",
    },
    funnel: {
      title: "Guided Care Assessment",
      score: 91,
      scoreLabel: "Urgent Priority · Surgery Fit",
      chips: [
        { label: "Symptom Severity", value: "Chronic Pain (6+ Months)" },
        { label: "Mobility Impact", value: "Stairs Restricted / Severe" },
        { label: "Insurance Coverage", value: "Cashless Star Health Active" },
        { label: "Recommended Path", value: "Orthopedic Specialist Consult" },
        { label: "Preferred Slot", value: "Tomorrow Morning (10:30 AM)" },
      ],
      action: "Pre-screened chart generated + SMS confirmation with doctor profile",
      conversion: "5.2x faster consultation attendance",
    },
  },
  saas: {
    industry: "SaaS & ERP",
    icon: Cloud,
    plain: {
      title: "Request a Demo Form",
      fields: [
        { label: "Full Name", value: "Vikram Nair" },
        { label: "Work Email", value: "vikram@fintechcorp.io" },
        { label: "Company", value: "FintechCorp" },
        { label: "Needs", value: "Looking for ERP solutions" },
      ],
      problem: "BDR wastes 3 days trading emails just to find company size and budget.",
      dropoff: "81% abandon generic demo forms",
    },
    funnel: {
      title: "Software Fit & ROI Calculator",
      score: 96,
      scoreLabel: "Enterprise Deal · Tier 1",
      chips: [
        { label: "Team Size", value: "180+ Active Users" },
        { label: "Current Stack", value: "Legacy SAP / Excel hybrid" },
        { label: "Target Go-Live", value: "Q4 Fiscal Kickoff" },
        { label: "Core Modules", value: "Billing, Inventory, Multi-currency" },
        { label: "Est. Annual ROI", value: "₹24.8 Lakh saved / yr" },
      ],
      action: "Direct round-robin routing to Enterprise AE + Tailored Deck pre-populated",
      conversion: "6.1x increase in closed-won velocity",
    },
  },
  auto: {
    industry: "Automotive",
    icon: Car,
    plain: {
      title: "Test Drive Booking Form",
      fields: [
        { label: "Name", value: "Kabir Malhotra" },
        { label: "Email", value: "kabir@example.com" },
        { label: "Phone", value: "+91 99880 11223" },
        { label: "Model", value: "Interested in EV" },
      ],
      problem: "Dealership does not know if customer is a serious buyer or casual researcher.",
      dropoff: "65% don't show up for booking",
    },
    funnel: {
      title: "EV Range & Savings Configurator",
      score: 89,
      scoreLabel: "High Purchase Intent",
      chips: [
        { label: "Vehicle Model", value: "Long-Range All-Wheel EV" },
        { label: "Daily Commute", value: "45 km/day (High ROI)" },
        { label: "Exchange Car", value: "2020 Honda City (₹7.5L equity)" },
        { label: "Buying Window", value: "This Weekend" },
        { label: "Home Charger Fit", value: "Dedicated Parking Confirmed" },
      ],
      action: "Doorstep test drive scheduled + Personalized trade-in valuation sent",
      conversion: "4.4x higher showroom conversion",
    },
  },
};

export function FormVsFunnelSlider() {
  const [value, setValue] = useState(50);
  const [activeScenario, setActiveScenario] = useState<string>("realty");
  const data = scenarios[activeScenario] ?? scenarios.realty;

  return (
    <div className="w-full space-y-6">
      {/* Industry Scenario Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F4F5F8] p-2 rounded-2xl border border-[#E4E7F0]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#45516B] px-2">
            Test by Industry:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {Object.entries(scenarios).map(([key, sc]) => {
              const Icon = sc.icon;
              const isActive = activeScenario === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveScenario(key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20"
                      : "bg-white text-[#45516B] border border-[#E4E7F0] hover:text-[#0B1B3A]"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-[#FF7A1A]" : "text-[#8A94A6]"} />
                  <span>{sc.industry}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Slider Preset Buttons */}
        <div className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E4E7F0] text-xs">
          <button
            type="button"
            onClick={() => setValue(25)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              value < 40 ? "bg-[#E5484D] text-white font-bold" : "text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            Form View (25%)
          </button>
          <button
            type="button"
            onClick={() => setValue(50)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              value >= 40 && value <= 60 ? "bg-[#0B1B3A] text-white font-bold" : "text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            50/50 Split
          </button>
          <button
            type="button"
            onClick={() => setValue(75)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              value > 60 ? "bg-[#FF7A1A] text-white font-bold" : "text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            Lead Games.com Intent (75%)
          </button>
        </div>
      </div>

      {/* Main Dual-Pane Comparison Canvas */}
      <div className="relative rounded-2xl border border-[#E4E7F0] bg-white shadow-2xl overflow-hidden min-h-[520px]">
        {/* Right Pane: Lead Games.com Intent Funnel (Always rendered underneath in dark navy) */}
        <div className="absolute inset-0 bg-[#0B1B3A] text-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C2A0] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-[#00C2A0]">
                  Lead Games.com QUALIFICATION ENGINE
                </span>
                <span className="text-[11px] bg-[#FF7A1A]/20 text-[#FF7A1A] border border-[#FF7A1A]/30 px-2 py-0.5 rounded-full font-bold">
                  {data.industry} Funnel
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#00C2A0]/20 text-[#00C2A0] border border-[#00C2A0]/30 px-3 py-1 rounded-full text-xs font-bold">
                  <Flame size={14} className="text-[#FF7A1A]" />
                  Score: {data.funnel.score}/100 ({data.funnel.scoreLabel})
                </span>
              </div>
            </div>

            <div className="max-w-xl ml-auto">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {data.funnel.title}
                </h3>
                <span className="text-xs text-white/60 font-mono">
                  Intent Captured: 100%
                </span>
              </div>

              {/* Dynamic Context Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs">
                {data.funnel.chips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-between group hover:border-[#00C2A0]/50 transition-colors"
                  >
                    <div>
                      <span className="text-white/60 block text-[10px] uppercase font-bold tracking-wider">
                        {chip.label}
                      </span>
                      <strong className="text-white text-xs">{chip.value}</strong>
                    </div>
                    <CheckCircle2 size={16} className="text-[#00C2A0] shrink-0" />
                  </div>
                ))}
              </div>

              {/* Automated Next Step Action Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-white/15 to-white/5 border border-white/20 text-xs">
                <div className="flex items-start gap-2.5">
                  <Zap size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#FF7A1A] tracking-wider block">
                      Triggered Follow-up Automation
                    </span>
                    <strong className="text-white font-medium">{data.funnel.action}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
            <span className="text-[#00C2A0] font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={15} />
              Sales speaks only with pre-qualified buyers holding verified requirements.
            </span>
            <span className="font-mono text-[11px] text-[#FF7A1A] font-bold bg-[#FF7A1A]/10 px-2 py-0.5 rounded">
              {data.funnel.conversion}
            </span>
          </div>
        </div>

        {/* Left Pane: Plain Form (Clipped over right pane via width) */}
        <div
          className="absolute inset-y-0 left-0 bg-[#F8F9FD] border-r-3 border-[#FF7A1A] p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-[width] duration-75 ease-out"
          style={{ width: `${value}%` }}
        >
          <div className="w-[500px]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#E5484D]">
                  TRADITIONAL STATIC FORM
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#E5484D] bg-[#E5484D]/10 px-2.5 py-0.5 rounded-full">
                Zero Qualification
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
                {data.plain.title}
              </h3>
              <p className="text-xs text-[#8A94A6] mt-1">
                Static text fields asking for contact info with no context.
              </p>
            </div>

            {/* Simulated Inputs */}
            <div className="space-y-2.5 max-w-sm mb-4">
              {data.plain.fields.map((f, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-white border border-[#E4E7F0] text-xs flex justify-between items-center text-[#45516B]"
                >
                  <span className="text-[#8A94A6]">{f.label}</span>
                  <strong className="text-[#0B1B3A] font-medium">{f.value}</strong>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-[#E5484D]/10 border border-[#E5484D]/20 text-xs text-[#E5484D] flex items-start gap-2 max-w-sm">
              <ShieldAlert size={16} className="shrink-0 mt-0.5" />
              <span>{data.plain.problem}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E4E7F0] flex items-center justify-between text-xs text-[#8A94A6] w-[500px]">
            <span className="text-[#E5484D] font-semibold flex items-center gap-1.5">
              <XCircle size={15} />
              {data.plain.dropoff}
            </span>
            <span className="font-mono text-[11px]">No score · No triage</span>
          </div>
        </div>

        {/* Drag Handle Knob */}
        <div
          className="absolute top-0 bottom-0 w-12 -ml-6 flex items-center justify-center pointer-events-none z-30"
          style={{ left: `${value}%` }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FF7A1A] text-white shadow-2xl flex items-center justify-center border-3 border-white ring-4 ring-[#FF7A1A]/40 transition-transform active:scale-95">
            <ArrowLeftRight size={18} />
          </div>
        </div>

        {/* Range Controller */}
        <input
          aria-label="Drag to compare plain form with Lead Games.com interactive funnel"
          type="range"
          min="15"
          max="85"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-40"
        />
      </div>

      {/* Version 2 Performance Benchmark Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl border border-[#E4E7F0] bg-white shadow-xs">
          <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
            <span>Visitor-to-Lead Conversion</span>
            <TrendingUp size={14} className="text-[#00C2A0]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#0B1B3A]">14.8%</span>
            <span className="text-xs font-bold text-[#E5484D] line-through">2.1% form</span>
          </div>
          <p className="text-[11px] text-[#00C2A0] font-bold mt-1">
            +605% higher completion through gamification
          </p>
        </div>

        <div className="p-4 rounded-xl border border-[#E4E7F0] bg-white shadow-xs">
          <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
            <span>Cost Per Qualified Lead</span>
            <CircleDollarSign size={14} className="text-[#FF7A1A]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#0B1B3A]">₹380</span>
            <span className="text-xs font-bold text-[#E5484D] line-through">₹1,850</span>
          </div>
          <p className="text-[11px] text-[#00C2A0] font-bold mt-1">
            -79% lower customer acquisition cost
          </p>
        </div>

        <div className="p-4 rounded-xl border border-[#E4E7F0] bg-white shadow-xs">
          <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
            <span>Sales Consultation Attendance</span>
            <Users size={14} className="text-[#5B3DF5]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#0B1B3A]">86.4%</span>
            <span className="text-xs font-bold text-[#E5484D] line-through">32.0%</span>
          </div>
          <p className="text-[11px] text-[#5B3DF5] font-bold mt-1">
            Zero cold follow-ups; instant automated dispatch
          </p>
        </div>
      </div>
    </div>
  );
}

function ComparisonPanels() {
  return (
    <>
      <div>
        <strong>Plain form</strong>
        <p>Name · Email · Phone · Message</p>
        <small>You know who submitted.</small>
      </div>
      <ChevronRight />
      <div>
        <strong>Interactive funnel</strong>
        <p>Goal · Need · Budget · Timeline · Behaviour</p>
        <small>You know who, what, and how ready.</small>
      </div>
    </>
  );
}

const journey = [
  { n: "Attract", d: "Campaign message and audience" },
  { n: "Engage", d: "A useful interactive hook" },
  { n: "Capture", d: "Consent and contact details" },
  { n: "Qualify", d: "Need, budget and timeline" },
  { n: "Score", d: "Agreed rules and lead state" },
  { n: "Automate", d: "The right follow-up path" },
  { n: "Convert", d: "Sales conversation or booking" },
];

export function JourneyDiagram() {
  const [active, setActive] = useState(0);
  const selected = journey[active] ?? journey[0];
  if (!selected) return null;
  return (
    <div className="journey">
      <div className="journey-line" />
      {journey.map((x, i) => (
        <button
          key={x.n}
          type="button"
          onClick={() => setActive(i)}
          onFocus={() => setActive(i)}
          className={active === i ? "active" : ""}
          aria-label={`${x.n}: ${x.d}`}
        >
          <span>{i + 1}</span>
          <strong>{x.n}</strong>
        </button>
      ))}
      <div className="journey-detail" aria-live="polite">
        <Target size={24} />
        <div>
          <strong>{selected.n}</strong>
          <p>{selected.d}</p>
        </div>
      </div>
    </div>
  );
}

export function LeadScorePlayground() {
  const [budget, setBudget] = useState(true);
  const [timeline, setTimeline] = useState<"Now" | "1–3 months" | "6+">("Now");
  const [need, setNeed] = useState<"Clear" | "Exploring">("Clear");
  const [contactPref, setContactPref] = useState<"WhatsApp" | "Phone" | "Email">("WhatsApp");

  const budgetPts = budget ? 30 : 0;
  const timelinePts = timeline === "Now" ? 35 : timeline === "1–3 months" ? 25 : 8;
  const needPts = need === "Clear" ? 25 : 12;
  const contactPts = contactPref === "Phone" ? 10 : contactPref === "WhatsApp" ? 10 : 5;

  const score = Math.min(100, budgetPts + timelinePts + needPts + contactPts);
  const state: "hot" | "warm" | "cold" =
    score >= 75 ? "hot" : score >= 45 ? "warm" : "cold";

  const setPreset = (type: "hot" | "warm" | "cold") => {
    if (type === "hot") {
      setBudget(true);
      setTimeline("Now");
      setNeed("Clear");
      setContactPref("WhatsApp");
    } else if (type === "warm") {
      setBudget(true);
      setTimeline("1–3 months");
      setNeed("Exploring");
      setContactPref("Email");
    } else {
      setBudget(false);
      setTimeline("6+");
      setNeed("Exploring");
      setContactPref("Email");
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F4F5F8] p-3 rounded-2xl border border-[#E4E7F0]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#45516B] px-1">
            Try Quick Presets:
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setPreset("hot")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                state === "hot"
                  ? "bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20"
                  : "bg-white text-[#45516B] border border-[#E4E7F0] hover:bg-[#EAEFF8]"
              }`}
            >
              🔥 Hot Lead (90-100)
            </button>
            <button
              type="button"
              onClick={() => setPreset("warm")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                state === "warm"
                  ? "bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20"
                  : "bg-white text-[#45516B] border border-[#E4E7F0] hover:bg-[#EAEFF8]"
              }`}
            >
              ⚡ Warm Lead (50-74)
            </button>
            <button
              type="button"
              onClick={() => setPreset("cold")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                state === "cold"
                  ? "bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20"
                  : "bg-white text-[#45516B] border border-[#E4E7F0] hover:bg-[#EAEFF8]"
              }`}
            >
              ❄️ Cold Lead (&lt;45)
            </button>
          </div>
        </div>
        <span className="text-xs font-mono text-[#8A94A6]">Rule-based · Fully Transparent</span>
      </div>

      {/* Main Playground Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Controls Column */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-[#E4E7F0] shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E7F0]">
            <h3 className="text-sm font-bold text-[#0B1B3A] uppercase tracking-wider">
              Scoring Inputs & Weights
            </h3>
            <span className="text-xs font-semibold text-[#5B3DF5] bg-[#5B3DF5]/10 px-2 py-0.5 rounded-md">
              Live Simulator
            </span>
          </div>

          {/* Budget */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#0B1B3A]">1. Budget Confirmed</label>
              <span className="text-xs font-mono font-bold text-[#5B3DF5]">+{budgetPts} pts</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setBudget(true)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                  budget
                    ? "bg-[#5B3DF5] text-white border-[#5B3DF5] shadow-xs"
                    : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                }`}
              >
                ✓ Yes, Budget Stated (+30)
              </button>
              <button
                type="button"
                onClick={() => setBudget(false)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                  !budget
                    ? "bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-xs"
                    : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                }`}
              >
                ✕ Unspecified / No Budget (+0)
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#0B1B3A]">2. Timeline Urgency</label>
              <span className="text-xs font-mono font-bold text-[#5B3DF5]">+{timelinePts} pts</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: "Now", label: "Immediate (<30d)", pts: 35 },
                { val: "1–3 months", label: "1-3 Months", pts: 25 },
                { val: "6+", label: "6+ Months / Later", pts: 8 },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setTimeline(item.val as any)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                    timeline === item.val
                      ? "bg-[#5B3DF5] text-white border-[#5B3DF5] shadow-xs"
                      : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                  }`}
                >
                  <span className="block truncate">{item.label}</span>
                  <span className="text-[10px] opacity-80 block">+{item.pts} pts</span>
                </button>
              ))}
            </div>
          </div>

          {/* Requirement Clarity */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#0B1B3A]">3. Requirement Clarity</label>
              <span className="text-xs font-mono font-bold text-[#5B3DF5]">+{needPts} pts</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setNeed("Clear")}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                  need === "Clear"
                    ? "bg-[#5B3DF5] text-white border-[#5B3DF5] shadow-xs"
                    : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                }`}
              >
                Specific Requirement (+25)
              </button>
              <button
                type="button"
                onClick={() => setNeed("Exploring")}
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                  need === "Exploring"
                    ? "bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-xs"
                    : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                }`}
              >
                Just Exploring Options (+12)
              </button>
            </div>
          </div>

          {/* Preferred Channel */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#0B1B3A]">4. Verified Contact Channel</label>
              <span className="text-xs font-mono font-bold text-[#5B3DF5]">+{contactPts} pts</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: "WhatsApp", label: "WhatsApp (+10)", icon: MessageCircle },
                { val: "Phone", label: "Direct Call (+10)", icon: PhoneCall },
                { val: "Email", label: "Email (+5)", icon: Mail },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setContactPref(item.val as any)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      contactPref === item.val
                        ? "bg-[#5B3DF5] text-white border-[#5B3DF5] shadow-xs"
                        : "bg-white text-[#45516B] border-[#E4E7F0] hover:bg-[#F6F7FB]"
                    }`}
                  >
                    <Icon size={13} />
                    <span>{item.val}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Output Column */}
        <div className="lg:col-span-5 bg-[#0B1B3A] text-white p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00C2A0] font-bold">
                Computed Score Output
              </span>
              <span
                className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  state === "hot"
                    ? "bg-[#FF7A1A] text-white"
                    : state === "warm"
                    ? "bg-[#5B3DF5] text-white"
                    : "bg-[#8A94A6] text-white"
                }`}
              >
                {state === "hot" ? "🔥 HOT TIER" : state === "warm" ? "⚡ WARM TIER" : "❄️ COLD / NURTURE"}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 space-y-3">
              <LeadScoreGauge score={score} />
              <LeadStateBadge state={state} />
            </div>

            <div className="space-y-2 mt-2 pt-4 border-t border-white/10">
              <span className="text-[11px] uppercase font-bold text-white/60 tracking-wider block">
                Automated System Action
              </span>
              <p className="text-xs text-white/90 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                {state === "hot"
                  ? "🚨 Immediate priority dispatch: Trigger WhatsApp VIP template and send instant Slack notification to Senior AE within 60 seconds."
                  : state === "warm"
                  ? "⚡ Automated qualification nurture: Dispatched tailored case study & schedule link via WhatsApp and email."
                  : "❄️ Self-service nurture: Enrolled into monthly industry newsletter; sales team time protected."}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
            <span>Score: {score}/100</span>
            <span>Channel: {contactPref}</span>
            <span>Target: {timeline}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AutomationTier {
  id: string;
  name: string;
  score: number;
  badge: string;
  badgeColor: string;
  leadName: string;
  leadCompany: string;
  leadPhone: string;
  leadNeed: string;
  budget: string;
  timeline: string;
  whatsappMessage: {
    text: string;
    buttons: string[];
    replyResponse: string;
  };
  crmStage: string;
  dealValue: string;
  assignedRep: string;
  slackChannel: string;
  slackAlert: string;
}

const automationTiers: Record<string, AutomationTier> = {
  hot: {
    id: "hot",
    name: "Hot Lead (Score 94/100)",
    score: 94,
    badge: "VIP IMMEDIATE DISPATCH",
    badgeColor: "bg-[#FF7A1A] text-white",
    leadName: "Rohan Verma",
    leadCompany: "Verma Holdings",
    leadPhone: "+91 98201 54321",
    leadNeed: "3 BHK High-Rise Penthouse with Private Deck",
    budget: "₹1.4 Cr – ₹1.7 Cr",
    timeline: "Ready to Book (Within 30 Days)",
    whatsappMessage: {
      text: "Hello Rohan! 👋 Thanks for completing our Villa & Penthouse Matcher. Your score indicates a 98% match for Tower Emerald in Whitefield (Pre-approved HDFC Loan status verified).\n\nWould you like our Senior Partner Vikram to arrange a private walkthrough this Saturday?",
      buttons: ["Book Saturday 11 AM", "Send Digital Brochure", "Talk to Vikram"],
      replyResponse: "Great choice! Senior Partner Vikram has been notified and will call you in 5 minutes to confirm your private viewing slot.",
    },
    crmStage: "Sales Qualified Lead (SQL)",
    dealValue: "₹1,55,00,000",
    assignedRep: "Vikram Nair (Sr. Real Estate Specialist)",
    slackChannel: "#sales-hot-leads",
    slackAlert: "🚨 HOT LEAD ALERT (Score: 94/100): Rohan Verma just qualified for Emerald 3BHK (Budget ₹1.55 Cr, Pre-approved HDFC loan, 30-day timeline). Auto-dispatched WhatsApp template.",
  },
  warm: {
    id: "warm",
    name: "Warm Lead (Score 68/100)",
    score: 68,
    badge: "NURTURE & VALUE-ADD",
    badgeColor: "bg-[#5B3DF5] text-white",
    leadName: "Pooja Hegde",
    leadCompany: "Urban Spaces",
    leadPhone: "+91 98450 11982",
    leadNeed: "2 or 3 BHK Apartment for Investment",
    budget: "₹85L – ₹1.1 Cr",
    timeline: "Researching for Next Quarter (60-90 Days)",
    whatsappMessage: {
      text: "Hi Pooja! ✨ Here is your custom Investment ROI Calculator report for North Corridor properties, projecting a 12.4% annual rental yield.\n\nWould you like our quarterly price appreciation guide sent over?",
      buttons: ["Send Appreciation PDF", "Schedule Next Month", "Chat with Advisor"],
      replyResponse: "Report dispatched! We will send a friendly check-in in 3 weeks, keeping your preferences saved.",
    },
    crmStage: "Marketing Qualified Lead (MQL)",
    dealValue: "₹95,00,000",
    assignedRep: "Ananya Sen (Growth Specialist)",
    slackChannel: "#marketing-nurture",
    slackAlert: "⚡ WARM LEAD: Pooja Hegde (Score: 68/100) explored North Corridor 2/3 BHK investment. Enrolled in 3-part quarterly appreciation drip.",
  },
  cold: {
    id: "cold",
    name: "Cold Lead (Score 35/100)",
    score: 35,
    badge: "AUTOMATED SELF-SERVICE",
    badgeColor: "bg-[#8A94A6] text-white",
    leadName: "Arjun Mehta",
    leadCompany: "Student / Researcher",
    leadPhone: "+91 99100 22334",
    leadNeed: "General market pricing inquiry",
    budget: "Under ₹40 Lakh",
    timeline: "Browsing for future (1+ Year)",
    whatsappMessage: {
      text: "Hi Arjun, thanks for your inquiry! Here is our complimentary 2026 Homebuyer's Starter Checklist to help plan your future property journey.",
      buttons: ["Download Starter Kit", "Subscribe to Updates"],
      replyResponse: "You're all set! You'll receive our monthly property newsletter with no pushy sales calls.",
    },
    crmStage: "Lead - Low Priority / Subscriber",
    dealValue: "₹35,00,000",
    assignedRep: "Automated Drip Bot",
    slackChannel: "#leads-digest",
    slackAlert: "❄️ INFO LEAD: Arjun Mehta (Score: 35/100). Low urgency / budget outside ICP. Sales time protected; enrolled into automated newsletter.",
  },
};

export function AutomationFlow() {
  const [tier, setTier] = useState<"hot" | "warm" | "cold">("hot");
  const [activeTab, setActiveTab] = useState<"whatsapp" | "crm" | "slack">("whatsapp");
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [showJson, setShowJson] = useState(false);

  const current = automationTiers[tier];

  return (
    <div className="w-full space-y-6">
      {/* Tier Selection Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F4F5F8] p-3 rounded-2xl border border-[#E4E7F0]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#45516B] px-1">
            Simulate Qualification Tier:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(["hot", "warm", "cold"] as const).map((t) => {
              const active = tier === t;
              const info = automationTiers[t];
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTier(t);
                    setSelectedButton(null);
                  }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? "bg-[#0B1B3A] text-white shadow-md ring-2 ring-[#0B1B3A]/20"
                      : "bg-white text-[#45516B] border border-[#E4E7F0] hover:bg-[#EAEFF8]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      t === "hot" ? "bg-[#FF7A1A]" : t === "warm" ? "bg-[#5B3DF5]" : "bg-[#8A94A6]"
                    }`}
                  />
                  <span>{info.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${current.badgeColor}`}>
            {current.badge}
          </span>
        </div>
      </div>

      {/* Visual Pipeline Stepper */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-[#E4E7F0] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#00C2A0]" />
          <div className="flex items-center justify-between text-xs text-[#8A94A6] mb-1">
            <span className="font-mono">Step 1 · 0.1s</span>
            <Bot size={15} className="text-[#00C2A0]" />
          </div>
          <strong className="block text-xs font-bold text-[#0B1B3A]">Interactive Capture</strong>
          <span className="text-[11px] text-[#45516B] block">Score computed: {current.score}/100</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-[#E4E7F0] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#5B3DF5]" />
          <div className="flex items-center justify-between text-xs text-[#8A94A6] mb-1">
            <span className="font-mono">Step 2 · 0.3s</span>
            <Database size={15} className="text-[#5B3DF5]" />
          </div>
          <strong className="block text-xs font-bold text-[#0B1B3A]">CRM Synchronized</strong>
          <span className="text-[11px] text-[#45516B] block">HubSpot / Twenty / Zoho record</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-[#E4E7F0] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#25D366]" />
          <div className="flex items-center justify-between text-xs text-[#8A94A6] mb-1">
            <span className="font-mono">Step 3 · 0.9s</span>
            <MessageCircle size={15} className="text-[#25D366]" />
          </div>
          <strong className="block text-xs font-bold text-[#0B1B3A]">WhatsApp Dispatched</strong>
          <span className="text-[11px] text-[#45516B] block">Official Business API verified</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-[#E4E7F0] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF7A1A]" />
          <div className="flex items-center justify-between text-xs text-[#8A94A6] mb-1">
            <span className="font-mono">Step 4 · 1.2s</span>
            <Bell size={15} className="text-[#FF7A1A]" />
          </div>
          <strong className="block text-xs font-bold text-[#0B1B3A]">Sales Team Alerted</strong>
          <span className="text-[11px] text-[#45516B] block">Slack & Calendar invite routed</span>
        </div>
      </div>

      {/* Main Interactive Sandbox Simulator */}
      <div className="bg-white rounded-2xl border border-[#E4E7F0] shadow-xl overflow-hidden">
        {/* Sandbox Tabs */}
        <div className="flex border-b border-[#E4E7F0] bg-[#FAFAFC] px-4 pt-3 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold border-b-2 transition-all ${
              activeTab === "whatsapp"
                ? "border-[#25D366] text-[#0B1B3A] bg-white shadow-xs"
                : "border-transparent text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            <MessageCircle size={15} className="text-[#25D366]" />
            <span>WhatsApp Business Simulator</span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("crm")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold border-b-2 transition-all ${
              activeTab === "crm"
                ? "border-[#5B3DF5] text-[#0B1B3A] bg-white shadow-xs"
                : "border-transparent text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            <Database size={15} className="text-[#5B3DF5]" />
            <span>CRM & Deal Record</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("slack")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold border-b-2 transition-all ${
              activeTab === "slack"
                ? "border-[#FF7A1A] text-[#0B1B3A] bg-white shadow-xs"
                : "border-transparent text-[#6B7280] hover:text-[#0B1B3A]"
            }`}
          >
            <Bell size={15} className="text-[#FF7A1A]" />
            <span>Sales Slack Channel Alert</span>
          </button>
        </div>

        {/* Tab Content 1: WhatsApp Business Simulator */}
        {activeTab === "whatsapp" && (
          <div className="p-6 bg-[#EFEAE2] min-h-[380px] flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D1D7DB]">
              {/* WhatsApp App Bar */}
              <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    TP
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <strong className="text-sm font-bold text-white">Lead Games.com Official Concierge</strong>
                      <CheckCheck size={14} className="text-[#25D366]" />
                    </div>
                    <span className="text-[11px] text-white/80 block">Verified Business Account · Online</span>
                  </div>
                </div>
                <Smartphone size={18} className="text-white/80" />
              </div>

              {/* Chat Canvas */}
              <div className="p-4 space-y-3 bg-[#E5DDD5]/50 min-h-[250px]">
                <div className="text-center">
                  <span className="text-[10px] font-semibold bg-white/80 text-[#54656F] px-2.5 py-1 rounded-md shadow-2xs">
                    TODAY · AUTOMATED DISPATCH AT 10:42 AM
                  </span>
                </div>

                {/* Incoming Bot Message */}
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-xs text-[#111B21] max-w-[92%] space-y-2 border border-black/5">
                  <p className="whitespace-pre-line leading-relaxed">{current.whatsappMessage.text}</p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#667781] pt-1">
                    <span>10:42 AM</span>
                    <CheckCheck size={14} className="text-[#53BDEB]" />
                  </div>
                </div>

                {/* Quick Reply Interactive Buttons */}
                <div className="space-y-1.5 max-w-[92%]">
                  {current.whatsappMessage.buttons.map((btn) => (
                    <button
                      key={btn}
                      type="button"
                      onClick={() => setSelectedButton(btn)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                        selectedButton === btn
                          ? "bg-[#25D366] text-white border-[#25D366] shadow-sm font-bold"
                          : "bg-white text-[#00A884] border-[#D1D7DB] hover:bg-[#F0F2F5]"
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>

                {/* Response Bubble on Click */}
                {selectedButton && (
                  <div className="flex justify-end pt-2">
                    <div className="bg-[#D9FDD3] p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs text-[#111B21] max-w-[85%] border border-[#25D366]/20">
                      <p className="font-medium text-[#111B21]">{selectedButton}</p>
                      <div className="flex items-center justify-end gap-1 text-[10px] text-[#667781] pt-1">
                        <span>10:43 AM</span>
                        <CheckCheck size={14} className="text-[#53BDEB]" />
                      </div>
                    </div>
                  </div>
                )}

                {selectedButton && (
                  <div className="bg-white p-3 rounded-xl shadow-xs text-xs text-[#0B1B3A] border-l-4 border-[#00C2A0] max-w-[92%] mt-2">
                    <p className="text-[11px] leading-relaxed text-[#3B4A54]">
                      {current.whatsappMessage.replyResponse}
                    </p>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="bg-[#F0F2F5] p-2.5 flex items-center gap-2 border-t border-[#D1D7DB]">
                <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-[#8A94A6]">
                  Type a reply or click above...
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center">
                  <Send size={14} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: CRM & Deal Record */}
        {activeTab === "crm" && (
          <div className="p-6 bg-white space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7F0]">
              <div>
                <h4 className="text-base font-bold text-[#0B1B3A]">
                  HubSpot / Twenty / Zoho CRM Synchronized Record
                </h4>
                <p className="text-xs text-[#8A94A6]">
                  Auto-populated in 0.4 seconds via native webhook with 100% field enrichment.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowJson(!showJson)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F4F5F8] text-[#45516B] border border-[#E4E7F0] hover:text-[#0B1B3A]"
              >
                <Terminal size={14} />
                <span>{showJson ? "View Clean CRM Record" : "View Raw JSON Payload"}</span>
              </button>
            </div>

            {showJson ? (
              <pre className="p-4 rounded-xl bg-[#0B1B3A] text-[#00C2A0] text-xs font-mono overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    event: "lead.qualified",
    timestamp: new Date().toISOString(),
    qualification_score: current.score,
    pipeline_tier: current.id,
    contact: {
      name: current.leadName,
      company: current.leadCompany,
      phone: current.leadPhone,
      whatsapp_optin: true,
    },
    deal: {
      stage: current.crmStage,
      value_inr: current.dealValue,
      assigned_owner: current.assignedRep,
      urgency_window: current.timeline,
      stated_budget: current.budget,
      specific_intent: current.leadNeed,
    },
    integrations_triggered: [
      "crm_sync",
      "whatsapp_template_send",
      "slack_team_alert",
      "calendar_hold",
    ],
  },
  null,
  2
)}
              </pre>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Contact Information
                  </span>
                  <strong className="text-xs text-[#0B1B3A] block">{current.leadName}</strong>
                  <span className="text-[11px] text-[#45516B]">{current.leadPhone}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Deal Valuation & Stage
                  </span>
                  <strong className="text-xs text-[#00C2A0] block font-mono">{current.dealValue}</strong>
                  <span className="text-[11px] text-[#45516B]">{current.crmStage}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Lead Score
                  </span>
                  <strong className="text-xs text-[#FF7A1A] block font-black">
                    {current.score} / 100 ({current.badge})
                  </strong>
                  <span className="text-[11px] text-[#45516B]">Verified Micro-commitments</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Assigned Account Executive
                  </span>
                  <strong className="text-xs text-[#0B1B3A] block">{current.assignedRep}</strong>
                  <span className="text-[11px] text-[#45516B]">Auto-assigned via round-robin</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Target Timeline
                  </span>
                  <strong className="text-xs text-[#0B1B3A] block">{current.timeline}</strong>
                  <span className="text-[11px] text-[#45516B]">Verified Urgency</span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E4E7F0]">
                  <span className="text-[10px] uppercase font-bold text-[#8A94A6] tracking-wider block">
                    Stated Requirement
                  </span>
                  <strong className="text-xs text-[#0B1B3A] block truncate">{current.leadNeed}</strong>
                  <span className="text-[11px] text-[#45516B]">Budget: {current.budget}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab Content 3: Slack Alert */}
        {activeTab === "slack" && (
          <div className="p-6 bg-[#4A154B]/5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4A154B]">
              <Bell size={16} />
              <span>Slack Workflow Bot Notification</span>
              <span className="bg-[#4A154B] text-white px-2 py-0.5 rounded text-[10px] font-mono">
                {current.slackChannel}
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E4E7F0] shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center font-black text-sm shrink-0">
                  ⚡
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-bold text-[#0B1B3A]">Lead Games.com Qualification Bot</strong>
                    <span className="text-[10px] bg-[#E4E7F0] text-[#6B7280] px-1.5 py-0.5 rounded font-mono">APP</span>
                    <span className="text-[10px] text-[#8A94A6]">10:42 AM</span>
                  </div>
                  <p className="text-xs text-[#45516B] leading-relaxed">{current.slackAlert}</p>
                </div>
              </div>

              <div className="pt-2 pl-13 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-[#00C2A0] text-white text-xs font-bold shadow-xs hover:bg-[#00A884] flex items-center gap-1.5"
                >
                  <PhoneCall size={13} />
                  <span>Call {current.leadName}</span>
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E7F0] text-[#0B1B3A] text-xs font-bold hover:bg-[#F4F5F8] flex items-center gap-1.5"
                >
                  <Database size={13} />
                  <span>Open CRM Deal ({current.dealValue})</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Latency & Ecosystem Support Badges */}
      <div className="p-4 rounded-2xl bg-[#0B1B3A] text-white flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00C2A0]/20 border border-[#00C2A0]/30 text-[#00C2A0] flex items-center justify-center font-bold">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">
              Automated Follow-Up Pipeline: &lt; 1.8s Total Latency
            </span>
            <span className="text-[11px] text-white/70 block">
              100% Opt-In Verified · Direct Webhooks · No Manual CSV Uploads
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
          <span className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">HubSpot</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">Zoho CRM</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">Salesforce</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">Twenty CRM</span>
          <span className="bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-2.5 py-1 rounded-md font-bold">
            WhatsApp API
          </span>
          <span className="bg-white/10 px-2.5 py-1 rounded-md text-white/90">Slack</span>
        </div>
      </div>
    </div>
  );
}

export function SampleExperienceCards() {
  return (
    <div className="experience-grid">
      {[
        { n: "Spin & Win", i: <RotateCw size={24} />, v: "Demo prize: campaign audit" },
        { n: "Scratch & Win", i: <Sparkles size={24} />, v: "Reveal demo offer" },
        { n: "Mini Quiz", i: <ClipboardCheck size={24} />, v: "2 quick questions" },
        { n: "Calculator", i: <Calculator size={24} />, v: "Estimate a result" },
        { n: "Memory Match", i: <RefreshCw size={24} />, v: "Match 4 pairs" },
        { n: "Assessment", i: <BarChart3 size={24} />, v: "Get a sample score" },
      ].map((x, i) => (
        <MiniExperience key={x.n} {...x} index={i} />
      ))}
    </div>
  );
}

function MiniExperience({
  n,
  i,
  v,
  index,
}: {
  n: string;
  i: React.ReactNode;
  v: string;
  index: number;
}) {
  const [played, setPlayed] = useState(false);
  return (
    <article className="experience-card">
      <span className="sample-badge">Demo</span>
      <div className={`experience-visual ${played ? "played" : ""}`}>{i}</div>
      <h3>{n}</h3>
      <p>
        {played
          ? index === 0
            ? "You landed on: Campaign audit"
            : index === 3
            ? "Illustrative output: 64"
            : index === 5
            ? "Sample score: 72/100"
            : "Demo complete — try again"
          : v}
      </p>
      <button
        type="button"
        className="btn-secondary text-xs"
        onClick={() => setPlayed(!played)}
      >
        {played ? "Reset" : "Try it"}
      </button>
    </article>
  );
}

interface ChannelDataset {
  label: string;
  source: string;
  visitors: number;
  starts: number;
  completions: number;
  captures: number;
  qualified: number;
  cpl: string;
  benchmarkCpl: string;
  growth: string;
  topDropReason: string;
  stages: {
    name: string;
    stepNum: number;
    count: number;
    percent: number;
    dropFromPrev: number;
    dropCount: number;
    diagnostic: string;
  }[];
}

const analyticsDatasets: Record<string, ChannelDataset> = {
  all: {
    label: "All Traffic (Blended)",
    source: "Multi-Channel Paid & Direct Traffic",
    visitors: 14200,
    starts: 10650,
    completions: 7810,
    captures: 5254,
    qualified: 3124,
    cpl: "₹620",
    benchmarkCpl: "₹1,850",
    growth: "+24.8% vs static forms",
    topDropReason: "Question 3 (Budget selection) accounted for 14% of early exits before automated re-engagement.",
    stages: [
      {
        name: "Ad / Page Visitors",
        stepNum: 1,
        count: 14200,
        percent: 100,
        dropFromPrev: 0,
        dropCount: 0,
        diagnostic: "Baseline unique visits landing on interactive experience page.",
      },
      {
        name: "Funnel Starts",
        stepNum: 2,
        count: 10650,
        percent: 75,
        dropFromPrev: 25,
        dropCount: 3550,
        diagnostic: "Immediate hook engaged 75% of visitors (3.2x higher than typical landing page click-through).",
      },
      {
        name: "Full Completions",
        stepNum: 3,
        count: 7810,
        percent: 55,
        dropFromPrev: 27,
        dropCount: 2840,
        diagnostic: "Completed all dynamic questions. Gamified progress bar sustained 73% retention through question flow.",
      },
      {
        name: "Contact Captures",
        stepNum: 4,
        count: 5254,
        percent: 37,
        dropFromPrev: 33,
        dropCount: 2556,
        diagnostic: "Lead submitted WhatsApp / Email to unlock customized assessment report or discount score.",
      },
      {
        name: "Sales-Qualified Leads",
        stepNum: 5,
        count: 3124,
        percent: 22,
        dropFromPrev: 41,
        dropCount: 2130,
        diagnostic: "Filtered through custom scoring rules as Hot or Warm, auto-synced to CRM & alerted to sales reps.",
      },
    ],
  },
  meta: {
    label: "Meta / Instagram Ads",
    source: "Reels & Story Gamified Ad Creatives",
    visitors: 8400,
    starts: 6888,
    completions: 4872,
    captures: 3360,
    qualified: 1848,
    cpl: "₹480",
    benchmarkCpl: "₹1,420",
    growth: "+38.2% mobile engagement",
    topDropReason: "Mobile OTP / phone field caused 18% abandonment before WhatsApp 1-tap fallback.",
    stages: [
      {
        name: "Ad / Page Visitors",
        stepNum: 1,
        count: 8400,
        percent: 100,
        dropFromPrev: 0,
        dropCount: 0,
        diagnostic: "High-volume visual traffic driven by interactive Reels teaser creatives.",
      },
      {
        name: "Funnel Starts",
        stepNum: 2,
        count: 6888,
        percent: 82,
        dropFromPrev: 18,
        dropCount: 1512,
        diagnostic: "Exceptional initial engagement (82%) driven by tap-to-play curiosity gap.",
      },
      {
        name: "Full Completions",
        stepNum: 3,
        count: 4872,
        percent: 58,
        dropFromPrev: 29,
        dropCount: 2016,
        diagnostic: "Quick mobile-optimized swipe controls maintained rapid question pacing.",
      },
      {
        name: "Contact Captures",
        stepNum: 4,
        count: 3360,
        percent: 40,
        dropFromPrev: 31,
        dropCount: 1512,
        diagnostic: "Direct WhatsApp submission enabled frictionless conversion without password creation.",
      },
      {
        name: "Sales-Qualified Leads",
        stepNum: 5,
        count: 1848,
        percent: 22,
        dropFromPrev: 45,
        dropCount: 1512,
        diagnostic: "Scored high on immediate purchasing intent; routed instantly via webhook.",
      },
    ],
  },
  google: {
    label: "Google Search Ads",
    source: "High-Intent Commercial Keyword Traffic",
    visitors: 3600,
    starts: 2448,
    completions: 1980,
    captures: 1404,
    qualified: 1044,
    cpl: "₹820",
    benchmarkCpl: "₹2,400",
    growth: "+3.2x higher lead warmth",
    topDropReason: "Visitors with strict enterprise firewalls had slight latency on verification webhooks.",
    stages: [
      {
        name: "Ad / Page Visitors",
        stepNum: 1,
        count: 3600,
        percent: 100,
        dropFromPrev: 0,
        dropCount: 0,
        diagnostic: "Targeted B2B buyers searching for commercial solutions and software pricing.",
      },
      {
        name: "Funnel Starts",
        stepNum: 2,
        count: 2448,
        percent: 68,
        dropFromPrev: 32,
        dropCount: 1152,
        diagnostic: "Evaluation mindset: buyers initiate assessment to compare features and costs.",
      },
      {
        name: "Full Completions",
        stepNum: 3,
        count: 1980,
        percent: 55,
        dropFromPrev: 19,
        dropCount: 468,
        diagnostic: "Highest completion retention (81% of starters finished all assessment criteria).",
      },
      {
        name: "Contact Captures",
        stepNum: 4,
        count: 1404,
        percent: 39,
        dropFromPrev: 29,
        dropCount: 576,
        diagnostic: "Willing to provide corporate email and company size to receive formal benchmark.",
      },
      {
        name: "Sales-Qualified Leads",
        stepNum: 5,
        count: 1044,
        percent: 29,
        dropFromPrev: 26,
        dropCount: 360,
        diagnostic: "Super-hot intent: 74% of captures met enterprise budget and immediate purchase window.",
      },
    ],
  },
  direct: {
    label: "WhatsApp & Direct Flow",
    source: "CRM Reactivation & Referral Broadcasts",
    visitors: 2200,
    starts: 1870,
    completions: 1518,
    captures: 1188,
    qualified: 792,
    cpl: "₹240",
    benchmarkCpl: "₹950",
    growth: "+4.1x referral conversion",
    topDropReason: "Time-window expiration on promotional scratch vouchers.",
    stages: [
      {
        name: "Ad / Page Visitors",
        stepNum: 1,
        count: 2200,
        percent: 100,
        dropFromPrev: 0,
        dropCount: 0,
        diagnostic: "Warm database contacts receiving seasonal audit and voucher links.",
      },
      {
        name: "Funnel Starts",
        stepNum: 2,
        count: 1870,
        percent: 85,
        dropFromPrev: 15,
        dropCount: 330,
        diagnostic: "Near-instant engagement due to high prior trust and brand affinity.",
      },
      {
        name: "Full Completions",
        stepNum: 3,
        count: 1518,
        percent: 69,
        dropFromPrev: 19,
        dropCount: 352,
        diagnostic: "Highest full-completion rate (81% of starters completed all questions).",
      },
      {
        name: "Contact Captures",
        stepNum: 4,
        count: 1188,
        percent: 54,
        dropFromPrev: 22,
        dropCount: 330,
        diagnostic: "Phone number pre-filled; single tap confirms identity and sends results.",
      },
      {
        name: "Sales-Qualified Leads",
        stepNum: 5,
        count: 792,
        percent: 36,
        dropFromPrev: 33,
        dropCount: 396,
        diagnostic: "High-value returning buyers ready for repeat orders or service upgrades.",
      },
    ],
  },
};

export function AnalyticsPreview() {
  const [activeDataset, setActiveDataset] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"visual" | "table">("visual");
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(2); // Default to Completions

  const current = analyticsDatasets[activeDataset] || analyticsDatasets.all;
  const activeStage = current.stages[selectedStageIdx] || current.stages[0];

  return (
    <div className="bg-[#0D1829] border border-slate-800/90 text-white shadow-2xl p-5 sm:p-7 lg:p-8 rounded-2xl relative">
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/15 text-[#FF9E4D] border border-[#FF7A1A]/30 text-[11px] font-bold uppercase tracking-wider">
              Live Benchmark
            </span>
            <span className="text-slate-500 font-bold" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400 font-medium">Simulated 8-Week Campaign Data</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold !text-white font-heading m-0 tracking-tight">
            Funnel Conversion & Drop-off Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 m-0 mt-1.5 flex items-center gap-1.5">
            <span className="text-slate-400">Traffic Source:</span>
            <strong className="text-white font-semibold">{current.source}</strong>
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <div className="inline-flex rounded-xl bg-slate-900/90 p-1 border border-slate-700/80 shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode("visual")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "visual"
                  ? "bg-[#5B3DF5] text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <BarChart3 size={14} />
              <span>Funnel View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "table"
                  ? "bg-[#5B3DF5] text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Table size={14} />
              <span>Drop-Off Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Traffic Channel Segments Filter */}
      <div className="pt-5 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Traffic Channel Breakdown
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Click to inspect different advertising channels
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(analyticsDatasets).map(([key, data]) => {
            const isSelected = activeDataset === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveDataset(key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#5B3DF5] border-[#5B3DF5] text-white shadow-md shadow-[#5B3DF5]/25"
                    : "bg-slate-800/50 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {data.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Level Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
        {/* Card 1: Total Visitors */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span>Total Visitors</span>
            <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-[#00C2A0]">
              <Users size={14} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight my-1">
            {current.visitors.toLocaleString()}
          </div>
          <div className="text-xs text-[#00C2A0] font-semibold flex items-center gap-1 mt-1">
            <TrendingUp size={13} />
            <span>100% Top of Funnel</span>
          </div>
        </div>

        {/* Card 2: Full Completion */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span>Full Completion</span>
            <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-[#8B6BFF]">
              <CheckCircle2 size={14} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight my-1">
            {Math.round((current.completions / current.visitors) * 100)}%
          </div>
          <div className="text-xs text-slate-300 font-medium mt-1">
            <strong className="text-white font-bold">{current.completions.toLocaleString()}</strong> completed all steps
          </div>
        </div>

        {/* Card 3: Qualified Leads */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span>Qualified Leads</span>
            <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-[#FF7A1A]">
              <Target size={14} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight my-1">
            {current.qualified.toLocaleString()}
          </div>
          <div className="text-xs text-[#FF9E4D] font-semibold mt-1">
            {Math.round((current.qualified / current.visitors) * 100)}% conversion to SQL
          </div>
        </div>

        {/* Card 4: Cost Per Lead */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span>Cost Per Lead (CPL)</span>
            <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-[#00C2A0]">
              <Zap size={14} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight my-1">
            {current.cpl}
          </div>
          <div className="text-xs text-slate-300 mt-1">
            vs <span className="line-through text-slate-400">{current.benchmarkCpl}</span> standard form
          </div>
        </div>
      </div>

      {/* Main Content: Visual Funnel OR Drop-Off Audit Table */}
      {viewMode === "visual" ? (
        <div className="space-y-4 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400 mb-2 font-medium">
            <span className="font-semibold text-slate-300">Stage Progression & Retention</span>
            <span>Click any stage below to inspect drop-off diagnostics</span>
          </div>

          <div className="space-y-3">
            {current.stages.map((stg, i) => {
              const isSelected = selectedStageIdx === i;
              return (
                <div
                  key={stg.name}
                  onClick={() => setSelectedStageIdx(i)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-800/90 border-[#5B3DF5] shadow-lg shadow-[#5B3DF5]/20 ring-1 ring-[#5B3DF5]"
                      : "bg-slate-800/35 border-slate-700/60 hover:bg-slate-800/65 hover:border-slate-600"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold flex items-center justify-center font-mono shrink-0">
                        {stg.stepNum}
                      </span>
                      <strong className="text-sm sm:text-base font-bold text-white font-heading">
                        {stg.name}
                      </strong>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                      <span className="font-mono text-white font-bold">
                        {stg.count.toLocaleString()} users
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-700/70 text-slate-200 font-semibold text-xs border border-slate-600/70 font-mono">
                        {stg.percent}% of visitors
                      </span>
                      {stg.dropFromPrev > 0 ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold text-xs font-mono">
                          -{stg.dropFromPrev}% stage drop
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold text-xs font-mono">
                          Initial entry
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-900/90 border border-slate-700/50 h-3 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-[#5B3DF5] via-[#8B6BFF] to-[#FF7A1A]"
                      style={{ width: `${Math.max(stg.percent, 3)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Diagnostic Detail for Active Selected Stage */}
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#5B3DF5]/20 via-slate-800/60 to-slate-800/30 border border-[#5B3DF5]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#5B3DF5] text-white font-bold text-[10px] uppercase tracking-wider">
                  Stage {activeStage.stepNum} Diagnostic
                </span>
                <strong className="text-sm sm:text-base font-bold text-white">
                  {activeStage.name}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl m-0 leading-relaxed font-normal">
                {activeStage.diagnostic}
              </p>
            </div>

            <div className="shrink-0 bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-2.5 text-left md:text-center w-full md:w-auto min-w-[140px]">
              <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">
                Step Retention
              </span>
              <strong className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
                {activeStage.stepNum === 1
                  ? "100%"
                  : `${Math.round(100 - activeStage.dropFromPrev)}%`}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Drop-off Audit Table */
        <div className="overflow-x-auto pt-2 rounded-xl border border-slate-700/80 bg-slate-900/60">
          <table className="min-w-[680px] w-full text-xs sm:text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/80 text-slate-300 font-bold text-xs uppercase tracking-wider">
                <th className="py-3 px-4">Funnel Stage</th>
                <th className="py-3 px-4">Volume</th>
                <th className="py-3 px-4">% of Traffic</th>
                <th className="py-3 px-4">Stage Drop-off</th>
                <th className="py-3 px-4">Dropped Users</th>
                <th className="py-3 px-4">Conversion Insight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {current.stages.map((stg) => (
                <tr key={stg.name} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">
                    <span className="text-slate-400 mr-2 font-mono">{stg.stepNum}.</span>
                    {stg.name}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-white">
                    {stg.count.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded bg-slate-700/80 text-white font-bold text-xs font-mono">
                      {stg.percent}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    {stg.dropFromPrev > 0 ? (
                      <span className="text-rose-300 font-semibold font-mono">
                        -{stg.dropFromPrev}%
                      </span>
                    ) : (
                      <span className="text-emerald-300 font-semibold font-mono">0%</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-300">
                    {stg.dropCount > 0 ? `-${stg.dropCount.toLocaleString()}` : "0"}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 text-xs max-w-xs leading-normal">
                    {stg.diagnostic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Strategic Takeaway Footer */}
      <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#FF7A1A] shrink-0" />
          <span className="text-slate-300">
            <strong className="text-white font-bold">CRO Finding:</strong> {current.topDropReason}
          </span>
        </div>
        <div className="text-xs text-slate-400">
          Syncs in real-time to Google Analytics 4, Meta Conversions API & CRM.
        </div>
      </div>
    </div>
  );
}

export function IndustryScene({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    Healthcare: <HeartPulse size={36} />,
    "Real Estate": <Home size={36} />,
    "SaaS & ERP": <BarChart3 size={36} />,
    Education: <ClipboardCheck size={36} />,
    Automotive: <Car size={36} />,
    "E-commerce": <CircleDollarSign size={36} />,
  };
  return (
    <div className="industry-scene" aria-label={`${kind} interactive sample`}>
      <span className="scene-icon">{map[kind]}</span>
      <button type="button" aria-label="Captured need">
        1
      </button>
      <button type="button" aria-label="Captured budget">
        2
      </button>
      <button type="button" aria-label="Captured timeline">
        3
      </button>
    </div>
  );
}
