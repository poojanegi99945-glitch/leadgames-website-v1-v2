import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F7FB] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full card-soft p-8 bg-white text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#12A150] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <h1 className="text-2xl font-bold text-[#0B1B3A]">
          Proposal Request Received
        </h1>

        <p className="text-xs text-[#45516B] leading-relaxed">
          Thanks for reaching out to TezPlay. We will review your goals and industry parameters to draft your custom interactive campaign proposal.
        </p>

        <p className="text-[11px] text-[#45516B]">
          Note: This form is not connected to a production database yet. Please email us directly at <span className="font-mono text-[#5B3DF5]">[ADD: email]</span> to confirm your request.
        </p>

        <div className="pt-2">
          <a href="/" className="btn-primary text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </a>
        </div>
      </div>
    </div>
  );
};
