import React from 'react';
import { 
  Layers, 
  UserCheck, 
  Filter, 
  Cpu, 
  MessageSquare, 
  Database, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const PlatformEcosystem: React.FC = () => {
  const capabilities = [
    {
      icon: Layers,
      title: 'Interactive Experience Builder',
      description: 'Build quizzes, assessments, calculators, and playable reward campaigns in a drag-and-drop visual canvas with zero code.',
      tag: 'No-Code Canvas',
    },
    {
      icon: UserCheck,
      title: 'Zero-Party Lead Capture',
      description: 'Collect verified mobile numbers, WhatsApp opt-ins, and explicit buyer preferences without friction.',
      tag: 'High Intent Opt-in',
    },
    {
      icon: Filter,
      title: 'Dynamic Qualification Logic',
      description: 'Set custom branching pathways, filter tyre-kickers, and ensure only qualified buyers reach your sales calendar.',
      tag: 'Smart Branching',
    },
    {
      icon: Cpu,
      title: 'AI Lead Scoring Engine',
      description: 'Automatically grade incoming leads from 0 to 100 based on declared budget, purchase timeframe, and severity.',
      tag: '0–100 Rating',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Automation',
      description: 'Trigger personalized WhatsApp follow-ups, custom PDF recommendation dossiers, and automated email nurturing sequences.',
      tag: '< 60s Latency',
    },
    {
      icon: Database,
      title: 'Native CRM & Webhooks',
      description: 'Synchronize contact data, answer parameters, and lead scores directly to HubSpot, Salesforce, Zoho, or custom APIs.',
      tag: 'Bi-Directional Sync',
    },
    {
      icon: BarChart3,
      title: 'Funnel Intelligence & CRO',
      description: 'Track question-by-question drop-offs, optimize conversion bottlenecks, and attribute revenue back to campaigns.',
      tag: 'Attribution Tracking',
    },
  ];

  return (
    <section id="platform" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            The Complete Operating System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            One Platform. The Entire Lead Conversion Journey.
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            From the initial interactive touchpoint to real-time qualification and CRM dispatch—Lead Games.com powers every step.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-medium bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center text-[11px] font-semibold text-indigo-400">
                  <span>Engineered for conversion</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
