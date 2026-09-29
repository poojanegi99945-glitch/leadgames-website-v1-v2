import React, { useState } from 'react';
import { ArrowLeftRight, Check, X } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 10));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 10));
    }
  };

  return (
    <section id="problem" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            The Problem With Plain Forms
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Static Forms Capture Details. TezPlay Captures Intent.
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            A form tells you who submitted. An interactive experience tells you what they need and how ready they are.
          </p>
        </div>

        {/* Mobile View: Stacked (under 640px) */}
        <div className="grid grid-cols-1 sm:hidden gap-6">
          {/* Traditional Form Card */}
          <div className="card-soft p-5 border-l-4 border-l-[#E5484D]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E4E7F0]">
              <span className="text-xs font-bold text-[#E5484D] uppercase">Traditional Lead Form</span>
              <span className="text-[11px] text-[#45516B]">Plain contact box</span>
            </div>
            <div className="space-y-2 text-xs opacity-75">
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Name: Jordan Lee</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Email: jordan@gmail.com</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Phone: +91 98765 43210</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Message: "Interested in details"</div>
            </div>
            <p className="mt-4 pt-3 border-t border-[#E4E7F0] text-xs font-semibold text-[#0B1B3A]">
              Caption: You know who submitted.
            </p>
          </div>

          {/* TezPlay Funnel Card */}
          <div className="card-soft p-5 border-l-4 border-l-[#12A150]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E4E7F0]">
              <span className="text-xs font-bold text-[#12A150] uppercase">TezPlay Interactive Funnel</span>
              <span className="text-[11px] text-[#5B3DF5] font-semibold">Intent & Qualification</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Goal: 3 BHK Luxury Apartment</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Budget: ₹80L – ₹1Cr Verified</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Timeline: Within 30 days</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Behavior: High Intent (Score 88/100)</div>
              <div className="p-2 rounded bg-[#F6F7FB] border border-[#E4E7F0]">Contact: WhatsApp verified consent</div>
            </div>
            <p className="mt-4 pt-3 border-t border-[#E4E7F0] text-xs font-semibold text-[#12A150]">
              Caption: You know who they are, what they need, and how ready they are.
            </p>
          </div>
        </div>

        {/* Desktop / Tablet View: Interactive Before/After Slider */}
        <div className="hidden sm:block">
          <div
            className="card-soft relative overflow-hidden select-none min-h-[360px]"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Comparison between Traditional Form and TezPlay Interactive Funnel"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPos}
          >
            {/* Right Side Background (TezPlay Funnel) */}
            <div className="absolute inset-0 bg-[#F6F7FB] p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#12A150]">
                    TezPlay Interactive Funnel
                  </span>
                  <span className="text-xs text-[#5B3DF5] font-semibold">
                    Complete Buyer Context
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs max-w-xl ml-auto">
                  <div className="p-3 bg-white rounded-lg border border-[#E4E7F0]">
                    <span className="text-[#45516B] block text-[10px] uppercase font-semibold">Stated Goal</span>
                    <span className="font-bold text-[#0B1B3A]">3 BHK Premium Villa</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E4E7F0]">
                    <span className="text-[#45516B] block text-[10px] uppercase font-semibold">Verified Budget</span>
                    <span className="font-bold text-[#12A150]">₹80L – ₹1Cr</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E4E7F0]">
                    <span className="text-[#45516B] block text-[10px] uppercase font-semibold">Timeline</span>
                    <span className="font-bold text-[#0B1B3A]">Immediate (&lt; 30 Days)</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E4E7F0]">
                    <span className="text-[#45516B] block text-[10px] uppercase font-semibold">Lead Score</span>
                    <span className="font-bold text-[#E5484D]">92 / 100 (Hot Lead)</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-bold text-[#12A150]">
                Caption: You know who they are, what they need, and how ready they are.
              </div>
            </div>

            {/* Left Side Clipping Layer (Traditional Form) */}
            <div
              className="absolute inset-y-0 left-0 bg-white border-r border-[#CBD5E1] p-8 flex flex-col justify-between overflow-hidden shadow-md"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-[500px]">
                <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E5484D]">
                    Traditional Lead Form
                  </span>
                  <span className="text-xs text-[#45516B]">
                    Static Input Box
                  </span>
                </div>

                <div className="space-y-2.5 text-xs max-w-sm">
                  <div className="p-2.5 rounded bg-[#F6F7FB] border border-[#E4E7F0]">
                    <span className="text-[#45516B]">Name:</span> Alex Mercer
                  </div>
                  <div className="p-2.5 rounded bg-[#F6F7FB] border border-[#E4E7F0]">
                    <span className="text-[#45516B]">Email:</span> alex@gmail.com
                  </div>
                  <div className="p-2.5 rounded bg-[#F6F7FB] border border-[#E4E7F0]">
                    <span className="text-[#45516B]">Phone:</span> +91 98765 00000
                  </div>
                  <div className="p-2.5 rounded bg-[#F6F7FB] border border-[#E4E7F0]">
                    <span className="text-[#45516B]">Message:</span> "Send brochure"
                  </div>
                </div>
              </div>

              <div className="text-left text-xs font-bold text-[#0B1B3A] w-[500px]">
                Caption: You know who submitted.
              </div>
            </div>

            {/* Slider Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-7 h-7 rounded-full bg-[#5B3DF5] text-white shadow-lg flex items-center justify-center border-2 border-white">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Range input for drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
              aria-label="Slider position"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#45516B]">
            <span>← Drag or use arrow keys to compare</span>
            <span>Static Form (Left) vs. TezPlay Intent (Right)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
