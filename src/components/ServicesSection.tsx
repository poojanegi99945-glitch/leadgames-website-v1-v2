import React, { useState } from 'react';
import { serviceCategories } from '../content/services';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectGoal?: (goal: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectGoal }) => {
  const [expandedCat, setExpandedCat] = useState<string | null>('gamified-lead-gen');

  const toggleCategory = (id: string) => {
    setExpandedCat((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Done-For-You Campaign Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            What We Build and Manage
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Fourteen services in five groups, delivered as one connected campaign.
          </p>
        </div>

        {/* 5 Service Category Accordion / Cards */}
        <div className="space-y-4">
          {serviceCategories.map((cat) => {
            const isExpanded = expandedCat === cat.id;
            return (
              <div
                key={cat.id}
                className={`card-soft overflow-hidden transition-all duration-200 ${
                  isExpanded ? 'border-[#5B3DF5] shadow-sm' : 'hover:border-[#CBD5E1]'
                }`}
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] font-bold text-sm flex items-center justify-center font-heading shrink-0">
                      {cat.letter}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1B3A]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#45516B] mt-0.5">
                        "{cat.tagline}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline text-xs text-[#45516B]">
                      {cat.services.length} services
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#45516B] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#5B3DF5]' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#E4E7F0] bg-[#F6F7FB]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      {cat.services.map((svc, i) => (
                        <div
                          key={i}
                          className="bg-white p-4 rounded-xl border border-[#E4E7F0] space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#5B3DF5] shrink-0" />
                            <h4 className="text-xs sm:text-sm font-bold text-[#0B1B3A]">
                              {svc.name}
                            </h4>
                          </div>
                          <p className="text-xs text-[#45516B] leading-relaxed pl-6">
                            {svc.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E4E7F0] flex items-center justify-between">
                      <span className="text-xs text-[#45516B]">
                        Strategy, copy, design, development & ongoing optimization included.
                      </span>

                      <a
                        href="#proposal"
                        onClick={() => onSelectGoal?.(cat.goalValue)}
                        className="text-xs font-bold text-[#5B3DF5] hover:text-[#4527D6] inline-flex items-center gap-1.5"
                      >
                        <span>Discuss this in a proposal</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
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
