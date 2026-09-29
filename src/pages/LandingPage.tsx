import React, { useState } from 'react';
import { SectionPairHeader } from '../components/SectionPairHeader';

// Version 1 Components
import { Navbar as V1Navbar } from '../components/Navbar';
import { HeroSection as V1Hero } from '../components/HeroSection';
import { IndustryStrip as V1IndustryStrip } from '../components/IndustryStrip';
import { ProblemSection as V1Problem } from '../components/ProblemSection';
import { JourneySection as V1Journey } from '../components/JourneySection';
import { ServicesSection as V1Services } from '../components/ServicesSection';
import { SampleExperiencesSection as V1Samples } from '../components/SampleExperiencesSection';
import { LeadScoreSection as V1Scoring } from '../components/LeadScoreSection';
import { AutomationSection as V1Automation } from '../components/AutomationSection';
import { IndustriesSection as V1Industries } from '../components/IndustriesSection';
import { LiveIndustryDemos as V1LiveDemos } from '../components/LiveIndustryDemos';
import { ProcessSection as V1Process } from '../components/ProcessSection';
import { AnalyticsPreview as V1Analytics } from '../components/AnalyticsPreview';
import { ProofSection as V1Proof } from '../components/ProofSection';
import { FaqSection as V1Faq } from '../components/FaqSection';
import { ProposalSection as V1Proposal } from '../components/ProposalSection';
import { Footer as V1Footer } from '../components/Footer';

// Version 2 Components
import {
  V2Menu,
  V2Hero,
  V2IndustryStrip,
  V2Problem,
  V2Journey,
  V2Services,
  V2Samples,
  V2Scoring,
  V2Automation,
  V2Industries,
  V2LiveDemos,
  V2Process,
  V2Analytics,
  V2Proof,
  V2Faq,
  V2FinalCta,
  V2Footer,
} from '../v2/V2Sections';
import '../v2/styles.css';
import { Download, SlidersHorizontal, ArrowDown } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [preselectedGoal, setPreselectedGoal] = useState<string>('Qualify leads');
  const [filterMode, setFilterMode] = useState<'paired' | 'v1' | 'v2'>('paired');

  const scrollToProposal = (goal?: string) => {
    if (goal) setPreselectedGoal(goal);
    const el = document.getElementById('v1-proposal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSamples = () => {
    const el = document.getElementById('v1-samples');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showV1 = filterMode === 'paired' || filterMode === 'v1';
  const showV2 = filterMode === 'paired' || filterMode === 'v2';

  const sectionPairs = [
    { id: 'sec-menu', label: 'Menu' },
    { id: 'sec-hero', label: 'Hero Section' },
    { id: 'sec-industry-strip', label: 'Industry Strip' },
    { id: 'sec-why-interactive', label: 'Why Interactive (Forms vs Funnels)' },
    { id: 'sec-journey', label: 'Connected Journey' },
    { id: 'sec-services', label: 'Services' },
    { id: 'sec-samples', label: 'Live Samples' },
    { id: 'sec-scoring', label: 'Lead Scoring' },
    { id: 'sec-automation', label: 'Follow-up Automation' },
    { id: 'sec-industries', label: 'Industry Solutions' },
    { id: 'sec-live-demos', label: 'Sample Funnels in Action' },
    { id: 'sec-process', label: 'Process / How We Work' },
    { id: 'sec-analytics', label: 'Campaign Analytics' },
    { id: 'sec-proof', label: 'Case Studies' },
    { id: 'sec-faq', label: 'FAQ' },
    { id: 'sec-proposal', label: 'Proposal & Final CTA' },
    { id: 'sec-footer', label: 'Footer' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#45516B] flex flex-col font-sans selection:bg-[#5B3DF5] selection:text-white">
      {/* Top Comparison Controller Bar */}
      <div className="sticky top-0 z-50 bg-[#0B1B3A] text-white py-2 px-4 shadow-md border-b border-white/10">
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-[#5B3DF5]" />
            <span className="font-extrabold uppercase tracking-wider text-white">
              Paired Comparison Mode
            </span>
            <span className="text-white/60 hidden md:inline">
              (Version 1 followed immediately by Version 2)
            </span>
          </div>

          {/* Quick Jump Selector */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 hidden sm:inline">Jump to:</span>
            <select
              aria-label="Jump to section pair"
              onChange={(e) => {
                const el = document.getElementById(e.target.value);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-xs rounded-md px-2 py-1 border border-white/20 focus:outline-none"
            >
              {sectionPairs.map((p, idx) => (
                <option key={p.id} value={p.id} className="bg-[#0B1B3A] text-white">
                  Pair #{idx + 1}: {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-full border border-white/15">
            <button
              type="button"
              onClick={() => setFilterMode('paired')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                filterMode === 'paired'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              V1 + V2 Paired
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('v1')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                filterMode === 'v1'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Only V1
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('v2')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                filterMode === 'v2'
                  ? 'bg-[#FF7A1A] text-white shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Only V2
            </button>
          </div>

          {/* ZIP Download */}
          <a
            href="/tezplay-project.zip"
            download="tezplay-project.zip"
            className="bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full text-white font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download size={13} />
            <span>Download ZIP</span>
          </a>
        </div>
      </div>

      <main id="main" className="flex-1">
        {/* ========================================================
            PAIR 1: MENU / NAVIGATION
        ======================================================== */}
        <section id="sec-menu" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="01"
                title="Menu"
                tagline="Version 1 Agency Navbar"
              />
              <V1Navbar onProposalClick={() => scrollToProposal()} />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="01"
                title="Menu"
                tagline="Version 2 Funnels Playbook Header"
              />
              <V2Menu />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 2: HERO SECTION
        ======================================================== */}
        <section id="sec-hero" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="02"
                title="Hero Section"
                tagline="Version 1: Value Proposition, Live Interactive Phone Frame & Proof Metrics"
              />
              <V1Hero
                onProposalClick={() => scrollToProposal()}
                onSamplesClick={scrollToSamples}
              />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="02"
                title="Hero Section"
                tagline="Version 2: Modular Phone Stage with Step-by-Step Experience"
              />
              <V2Hero />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 3: INDUSTRY STRIP
        ======================================================== */}
        <section id="sec-industry-strip" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="03"
                title="Industry Strip"
                tagline="Version 1: Trusted Industry Badges & Strip"
              />
              <V1IndustryStrip />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="03"
                title="Industry Strip"
                tagline="Version 2: Bold Typography Industry Strip"
              />
              <V2IndustryStrip />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 4: WHY INTERACTIVE (FORMS VS FUNNELS)
        ======================================================== */}
        <section id="sec-why-interactive" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="04"
                title="Why Interactive Section"
                tagline="Version 1: Static Forms vs TezPlay Interactive Lead Engine"
              />
              <V1Problem />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="04"
                title="Why Interactive Section"
                tagline="Version 2: Interactive Before / After Split Slider"
              />
              <V2Problem />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 5: CONNECTED JOURNEY
        ======================================================== */}
        <section id="sec-journey" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="05"
                title="Connected Journey Section"
                tagline="Version 1: Ad Click → Interactive Hook → Qualification → CRM Automation"
              />
              <V1Journey />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="05"
                title="Connected Journey Section"
                tagline="Version 2: 7-Node Interactive Timeline with Live Focus Panel"
              />
              <V2Journey />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 6: SERVICES
        ======================================================== */}
        <section id="sec-services" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="06"
                title="Services Section"
                tagline="Version 1: 5 Core Service Groups across 14 Specialized Capabilities"
              />
              <V1Services onSelectGoal={(goal) => scrollToProposal(goal)} />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="06"
                title="Services Section"
                tagline="Version 2: Numbered Service Cards with Direct Sub-service Links"
              />
              <V2Services />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 7: LIVE SAMPLE EXPERIENCES
        ======================================================== */}
        <section id="sec-samples" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="07"
                title="Live Samples Section"
                tagline="Version 1: 6 Fully Interactive Sandboxes (Spin Wheel, Scratch, ROI Calculator, Quiz, Memory, Assessment)"
              />
              <div id="v1-samples">
                <V1Samples />
              </div>
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="07"
                title="Live Samples Section"
                tagline="Version 2: Interactive Experience Cards with State Toggling"
              />
              <V2Samples />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 8: LEAD SCORING & INTELLIGENCE
        ======================================================== */}
        <section id="sec-scoring" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="08"
                title="Lead Intelligence & Scoring Section"
                tagline="Version 1: Dynamic Lead Qualification Simulator & Hot/Warm/Cold Routing"
              />
              <V1Scoring />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="08"
                title="Lead Intelligence & Scoring Section"
                tagline="Version 2: Lead Score Playground with Radial Score Gauge"
              />
              <V2Scoring />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 9: AUTOMATION & FOLLOW-UP
        ======================================================== */}
        <section id="sec-automation" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="09"
                title="Follow-Up Automation Section"
                tagline="Version 1: Qualification Triggers Action across WhatsApp, CRM, Slack, and Nurture"
              />
              <V1Automation />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="09"
                title="Follow-Up Automation Section"
                tagline="Version 2: Branch Flow Node Graph with Threshold Toggles"
              />
              <V2Automation />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 10: INDUSTRY SOLUTIONS
        ======================================================== */}
        <section id="sec-industries" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="10"
                title="Industry Solutions Section"
                tagline="Version 1: 6 Industries with Case Funnel Structures & Benchmark Metrics"
              />
              <V1Industries />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="10"
                title="Industry Solutions Section"
                tagline="Version 2: Industry Grid with Captured Hotspot Buttons"
              />
              <V2Industries />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 11: SAMPLE FUNNELS IN ACTION
        ======================================================== */}
        <section id="sec-live-demos" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="11"
                title="Sample Funnels in Action Section"
                tagline="Version 1: Full Interactive Demos for Healthcare, Real Estate, and SaaS"
              />
              <V1LiveDemos onProposalClick={() => scrollToProposal()} />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="11"
                title="Sample Funnels in Action Section"
                tagline="Version 2: Embedded Demo Container with Config-Driven Flow"
              />
              <V2LiveDemos />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 12: PROCESS / HOW WE WORK
        ======================================================== */}
        <section id="sec-process" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="12"
                title="Process Section"
                tagline="Version 1: 5-Stage Execution Framework (Discover, Design, Build, Launch, Optimize)"
              />
              <V1Process />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="12"
                title="Process Section"
                tagline="Version 2: 5-Column Clean Step Flow"
              />
              <V2Process />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 13: CAMPAIGN ANALYTICS PREVIEW
        ======================================================== */}
        <section id="sec-analytics" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="13"
                title="Analytics Preview Section"
                tagline="Version 1: Full Conversion Funnel Intelligence & Stage Drop-off Analytics"
              />
              <V1Analytics />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="13"
                title="Analytics Preview Section"
                tagline="Version 2: Dark Theme Campaign Clarity & Drop-off Bar Graph"
              />
              <V2Analytics />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 14: PROOF / CASE STUDIES
        ======================================================== */}
        <section id="sec-proof" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="14"
                title="Proof & Case Studies Section"
                tagline="Version 1: Honest Proof, Beta Partner Invitation & Sample Benchmark Cards"
              />
              <V1Proof onProposalClick={() => scrollToProposal()} />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="14"
                title="Proof & Case Studies Section"
                tagline="Version 2: Honest Case Study Preparation Notice & CTA"
              />
              <V2Proof />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 15: FREQUENTLY ASKED QUESTIONS
        ======================================================== */}
        <section id="sec-faq" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="15"
                title="FAQ Section"
                tagline="Version 1: 10 Comprehensive FAQs covering Scope, AI, Privacy & Integration"
              />
              <V1Faq />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="15"
                title="FAQ Section"
                tagline="Version 2: Clean Accordion FAQ Grid"
              />
              <V2Faq />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 16: PROPOSAL FORM & FINAL CTA
        ======================================================== */}
        <section id="sec-proposal" className="scroll-mt-14">
          {showV1 && (
            <div className="relative" id="v1-proposal">
              <SectionPairHeader
                version="v1"
                sectionNumber="16"
                title="Proposal Form Section"
                tagline="Version 1: Fully Validated Proposal Form with Instant Feedback & Submission"
              />
              <V1Proposal preselectedGoal={preselectedGoal} />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="16"
                title="Final CTA Section"
                tagline="Version 2: High-Impact Ready When You Are Proposal & Strategy Banner"
              />
              <V2FinalCta />
            </div>
          )}
        </section>

        {/* ========================================================
            PAIR 17: FOOTER
        ======================================================== */}
        <section id="sec-footer" className="scroll-mt-14">
          {showV1 && (
            <div className="relative">
              <SectionPairHeader
                version="v1"
                sectionNumber="17"
                title="Footer"
                tagline="Version 1: Comprehensive Multi-Column Agency Footer with Policies"
              />
              <V1Footer />
            </div>
          )}

          {showV2 && (
            <div className="relative">
              <SectionPairHeader
                version="v2"
                sectionNumber="17"
                title="Footer"
                tagline="Version 2: 6-Column Dark Agency Footer"
              />
              <V2Footer />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
