import React from 'react';
import { caseStudies } from '../content/caseStudies';
import { ArrowRight } from 'lucide-react';

interface ProofSectionProps {
  onProposalClick?: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onProposalClick }) => {
  return (
    <section className="py-16 md:py-20 border-b border-[#E4E7F0] bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="v2-eyebrow mb-2">Verified track record</span>

          <h2 className="v2-heading-lg mb-3">
            Case Studies Are on the Way
          </h2>

          <p className="v2-body-lead mx-auto">
            We're preparing detailed case studies. Want your campaign to be among the first we feature? Request a proposal.
          </p>

          <div className="pt-2">
            <a
              href="#proposal"
              onClick={onProposalClick}
              className="btn-primary text-xs font-bold rounded-full px-6 py-2.5 shadow-sm"
            >
              <span>Request a Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Data-driven card list: outputs nothing when array is empty */}
          {caseStudies.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="card-soft p-6">
                  <span className="text-xs font-bold text-[#5B3DF5]">{cs.clientIndustry}</span>
                  <h3 className="text-base font-bold text-[#0B1B3A] mt-1">{cs.campaign}</h3>
                  <p className="text-xs text-[#45516B] mt-2">{cs.results}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
