import React, { useState } from 'react';
import { 
  Megaphone, 
  Gamepad2, 
  UserCheck, 
  Filter, 
  Target, 
  Cpu, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(3); // Default to 'Qualify'

  const nodes = [
    {
      id: 'attract',
      num: '01',
      title: 'Attract',
      icon: Megaphone,
      whatIn: 'Google/Meta Ads, organic social, QR codes, email, and website traffic',
      whatOut: 'Active targeted traffic entering the interactive landing page',
    },
    {
      id: 'engage',
      num: '02',
      title: 'Engage',
      icon: Gamepad2,
      whatIn: 'Visitors who would usually bounce on passive forms',
      whatOut: 'Active participation in a quiz, assessment, calculator, or game',
    },
    {
      id: 'capture',
      num: '03',
      title: 'Capture',
      icon: UserCheck,
      whatIn: 'Interest in tailored results, score report, or reward',
      whatOut: 'Verified name, phone number, email, and explicit WhatsApp consent',
    },
    {
      id: 'qualify',
      num: '04',
      title: 'Qualify',
      icon: Filter,
      whatIn: 'Declared pain points, requirements, and constraints',
      whatOut: 'Structured qualification signals: budget, location, urgency, and timeline',
    },
    {
      id: 'score',
      num: '05',
      title: 'Score',
      icon: Target,
      whatIn: 'Collected qualification responses',
      whatOut: 'Transparent rule-based scoring: Hot / Warm / Cold segmentation',
    },
    {
      id: 'automate',
      num: '06',
      title: 'Automate',
      icon: Cpu,
      whatIn: 'Lead score and category classification',
      whatOut: 'Instant WhatsApp message, CRM sync (HubSpot/Zoho), and sales rep alert',
    },
    {
      id: 'convert',
      num: '07',
      title: 'Convert',
      icon: TrendingUp,
      whatIn: 'Sales-ready prospect with complete context in rep hands',
      whatOut: 'Consultation, demo, site visit, or high-value customer transaction',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            The Complete Funnel Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            From Ad Click to Qualified Lead
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            One connected journey, built and managed by us.
          </p>
        </div>

        {/* Desktop Interactive Node Flow */}
        <div className="hidden lg:block mb-8">
          <div className="grid grid-cols-7 gap-3 relative">
            {nodes.map((node, idx) => {
              const isSelected = activeNode === idx;
              const Icon = node.icon;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(idx)}
                  onFocus={() => setActiveNode(idx)}
                  className={`card-soft p-4 text-left transition-all duration-200 relative group cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'border-[#5B3DF5] bg-white ring-2 ring-[#5B3DF5]/30 shadow-md'
                      : 'hover:border-[#CBD5E1] bg-white'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#5B3DF5]">
                      {node.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#5B3DF5]' : 'text-[#45516B]'}`} />
                  </div>
                  <div className="text-xs font-bold text-[#0B1B3A] truncate">
                    {node.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Box (Desktop) */}
        <div className="hidden lg:block card-soft p-6 sm:p-8 bg-white border border-[#E4E7F0] shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-[#E4E7F0] mb-5">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center font-bold text-xs font-mono">
                {nodes[activeNode].num}
              </span>
              <h3 className="text-xl font-bold text-[#0B1B3A] font-heading">
                Stage {nodes[activeNode].num}: {nodes[activeNode].title}
              </h3>
            </div>
            <span className="text-xs text-[#5B3DF5] font-semibold bg-[#5B3DF5]/5 px-3 py-1 rounded-full">
              Built & Managed by Lead Games.com
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F6F7FB] border border-[#E4E7F0] space-y-2">
              <span className="text-[11px] font-bold text-[#45516B] uppercase tracking-wider block">
                What Comes In:
              </span>
              <p className="text-[#0B1B3A] font-medium leading-relaxed">
                {nodes[activeNode].whatIn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#5B3DF5]/5 border border-[#5B3DF5]/20 space-y-2">
              <span className="text-[11px] font-bold text-[#5B3DF5] uppercase tracking-wider block">
                What Goes Out:
              </span>
              <p className="text-[#0B1B3A] font-medium leading-relaxed">
                {nodes[activeNode].whatOut}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div key={node.id} className="card-soft p-5 bg-white space-y-3 border-l-4 border-l-[#5B3DF5]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#5B3DF5]">{node.num}</span>
                    <h4 className="text-sm font-bold text-[#0B1B3A]">{node.title}</h4>
                  </div>
                  <Icon className="w-4 h-4 text-[#5B3DF5]" />
                </div>
                <div className="text-xs text-[#45516B] space-y-1">
                  <div><strong className="text-[#0B1B3A]">In:</strong> {node.whatIn}</div>
                  <div><strong className="text-[#5B3DF5]">Out:</strong> {node.whatOut}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
