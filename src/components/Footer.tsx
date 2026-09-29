import React from 'react';
import { siteConfig } from '../content/site';
import { Download, ArrowUp, Mail, Phone, MapPin, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B3A] text-white/80 border-t border-white/10 text-xs">
      <div className="container py-14 sm:py-16">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* Col 1: Wordmark & Tagline */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative inline-grid place-items-center w-8 h-8 rounded-lg bg-[#5B3DF5] text-white font-extrabold text-sm shadow-xs">
                <span>T</span>
                <i className="absolute -right-1 -top-1.5 text-[#FF7A1A] not-italic text-xs">✦</i>
              </div>
              <span className="text-xl font-extrabold text-white font-heading tracking-tight">
                Tez<span className="text-[#5B3DF5]">Play</span>
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Interactive campaigns that capture, qualify, and convert leads. Done-for-you lead
              generation, scoring rules, and automated follow-up.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/60 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12A150]" />
              <span>Capture → Qualify → Score → Automate</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">
              Services
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#sec-services" className="text-white/70 hover:text-white transition-colors">
                  Gamified Lead Gen
                </a>
              </li>
              <li>
                <a href="#sec-services" className="text-white/70 hover:text-white transition-colors">
                  Assessments & Quizzes
                </a>
              </li>
              <li>
                <a href="#sec-scoring" className="text-white/70 hover:text-white transition-colors">
                  Lead Scoring Rules
                </a>
              </li>
              <li>
                <a href="#sec-automation" className="text-white/70 hover:text-white transition-colors">
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#sec-analytics" className="text-white/70 hover:text-white transition-colors">
                  Campaign Analytics & CRO
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Samples */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">
              Live Samples
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  Spin & Win
                </a>
              </li>
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  Scratch & Win
                </a>
              </li>
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  Quiz Funnel
                </a>
              </li>
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  Memory Match
                </a>
              </li>
              <li>
                <a href="#sec-samples" className="text-white/70 hover:text-white transition-colors">
                  Assessment Gauge
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">
              Industries
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  Healthcare & Clinics
                </a>
              </li>
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  Real Estate & Builders
                </a>
              </li>
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  SaaS & ERP
                </a>
              </li>
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  Education & EdTech
                </a>
              </li>
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#sec-industries" className="text-white/70 hover:text-white transition-colors">
                  E-commerce Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">
              Direct Contact
            </div>
            <ul className="space-y-2 text-[11px] text-white/70">
              <li className="flex items-center gap-1.5">
                <Mail size={12} className="text-[#5B3DF5] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-mono text-white/90 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone size={12} className="text-[#12A150] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="font-mono text-white/90 hover:text-white transition-colors"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#FF7A1A] shrink-0" />
                <span className="text-white/80">{siteConfig.contact.address}</span>
              </li>
              <li className="pt-1 text-[10px] text-white/50 font-mono">
                GST: {siteConfig.contact.registration}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Project Download & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} TezPlay Interactive Agency. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href="/tezplay-project.zip"
              download="tezplay-project.zip"
              className="inline-flex items-center gap-1 text-[#FF7A1A] hover:text-[#FFA052] font-semibold transition-colors"
            >
              <Download size={12} />
              <span>Project Archive</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors ml-2"
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
