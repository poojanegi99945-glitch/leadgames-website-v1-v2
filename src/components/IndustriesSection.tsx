import React, { useState } from 'react';
import { industriesData, IndustryItem, Hotspot } from '../content/industries';
import { Info, CheckCircle2, ChevronRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<{ industryId: string; hotspot: Hotspot } | null>(null);

  return (
    <section id="industries" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Sector-Specific Campaigns
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Interactive Lead Generation for Your Industry
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Every industry has unique qualification rules. Click the hotspots below to see what data is captured before sales follow-up.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="card-soft p-5 sm:p-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all"
            >
              <div>
                <div className="pb-3 border-b border-[#E4E7F0] mb-4">
                  <h3 className="text-base font-bold text-[#0B1B3A]">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#45516B] mt-0.5">
                    {ind.subtitle}
                  </p>
                </div>

                {/* SVG Hotspot Scene */}
                <div className="relative w-full h-40 bg-[#F6F7FB] rounded-xl border border-[#E4E7F0] overflow-hidden mb-4 flex items-center justify-center">
                  {/* Subtle Grid Diagram */}
                  <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${ind.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${ind.id})`} />
                  </svg>

                  {/* Hotspots */}
                  {ind.hotspots.map((hs) => {
                    const isSelected = activeHotspot?.hotspot.id === hs.id;
                    return (
                      <button
                        key={hs.id}
                        type="button"
                        onClick={() => setActiveHotspot(isSelected ? null : { industryId: ind.id, hotspot: hs })}
                        className={`absolute w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform cursor-pointer focus:outline-none ${
                          isSelected
                            ? 'bg-[#5B3DF5] text-white scale-110 shadow-md ring-2 ring-white'
                            : 'bg-white text-[#5B3DF5] border border-[#5B3DF5] hover:scale-105 shadow-xs'
                        }`}
                        style={{ left: `${hs.x}%`, top: `${hs.y}%`, transform: 'translate(-50%, -50%)' }}
                        aria-label={`Hotspot: ${hs.title}`}
                      >
                        <span>+</span>
                      </button>
                    );
                  })}

                  <div className="absolute bottom-2 right-2 text-[10px] text-[#45516B] bg-white/90 px-1.5 py-0.5 rounded border border-[#E4E7F0]">
                    Tap + hotspots
                  </div>
                </div>

                {/* Active Popover info */}
                {activeHotspot?.industryId === ind.id && (
                  <div className="p-3 mb-4 rounded-lg bg-[#5B3DF5]/5 border border-[#5B3DF5]/20 text-xs">
                    <span className="font-bold text-[#5B3DF5] block">
                      Captured: {activeHotspot.hotspot.title}
                    </span>
                    <span className="text-[#0B1B3A]">
                      {activeHotspot.hotspot.capturedData}
                    </span>
                  </div>
                )}

                {/* Examples */}
                <div className="space-y-1.5 text-xs">
                  <div className="text-[10px] font-bold text-[#45516B] uppercase tracking-wider">
                    Campaign Examples:
                  </div>
                  {ind.examples.map((ex, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[#0B1B3A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5]" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {ind.note && (
                <div className="mt-4 pt-3 border-t border-[#E4E7F0] text-[11px] text-[#45516B] italic">
                  {ind.note}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
