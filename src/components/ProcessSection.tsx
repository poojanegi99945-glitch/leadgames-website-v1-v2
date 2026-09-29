import React from 'react';
import { processSteps } from '../content/process';
import { Search, PenTool, Wrench, Rocket, LineChart } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Search, PenTool, Wrench, Rocket, LineChart];

  return (
    <section id="process" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Execution Roadmap
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            A Clear Process, From Idea to Optimized Campaign
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            We handle the strategy, visual design, custom development, integrations, and ongoing conversion optimization.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="card-soft p-5 bg-[#F6F7FB] flex flex-col justify-between hover:border-[#CBD5E1] transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-white border border-[#E4E7F0] text-[#5B3DF5] font-bold text-xs flex items-center justify-center font-mono">
                      0{step.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#5B3DF5]" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0B1B3A]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#45516B] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4E7F0] text-[11px] font-semibold text-[#5B3DF5]">
                  {step.focus}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
