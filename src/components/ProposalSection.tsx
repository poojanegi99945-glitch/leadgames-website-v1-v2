import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Mail, Phone, AlertCircle } from 'lucide-react';
import { submitProposal } from '../lib/submitProposal';
import { siteConfig } from '../content/site';

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
}

export const ProposalSection: React.FC<ProposalSectionProps> = ({
  preselectedGoal,
  onSubmittedSuccess,
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

  const isDev = import.meta.env.DEV;

  return (
    <section id="proposal" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Development-only backend alert banner */}
        {isDev && (
          <div className="mb-8 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
            <span className="font-mono">
              [DEV NOTICE]: Form is not connected to a backend yet. Submissions log to client console stub.
            </span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Start Your Campaign
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Your Next Lead Should Tell You More Than Their Phone Number.
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Tell us about your goals and we'll propose an interactive campaign that captures intent, qualifies leads and follows up automatically.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: What Happens Next & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-soft p-6 sm:p-7 bg-[#F6F7FB] space-y-5">
              <h3 className="text-base font-bold text-[#0B1B3A]">
                What Happens Next
              </h3>

              <ol className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block">We review your request.</strong>
                    <span className="text-[#45516B]">We assess your audience, offer, and existing follow-up process.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block">We reply with a proposal outline.</strong>
                    <span className="text-[#45516B]">You receive a custom funnel structure, question sequencing, and transparent pricing.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-[#0B1B3A] block">We agree scope and build.</strong>
                    <span className="text-[#45516B]">Our team handles copy, interactive design, custom development, and CRM connections.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Direct Contact Placeholders */}
            <div className="card-soft p-5 bg-white space-y-2.5 text-xs">
              <span className="font-bold text-[#0B1B3A] block">Prefer direct outreach?</span>
              <div className="flex items-center gap-2 text-[#45516B]">
                <Mail className="w-4 h-4 text-[#5B3DF5]" />
                <span>Email: <strong className="text-[#0B1B3A] font-mono">{siteConfig.contact.email}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[#45516B]">
                <Phone className="w-4 h-4 text-[#12A150]" />
                <span>WhatsApp: <strong className="text-[#0B1B3A] font-mono">{siteConfig.contact.whatsapp}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Conversational 3-Step Proposal Form */}
          <div className="lg:col-span-7">
            <div className="card-soft p-6 sm:p-8 bg-white border border-[#E4E7F0] shadow-sm">
              
              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-[#45516B] mb-2">
                  <span>Step {formStep} of 3: {formStep === 1 ? 'About You' : formStep === 2 ? 'Your Business' : 'Your Goals & Budget'}</span>
                  <span className="font-tabular text-[#5B3DF5]">{Math.round((formStep / 3) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#F6F7FB] rounded-full overflow-hidden border border-[#E4E7F0]">
                  <div
                    className="h-full bg-[#5B3DF5] transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#12A150] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3A]">
                    Proposal Request Logged
                  </h3>
                  <div className="p-4 bg-[#F6F7FB] border border-[#E4E7F0] rounded-xl text-xs text-[#45516B] max-w-md mx-auto leading-relaxed">
                    <p className="font-semibold text-[#0B1B3A] mb-1">
                      Thanks. This form isn't connected yet, so please email us at <span className="font-mono text-[#5B3DF5]">{siteConfig.contact.email}</span>.
                    </p>
                    <p>
                      We have preserved your submitted parameters in local state for review.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  {/* Honeypot anti-spam field */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Step 1: About You */}
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Jordan Lee"
                          {...register('name')}
                          className={`w-full p-3 rounded-lg border text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none ${
                            errors.name ? 'border-[#D92D20]' : 'border-[#E4E7F0]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#D92D20] mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="jordan@company.com"
                          {...register('email')}
                          className={`w-full p-3 rounded-lg border text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none ${
                            errors.email ? 'border-[#D92D20]' : 'border-[#E4E7F0]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#D92D20] mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          {...register('phone')}
                          className={`w-full p-3 rounded-lg border text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none ${
                            errors.phone ? 'border-[#D92D20]' : 'border-[#E4E7F0]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#D92D20] mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Your Business */}
                  {formStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="companyName" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Company / Clinic / Brand Name *
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          placeholder="e.g. Apex Health or Horizon Realty"
                          {...register('companyName')}
                          className={`w-full p-3 rounded-lg border text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none ${
                            errors.companyName ? 'border-[#D92D20]' : 'border-[#E4E7F0]'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-[#D92D20] mt-1">{errors.companyName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Website / Landing Page (Optional)
                        </label>
                        <input
                          id="website"
                          type="url"
                          placeholder="https://example.com"
                          {...register('website')}
                          className="w-full p-3 rounded-lg border border-[#E4E7F0] text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Industry Vertical *
                        </label>
                        <select
                          id="industry"
                          {...register('industry')}
                          className="w-full p-3 rounded-lg border border-[#E4E7F0] text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none"
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
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1B3A] mb-2">
                          What do you want to achieve? (Select all that apply) *
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
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
                                className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                                  isChecked
                                    ? 'border-[#5B3DF5] bg-[#5B3DF5]/5 text-[#0B1B3A]'
                                    : 'border-[#E4E7F0] bg-[#F6F7FB] text-[#45516B]'
                                }`}
                              >
                                {g}
                              </button>
                            );
                          })}
                        </div>
                        {errors.goals && (
                          <p className="text-[11px] text-[#D92D20] mt-1">{errors.goals.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="budgetRange" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Monthly Advertising Budget (Optional)
                        </label>
                        <select
                          id="budgetRange"
                          {...register('budgetRange')}
                          className="w-full p-3 rounded-lg border border-[#E4E7F0] text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none"
                        >
                          <option value="Under ₹50k">Under ₹50,000 / month</option>
                          <option value="₹50k - ₹2L">₹50,000 – ₹2,00,000 / month</option>
                          <option value="₹2L - ₹10L">₹2,00,000 – ₹10,00,000 / month</option>
                          <option value="₹10L+">₹10,00,000+ / month</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-xs font-bold text-[#0B1B3A] mb-1">
                          Specific Requirements or Notes (Optional)
                        </label>
                        <textarea
                          id="notes"
                          rows={2}
                          placeholder="Tell us about your offer or specific qualification rules..."
                          {...register('notes')}
                          className="w-full p-3 rounded-lg border border-[#E4E7F0] text-xs text-[#0B1B3A] bg-[#F6F7FB] focus:bg-white focus:outline-none"
                        />
                      </div>

                      {/* Request a strategy call checkbox */}
                      <div className="flex items-start gap-2 pt-1">
                        <input
                          id="wantsCall"
                          type="checkbox"
                          {...register('wantsCall')}
                          className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5]"
                        />
                        <label htmlFor="wantsCall" className="text-xs text-[#0B1B3A] font-medium">
                          I would like to book a 20-minute strategy call to discuss this proposal.
                        </label>
                      </div>

                      {/* Consent Checkboxes */}
                      <div className="pt-2 border-t border-[#E4E7F0] space-y-2">
                        <div className="flex items-start gap-2">
                          <input
                            id="consentContact"
                            type="checkbox"
                            {...register('consentContact')}
                            className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5]"
                          />
                          <label htmlFor="consentContact" className="text-[11px] text-[#45516B]">
                            I agree to be contacted about this request in accordance with the{' '}
                            <a href="/privacy-policy" className="text-[#5B3DF5] underline">Privacy Policy</a>. *
                          </label>
                        </div>
                        {errors.consentContact && (
                          <p className="text-[11px] text-[#D92D20]">{errors.consentContact.message}</p>
                        )}

                        <div className="flex items-start gap-2">
                          <input
                            id="consentWhatsapp"
                            type="checkbox"
                            {...register('consentWhatsapp')}
                            className="mt-0.5 rounded border-[#CBD5E1] text-[#5B3DF5] focus:ring-[#5B3DF5]"
                          />
                          <label htmlFor="consentWhatsapp" className="text-[11px] text-[#45516B]">
                            I'd also like WhatsApp updates regarding this proposal.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-4 border-t border-[#E4E7F0] flex items-center justify-between">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setFormStep(formStep - 1)}
                        className="text-xs text-[#45516B] hover:text-[#0B1B3A] font-semibold flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Previous</span>
                      </button>
                    ) : <div />}

                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn-primary text-xs"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-xs"
                      >
                        <span>{isSubmitting ? 'Sending Request...' : 'Request a Proposal'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
