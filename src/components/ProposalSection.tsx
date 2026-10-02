import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Clock,
  Check,
} from 'lucide-react';
import { submitProposal } from '../lib/submitProposal';

const proposalSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email address'),
  phone: z.string().min(8, 'Please enter a valid phone or WhatsApp number'),
  companyName: z.string().min(2, 'Please enter your company or practice name'),
  website: z.string().optional(),
  industry: z.string().min(1, 'Please select your industry'),
  goals: z.array(z.string()).min(1, 'Please select at least one commercial goal'),
  budgetRange: z.string().optional(),
  wantsCall: z.boolean(),
  notes: z.string().optional(),
  consentContact: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted about this request',
  }),
  consentWhatsapp: z.boolean(),
  honeypot: z.string().optional(),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

interface ProposalSectionProps {
  preselectedGoal?: string;
  onSubmittedSuccess?: () => void;
  isEmbedded?: boolean;
}

export const ProposalSection: React.FC<ProposalSectionProps> = ({
  preselectedGoal,
  onSubmittedSuccess,
  isEmbedded = false,
}) => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      website: '',
      goals: preselectedGoal ? [preselectedGoal] : ['Qualify leads'],
      wantsCall: false,
      consentContact: false,
      consentWhatsapp: false,
      industry: 'Real Estate',
      notes: '',
      budgetRange: 'Under ₹50k',
      honeypot: '',
    },
  });

  useEffect(() => {
    if (preselectedGoal) {
      setValue('goals', [preselectedGoal]);
    }
  }, [preselectedGoal, setValue]);

  const selectedGoals = watch('goals') || [];

  const handleGoalToggle = (goal: string) => {
    const current = [...selectedGoals];
    const index = current.indexOf(goal);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(goal);
    }
    setValue('goals', current, { shouldValidate: true });
  };

  const handleNextStep = async () => {
    if (formStep === 1) {
      const valid = await trigger(['name', 'email', 'phone']);
      if (valid) setFormStep(2);
    } else if (formStep === 2) {
      const valid = await trigger(['companyName', 'industry']);
      if (valid) setFormStep(3);
    }
  };

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    try {
      await submitProposal(data);
      setSubmitStatus('success');
      onSubmittedSuccess?.();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={isEmbedded ? undefined : 'proposal'}
      className={`border-[#E4E7F0] bg-white scroll-mt-14 ${
        isEmbedded ? 'py-7 sm:py-8' : 'section border-b'
      }`}
    >
      <div className="container">
        {/* Section Header matching Version 2 visual benchmark */}
        <header className={`section-heading text-center mx-auto ${isEmbedded ? 'mb-7 sm:mb-8' : 'mb-12 sm:mb-14'}`}>
          <span className="eyebrow block mb-2">Start your campaign</span>
          <h2 className={`${isEmbedded ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl'} font-extrabold text-[#0B1B3A] tracking-tight mb-3`}>
            Your Next Lead Should Tell You More Than Their Phone Number.
          </h2>
          <p className={`${isEmbedded ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} text-[#45516B] max-w-2xl mx-auto`}>
            Tell us about your goals and we'll propose an interactive campaign that captures intent,
            qualifies leads, and follows up automatically.
          </p>
        </header>

        {/* Two-Column Layout */}
        <div className={`grid grid-cols-1 ${isEmbedded ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-10 lg:gap-12 items-start`}>
          {/* Left Column: What Happens Next & Direct Contact */}
          <div className={`${isEmbedded ? 'hidden' : 'lg:col-span-5'} space-y-6`}>
            <div className="v2-panel-soft p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                <Clock size={18} className="text-[#5B3DF5]" />
                <span>What Happens Next</span>
              </h3>

              <ol className="space-y-5 text-xs sm:text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-xl bg-[#5B3DF5] text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block font-heading font-bold text-sm">
                      We review your request.
                    </strong>
                    <span className="text-[#45516B] leading-relaxed text-xs sm:text-sm">
                      We assess your target audience, commercial offer, and existing lead routing
                      process.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-xl bg-[#5B3DF5] text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block font-heading font-bold text-sm">
                      We reply with a proposal outline.
                    </strong>
                    <span className="text-[#45516B] leading-relaxed text-xs sm:text-sm">
                      You receive a custom funnel structure, question sequencing, score thresholds,
                      and transparent pricing.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-xl bg-[#5B3DF5] text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block font-heading font-bold text-sm">
                      We agree scope and build.
                    </strong>
                    <span className="text-[#45516B] leading-relaxed text-xs sm:text-sm">
                      Our team handles copywriting, custom design, mobile testing, CRM integration,
                      and launch.
                    </span>
                  </div>
                </li>
              </ol>
            </div>

          </div>

          {/* Right Column: Conversational 3-Step Proposal Form */}
          <div className={isEmbedded ? '' : 'lg:col-span-7'}>
            <div className="v2-panel p-5 sm:p-8 lg:p-9 relative overflow-hidden">
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[#5B3DF5]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Progress Indicator */}
              <div className="mb-7 relative z-10">
                <div className="flex items-center justify-between text-xs font-bold text-[#0B1B3A] mb-2 font-heading">
                  <span>
                    Step {formStep} of 3:{' '}
                    {formStep === 1
                      ? 'About You'
                      : formStep === 2
                      ? 'Your Business'
                      : 'Your Goals & Budget'}
                  </span>
                  <span className="font-mono text-[#5B3DF5] font-extrabold">
                    {Math.round((formStep / 3) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#EEF2F8] rounded-full overflow-hidden border border-[#E4E7F0]">
                  <div
                    className="h-full bg-gradient-to-r from-[#5B3DF5] to-[#7B5DF7] transition-all duration-300 rounded-full"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="py-10 text-center space-y-4 relative z-10 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#12A150] border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1B3A] font-heading tracking-tight">
                    Proposal Request Received!
                  </h3>
                  <div className="p-5 bg-[#F8F9FD] border border-[#E4E7F0] rounded-xl text-xs sm:text-sm text-[#45516B] max-w-md mx-auto leading-relaxed space-y-2">
                    <p className="font-bold text-[#0B1B3A]">
                      Thank you! Our strategy team will review your goals and reply within 1 business day.
                    </p>
                    <p className="text-xs text-[#6B7A99]">
                      For urgent questions, feel free to contact us directly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormStep(1);
                    }}
                    className="btn-secondary text-xs py-2.5 px-5 font-bold mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 relative z-10"
                  noValidate
                >
                  {/* Honeypot anti-spam field */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Step 1: About You */}
                  {formStep === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Rahul Sharma"
                          {...register('name')}
                          className={`v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6] ${
                            errors.name
                              ? 'border-[#E5484D] ring-2 ring-[#E5484D]/10'
                              : ''
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#E5484D] mt-1 font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.name.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="rahul@company.com"
                          {...register('email')}
                          className={`v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6] ${
                            errors.email
                              ? 'border-[#E5484D] ring-2 ring-[#E5484D]/10'
                              : ''
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#E5484D] mt-1 font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.email.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          {...register('phone')}
                          className={`v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6] ${
                            errors.phone
                              ? 'border-[#E5484D] ring-2 ring-[#E5484D]/10'
                              : ''
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#E5484D] mt-1 font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.phone.message}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Your Business */}
                  {formStep === 2 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Company / Practice / Brand Name *
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          placeholder="e.g. Apex Living or Dr. Health Clinic"
                          {...register('companyName')}
                          className={`v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6] ${
                            errors.companyName
                              ? 'border-[#E5484D] ring-2 ring-[#E5484D]/10'
                              : ''
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-[#E5484D] mt-1 font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.companyName.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="website"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Website / Current Landing Page (Optional)
                        </label>
                        <input
                          id="website"
                          type="url"
                          placeholder="https://example.com"
                          {...register('website')}
                          className="v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Industry Vertical *
                        </label>
                        <select
                          id="industry"
                          {...register('industry')}
                          className="v2-field w-full p-3 text-xs sm:text-sm font-semibold"
                        >
                          <option value="Healthcare">Healthcare & Clinics</option>
                          <option value="Real Estate">Real Estate & Builders</option>
                          <option value="SaaS & ERP">SaaS & ERP Software</option>
                          <option value="Education">Education & EdTech</option>
                          <option value="Automotive">Automotive & Mobility</option>
                          <option value="E-commerce">E-commerce & Brands</option>
                          <option value="Agency">Marketing Agency / Consultant</option>
                          <option value="Other">Other High-Ticket B2B / B2C</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Your Goal & Consent */}
                  {formStep === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1B3A] mb-2 font-heading">
                          What do you want to achieve? (Select all that apply) *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {[
                            'Generate leads',
                            'Qualify leads',
                            'Follow-up automation',
                            'Promotion or contest',
                            'Product recommendation',
                            'Not sure yet',
                          ].map((g) => {
                            const isChecked = selectedGoals.includes(g);
                            return (
                              <button
                                key={g}
                                type="button"
                                onClick={() => handleGoalToggle(g)}
                                className={`p-3 rounded-xl border text-left font-semibold transition-all flex items-center justify-between focus:outline-none ${
                                  isChecked
                                    ? 'border-[#5B3DF5] bg-[#F1EEFF] text-[#0B1B3A] shadow-sm ring-1 ring-[#5B3DF5]'
                                    : 'border-[#E4E7F0] bg-[#F8F9FD] hover:bg-white hover:border-[#CBD5E1] text-[#45516B]'
                                }`}
                              >
                                <span>{g}</span>
                                {isChecked && <Check size={14} className="text-[#5B3DF5] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                        {errors.goals && (
                          <p className="text-[11px] text-[#E5484D] mt-1 font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.goals.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Monthly Advertising Budget (Optional)
                        </label>
                        <select
                          id="budgetRange"
                          {...register('budgetRange')}
                          className="v2-field w-full p-3 text-xs sm:text-sm font-semibold"
                        >
                          <option value="Under ₹50k">Under ₹50,000 / month</option>
                          <option value="₹50k - ₹2L">₹50,000 – ₹2,00,000 / month</option>
                          <option value="₹2L - ₹10L">₹2,00,000 – ₹10,00,000 / month</option>
                          <option value="₹10L+">₹10,00,000+ / month</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-xs font-bold text-[#0B1B3A] mb-1.5 font-heading"
                        >
                          Specific Requirements or Campaign Notes (Optional)
                        </label>
                        <textarea
                          id="notes"
                          rows={2}
                          placeholder="Tell us about your offer or specific qualification rules..."
                          {...register('notes')}
                          className="v2-field w-full p-3 text-xs sm:text-sm placeholder:text-[#8A94A6]"
                        />
                      </div>

                      {/* Request strategy call checkbox */}
                      <div className="flex items-start gap-2.5 pt-1">
                        <input
                          id="wantsCall"
                          type="checkbox"
                          {...register('wantsCall')}
                          className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5] h-4 w-4 cursor-pointer"
                        />
                        <label
                          htmlFor="wantsCall"
                          className="text-xs text-[#0B1B3A] font-semibold cursor-pointer"
                        >
                          I would like to book a 20-minute strategy call to discuss this proposal.
                        </label>
                      </div>

                      {/* Consent Checkboxes */}
                      <div className="pt-3 border-t border-[#E4E7F0] space-y-2">
                        <div className="flex items-start gap-2.5">
                          <input
                            id="consentContact"
                            type="checkbox"
                            {...register('consentContact')}
                            className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5] h-4 w-4 cursor-pointer"
                          />
                          <label
                            htmlFor="consentContact"
                            className="text-[11px] text-[#45516B] cursor-pointer leading-tight"
                          >
                            I agree to be contacted about this request in accordance with the{' '}
                            <a href="/privacy-policy" className="text-[#5B3DF5] underline font-semibold">
                              Privacy Policy
                            </a>
                            . *
                          </label>
                        </div>
                        {errors.consentContact && (
                          <p className="text-[11px] text-[#E5484D] font-medium flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{errors.consentContact.message}</span>
                          </p>
                        )}

                        <div className="flex items-start gap-2.5">
                          <input
                            id="consentWhatsapp"
                            type="checkbox"
                            {...register('consentWhatsapp')}
                            className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5] h-4 w-4 cursor-pointer"
                          />
                          <label
                            htmlFor="consentWhatsapp"
                            className="text-[11px] text-[#45516B] cursor-pointer"
                          >
                            I'd also like instant WhatsApp updates regarding this proposal outline.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-4 border-t border-[#E4E7F0] flex items-center justify-between gap-3">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setFormStep(formStep - 1)}
                        className="text-xs text-[#45516B] hover:text-[#0B1B3A] font-bold flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-[#F8F9FD] transition-colors"
                      >
                        <ArrowLeft size={14} />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn-primary text-xs sm:text-sm py-2.5 px-6 font-bold shadow-md hover:shadow-lg inline-flex items-center gap-2"
                      >
                        <span>Next Step</span>
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-xs sm:text-sm py-2.5 px-7 font-bold shadow-md hover:shadow-lg inline-flex items-center gap-2"
                      >
                        <span>{isSubmitting ? 'Sending Request...' : 'Request a Proposal'}</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
