import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Send, ShieldCheck, Zap } from 'lucide-react';
import { submitProposal } from '../lib/submitProposal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'demo' | 'funnel';
  initialIndustry?: string;
}

export const InteractiveQualificationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  mode,
  initialIndustry,
}) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    goal: 'Increase Inbound Lead Conversion',
    industry: initialIndustry || 'Real Estate & Property',
    monthlyTraffic: '10,000 – 50,000 visitors',
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitProposal({
        source: 'qualification-modal',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.name,
        industry: formData.industry,
        goals: [formData.goal],
        monthlyTraffic: formData.monthlyTraffic,
        notes: `Qualification modal mode: ${mode}`,
        wantsCall: mode === 'demo',
        consentContact: true,
        consentWhatsapp: true,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to submit your request. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5 fill-indigo-400" />
                <span>
                  {mode === 'demo' ? 'Interactive Demo Walkthrough' : 'Launch Your First Funnel'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {step === 0 && 'What is your primary commercial goal?'}
                {step === 1 && 'Which industry vertical are you in?'}
                {step === 2 && 'What is your average monthly visitor traffic?'}
                {step === 3 && 'Where should we send your funnel strategy?'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Step {step + 1} of 4 · Experience how Lead Games.com qualifies leads firsthand.
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-800 h-1.5 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-indigo-500 h-full transition-all duration-300"
                style={{ width: `${((step + 1) / 4) * 100}%` }}
              />
            </div>

            {/* Step 0: Goal */}
            {step === 0 && (
              <div className="space-y-2.5">
                {[
                  'Increase Inbound Lead Conversion (+200% uplift)',
                  'Qualify Existing Leads Before Sales Calls',
                  'Automate WhatsApp Follow-up & CRM Routing',
                  'Replace High-Bounce Static Forms',
                ].map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, goal: g }));
                      handleNext();
                    }}
                    className={`w-full p-3.5 text-left rounded-xl border text-xs font-medium transition-all ${
                      formData.goal === g
                        ? 'border-indigo-500 bg-indigo-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            )}

            {/* Step 1: Industry */}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Healthcare & Clinics',
                  'Real Estate & Property',
                  'SaaS & B2B Software',
                  'Education & EdTech',
                  'Automotive & Dealerships',
                  'E-commerce & Retail',
                  'Marketing Agency / Growth',
                  'Other High-Ticket Service',
                ].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, industry: ind }));
                      handleNext();
                    }}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                      formData.industry === ind
                        ? 'border-indigo-500 bg-indigo-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Traffic */}
            {step === 2 && (
              <div className="space-y-2.5">
                {[
                  'Under 5,000 visitors / mo',
                  '5,000 – 25,000 visitors / mo',
                  '25,000 – 100,000 visitors / mo',
                  '100,000+ visitors / mo (Enterprise)',
                ].map((tr) => (
                  <button
                    key={tr}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, monthlyTraffic: tr }));
                      handleNext();
                    }}
                    className={`w-full p-3.5 text-left rounded-xl border text-xs font-medium transition-all ${
                      formData.monthlyTraffic === tr
                        ? 'border-indigo-500 bg-indigo-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {tr}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Lee"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                  >
                    <span>
                      {isSubmitting
                        ? 'Sending...'
                        : mode === 'demo'
                        ? 'Schedule VIP Walkthrough'
                        : 'Generate My Interactive Funnel'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {submitError && (
                    <p className="text-xs text-rose-300 text-center">{submitError}</p>
                  )}
                </div>
              </form>
            )}

            {/* Back Button */}
            {step > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-800">
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to Previous Step
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Funnel Parameters Captured!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              We’ve calculated an initial AI Lead Score of <strong>93 / 100 (Hot Intent)</strong> for {formData.name || 'your company'}. Our senior conversion architect is preparing your tailored {formData.industry} funnel architecture and dispatching it via WhatsApp & email.
            </p>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 inline-block font-mono">
              Lead ID: TZP-{Math.floor(100000 + Math.random() * 900000)} · Status: Assigned
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
