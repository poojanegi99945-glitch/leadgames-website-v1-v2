import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07162F] text-white/80 border-t border-white/10 text-xs">
      <div className="container py-12 sm:py-16">
        {/* Main Footer Panel */}
        <div className="relative mb-9 sm:mb-11 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 sm:py-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-2xl">
              <img
                src="/lead-games-logo.png"
                alt="Lead Games.com"
                className="h-12 w-auto rounded-lg bg-white px-2.5 py-1.5 shadow-sm"
              />

              <p className="text-sm sm:text-[15px] text-white/72 leading-relaxed max-w-xl">
                Interactive campaigns that capture, qualify, and convert leads. Done-for-you lead
                generation, scoring rules, and automated follow-up.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Capture', 'Qualify', 'Score', 'Automate'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#sec-proposal"
              className="btn-primary w-full px-6 py-3 text-sm font-bold shadow-lg hover:shadow-xl sm:w-auto"
            >
              <Sparkles size={15} />
              <span>Request Proposal</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[11px] text-white/55 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Lead Games.com Interactive Agency. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/[0.045] hover:text-white sm:ml-2"
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
