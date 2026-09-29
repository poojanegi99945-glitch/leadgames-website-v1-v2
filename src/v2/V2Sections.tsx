import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers3,
  MousePointerClick,
  Gauge,
  BarChart3,
  MessageSquareMore,
  Stethoscope,
  Building2,
  Cloud,
  GraduationCap,
  Car,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import {
  AnalyticsPreview,
  AutomationFlow,
  BrandMark,
  FormVsFunnelSlider,
  IndustryScene,
  JourneyDiagram,
  LeadScorePlayground,
  PhoneFrameDemo,
  SampleExperienceCards,
} from "./InteractiveShowcase";
import { FunnelDemo } from "./FunnelDemo";
import { configs } from "./configs";
import { industries, serviceGroups, faqs } from "./site";

// V2 Menu / Header
export const V2Menu: React.FC = () => {
  return (
    <header className="site-header border-y border-[#E4E7F0] bg-white">
      <div className="nav-shell">
        <Link to="/v2" className="logo" aria-label="TezPlay home">
          <BrandMark />
          <span>TezPlay</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#v2-services">Services</a>
          <a href="#v2-samples">Sample Experiences</a>
          <a href="#v2-industries">Industries</a>
          <a href="#v2-process">How We Work</a>
          <a href="#v2-faq">FAQ</a>
        </nav>

        <div className="nav-actions">
          <a href="#v1-proposal" className="btn-secondary text-xs">
            Book a Strategy Call
          </a>
          <a href="#v1-proposal" className="btn-primary text-xs">
            Request a Proposal
          </a>
        </div>
      </div>
    </header>
  );
};

// V2 Hero Section
export const V2Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Interactive lead generation agency</span>
          <h1>
            Turn Clicks Into Play. Turn Play Into <em>Qualified Leads.</em>
          </h1>
          <p>
            We build and manage quizzes, assessments, calculators and gamified
            campaigns that capture intent, qualify leads and trigger automated
            follow-up.
          </p>
          <div className="button-row">
            <a href="#v1-proposal" className="btn-primary text-sm py-3 px-6">
              Request a Proposal <ArrowRight size={16} />
            </a>
            <a href="#v2-samples" className="btn-secondary text-sm py-3 px-6">
              Try a Sample Experience
            </a>
          </div>
          <div className="micro-line">
            <span>
              <CheckCircle2 size={15} />
              Custom-built
            </span>
            <span>
              <CheckCircle2 size={15} />
              Lead qualification
            </span>
            <span>
              <CheckCircle2 size={15} />
              CRM & WhatsApp follow-up
            </span>
          </div>
        </div>
        <PhoneFrameDemo />
      </div>
    </section>
  );
};

// V2 Industry Strip with icons like Version 1
const v2Industries = [
  { label: "Healthcare", icon: Stethoscope },
  { label: "Real Estate", icon: Building2 },
  { label: "SaaS & ERP", icon: Cloud },
  { label: "Education", icon: GraduationCap },
  { label: "Automotive", icon: Car },
  { label: "E-commerce", icon: ShoppingBag },
  { label: "Agencies", icon: Briefcase },
];

export const V2IndustryStrip: React.FC = () => {
  return (
    <div className="industry-strip">
      <div className="container">
        <span>Built for teams in</span>
        {v2Industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <strong key={ind.label} className="inline-flex items-center gap-1.5">
              <Icon size={14} className="text-[#5B3DF5] shrink-0" aria-hidden="true" />
              <span>{ind.label}</span>
            </strong>
          );
        })}
      </div>
    </div>
  );
};

// V2 Problem / Why Interactive
export const V2Problem: React.FC = () => {
  return (
    <section className="section" id="v2-problem">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Why interactive</span>
          <h2>Static Forms Capture Details. TezPlay Captures Intent.</h2>
          <p>
            A form tells you who submitted. An interactive experience tells
            you what they need and how ready they are.
          </p>
        </header>
        <FormVsFunnelSlider />
      </div>
    </section>
  );
};

// V2 Connected Journey
export const V2Journey: React.FC = () => {
  return (
    <section className="section soft" id="v2-journey">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">The connected journey</span>
          <h2>From Ad Click to Qualified Lead</h2>
          <p>One connected journey, built and managed by us.</p>
        </header>
        <JourneyDiagram />
      </div>
    </section>
  );
};

// V2 Services
export const V2Services: React.FC = () => {
  return (
    <section className="section" id="v2-services">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Our services</span>
          <h2>What We Build and Manage</h2>
        </header>
        <div className="service-grid">
          {serviceGroups.map((x, i) => (
            <article className="service-card" key={x.title}>
              <span className="service-icon">
                {[
                  <MousePointerClick key="1" />,
                  <Gauge key="2" />,
                  <BarChart3 key="3" />,
                  <MessageSquareMore key="4" />,
                  <Layers3 key="5" />,
                ][i]}
              </span>
              <span className="card-number">0{i + 1}</span>
              <h3>{x.title}</h3>
              <p>{x.promise}</p>
              <ul>
                {x.links.map(([name]) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <a href="#v1-proposal">
                Explore this service <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// V2 Live Samples
export const V2Samples: React.FC = () => {
  return (
    <section className="section dark-section" id="v2-samples">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Live samples</span>
          <h2>Try Them Yourself</h2>
          <p>
            Live samples of the experiences we build. Everything here is demo
            content.
          </p>
        </header>
        <SampleExperienceCards />
      </div>
    </section>
  );
};

// V2 Lead Scoring
export const V2Scoring: React.FC = () => {
  return (
    <section className="section" id="v2-scoring">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Lead intelligence</span>
          <h2>Not Every Lead Is Equal</h2>
          <p>
            We turn answers into a clear score and next action your sales
            team can act on. Scoring rules are agreed with you, so they
            reflect how you actually sell.
          </p>
        </header>
        <LeadScorePlayground />
        <p className="caption">Sample scoring logic for illustration.</p>
      </div>
    </section>
  );
};

// V2 Automation
export const V2Automation: React.FC = () => {
  return (
    <section className="section soft" id="v2-automation">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Follow-up</span>
          <h2>Qualification Should Trigger Action</h2>
          <p>
            Route each lead to the right follow-up automatically: WhatsApp,
            email, CRM and sales alerts.
          </p>
        </header>
        <AutomationFlow />
        <p className="caption">
          We can connect leads to systems such as HubSpot, Zoho,
          Salesforce, Twenty CRM, email tools and WhatsApp Business,
          depending on your setup.
        </p>
      </div>
    </section>
  );
};

// V2 Industries
export const V2Industries: React.FC = () => {
  return (
    <section className="section" id="v2-industries">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Industry solutions</span>
          <h2>Interactive Lead Generation for Your Industry</h2>
        </header>
        <div className="industry-grid">
          {industries.map((x) => (
            <article className="industry-card" key={x.slug}>
              <IndustryScene kind={x.name} />
              <h3>{x.name}</h3>
              <ul>
                {x.items.map((y) => (
                  <li key={y}>{y}</li>
                ))}
              </ul>
              <a href="#v1-proposal">
                View industry solution <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// V2 Live Industry Demos
export const V2LiveDemos: React.FC = () => {
  const [demoTab, setDemoTab] = useState<"health" | "realty" | "saas">("health");

  return (
    <section className="section soft" id="v2-demos">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Sample funnels</span>
          <h2>See Qualification in Action</h2>
        </header>
        <div className="flex justify-center gap-2 mb-6">
          {[
            { id: "health", label: "Healthcare" },
            { id: "realty", label: "Real Estate" },
            { id: "saas", label: "SaaS & ERP" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setDemoTab(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                demoTab === tab.id
                  ? "bg-[#5B3DF5] text-white shadow-sm"
                  : "bg-white border border-[#E4E7F0] text-[#45516B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="embedded-demo">
          {demoTab === "health" && (
            <>
              <div>
                <span className="sample-badge">Interactive sample</span>
                <h3>Sample: Find the Right Care Path</h3>
                <p>
                  Answer a few sample questions to see how qualification
                  creates a clearer next action.
                </p>
              </div>
              <FunnelDemo config={configs["healthcare-care-path"]} />
            </>
          )}

          {demoTab === "realty" && (
            <>
              <div>
                <span className="sample-badge">Interactive sample</span>
                <h3>Sample: Find Your Ideal Property</h3>
                <p>
                  Match buyer preferences to verified property tiers and
                  timeline readiness.
                </p>
              </div>
              <FunnelDemo config={configs["real-estate-finder"]} />
            </>
          )}

          {demoTab === "saas" && (
            <>
              <div>
                <span className="sample-badge">Interactive sample</span>
                <h3>Sample: Find the Right Business Software</h3>
                <p>
                  Map organization scale and bottlenecks into custom module
                  recommendations.
                </p>
              </div>
              <FunnelDemo config={configs["saas-erp-finder"]} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// V2 Process
export const V2Process: React.FC = () => {
  return (
    <section className="section" id="v2-process">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Our process</span>
          <h2>A Clear Process, From Idea to Optimized Campaign</h2>
        </header>
        <div className="process-grid">
          {[
            [
              "Discover",
              "Goals, audience, sales process and what makes a lead qualified.",
            ],
            [
              "Design",
              "Experience concept, questions, scoring rules and result screens.",
            ],
            [
              "Build & Connect",
              "Development, landing page and follow-up setup.",
            ],
            [
              "Launch",
              "Go-live, tracking checks and ad connection if in scope.",
            ],
            ["Optimize", "Analyse drop-offs, lead quality and iterate."],
          ].map((x, i) => (
            <article key={x[0]}>
              <span>0{i + 1}</span>
              <h3>{x[0]}</h3>
              <p>{x[1]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// V2 Analytics
export const V2Analytics: React.FC = () => {
  return (
    <section className="section dark-section bg-[#0B1B3A] text-white" id="v2-analytics">
      <div className="container">
        <header className="section-heading mb-8">
          <span className="eyebrow text-[#FF7A1A] font-bold text-xs uppercase tracking-wider block mb-2">Campaign clarity</span>
          <h2 className="!text-white text-3xl sm:text-4xl font-extrabold tracking-tight my-2">See More Than Form Submissions</h2>
          <p className="!text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Track starts, completions, qualified leads and cost per lead,
            and see where people drop off.
          </p>
        </header>
        <AnalyticsPreview />
      </div>
    </section>
  );
};

// V2 Proof
export const V2Proof: React.FC = () => {
  return (
    <section className="section" id="v2-proof">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Proof, without the theatre</span>
          <h2>Case Studies</h2>
        </header>
        <div className="empty-proof">
          <h3>Detailed stories are in preparation.</h3>
          <p>
            We’re preparing detailed case studies. Want to be among the
            first campaigns we feature?
          </p>
          <a href="#v1-proposal" className="btn-primary text-xs mt-4 inline-block">
            Request a Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

// V2 FAQ
export const V2Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="section" id="v2-faq">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Frequently asked questions</span>
          <h2>Straight Answers Before We Start</h2>
        </header>
        <div className="faq space-y-3">
          {faqs.map(([q, a], i) => (
            <div
              key={q}
              className="border border-[#E4E7F0] rounded-xl overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 text-left font-bold flex justify-between items-center text-sm"
              >
                <span>{q}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openFaq === i ? "rotate-180 text-[#5B3DF5]" : ""
                  }`}
                  size={18}
                />
              </button>
              {openFaq === i && (
                <div className="p-4 pt-0 text-xs text-[#45516B] leading-relaxed border-t border-[#E4E7F0]">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// V2 Final CTA / Proposal
export const V2FinalCta: React.FC = () => {
  return (
    <section className="final-cta" id="v2-proposal">
      <div className="container">
        <span className="eyebrow">Ready when you are</span>
        <h2>Your Next Lead Should Tell You More Than Their Phone Number.</h2>
        <p>
          Tell us about your goals and we’ll propose an interactive campaign
          that captures intent, qualifies leads and follows up automatically.
        </p>
        <div className="button-row">
          <a href="#v1-proposal" className="btn-primary text-sm py-3 px-6">
            Request a Proposal
          </a>
          <a href="#v1-proposal" className="btn-secondary text-sm py-3 px-6">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

// V2 Footer
export const V2Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo mb-3">
            <BrandMark />
            <span className="font-bold text-white text-base ml-1">TezPlay</span>
          </div>
          <p>Interactive campaigns that capture, qualify and convert leads.</p>
          <address className="mt-2 text-xs font-mono not-italic">
            [ADD: email]
            <br />
            [ADD: phone]
          </address>
        </div>

        <div>
          <h3>Services</h3>
          {serviceGroups.map((x) => (
            <a href="#v2-services" key={x.title}>
              {x.title}
            </a>
          ))}
        </div>

        <div>
          <h3>Sample Experiences</h3>
          {[
            "Quiz",
            "Assessment",
            "Calculator",
            "Recommendation",
            "Spin & Win",
            "Scratch & Win",
          ].map((name) => (
            <a href="#v2-samples" key={name}>
              {name}
            </a>
          ))}
        </div>

        <div>
          <h3>Industries</h3>
          {industries.map((x) => (
            <a href="#v2-industries" key={x.name}>
              {x.name}
            </a>
          ))}
        </div>

        <div>
          <h3>Versions</h3>
          <a href="#v1-menu" className="text-white font-semibold">
            Version 1 (Agency Experience)
          </a>
          <a href="#v2-menu" className="text-[#5B3DF5] font-semibold">
            Version 2 (Funnels Playbook)
          </a>
          <a href="/tezplay-project.zip" download="tezplay-project.zip">
            Download Project (ZIP)
          </a>
        </div>

        <div>
          <h3>Legal</h3>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} TezPlay. All rights reserved.
      </div>
    </footer>
  );
};
