import React, { useState } from 'react';
import { X } from 'lucide-react';

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

export const LandingPage: React.FC = () => {
  const [preselectedGoal, setPreselectedGoal] = useState<string>('Qualify leads');
  const [isProposalPopupOpen, setIsProposalPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#45516B] flex flex-col font-sans selection:bg-[#5B3DF5] selection:text-white">
      <main
        id="main"
        className="flex-1"
        onClick={(event) => {
          const target = event.target as HTMLElement;
          const proposalLink = target.closest('a[href="#v1-proposal"]');
          if (proposalLink) {
            event.preventDefault();
            setIsProposalPopupOpen(true);
          }
        }}
      >
        {/* ========================================================
            MENU / NAVIGATION (VERSION 2)
        ======================================================== */}
        <section id="sec-menu" className="scroll-mt-14">
          <div className="relative">
            <V2Menu />
          </div>
        </section>

        {/* ========================================================
            HERO SECTION (VERSION 2)
        ======================================================== */}
        <section id="sec-hero" className="scroll-mt-14">
          <div className="relative">
            <V2Hero />
          </div>
        </section>

        {/* ========================================================
            INDUSTRY STRIP (VERSION 2)
        ======================================================== */}
        <section id="sec-industry-strip" className="scroll-mt-14">
          <div className="relative">
            <V2IndustryStrip />
          </div>
        </section>

        {/* ========================================================
            WHY INTERACTIVE (VERSION 2)
        ======================================================== */}
        <section id="sec-why-interactive" className="scroll-mt-14">
          <div className="relative">
            <V2Problem />
          </div>
        </section>

        {/* ========================================================
            CONNECTED JOURNEY (VERSION 2)
        ======================================================== */}
        <section id="sec-journey" className="scroll-mt-14">
          <div className="relative">
            <V2Journey />
          </div>
        </section>

        {/* ========================================================
            SERVICES (VERSION 2)
        ======================================================== */}
        <section id="sec-services" className="scroll-mt-14">
          <div className="relative">
            <V2Services />
          </div>
        </section>

        {/* ========================================================
            LIVE SAMPLE EXPERIENCES (VERSION 1)
        ======================================================== */}
        <section id="sec-samples" className="scroll-mt-14">
          <div className="relative">
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
            <V2Scoring />
          </div>
        </section>

        {/* ========================================================
            FOLLOW-UP AUTOMATION (VERSION 2)
        ======================================================== */}
        <section id="sec-automation" className="scroll-mt-14">
          <div className="relative">
            <V2Automation />
          </div>
        </section>

        {/* ========================================================
            INDUSTRY SOLUTIONS (VERSION 2)
        ======================================================== */}
        <section id="sec-industries" className="scroll-mt-14">
          <div className="relative">
            <V2Industries />
          </div>
        </section>

        {/* ========================================================
            SAMPLE FUNNELS IN ACTION (VERSION 2)
        ======================================================== */}
        <section id="sec-live-demos" className="scroll-mt-14">
          <div className="relative">
            <V2LiveDemos />
          </div>
        </section>

        {/* ========================================================
            PROCESS / HOW WE WORK (VERSION 2)
        ======================================================== */}
        <section id="sec-process" className="scroll-mt-14">
          <div className="relative">
            <V2Process />
          </div>
        </section>

        {/* ========================================================
            CAMPAIGN ANALYTICS PREVIEW (VERSION 2)
        ======================================================== */}
        <section id="sec-analytics" className="scroll-mt-14">
          <div className="relative">
            <V2Analytics />
          </div>
        </section>

        {/* ========================================================
            PROOF & CASE STUDIES (VERSION 2)
        ======================================================== */}
        <section id="sec-proof" className="scroll-mt-14">
          <div className="relative">
            <V2Proof />
          </div>
        </section>

        {/* ========================================================
            FREQUENTLY ASKED QUESTIONS (VERSION 2)
        ======================================================== */}
        <section id="sec-faq" className="scroll-mt-14">
          <div className="relative">
            <V2Faq />
          </div>
        </section>

        {/* ========================================================
            PROPOSAL FORM (VERSION 1)
        ======================================================== */}
        <section id="sec-proposal" className="scroll-mt-14">
          <div className="relative" id="v1-proposal">
            <V1Proposal preselectedGoal={preselectedGoal} />
          </div>
        </section>

        {/* ========================================================
            FOOTER (VERSION 1)
        ======================================================== */}
        <section id="sec-footer" className="scroll-mt-14">
          <div className="relative">
            <V1Footer />
          </div>
        </section>
      </main>

      {isProposalPopupOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#07162F]/70 backdrop-blur-sm px-3 py-5 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Request a proposal"
        >
          <div className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
            <div className="flex items-center justify-between border-b border-[#E4E7F0] px-5 py-4">
              <div className="flex items-center gap-3">
                <img src="/lead-games-logo.png" alt="Lead Games.com" className="h-9 w-auto" />
                <div>
                  <strong className="block font-heading text-sm text-[#0B1B3A]">Request a Proposal</strong>
                  <span className="text-xs font-semibold text-[#66728A]">Lead Games.com</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProposalPopupOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#E4E7F0] text-[#45516B] transition-colors hover:bg-[#F6F7FB] hover:text-[#0B1B3A]"
                aria-label="Close proposal form"
              >
                <X size={17} />
              </button>
            </div>
            <div className="overflow-y-auto">
              <V1Proposal preselectedGoal={preselectedGoal} isEmbedded />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
