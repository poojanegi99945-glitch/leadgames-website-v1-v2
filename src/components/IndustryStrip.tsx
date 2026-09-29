import React from 'react';
import { Stethoscope, Building2, Cloud, GraduationCap, Car, ShoppingBag, Briefcase } from 'lucide-react';

export const IndustryStrip: React.FC = () => {
  const industries = [
    { label: 'Healthcare', icon: Stethoscope },
    { label: 'Real Estate', icon: Building2 },
    { label: 'SaaS & ERP', icon: Cloud },
    { label: 'Education', icon: GraduationCap },
    { label: 'Automotive', icon: Car },
    { label: 'E-commerce', icon: ShoppingBag },
    { label: 'Agencies', icon: Briefcase },
  ];

  return (
    <section className="py-6 border-y border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs">
        <span className="font-semibold text-[#0B1B3A] uppercase tracking-wider whitespace-nowrap">
          Built for teams in:
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E4E7F0] rounded-lg text-[#0B1B3A] font-medium shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-[#5B3DF5]" aria-hidden="true" />
                <span>{ind.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
