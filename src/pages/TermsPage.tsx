import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F7FB] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full card-soft p-8 bg-white space-y-4">
        <a href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B3DF5] mb-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Lead Games.com Home</span>
        </a>

        <h1 className="text-2xl font-bold text-[#0B1B3A]">Terms of Service</h1>
        
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 font-semibold">
          Draft to be finalized with legal counsel. (noindex)
        </div>

        <p className="text-xs text-[#45516B] leading-relaxed">
          Lead Games.com is a done-for-you interactive marketing and lead qualification agency. All client campaigns, scope deliverables, and payment terms are executed under individual written proposals and statements of work.
        </p>

        <p className="text-xs text-[#45516B] leading-relaxed">
          For legal inquiries, contact [ADD: email].
        </p>
      </div>
    </div>
  );
};
