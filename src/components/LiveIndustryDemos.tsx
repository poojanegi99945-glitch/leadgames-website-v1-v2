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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            In-Depth Funnel Walks
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Sample: See Qualification in Action
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Test full interactive funnels across three key sectors to experience how responses map into qualified lead dossiers.
          </p>

          {/* Tab buttons */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-white border border-[#E4E7F0] shadow-2xs">
            <button
              onClick={() => setActiveTab('healthcare')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'healthcare'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-[#45516B] hover:text-[#0B1B3A]'
              }`}
            >
              Healthcare & Clinics
            </button>
            <button
              onClick={() => setActiveTab('realestate')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'realestate'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-[#45516B] hover:text-[#0B1B3A]'
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'saas'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-[#45516B] hover:text-[#0B1B3A]'
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
