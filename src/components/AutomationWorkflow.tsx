import React, { useState } from 'react';
import { 
  Cpu, 
  MessageSquare, 
  Database, 
  Send, 
  CheckCircle2, 
  Clock, 
  Bell, 
  Share2, 
  FileText, 
  ArrowRight,
  Sparkles,
  Play
} from 'lucide-react';

export const AutomationWorkflow: React.FC = () => {
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'running' | 'completed'>('idle');

  const handleSimulate = () => {
    setDispatchStatus('running');
    setTimeout(() => {
      setDispatchStatus('completed');
    }, 1200);
  };

  return (
    <section id="automation" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Multi-Channel Lead Orchestration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Qualification Should Trigger Instant Action.
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Don't let qualified prospects wait in a static CRM queue. TezPlay triggers personalized WhatsApp messages, sales rep notifications, and CRM records within 30 seconds of completion.
          </p>
        </div>

        {/* Workflow Canvas */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Automated Pipeline Execution
              </div>
              <div className="text-lg font-bold text-white mt-0.5">
                Trigger: Lead Completes Assessment with Score ≥ 80
              </div>
            </div>

            <button
              onClick={handleSimulate}
              disabled={dispatchStatus === 'running'}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{dispatchStatus === 'running' ? 'Simulating Dispatch...' : 'Simulate Instant Workflow'}</span>
            </button>
          </div>

          {/* Pipeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1: WhatsApp Automation */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 relative">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400">01. WhatsApp</span>
              </div>
              <h4 className="text-sm font-bold text-white">Instant WhatsApp Follow-Up</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sends personalized assessment summary and direct calendar booking link while prospect is active.
              </p>
              <div className="pt-2">
                <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded ${
                  dispatchStatus === 'completed'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3 h-3" />
                  {dispatchStatus === 'completed' ? 'Delivered in 12s' : 'Automated Trigger'}
                </span>
              </div>
            </div>

            {/* Step 2: CRM Sync */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 relative">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-indigo-950/70 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-indigo-400">02. CRM Sync</span>
              </div>
              <h4 className="text-sm font-bold text-white">HubSpot & Salesforce Ready</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Creates or updates contact record with budget, intent score, and specific answers mapped to custom fields.
              </p>
              <div className="pt-2">
                <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded ${
                  dispatchStatus === 'completed'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3 h-3" />
                  {dispatchStatus === 'completed' ? 'Deal Created (Score 92)' : 'Native Webhook'}
                </span>
              </div>
            </div>

            {/* Step 3: Sales Rep Alert */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 relative">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-amber-950/70 border border-amber-800/60 flex items-center justify-center text-amber-400">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-amber-400">03. Rep Alert</span>
              </div>
              <h4 className="text-sm font-bold text-white">Slack & SMS Priority Alert</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notifies the account executive immediately with customer context so they can dial within 5 minutes.
              </p>
              <div className="pt-2">
                <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded ${
                  dispatchStatus === 'completed'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3 h-3" />
                  {dispatchStatus === 'completed' ? 'Slack Pushed: #hot-leads' : 'Instant Routing'}
                </span>
              </div>
            </div>

            {/* Step 4: Personalized Asset */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 relative">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-sky-950/70 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-sky-400">04. Deliverable</span>
              </div>
              <h4 className="text-sm font-bold text-white">Dynamic PDF / Report</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generates a branded recommendation PDF or proposal document attached to the confirmation email.
              </p>
              <div className="pt-2">
                <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded ${
                  dispatchStatus === 'completed'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3 h-3" />
                  {dispatchStatus === 'completed' ? 'Generated & Attached' : 'Auto-Generation'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
