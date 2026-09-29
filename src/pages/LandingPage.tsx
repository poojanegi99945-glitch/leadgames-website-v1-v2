import React, { useState } from 'react';
import { SectionPairHeader } from '../components/SectionPairHeader';

// Version 1 Components
import { SampleExperiencesSection as V1Samples } from '../components/SampleExperiencesSection';
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
  V2Scoring,
  V2Automation,
  V2Industries,
  V2LiveDemos,
  V2Process,
  V2Analytics,
  V2Proof,
  V2Faq,
} from '../v2/V2Sections';
import '../v2/styles.css';
import { Download, SlidersHorizontal, ArrowDown } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [preselectedGoal, setPreselectedGoal] = useState<string>('Qualify leads');

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

  const sections = [
    { id: 'sec-menu', num: '01', label: 'Menu', version: 'v2' },
    { id: 'sec-hero', num: '02', label: 'Hero Section', version: 'v2' },
    { id: 'sec-industry-strip', num: '03', label: 'Industry Strip', version: 'v2' },
    { id: 'sec-why-interactive', num: '04', label: 'Why Interactive (Split Slider)', version: 'v2' },
    { id: 'sec-journey', num: '05', label: 'Connected Journey', version: 'v2' },
    { id: 'sec-services', num: '06', label: 'Services', version: 'v2' },
    { id: 'sec-samples', num: '07', label: 'Live Samples (6 Sandboxes)', version: 'v1' },
    { id: 'sec-scoring', num: '08', label: 'Lead Scoring & Routing', version: 'v2' },
    { id: 'sec-automation', num: '09', label: 'Follow-up Automation', version: 'v2' },
    { id: 'sec-industries', num: '10', label: 'Industry Solutions', version: 'v2' },
    { id: 'sec-live-demos', num: '11', label: 'Sample Funnels in Action', version: 'v2' },
    { id: 'sec-process', num: '12', label: 'Process / How We Work', version: 'v2' },
    { id: 'sec-analytics', num: '13', label: 'Campaign Analytics', version: 'v2' },
    { id: 'sec-proof', num: '14', label: 'Proof & Case Studies', version: 'v2' },
    { id: 'sec-faq', num: '15', label: 'FAQ Accordion', version: 'v2' },
    { id: 'sec-proposal', num: '16', label: 'Proposal Form', version: 'v1' },
    { id: 'sec-footer', num: '17', label: 'Footer', version: 'v1' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#45516B] flex flex-col font-sans selection:bg-[#5B3DF5] selection:text-white">
      {/* Top Controller Bar */}
      <div className="sticky top-0 z-50 bg-[#0B1B3A] text-white py-2 px-4 shadow-md border-b border-white/10">
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold uppercase tracking-wider text-white">
              Unified Single-Version Flow
            </span>
            <span className="text-white/60 hidden md:inline">
              (17 curated sections • 0 duplicates)
            </span>
          </div>

          {/* Quick Jump Selector */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 hidden sm:inline">Jump to:</span>
            <select
              aria-label="Jump to section"
              onChange={(e) => {
                const el = document.getElementById(e.target.value);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-xs rounded-md px-2.5 py-1 border border-white/20 focus:outline-none cursor-pointer"
            >
              {sections.map((s) => (
                <option key={s.id} value={s.id} className="bg-[#0B1B3A] text-white">
                  Section {s.num}: {s.label} ({s.version.toUpperCase()})
                </option>
              ))}
            </select>
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
            MENU / NAVIGATION (VERSION 2)
        ======================================================== */}
        <section id="sec-menu" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="01"
              title="Menu"
              tagline="Version 2 Funnels Playbook Header"
            />
            <V2Menu />
          </div>
        </section>

        {/* ========================================================
            HERO SECTION (VERSION 2)
        ======================================================== */}
        <section id="sec-hero" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="02"
              title="Hero Section"
              tagline="Version 2: Modular Phone Stage with Step-by-Step Experience"
            />
            <V2Hero />
          </div>
        </section>

        {/* ========================================================
            INDUSTRY STRIP (VERSION 2)
        ======================================================== */}
        <section id="sec-industry-strip" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="03"
              title="Industry Strip"
              tagline="Version 2: Industry Strip with Icons"
            />
            <V2IndustryStrip />
          </div>
        </section>

        {/* ========================================================
            WHY INTERACTIVE (VERSION 2)
        ======================================================== */}
        <section id="sec-why-interactive" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="04"
              title="Why Interactive Section"
              tagline="Version 2: Interactive Before / After Split Slider"
            />
            <V2Problem />
          </div>
        </section>

        {/* ========================================================
            CONNECTED JOURNEY (VERSION 2)
        ======================================================== */}
        <section id="sec-journey" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="05"
              title="Connected Journey Section"
              tagline="Version 2: 7-Node Interactive Timeline with Live Focus Panel"
            />
            <V2Journey />
          </div>
        </section>

        {/* ========================================================
            SERVICES (VERSION 2)
        ======================================================== */}
        <section id="sec-services" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="06"
              title="Services Section"
              tagline="Version 2: Numbered Service Cards with Direct Sub-service Links"
            />
            <V2Services />
          </div>
        </section>

        {/* ========================================================
            LIVE SAMPLE EXPERIENCES (VERSION 1)
        ======================================================== */}
        <section id="sec-samples" className="scroll-mt-14">
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
        </section>

        {/* ========================================================
            LEAD INTELLIGENCE & SCORING (VERSION 2)
        ======================================================== */}
        <section id="sec-scoring" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="08"
              title="Lead Intelligence & Scoring Section"
              tagline="Version 2: Lead Score Playground with Radial Score Gauge & Dynamic Routing"
            />
            <V2Scoring />
          </div>
        </section>

        {/* ========================================================
            FOLLOW-UP AUTOMATION (VERSION 2)
        ======================================================== */}
        <section id="sec-automation" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="09"
              title="Follow-Up Automation Section"
              tagline="Version 2: Branch Flow Node Graph with Threshold Toggles"
            />
            <V2Automation />
          </div>
        </section>

        {/* ========================================================
            INDUSTRY SOLUTIONS (VERSION 2)
        ======================================================== */}
        <section id="sec-industries" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="10"
              title="Industry Solutions Section"
              tagline="Version 2: Industry Grid with Captured Hotspot Buttons"
            />
            <V2Industries />
          </div>
        </section>

        {/* ========================================================
            SAMPLE FUNNELS IN ACTION (VERSION 2)
        ======================================================== */}
        <section id="sec-live-demos" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="11"
              title="Sample Funnels in Action Section"
              tagline="Version 2: Embedded Demo Container with Config-Driven Flow"
            />
            <V2LiveDemos />
          </div>
        </section>

        {/* ========================================================
            PROCESS / HOW WE WORK (VERSION 2)
        ======================================================== */}
        <section id="sec-process" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="12"
              title="Process Section"
              tagline="Version 2: 5-Column Clean Step Flow"
            />
            <V2Process />
          </div>
        </section>

        {/* ========================================================
            CAMPAIGN ANALYTICS PREVIEW (VERSION 2)
        ======================================================== */}
        <section id="sec-analytics" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="13"
              title="Analytics Preview Section"
              tagline="Version 2: Dark Theme Campaign Clarity & Drop-off Bar Graph"
            />
            <V2Analytics />
          </div>
        </section>

        {/* ========================================================
            PROOF & CASE STUDIES (VERSION 2)
        ======================================================== */}
        <section id="sec-proof" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="14"
              title="Proof & Case Studies Section"
              tagline="Version 2: Honest Case Study Preparation Notice & CTA"
            />
            <V2Proof />
          </div>
        </section>

        {/* ========================================================
            FREQUENTLY ASKED QUESTIONS (VERSION 2)
        ======================================================== */}
        <section id="sec-faq" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v2"
              sectionNumber="15"
              title="FAQ Section"
              tagline="Version 2: Clean Accordion FAQ Grid"
            />
            <V2Faq />
          </div>
        </section>

        {/* ========================================================
            PROPOSAL FORM (VERSION 1)
        ======================================================== */}
        <section id="sec-proposal" className="scroll-mt-14">
          <div className="relative" id="v1-proposal">
            <SectionPairHeader
              version="v1"
              sectionNumber="16"
              title="Proposal Form Section"
              tagline="Version 1: Fully Validated Proposal Form with Instant Feedback & Submission"
            />
            <V1Proposal preselectedGoal={preselectedGoal} />
          </div>
        </section>

        {/* ========================================================
            FOOTER (VERSION 1)
        ======================================================== */}
        <section id="sec-footer" className="scroll-mt-14">
          <div className="relative">
            <SectionPairHeader
              version="v1"
              sectionNumber="17"
              title="Footer"
              tagline="Version 1: Multi-Column Dark Agency Footer"
            />
            <V1Footer />
          </div>
        </section>
      </main>
    </div>
  );
};
