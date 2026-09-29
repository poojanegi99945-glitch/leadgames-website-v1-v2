import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  onProposalClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onProposalClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [proposalInView, setProposalInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['top', 'problem', 'services', 'samples', 'industries', 'process', 'faq', 'proposal'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Check if #proposal is in view to hide mobile sticky CTA
      const proposalEl = document.getElementById('proposal');
      if (proposalEl) {
        const rect = proposalEl.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setProposalInView(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#samples', label: 'Samples', id: 'samples' },
    { href: '#industries', label: 'Industries', id: 'industries' },
    { href: '#process', label: 'Process', id: 'process' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#5B3DF5] text-white rounded-md font-semibold text-xs shadow-lg"
      >
        Skip to content
      </a>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-[#E4E7F0] py-3 shadow-xs'
            : 'bg-white border-transparent py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: TezPlay wordmark + Play triangle spark mark */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <svg
              className="w-7 h-7 shrink-0 text-[#5B3DF5]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="8" fill="#5B3DF5" />
              <path d="M12 9L23 16L12 23V9Z" fill="white" />
              {/* Spark mark */}
              <path
                d="M23 7L24 9.5L26.5 10.5L24 11.5L23 14L22 11.5L19.5 10.5L22 9.5L23 7Z"
                fill="#FF7A1A"
              />
            </svg>
            <span className="text-xl font-extrabold tracking-tight text-[#0B1B3A] font-heading">
              Tez<span className="text-[#5B3DF5]">Play</span>
            </span>
          </a>

          {/* Center: Anchors */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-5 text-sm font-medium text-[#45516B]"
          >
            {/* First Menu item: V1 */}
            <a
              href="/"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5B3DF5] text-white shadow-xs transition-all"
              title="Version 1: Agency Experience (Current)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>V1: Agency</span>
            </a>

            {/* After that: V2 */}
            <a
              href="/v2"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F5F8] text-[#45516B] hover:text-[#0B1B3A] hover:bg-amber-100/70 border border-[#E4E7F0] transition-all"
              title="Version 2: Funnels Playbook Suite"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>V2: Playbook</span>
            </a>

            <span className="h-4 w-[1px] bg-[#E4E7F0] mx-0.5" aria-hidden="true" />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 text-xs lg:text-sm ${
                    isActive
                      ? 'border-[#5B3DF5] text-[#0B1B3A] font-semibold'
                      : 'border-transparent hover:text-[#0B1B3A]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/tezplay-project.zip"
              download="tezplay-project.zip"
              className="text-xs font-semibold text-[#5B3DF5] bg-[#5B3DF5]/10 hover:bg-[#5B3DF5]/20 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
              title="Download full project source code as ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
            </a>
            <a
              href="#proposal"
              onClick={onProposalClick}
              className="text-xs font-semibold text-[#0B1B3A] hover:text-[#5B3DF5] px-3 py-2 transition-colors"
            >
              Book a Strategy Call
            </a>
            <a
              href="#proposal"
              onClick={onProposalClick}
              className="btn-primary text-xs"
            >
              <span>Request a Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B1B3A] hover:text-[#5B3DF5] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Drawer */}
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 top-[61px] z-50 bg-white p-6 flex flex-col justify-between md:hidden shadow-xl"
          >
            <nav className="flex flex-col space-y-4 pt-4 text-base font-semibold text-[#0B1B3A]">
              {/* First Menu V1 then Menu V2 */}
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E4E7F0]">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-center text-xs font-bold bg-[#5B3DF5] text-white flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Menu V1</span>
                </a>
                <a
                  href="/v2"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-center text-xs font-semibold bg-[#F4F5F8] border border-[#E4E7F0] text-[#0B1B3A] hover:bg-amber-50 flex items-center justify-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Menu V2</span>
                </a>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#E4E7F0] hover:text-[#5B3DF5]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="space-y-3 pb-8 pt-4 border-t border-[#E4E7F0]">
              <a
                href="/v2"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs py-2 font-bold text-[#0B1B3A] bg-amber-50 rounded-lg border border-amber-200 block"
              >
                Switch to Version 2 (Funnels Playbook)
              </a>
              <a
                href="#proposal"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onProposalClick?.();
                }}
                className="btn-secondary w-full text-center text-sm"
              >
                Book a Strategy Call
              </a>
              <a
                href="#proposal"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onProposalClick?.();
                }}
                className="btn-primary w-full text-center text-sm"
              >
                Request a Proposal
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile-only sticky bottom bar (hides while #proposal form is in view) */}
      {!proposalInView && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E4E7F0] p-3 shadow-lg flex items-center justify-center">
          <a
            href="#proposal"
            onClick={onProposalClick}
            className="btn-primary w-full max-w-sm text-center text-xs py-3"
          >
            <span>Request a Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </>
  );
};
