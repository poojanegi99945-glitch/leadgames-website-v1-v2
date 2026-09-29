import React, { useState } from 'react';
import { faqList } from '../content/faq';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Questions & Answers
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#45516B]">
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
                className="card-soft bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1B3A] hover:text-[#5B3DF5] transition-colors focus:outline-none"
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
