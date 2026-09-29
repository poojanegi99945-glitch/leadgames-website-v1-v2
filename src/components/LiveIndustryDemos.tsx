import React, { useState } from 'react';
import { FunnelEngine } from '../features/funnel-demo/FunnelEngine';
import { 
  healthcareFunnelConfig, 
  realEstateFunnelConfig, 
  saasErpFunnelConfig 
} from '../features/funnel-demo/configs';

interface LiveIndustryDemosProps {
  onProposalClick?: () => void;
}

export const LiveIndustryDemos: React.FC<LiveIndustryDemosProps> = ({ onProposalClick }) => {
  const [activeTab, setActiveTab] = useState<'healthcare' | 'realestate' | 'saas'>('healthcare');

  return (
    <section className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Version 2 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="v2-eyebrow mb-2">In-depth funnel walks</span>
          <h2 className="v2-heading-lg mb-3">
            See Qualification in Action
          </h2>
          <p className="v2-body-lead mx-auto">
            Test full interactive funnels across three key sectors to experience how responses map into qualified lead dossiers.
          </p>

          {/* Tab buttons */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white border border-[#E4E7F0] shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('healthcare')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'healthcare'
                  ? 'bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20'
                  : 'text-[#45516B] hover:text-[#0B1B3A] hover:bg-[#F6F7FB]'
              }`}
            >
              Healthcare & Clinics
            </button>
            <button
              onClick={() => setActiveTab('realestate')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'realestate'
                  ? 'bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20'
                  : 'text-[#45516B] hover:text-[#0B1B3A] hover:bg-[#F6F7FB]'
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'saas'
                  ? 'bg-[#0B1B3A] text-white shadow-sm ring-2 ring-[#0B1B3A]/20'
                  : 'text-[#45516B] hover:text-[#0B1B3A] hover:bg-[#F6F7FB]'
              }`}
            >
              SaaS & ERP
            </button>
          </div>
        </div>

        {/* Funnel Engine Container */}
        <div className="max-w-2xl mx-auto">
          {activeTab === 'healthcare' && (
            <FunnelEngine
              key="healthcare"
              config={healthcareFunnelConfig}
              onCompleteCta={onProposalClick}
              showScoreCard={true}
            />
          )}

          {activeTab === 'realestate' && (
            <FunnelEngine
              key="realestate"
              config={realEstateFunnelConfig}
              onCompleteCta={onProposalClick}
              showScoreCard={true}
            />
          )}

          {activeTab === 'saas' && (
            <FunnelEngine
              key="saas"
              config={saasErpFunnelConfig}
              onCompleteCta={onProposalClick}
              showScoreCard={true}
            />
          )}
        </div>

      </div>
    </section>
  );
};
