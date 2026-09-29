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
  Download,
  RotateCcw,
} from "lucide-react";
import "../v2/styles.css";
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
} from "../v2/InteractiveShowcase";
import { FunnelDemo } from "../v2/FunnelDemo";
import { configs } from "../v2/configs";
import { industries, serviceGroups, faqs } from "../v2/site";

export const Version2Page: React.FC = () => {
  const [demoTab, setDemoTab] = useState<"health" | "realty" | "saas">("health");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="v2-theme min-h-screen bg-background text-foreground font-sans">
      {/* Version Banner Switcher */}
      <div className="bg-[#0B1B3A] text-white py-2 px-4 text-xs flex flex-wrap items-center justify-between border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#5B3DF5] px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
            Version 2 Active
          </span>
          <span className="text-white/80">
            Funnels Playbook Suite (Imported from Google Drive)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-white font-semibold underline hover:text-[#5B3DF5] transition-colors flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>Switch to Version 1</span>
          </Link>
          <a
            href="/tezplay-project.zip"
            download="tezplay-project.zip"
            className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded text-white font-medium flex items-center gap-1 transition-colors"
          >
            <Download size={13} />
            <span>Download ZIP</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="nav-shell">
          <Link to="/v2" className="logo" aria-label="TezPlay home">
            <BrandMark />
            <span>TezPlay</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {/* First Menu item: V1 */}
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F5F8] text-[#45516B] hover:text-[#0B1B3A] border border-[#E4E7F0] transition-all"
              title="Switch to Version 1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>V1: Agency</span>
            </Link>

            {/* After that: V2 */}
            <Link
              to="/v2"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5B3DF5] text-white shadow-xs transition-all"
              title="Version 2: Funnels Playbook Suite (Current)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>V2: Playbook</span>
            </Link>

            <span className="h-4 w-[1px] bg-[#E4E7F0] mx-0.5" aria-hidden="true" />

            <a href="#services">Services</a>
            <a href="#samples">Sample Experiences</a>
            <a href="#industries">Industries</a>
            <a href="#process">How We Work</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#proposal" className="btn-secondary text-xs">
              Book a Strategy Call
            </a>
            <a href="#proposal" className="btn-primary text-xs">
              Request a Proposal
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
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
                <a href="#proposal" className="btn-primary text-sm py-3 px-6">
                  Request a Proposal <ArrowRight size={16} />
                </a>
                <a href="#samples" className="btn-secondary text-sm py-3 px-6">
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

        {/* Industry Strip */}
        <div className="industry-strip">
          <div className="container">
            <span>Built for teams in</span>
            {[
              "Healthcare",
              "Real Estate",
              "SaaS & ERP",
              "Education",
              "Automotive",
              "E-commerce",
              "Agencies",
            ].map((x) => (
              <strong key={x}>{x}</strong>
            ))}
          </div>
        </div>

        {/* Section: Forms vs Funnel */}
        <section className="section" id="problem">
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

        {/* Section: Connected Journey */}
        <section className="section soft">
          <div className="container">
            <header className="section-heading">
              <span className="eyebrow">The connected journey</span>
              <h2>From Ad Click to Qualified Lead</h2>
              <p>One connected journey, built and managed by us.</p>
            </header>
            <JourneyDiagram />
          </div>
        </section>

        {/* Section: Services */}
        <section className="section" id="services">
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
                  <a href="#proposal">
                    Explore this service <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Sample Experiences */}
        <section className="section dark-section" id="samples">
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

        {/* Section: Lead Intelligence */}
        <section className="section">
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

        {/* Section: Follow-up Automation */}
        <section className="section soft">
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

        {/* Section: Industry Solutions */}
        <section className="section" id="industries">
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
                  <a href="#proposal">
                    View industry solution <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Sample Funnels Tabs */}
        <section className="section soft">
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

        {/* Section: Process */}
        <section className="section" id="process">
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

        {/* Section: Analytics Preview */}
        <section className="section dark-section">
          <div className="container">
            <header className="section-heading">
              <span className="eyebrow">Campaign clarity</span>
              <h2>See More Than Form Submissions</h2>
              <p>
                Track starts, completions, qualified leads and cost per lead,
                and see where people drop off.
              </p>
            </header>
            <AnalyticsPreview />
          </div>
        </section>

        {/* Section: Case Studies Placeholder */}
        <section className="section">
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
              <a href="#proposal" className="btn-primary text-xs mt-4 inline-block">
                Request a Proposal
              </a>
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <header className="section-heading">
              <span className="eyebrow">Frequently asked questions</span>
              <h2>Straight Answers Before We Start</h2>
            </header>
            <div className="faq space-y-3">
              {faqs.map(([q, a], i) => (
                <div key={q} className="border border-[#E4E7F0] rounded-xl overflow-hidden bg-white">
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

        {/* Section: Final CTA */}
        <section className="final-cta" id="proposal">
          <div className="container">
            <span className="eyebrow">Ready when you are</span>
            <h2>Your Next Lead Should Tell You More Than Their Phone Number.</h2>
            <p>
              Tell us about your goals and we’ll propose an interactive campaign
              that captures intent, qualifies leads and follows up automatically.
            </p>
            <div className="button-row">
              <Link to="/#proposal" className="btn-primary text-sm py-3 px-6">
                Request a Proposal
              </Link>
              <Link to="/#proposal" className="btn-secondary text-sm py-3 px-6">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <a href="#services" key={x.title}>
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
              <a href="#samples" key={name}>
                {name}
              </a>
            ))}
          </div>

          <div>
            <h3>Industries</h3>
            {industries.map((x) => (
              <a href="#industries" key={x.name}>
                {x.name}
              </a>
            ))}
          </div>

          <div>
            <h3>Versions</h3>
            <Link to="/" className="text-white font-semibold">
              Version 1 (Agency Experience)
            </Link>
            <Link to="/v2" className="text-[#5B3DF5] font-semibold">
              Version 2 (Funnels Playbook)
            </Link>
            <a href="/tezplay-project.zip" download="tezplay-project.zip">
              Download Full Project (ZIP)
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
    </div>
  );
};
