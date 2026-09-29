import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface FinalCtaProps {
  onStartFunnel: () => void;
  onBookDemo: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onStartFunnel, onBookDemo }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900/60 via-indigo-950/20 to-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold mb-6">
          <Zap className="w-3.5 h-3.5 fill-indigo-400" />
          <span>Launch Your First Qualified Funnel Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display text-balance leading-tight">
          Your Next Lead Should Tell You More Than Their Phone Number.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Create interactive experiences that capture customer intent, calculate AI lead scores, and trigger the right WhatsApp & CRM follow-up automatically.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onStartFunnel}
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Build Your First Funnel</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBookDemo}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
          >
            Book Strategy Walkthrough
          </button>
        </div>

        {/* Micro-proof strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            14-Day Full Access Trial
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            No Credit Card Required
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Full CRM & WhatsApp Integration
          </span>
        </div>

      </div>
    </section>
  );
};
