import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { FunnelEngine } from '../features/funnel-demo/FunnelEngine';
import { heroFunnelConfig } from '../features/funnel-demo/configs';

interface HeroSectionProps {
  onProposalClick?: () => void;
  onSamplesClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onProposalClick,
  onSamplesClick,
}) => {
  return (
    <section id="top" className="pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proposition and Action */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5B3DF5]">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              <span>Interactive Lead Generation Agency</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1B3A] tracking-tight leading-[1.12] font-heading">
              Turn Clicks Into Play. <br />
              <span className="text-[#5B3DF5]">Turn Play Into Qualified Leads.</span>
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-[#45516B] leading-relaxed max-w-xl">
              We build and manage quizzes, assessments, calculators and gamified campaigns that capture intent, qualify leads and trigger automated follow-up.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#proposal"
                onClick={onProposalClick}
                className="btn-primary py-3.5 text-sm"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#samples"
                onClick={onSamplesClick}
                className="btn-secondary py-3.5 text-sm"
              >
                <span>Try a Sample Experience</span>
              </a>
            </div>

            {/* Micro-line */}
            <div className="pt-1 text-xs text-[#45516B] flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-medium text-[#0B1B3A]">Custom-built for your business</span>
              <span>·</span>
              <span>Lead qualification</span>
              <span>·</span>
              <span>CRM and WhatsApp follow-up</span>
            </div>

          </div>

          {/* Right Column: PhoneFrameDemo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md relative">
              
              {/* Phone Frame Mockup Outer Container */}
              <div className="rounded-[36px] p-3 sm:p-4 bg-[#0B1B3A] shadow-2xl border-4 border-slate-800 relative">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#F6F7FB] rounded-[24px] p-2 sm:p-3 overflow-hidden">
                  <FunnelEngine
                    config={heroFunnelConfig}
                    onCompleteCta={onProposalClick}
                    showScoreCard={true}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
