import React from 'react';

interface SectionPairHeaderProps {
  version: 'v1' | 'v2';
  title: string;
  sectionNumber?: string;
  tagline?: string;
  id?: string;
}

export const SectionPairHeader: React.FC<SectionPairHeaderProps> = ({
  version,
  title,
  sectionNumber,
  tagline,
  id,
}) => {
  const isV1 = version === 'v1';

  return (
    <div
      id={id}
      className={`w-full py-2.5 px-4 sm:px-8 border-y transition-colors flex flex-wrap items-center justify-between gap-3 ${
        isV1
          ? 'bg-[#F8F9FD] border-[#E4E7F0] text-[#0B1B3A]'
          : 'bg-[#FFF9F5] border-[#FFE2D1] text-[#0B1B3A]'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Version Badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
            isV1
              ? 'bg-[#5B3DF5] text-white shadow-xs'
              : 'bg-[#FF7A1A] text-white shadow-xs'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isV1 ? 'bg-emerald-300' : 'bg-white'
            }`}
          />
          {isV1 ? 'Version 1' : 'Version 2'}
        </span>

        {/* Section title & sequence */}
        <div className="flex items-center gap-2">
          {sectionNumber && (
            <span className="text-xs font-mono font-bold text-[#8A94A6]">
              {sectionNumber}
            </span>
          )}
          <h2 className="text-sm sm:text-base font-extrabold text-[#0B1B3A] font-heading tracking-tight">
            {title} – {isV1 ? 'Version 1' : 'Version 2'}
          </h2>
        </div>
      </div>

      {/* Right tagline / subtitle */}
      {tagline && (
        <span className="text-xs text-[#6B7A99] font-medium hidden md:inline">
          {tagline}
        </span>
      )}
    </div>
  );
};
