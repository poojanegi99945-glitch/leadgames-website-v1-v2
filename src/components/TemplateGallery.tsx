import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  Calculator, 
  Compass, 
  RotateCw, 
  Gift, 
  Eye, 
  Check, 
  X 
} from 'lucide-react';
import { TemplateItem } from '../types';

interface TemplateGalleryProps {
  onSelectTemplate: (template: TemplateItem) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectTemplate }) => {
  const [filter, setFilter] = useState<string>('all');
  const [previewModal, setPreviewModal] = useState<TemplateItem | null>(null);

  const templates: TemplateItem[] = [
    {
      id: 'health-care-triage',
      title: 'Aesthetic Clinic & Patient Care Assessment',
      industry: 'Healthcare',
      type: 'Assessment Funnel',
      questionsCount: 5,
      avgCompletion: '76%',
      description: 'Pre-qualifies clinical concerns, duration, and consultation timeline before doctor booking.',
      previewSteps: [
        'Area of aesthetic or clinical concern',
        'Symptom duration & previous treatments',
        'Desired consultation timeframe',
        'Preferred doctor / clinic branch location',
        'Verified contact details for intake summary',
      ],
    },
    {
      id: 'real-estate-finder',
      title: 'Luxury Property & Budget Matcher',
      industry: 'Real Estate',
      type: 'Property Finder',
      questionsCount: 4,
      avgCompletion: '82%',
      description: 'Matches property buyers to verified inventory by budget, location, and purchase urgency.',
      previewSteps: [
        'Investment or residential budget tier',
        'Target geographic zone & community',
        'Property specification (2BHK / 3BHK / Villa)',
        'Purchase timeline (< 30 days to 6 months)',
      ],
    },
    {
      id: 'saas-erp-roi',
      title: 'B2B Software Solution & ROI Evaluator',
      industry: 'SaaS / ERP',
      type: 'ROI Calculator',
      questionsCount: 5,
      avgCompletion: '71%',
      description: 'Estimates implementation costs, required modules, and team productivity gains.',
      previewSteps: [
        'Company headcount & active software seats',
        'Current CRM or ERP stack',
        'Primary operational bottlenecks',
        'Target deployment quarter',
      ],
    },
    {
      id: 'spin-win-lead-gen',
      title: 'Gamified Promotional Spin & Win',
      industry: 'E-commerce',
      type: 'Promotional Game',
      questionsCount: 2,
      avgCompletion: '91%',
      description: 'High-converting interactive prize wheel with instant WhatsApp voucher verification.',
      previewSteps: [
        'Spin the branded reward wheel',
        'Unlock mystery prize or discount tier',
        'Submit WhatsApp number to receive voucher code',
      ],
    },
    {
      id: 'education-course-finder',
      title: 'Career Pathway & Degree Eligibility Checker',
      industry: 'Education',
      type: 'Quiz Funnel',
      questionsCount: 4,
      avgCompletion: '79%',
      description: 'Triages academic background, career objectives, and study format preference.',
      previewSteps: [
        'Highest qualification achieved',
        'Desired career specialization',
        'Full-time vs executive hybrid study format',
        'Tuition financing preference',
      ],
    },
    {
      id: 'automotive-test-drive',
      title: 'Vehicle Matcher & EMI Calculator',
      industry: 'Automotive',
      type: 'Interactive Calculator',
      questionsCount: 4,
      avgCompletion: '84%',
      description: 'Pairs buyers with vehicle categories, computes monthly installments, and schedules test drives.',
      previewSteps: [
        'Vehicle style (Electric, SUV, Sedan)',
        'Monthly budget / down payment tier',
        'Trade-in vehicle valuation inquiry',
        'Dealership showroom selection',
      ],
    },
  ];

  const filtered = filter === 'all' 
    ? templates 
    : templates.filter(t => t.industry.toLowerCase().includes(filter.toLowerCase()) || t.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="templates" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Proven Funnel Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Ready-to-Deploy Interactive Templates
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Launch in under 15 minutes. Tested and optimized for high completion rates and structured lead qualification.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Templates' },
            { id: 'Healthcare', label: 'Healthcare' },
            { id: 'Real Estate', label: 'Real Estate' },
            { id: 'SaaS', label: 'SaaS & ERP' },
            { id: 'Education', label: 'Education' },
            { id: 'Automotive', label: 'Automotive' },
            { id: 'E-commerce', label: 'Promotions' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === item.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-indigo-400">{item.industry}</span>
                  <span className="text-slate-400 font-mono-numbers">{item.questionsCount} Steps · {item.avgCompletion}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Flow Preview:
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {item.previewSteps.slice(0, 3).map((st, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="truncate">{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewModal(item)}
                  className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => onSelectTemplate(item)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 cursor-pointer"
                >
                  <span>Use Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Template Preview Modal */}
      {previewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setPreviewModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              Template Blueprint
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {previewModal.title}
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              {previewModal.description}
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Interactive Steps Sequence:
              </div>
              {previewModal.previewSteps.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-700 text-indigo-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setPreviewModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const t = previewModal;
                  setPreviewModal(null);
                  onSelectTemplate(t);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-1.5"
              >
                <span>Deploy This Funnel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
