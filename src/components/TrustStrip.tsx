import React from 'react';
import { Stethoscope, Building2, Cloud, GraduationCap, Car, ShoppingBag, Briefcase } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const industries = [
    { name: 'Healthcare & Clinics', icon: Stethoscope },
    { name: 'Real Estate & Builders', icon: Building2 },
    { name: 'SaaS & B2B Software', icon: Cloud },
    { name: 'Higher Education', icon: GraduationCap },
    { name: 'Automotive & Mobility', icon: Car },
    { name: 'E-Commerce Brands', icon: ShoppingBag },
    { name: 'Performance Agencies', icon: Briefcase },
  ];

  return (
    <section className="border-y border-slate-800/80 bg-slate-900/40 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Architected for high-intent industries where lead qualification is critical
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-300">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div 
                key={i} 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800/60 bg-slate-950/40 hover:border-slate-700 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-indigo-400" />
                <span>{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
