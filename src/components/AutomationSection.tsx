import React, { useState } from 'react';
import { MessageSquare, Database, Bell, Calendar, Mail, RefreshCw, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const AutomationSection: React.FC = () => {
  const [thresholdMode, setThresholdMode] = useState<'above' | 'below'>('above');
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<string | null>(null);

  const aboveNodes = [
    { id: '1', title: 'Lead Qualified', icon: CheckCircle2, desc: 'Score >= 75 marks lead as Hot, triggering instant high-priority routing.' },
    { id: '2', title: 'WhatsApp Message', icon: MessageSquare, desc: 'Automated WhatsApp welcome summary and calendar booking link dispatched within 30 seconds.' },
    { id: '3', title: 'CRM Record Created', icon: Database, desc: 'Contact created or updated with complete answer context in HubSpot, Zoho, Salesforce, or Twenty CRM.' },
    { id: '4', title: 'Notify Sales Rep', icon: Bell, desc: 'Instant Slack, SMS, or email alert dispatched to the designated sales account executive.' },
    { id: '5', title: 'Book Consultation', icon: Calendar, desc: 'Lead self-books an appointment on the sales calendar or receives an outbound call.' },
  ];

  const belowNodes = [
    { id: 'b1', title: 'Lead Captured', icon: CheckCircle2, desc: 'Contact details and preferences recorded for warm/cold leads (Score < 75).' },
    { id: 'b2', title: 'Email Nurture', icon: Mail, desc: 'Lead enters an educational 4-part email sequence with guides and industry benchmarks.' },
    { id: 'b3', title: 'Re-Engage Later', icon: RefreshCw, desc: 'Follow-up interactive survey or case study triggered after 14 days.' },
    { id: 'b4', title: 'Re-Score & Qualify', icon: CheckCircle2, desc: 'Lead is re-evaluated when they interact with future content or update their timeframe.' },
  ];

  const activeNodes = thresholdMode === 'above' ? aboveNodes : belowNodes;

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Multi-Channel Follow-Up
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Qualification Should Trigger Action
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Route each lead to the right follow-up automatically: WhatsApp, email, CRM and sales alerts.
          </p>

          {/* Toggle Threshold Buttons */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-white border border-[#E4E7F0] shadow-2xs">
            <button
              onClick={() => {
                setThresholdMode('above');
                setSelectedNodeInfo(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                thresholdMode === 'above'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-[#45516B] hover:text-[#0B1B3A]'
              }`}
            >
              Score: Above threshold (Hot Lead)
            </button>
            <button
              onClick={() => {
                setThresholdMode('below');
                setSelectedNodeInfo(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                thresholdMode === 'below'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-[#45516B] hover:text-[#0B1B3A]'
              }`}
            >
              Score: Below threshold (Nurture)
            </button>
          </div>
        </div>

        {/* Node Flow Canvas */}
        <div className="card-soft p-6 sm:p-8 bg-white space-y-6">
          <div className="text-xs font-semibold text-[#45516B] flex items-center justify-between pb-3 border-b border-[#E4E7F0]">
            <span>Active Automated Pipeline: {thresholdMode === 'above' ? 'VIP Sales Dispatch' : 'Automated Nurture'}</span>
            <span className="text-[11px] text-[#5B3DF5]">Click any node to see trigger details</span>
          </div>

          {/* Grid of pipeline nodes */}
          <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${thresholdMode === 'above' ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
            {activeNodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeInfo(n.desc)}
                  className="p-4 rounded-xl border border-[#E4E7F0] bg-[#F6F7FB] hover:border-[#5B3DF5] hover:bg-white text-left transition-all group focus:outline-none"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#45516B]">Step {i + 1}</span>
                    <Icon className="w-4 h-4 text-[#5B3DF5]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#5B3DF5]">
                    {n.title}
                  </h4>
                  <p className="text-[11px] text-[#45516B] mt-1 line-clamp-2">
                    {n.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Node Inspector Box */}
          {selectedNodeInfo && (
            <div className="p-4 rounded-xl bg-[#5B3DF5]/5 border border-[#5B3DF5]/20 text-xs text-[#0B1B3A]">
              <span className="font-bold text-[#5B3DF5] block mb-1">Node Mechanism Details:</span>
              <p>{selectedNodeInfo}</p>
            </div>
          )}

          {/* Disclaimers & Text Only Tools Notice */}
          <div className="pt-4 border-t border-[#E4E7F0] space-y-1.5 text-xs text-[#45516B]">
            <p>
              We can connect leads to systems such as HubSpot, Zoho, Salesforce, Twenty CRM, email tools and WhatsApp Business, depending on your setup.
            </p>
            <p className="text-[11px] text-[#12A150] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WhatsApp messages are sent only to people who have opted in.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
