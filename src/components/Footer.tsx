import React from 'react';
import { Download, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07162F] text-white/80 border-t border-white/10 text-xs">
      <div className="container py-14 sm:py-16">
        {/* Main Footer Panel */}
        <div className="mb-12 sm:mb-14 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-6 sm:px-7 sm:py-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div className="space-y-4 max-w-xl">
            <img src="/lead-games-logo.png" alt="Lead Games.com" className="h-12 w-auto rounded-md bg-white px-2 py-1" />

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Interactive campaigns that capture, qualify, and convert leads. Done-for-you lead
              generation, scoring rules, and automated follow-up.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-white/65 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12A150]" />
              <span>Capture → Qualify → Score → Automate</span>
            </div>
          </div>

            <a
              href="#sec-proposal"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#07162F] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F3F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
            >
              <Sparkles size={15} />
              <span>Request Proposal</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Project Download & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/55">
          <div>
            © {new Date().getFullYear()} Lead Games.com Interactive Agency. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href="/tezplay-project.zip"
              download="leadgames-project.zip"
              className="inline-flex items-center gap-1 text-[#FF7A1A] hover:text-[#FFA052] font-semibold transition-colors"
            >
              <Download size={12} />
              <span>Project Archive</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors sm:ml-2"
              aria-label="Back to top of page"
            >
              <ArrowUp size={12} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
