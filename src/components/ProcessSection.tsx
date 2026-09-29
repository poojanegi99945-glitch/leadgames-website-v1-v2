import React from 'react';
import { processSteps } from '../content/process';
import { Search, PenTool, Wrench, Rocket, LineChart } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Search, PenTool, Wrench, Rocket, LineChart];

  return (
    <section id="process" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Version 2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="v2-eyebrow mb-2">Execution roadmap</span>
          <h2 className="v2-heading-lg mb-3">
            A Clear Process, From Idea to Optimized Campaign
          </h2>
          <p className="v2-body-lead mx-auto">
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
                className="bg-white rounded-2xl border border-[#E4E7F0] p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-[#F6F7FB] border border-[#E4E7F0] text-[#5B3DF5] font-extrabold text-xs flex items-center justify-center font-mono">
                      0{step.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#5B3DF5]" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0B1B3A] font-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#45516B] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4E7F0] text-[11px] font-bold text-[#5B3DF5]">
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
