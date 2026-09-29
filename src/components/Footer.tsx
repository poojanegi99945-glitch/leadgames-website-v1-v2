import React from 'react';
import { siteConfig } from '../content/site';
import { Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1B3A] text-white/80 border-t border-white/10 text-xs">
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
              <span className="text-lg font-extrabold text-white font-heading">
                Tez<span className="text-[#5B3DF5]">Play</span>
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Interactive campaigns that capture, qualify and convert leads. Done-for-you lead generation, scoring rules, and automated follow-up.
            </p>

            <div className="text-[11px] text-white/50 font-mono">
              Play → Capture → Qualify → Score → Automate → Convert
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">Services</div>
            <ul className="space-y-1.5">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Gamified Lead Gen</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Assessments & Scopes</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Lead Scoring</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Campaign CRO</a></li>
            </ul>
          </div>

          {/* Col 3: Samples */}
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">Samples</div>
            <ul className="space-y-1.5">
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">Spin & Win</a></li>
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">Scratch & Win</a></li>
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">Quiz Funnel</a></li>
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">Memory Match</a></li>
              <li><a href="#samples" className="text-white/70 hover:text-white transition-colors">Assessment Gauge</a></li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">Industries</div>
            <ul className="space-y-1.5">
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">SaaS & ERP</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">Education</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">Automotive</a></li>
              <li><a href="#industries" className="text-white/70 hover:text-white transition-colors">E-commerce</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Contact */}
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider font-heading">Company</div>
            <ul className="space-y-1.5 text-[11px] text-white/70">
              <li>Email: <span className="font-mono text-white/90">{siteConfig.contact.email}</span></li>
              <li>Phone: <span className="font-mono text-white/90">{siteConfig.contact.phone}</span></li>
              <li>Address: <span className="font-mono text-white/90">{siteConfig.contact.address}</span></li>
              <li>GST: <span className="font-mono text-white/90">{siteConfig.contact.registration}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} TezPlay. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/tezplay-project.zip"
              download="tezplay-project.zip"
              className="text-[#FF7A1A] hover:text-[#FFA05C] font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Project (ZIP)</span>
            </a>
            <a href="/privacy-policy" className="hover:text-white transition-colors text-white/70">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors text-white/70">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
