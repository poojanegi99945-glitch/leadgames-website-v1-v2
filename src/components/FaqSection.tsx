import React, { useState } from 'react';
import { faqList } from '../content/faq';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Version 2 */}
        <div className="text-center mb-12">
          <span className="v2-eyebrow mb-2">Questions & answers</span>
          <h2 className="v2-heading-lg mb-3">
            Frequently Asked Questions
          </h2>
          <p className="v2-body-lead mx-auto">
            Clear details on our done-for-you service, qualification logic, and campaign setup.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E4E7F0] overflow-hidden shadow-xs transition-all hover:border-[#CBD5E1]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1B3A] font-heading hover:text-[#5B3DF5] transition-colors focus:outline-none"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#45516B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5B3DF5]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#45516B] leading-relaxed border-t border-[#E4E7F0]/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
