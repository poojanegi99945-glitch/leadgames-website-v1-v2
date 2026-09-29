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
} from "lucide-react";
import { FunnelDemo, LeadScoreGauge, LeadStateBadge } from "./FunnelDemo";

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="font-bold text-[#5B3DF5]">▶</span>
      <i className="text-[#FF7A1A]">✦</i>
    </span>
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
          <BrandMark /> tezplay
        </div>
        <FunnelDemo compact />
      </div>
    </div>
  );
}

export function FormVsFunnelSlider() {
  const [value, setValue] = useState(50);
  return (
    <div className="compare-wrap">
      <div className="compare-mobile">
        <ComparisonPanels />
      </div>
      <div
        className="compare-slider"
        style={{ "--split": `${value}%` } as React.CSSProperties}
      >
        <div className="compare-pane form-pane">
          <span className="sample-label">PLAIN FORM</span>
          <h3>Contact details</h3>
          {["Name", "Email", "Phone", "Message"].map((x) => (
            <div className="fake-input" key={x}>
              {x}
            </div>
          ))}
          <p>You know who submitted.</p>
        </div>
        <div className="compare-pane funnel-pane">
          <span className="sample-label">TEZPLAY FUNNEL</span>
          <h3>Qualified context</h3>
          {[
            "Goal",
            "Need",
            "Budget",
            "Timeline",
            "Behaviour",
            "Contact",
          ].map((x, i) => (
            <span className="context-chip" key={x}>
              <Check size={14} /> {x}
              {i > 2 ? " captured" : ""}
            </span>
          ))}
          <p>You know who, what, and how ready.</p>
        </div>
        <input
          aria-label="Compare form and interactive funnel"
          type="range"
          min="20"
          max="80"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
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
  const [budget, setBudget] = useState(false);
  const [timeline, setTimeline] = useState("6+");
  const [need, setNeed] = useState("Exploring");
  const score = Math.min(
    100,
    (budget ? 30 : 8) +
      (timeline === "Now" ? 35 : timeline === "1–3 months" ? 25 : 10) +
      (need === "Clear" ? 25 : 12) +
      10
  );
  const state: "hot" | "warm" | "cold" =
    score >= 75 ? "hot" : score >= 45 ? "warm" : "cold";

  return (
    <div className="playground">
      <div className="controls">
        <label>
          <span>Budget confirmed</span>
          <input
            type="checkbox"
            checked={budget}
            onChange={(e) => setBudget(e.target.checked)}
          />
        </label>
        <label>
          <span>Timeline</span>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option>6+</option>
            <option>1–3 months</option>
            <option>Now</option>
          </select>
        </label>
        <label>
          <span>Need clarity</span>
          <select value={need} onChange={(e) => setNeed(e.target.value)}>
            <option>Exploring</option>
            <option>Clear</option>
          </select>
        </label>
        <label>
          <span>Contact preference</span>
          <select>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Phone</option>
          </select>
        </label>
      </div>
      <div className="score-output">
        <span className="sample-badge">Sample scoring logic</span>
        <LeadScoreGauge score={score} />
        <LeadStateBadge state={state} />
        <p>
          <strong>Suggested action:</strong>{" "}
          {state === "hot"
            ? "Offer a strategy call now."
            : state === "warm"
            ? "Send a tailored follow-up."
            : "Share a useful guide."}
        </p>
      </div>
    </div>
  );
}

const flowAbove = [
  "WhatsApp message",
  "CRM record",
  "Notify sales",
  "Book consultation",
];
const flowBelow = ["Email nurture", "Re-engage later"];

export function AutomationFlow() {
  const [above, setAbove] = useState(true);
  const [active, setActive] = useState("Lead qualified");
  const branch = above ? flowAbove : flowBelow;

  return (
    <div className="automation">
      <div className="flow-toggle">
        <button
          type="button"
          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            above ? "bg-[#5B3DF5] text-white" : "border border-[#E4E7F0]"
          }`}
          onClick={() => setAbove(true)}
        >
          Above threshold
        </button>
        <button
          type="button"
          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            !above ? "bg-[#5B3DF5] text-white" : "border border-[#E4E7F0]"
          }`}
          onClick={() => setAbove(false)}
        >
          Below threshold
        </button>
      </div>
      <div className="flow-nodes">
        <FlowNode text="Lead qualified" onClick={setActive} />
        <ChevronRight />
        <FlowNode text="Score check" onClick={setActive} />
        {branch.map((x) => (
          <span className="flow-segment" key={x}>
            <ChevronRight />
            <FlowNode text={x} onClick={setActive} />
          </span>
        ))}
      </div>
      <p className="flow-description" aria-live="polite">
        <strong>{active}</strong> —{" "}
        {active === "Score check"
          ? "The agreed lead score selects the next branch."
          : "This action runs only with the right consent and access."}
      </p>
    </div>
  );
}

function FlowNode({
  text,
  onClick,
}: {
  text: string;
  onClick: (s: string) => void;
}) {
  return (
    <button type="button" onClick={() => onClick(text)}>
      {text.includes("WhatsApp") ? (
        <MessageCircle size={18} />
      ) : text.includes("Email") ? (
        <Mail size={18} />
      ) : (
        <Check size={18} />
      )}
      <span>{text}</span>
    </button>
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

export function AnalyticsPreview() {
  const bars = [100, 72, 58, 41, 26];
  return (
    <div className="analytics">
      <div className="analytics-head">
        <div>
          <span className="sample-badge">Sample data</span>
          <h3>Campaign overview</h3>
        </div>
        <span>Last 8 weeks</span>
      </div>
      <div className="metric-row">
        {[
          ["8,240", "Visitors"],
          ["41%", "Completion"],
          ["326", "Qualified"],
          ["₹840", "Cost / lead"],
        ].map((x) => (
          <div key={x[1]}>
            <strong>{x[0]}</strong>
            <span>{x[1]}</span>
          </div>
        ))}
      </div>
      <div
        className="funnel-bars"
        aria-label="Sample funnel: visitors 100 percent, starts 72, completions 58, leads 41, qualified 26"
      >
        {bars.map((b, i) => (
          <div key={b}>
            <span>
              {["Visitors", "Starts", "Completions", "Leads", "Qualified"][i]}
            </span>
            <i style={{ width: `${b}%` }} />
            <strong>{b}%</strong>
          </div>
        ))}
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
