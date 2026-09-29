import React, { useState } from 'react';
import { FunnelConfig, calculateNormalizedScore, getLeadBand } from './types';
import { ArrowRight, ArrowLeft, RotateCcw, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface FunnelEngineProps {
  config: FunnelConfig;
  onCompleteCta?: () => void;
  showScoreCard?: boolean;
}

export const FunnelEngine: React.FC<FunnelEngineProps> = ({
  config,
  onCompleteCta,
  showScoreCard = true,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const steps = config.steps;
  const isFinished = currentStepIndex >= steps.length;
  const currentStep = steps[currentStepIndex];

  const score = calculateNormalizedScore(config, answers);
  const band = getLeadBand(score, config.bands);

  const handleSelectOption = (optId: string) => {
    const newAnswers = { ...answers, [currentStep.id]: optId };
    setAnswers(newAnswers);
    if (currentStepIndex < steps.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setAnswers({});
  };

  const result = isFinished ? config.result(answers, score, band) : null;

  return (
    <div className="w-full">
      {/* Funnel Box */}
      <div className="bg-white border border-[#E4E7F0] rounded-xl p-5 sm:p-6 shadow-sm relative">
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E4E7F0]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B3DF5]" />
            <span className="text-xs font-semibold text-[#0B1B3A] tracking-tight">
              {config.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium bg-[#F6F7FB] text-[#45516B] px-2 py-0.5 rounded border border-[#E4E7F0]">
              Sample data
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-[#45516B] hover:text-[#5B3DF5] flex items-center gap-1 transition-colors ml-1 p-1"
              title="Reset demo"
              aria-label="Reset demo"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {!isFinished && (
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs text-[#45516B] mb-1.5 font-medium">
              <span>Step {currentStepIndex + 1} of {steps.length}</span>
              <span className="font-tabular font-semibold text-[#5B3DF5]">
                {Math.round(((currentStepIndex + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#F6F7FB] rounded-full overflow-hidden border border-[#E4E7F0]">
              <div
                className="h-full bg-[#5B3DF5] transition-all duration-300"
                style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
              />
            </div>
            {/* Screen reader live region */}
            <div className="sr-only" aria-live="polite">
              Step {currentStepIndex + 1} of {steps.length}: {currentStep.question}
            </div>
          </div>
        )}

        {/* Active Step Question */}
        {!isFinished && currentStep && (
          <div className="space-y-4 min-h-[220px]">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0B1B3A]">
                {currentStep.question}
              </h4>
              {currentStep.helper && (
                <p className="text-xs text-[#45516B] mt-0.5">{currentStep.helper}</p>
              )}
            </div>

            {/* Options list */}
            {currentStep.type === 'single' && currentStep.options && (
              <div 
                role="radiogroup" 
                aria-label={currentStep.question}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {currentStep.options.map((opt) => {
                  const isSelected = answers[currentStep.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'border-[#5B3DF5] bg-[#5B3DF5]/5 text-[#0B1B3A] shadow-sm'
                          : 'border-[#E4E7F0] bg-white text-[#45516B] hover:border-[#CBD5E1] hover:bg-[#F6F7FB]'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-[#0B1B3A]">{opt.label}</div>
                        {opt.hint && <div className="text-[11px] text-[#45516B] mt-0.5">{opt.hint}</div>}
                      </div>

                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected
                            ? 'border-[#5B3DF5] bg-[#5B3DF5]'
                            : 'border-[#CBD5E1] group-hover:border-[#5B3DF5]'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Back Button */}
            <div className="pt-2 flex items-center justify-between">
              {currentStepIndex > 0 ? (
                <button
                  onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                  className="text-xs text-[#45516B] hover:text-[#0B1B3A] flex items-center gap-1 font-medium transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              ) : <div />}

              <span className="text-[11px] text-[#45516B]">Click to advance</span>
            </div>
          </div>
        )}

        {/* Finished Result View */}
        {isFinished && result && (
          <div className="space-y-4 py-2">
            <div className="p-4 rounded-xl bg-[#F6F7FB] border border-[#E4E7F0] space-y-2">
              <span className="text-[11px] font-semibold text-[#5B3DF5] uppercase tracking-wider">
                Qualified Outcome
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#0B1B3A]">
                {result.headline}
              </h4>
              <p className="text-xs sm:text-sm text-[#45516B] leading-relaxed">
                {result.body}
              </p>
            </div>

            {config.disclaimer && (
              <p className="text-[11px] text-[#45516B] italic">
                {config.disclaimer}
              </p>
            )}

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
              <strong>Demo only:</strong> No data is stored or sent. Request a proposal to implement this campaign for your brand.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#proposal"
                onClick={onCompleteCta}
                className="btn-primary w-full sm:w-auto text-xs"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleReset}
                className="btn-secondary w-full sm:w-auto text-xs"
              >
                <span>Try Demo Again</span>
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Sample Lead Profile Card */}
        {showScoreCard && (
          <div className="mt-5 pt-4 border-t border-[#E4E7F0] bg-[#F6F7FB] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1B3A]">
                <span>Sample Lead Profile</span>
                <span className="text-[10px] font-normal text-[#45516B]">(Updates live)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded font-tabular flex items-center gap-1 ${
                  band.id === 'hot'
                    ? 'bg-rose-50 text-[#E5484D] border border-rose-200'
                    : band.id === 'warm'
                    ? 'bg-amber-50 text-[#F5A524] border border-amber-200'
                    : 'bg-blue-50 text-[#3B82F6] border border-blue-200'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{band.label}</span>
                </span>
                <span className="text-[10px] text-[#45516B] bg-white px-1.5 py-0.5 rounded border border-[#E4E7F0]">
                  Sample data
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-white border border-[#E4E7F0] rounded-lg p-2.5">
                <div className="text-[10px] text-[#45516B] uppercase font-semibold">Rule-Based Score</div>
                <div className="text-lg font-bold text-[#0B1B3A] font-tabular mt-0.5">
                  {score} <span className="text-xs text-[#45516B] font-normal">/ 100</span>
                </div>
              </div>

              <div className="bg-white border border-[#E4E7F0] rounded-lg p-2.5">
                <div className="text-[10px] text-[#45516B] uppercase font-semibold">Suggested Action</div>
                <div className="text-xs font-medium text-[#0B1B3A] mt-1 line-clamp-2">
                  {band.action}
                </div>
              </div>

              <div className="bg-white border border-[#E4E7F0] rounded-lg p-2.5 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-[#45516B] uppercase font-semibold">Follow-Up Route</div>
                <div className="text-xs font-semibold text-[#5B3DF5] mt-1">
                  WhatsApp + CRM Trigger
                </div>
              </div>
            </div>

            {/* Expandable Explanation */}
            <div className="mt-3 pt-2">
              <button
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-[11px] text-[#5B3DF5] hover:text-[#4527D6] font-medium flex items-center gap-1 focus:outline-none"
              >
                <span>How this sample score is calculated</span>
                {showExplanation ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {showExplanation && (
                <div className="mt-2 p-3 bg-white border border-[#E4E7F0] rounded-lg text-[11px] text-[#45516B] leading-relaxed">
                  Scores are calculated from transparent option weights agreed with your sales team. Higher urgency and budget add positive points. Normalized 0–100: Hot ≥ 75, Warm 45–74, Cold &lt; 45.
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
