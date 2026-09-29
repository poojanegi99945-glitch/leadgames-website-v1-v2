import React from 'react';
import { Layers, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Users, Zap, Headphones } from 'lucide-react';

interface PlatformVsServiceProps {
  onStartFunnel: () => void;
  onBookDemo: () => void;
}

export const PlatformVsService: React.FC<PlatformVsServiceProps> = ({ onStartFunnel, onBookDemo }) => {
  return (
    <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Flexible Engagement Models
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Build It Yourself. Or Let Us Build It for You.
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Whether you need a self-serve platform for your in-house team or a complete done-for-you conversion strategy, TezPlay delivers.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Option 1: TezPlay Platform */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">TezPlay Platform</h3>
                    <p className="text-xs text-slate-400">Self-Serve No-Code Software</p>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-0.5 rounded-full font-medium">
                  For In-House Teams
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Empower your growth and performance marketing team to design, launch, and optimize high-converting interactive funnels in minutes with zero coding required.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                {[
                  'Drag-and-drop interactive funnel & quiz builder',
                  'Customizable AI lead scoring & intent logic',
                  'Native CRM connectors (HubSpot, Salesforce, Zoho)',
                  'Automated WhatsApp follow-up triggers',
                  'Real-time drop-off heatmaps and conversion tracking',
                  'Embed anywhere: WordPress, Webflow, Shopify, custom HTML',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onStartFunnel}
              className="w-full py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Option 2: Managed Campaigns */}
          <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950 p-8 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3 right-8 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Full-Service White Glove
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Managed Campaigns</h3>
                    <p className="text-xs text-slate-400">Done-For-You Agency Service</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-medium">
                  End-to-End Execution
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Our conversion experts craft the complete strategy, write the psychology-driven copy, engineer custom graphics, and integrate your CRM & WhatsApp pipelines.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                {[
                  'Dedicated senior conversion strategist & funnel architect',
                  'Custom bespoke design & branded visual interactive assets',
                  'Psychological copy engineered for maximum qualification',
                  'Complete CRM, webhook, and WhatsApp API configuration',
                  'Weekly multivariate A/B testing & CRO iteration',
                  'Guaranteed qualification uplift benchmarks',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
