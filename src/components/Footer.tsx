import React from 'react';
import { siteConfig } from '../content/site';
import { Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E4E7F0] text-xs text-[#45516B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Col 1: Wordmark & Tagline */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 shrink-0 text-[#5B3DF5]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" fill="#5B3DF5" />
                <path d="M12 9L23 16L12 23V9Z" fill="white" />
                <path d="M23 7L24 9.5L26.5 10.5L24 11.5L23 14L22 11.5L19.5 10.5L22 9.5L23 7Z" fill="#FF7A1A" />
              </svg>
              <span className="text-lg font-bold text-[#0B1B3A] font-heading">
                Tez<span className="text-[#5B3DF5]">Play</span>
              </span>
            </div>

            <p className="text-xs text-[#45516B] leading-relaxed max-w-sm">
              Interactive campaigns that capture, qualify and convert leads. Done-for-you lead generation, scoring rules, and automated follow-up.
            </p>

            <div className="text-[11px] text-[#45516B] font-mono">
              Play → Capture → Qualify → Score → Automate → Convert
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">Services</div>
            <ul className="space-y-1.5">
              <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Gamified Lead Gen</a></li>
              <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Assessments & Scopes</a></li>
              <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Lead Scoring</a></li>
              <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Campaign CRO</a></li>
            </ul>
          </div>

          {/* Col 3: Samples */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">Samples</div>
            <ul className="space-y-1.5">
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">Spin & Win</a></li>
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">Scratch & Win</a></li>
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">Quiz Funnel</a></li>
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">ROI Calculator</a></li>
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">Memory Match</a></li>
              <li><a href="#samples" className="hover:text-[#5B3DF5] transition-colors">Assessment Gauge</a></li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">Industries</div>
            <ul className="space-y-1.5">
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">Healthcare</a></li>
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">Real Estate</a></li>
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">SaaS & ERP</a></li>
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">Education</a></li>
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">Automotive</a></li>
              <li><a href="#industries" className="hover:text-[#5B3DF5] transition-colors">E-commerce</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Contact */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-[#0B1B3A] uppercase tracking-wider">Company</div>
            <ul className="space-y-1.5 text-[11px]">
              <li>Email: <span className="font-mono">{siteConfig.contact.email}</span></li>
              <li>Phone: <span className="font-mono">{siteConfig.contact.phone}</span></li>
              <li>Address: <span className="font-mono">{siteConfig.contact.address}</span></li>
              <li>GST: <span className="font-mono">{siteConfig.contact.registration}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#E4E7F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#45516B]">
          <div>
            © {new Date().getFullYear()} TezPlay. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/tezplay-project.zip"
              download="tezplay-project.zip"
              className="text-[#5B3DF5] hover:text-[#4527D6] font-semibold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Project (ZIP)</span>
            </a>
            <a href="/privacy-policy" className="hover:text-[#5B3DF5] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#5B3DF5] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
