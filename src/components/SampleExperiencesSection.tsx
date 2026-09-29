import React, { useState, useRef, useEffect } from 'react';
import {
  RotateCw,
  Sparkles,
  HelpCircle,
  Calculator,
  Grid,
  Award,
  ArrowRight,
  Check,
  CheckCircle2,
  RefreshCw,
  Info,
} from 'lucide-react';

export const SampleExperiencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'spin' | 'scratch' | 'quiz' | 'calculator' | 'memory' | 'assessment'
  >('spin');

  // 1. Spin & Win state
  const [spinning, setSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wheelPrize, setWheelPrize] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setWheelPrize(null);
    const extraSpins = 4 + Math.floor(Math.random() * 3);
    const degrees = [30, 90, 150, 210, 270, 330][Math.floor(Math.random() * 6)];
    const targetRot = wheelRotation + extraSpins * 360 + degrees;
    setWheelRotation(targetRot);

    setTimeout(() => {
      setSpinning(false);
      const samplePrizes = [
        'Free Strategic Funnel Audit',
        '₹5,000 Implementation Credit',
        'Priority VIP Strategy Session',
        '20% First Campaign Setup Discount',
      ];
      setWheelPrize(samplePrizes[Math.floor(Math.random() * samplePrizes.length)]);
    }, 2400);
  };

  // 2. Scratch & Win Canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scratchedRevealed, setScratchedRevealed] = useState(false);

  useEffect(() => {
    if (activeTab === 'scratch' && canvasRef.current && !scratchedRevealed) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#CBD5E1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Pattern overlay for metallic scratch card effect
        ctx.strokeStyle = '#94A3B8';
        ctx.lineWidth = 1;
        for (let i = -canvas.height; i < canvas.width; i += 16) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + canvas.height, canvas.height);
          ctx.stroke();
        }

        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillStyle = '#1E293B';
        ctx.textAlign = 'center';
        ctx.fillText('✨ Scratch with cursor or finger ✨', canvas.width / 2, canvas.height / 2 - 4);
        ctx.font = '500 11px Inter, sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText('(or click Reveal below)', canvas.width / 2, canvas.height / 2 + 14);
      }
    }
  }, [activeTab, scratchedRevealed]);

  const handleCanvasScratch = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (scratchedRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  // 3. Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswer1, setQuizAnswer1] = useState<string | null>(null);
  const [quizAnswer2, setQuizAnswer2] = useState<string | null>(null);

  // 4. Calculator state
  const [trafficVal, setTrafficVal] = useState(10000);
  const [dealVal, setDealVal] = useState(25000);

  // 5. Memory match state
  const [cards, setCards] = useState([
    { id: 1, val: 'Quiz', flipped: false, matched: false },
    { id: 2, val: 'Calc', flipped: false, matched: false },
    { id: 3, val: 'WhatsApp', flipped: false, matched: false },
    { id: 4, val: 'CRM', flipped: false, matched: false },
    { id: 5, val: 'Quiz', flipped: false, matched: false },
    { id: 6, val: 'Calc', flipped: false, matched: false },
    { id: 7, val: 'WhatsApp', flipped: false, matched: false },
    { id: 8, val: 'CRM', flipped: false, matched: false },
  ]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (cards[index].flipped || cards[index].matched || selectedCards.length === 2) return;
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newSelected = [...selectedCards, index];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (cards[first].val === cards[second].val) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[first].matched = true;
          matchedCards[second].matched = true;
          setCards(matchedCards);
          setSelectedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[first].flipped = false;
          resetCards[second].flipped = false;
          setCards(resetCards);
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const resetMemoryGame = () => {
    setCards([
      { id: 1, val: 'Quiz', flipped: false, matched: false },
      { id: 2, val: 'Calc', flipped: false, matched: false },
      { id: 3, val: 'WhatsApp', flipped: false, matched: false },
      { id: 4, val: 'CRM', flipped: false, matched: false },
      { id: 5, val: 'Quiz', flipped: false, matched: false },
      { id: 6, val: 'Calc', flipped: false, matched: false },
      { id: 7, val: 'WhatsApp', flipped: false, matched: false },
      { id: 8, val: 'CRM', flipped: false, matched: false },
    ]);
    setSelectedCards([]);
  };

  // 6. Assessment state
  const [assessQ1, setAssessQ1] = useState('High');
  const [assessQ2, setAssessQ2] = useState('Yes');
  const [assessQ3, setAssessQ3] = useState('Immediate');

  const assessScore =
    (assessQ1 === 'High' ? 40 : 20) +
    (assessQ2 === 'Yes' ? 30 : 15) +
    (assessQ3 === 'Immediate' ? 30 : 10);

  const tabs = [
    { id: 'spin', label: '1. Spin & Win', icon: RotateCw },
    { id: 'scratch', label: '2. Scratch & Win', icon: Sparkles },
    { id: 'quiz', label: '3. Quiz Funnel', icon: HelpCircle },
    { id: 'calculator', label: '4. ROI Calculator', icon: Calculator },
    { id: 'memory', label: '5. Memory Match', icon: Grid },
    { id: 'assessment', label: '6. Assessment Gauge', icon: Award },
  ];

  return (
    <section id="samples" className="section soft border-b border-[#E4E7F0] scroll-mt-14">
      <div className="container">
        {/* Section Header matching Version 2 design tokens */}
        <header className="section-heading text-center mx-auto mb-10 sm:mb-12">
          <span className="eyebrow block mb-2">Live samples</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight mb-3">
            Try Them Yourself
          </h2>
          <p className="text-base sm:text-lg text-[#45516B] max-w-2xl mx-auto">
            Live interactive samples of the high-conversion experiences we build. Everything here is
            fully interactive demo content.
          </p>
        </header>

        {/* Format Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#EEF2F8] border border-[#E4E7F0] rounded-2xl max-w-full shadow-inner">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#5B3DF5] ${
                    isActive
                      ? 'bg-[#0B1B3A] text-white shadow-sm ring-1 ring-[#0B1B3A]'
                      : 'text-[#45516B] hover:text-[#0B1B3A] hover:bg-white/80'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[#FF7A1A]' : 'text-[#8A94A6]'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Playable Sandbox Box matching V2 card aesthetic */}
        <div className="bg-white rounded-2xl border border-[#E4E7F0] shadow-xl p-6 sm:p-10 min-h-[440px] flex items-center justify-center max-w-3xl mx-auto relative overflow-hidden">
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#5B3DF5]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* 1. Spin & Win */}
          {activeTab === 'spin' && (
            <div className="w-full max-w-md text-center space-y-5 relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <RotateCw size={14} className="text-[#5B3DF5]" />
                  <span>Playable Spin & Win Demo</span>
                </strong>
                <span className="sample-badge">Sample Demo</span>
              </div>

              {/* Wheel Container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto rounded-full border-4 border-[#0B1B3A] p-1.5 shadow-xl flex items-center justify-center bg-white">
                {/* Pointer with realistic needle styling */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[16px] border-t-[#FF7A1A] drop-shadow-md" />

                {/* Rotating Disc */}
                <div
                  className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-[2400ms] cubic-bezier(0.15, 0.9, 0.25, 1) shadow-inner"
                  style={{ transform: `rotate(${wheelRotation}deg)` }}
                >
                  <div className="absolute inset-0 bg-[conic-gradient(#5B3DF5_0deg_60deg,#3B82F6_60deg_120deg,#12A150_120deg_180deg,#FF7A1A_180deg_240deg,#8B5CF6_240deg_300deg,#EC4899_300deg_360deg)] opacity-95" />
                  <div className="absolute inset-1/4 rounded-full bg-white border-2 border-[#E4E7F0] flex flex-col items-center justify-center font-extrabold text-[11px] text-[#0B1B3A] shadow-md">
                    <span>TEZPLAY</span>
                    <span className="text-[9px] text-[#5B3DF5] font-normal">SPIN</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSpin}
                  disabled={spinning}
                  className="btn-primary text-xs sm:text-sm py-2.5 px-6 font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <RotateCw size={14} className={spinning ? 'animate-spin' : ''} />
                  <span>{spinning ? 'Spinning...' : 'Spin the Wheel'}</span>
                </button>
              </div>

              {wheelPrize && (
                <div className="p-3.5 bg-gradient-to-r from-[#5B3DF5]/10 via-[#FF7A1A]/10 to-transparent border border-[#5B3DF5]/30 rounded-xl text-xs text-[#0B1B3A] animate-fadeIn">
                  <span className="font-extrabold text-[#5B3DF5]">🎉 Demo prize unlocked:</span>{' '}
                  <strong className="text-[#0B1B3A] font-bold">{wheelPrize}</strong>
                </div>
              )}
            </div>
          )}

          {/* 2. Scratch & Win */}
          {activeTab === 'scratch' && (
            <div className="w-full max-w-sm text-center space-y-4 relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <Sparkles size={14} className="text-[#FF7A1A]" />
                  <span>Scratch & Win Demo</span>
                </strong>
                <span className="sample-badge">Sample Demo</span>
              </div>

              <div className="relative w-full h-44 rounded-xl border-2 border-dashed border-[#CBD5E1] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#F8F9FD] to-[#EEF2F8] shadow-inner">
                {/* Secret background code */}
                <div className="p-4 space-y-1.5 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#12A150] text-[10px] font-extrabold uppercase tracking-wider">
                    Demo Reward Revealed!
                  </span>
                  <div className="text-xl font-extrabold text-[#0B1B3A] font-mono tracking-wider">
                    PROPOSAL-VIP-2026
                  </div>
                  <div className="text-xs text-[#45516B]">Free Funnel Strategy Session</div>
                </div>

                {/* Canvas Overlay for pointer scratching */}
                {!scratchedRevealed && (
                  <canvas
                    ref={canvasRef}
                    width={340}
                    height={176}
                    onMouseMove={handleCanvasScratch}
                    onTouchMove={handleCanvasScratch}
                    className="absolute inset-0 w-full h-full cursor-pointer touch-none"
                    aria-label="Scratch card canvas. Use Reveal button if using assistive tech."
                  />
                )}
              </div>

              {/* Accessible Reveal Button */}
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setScratchedRevealed(true)}
                  className="btn-secondary text-xs py-2 px-4 font-semibold"
                >
                  <span>{scratchedRevealed ? 'Already Revealed' : 'Reveal Ticket'}</span>
                </button>
                {scratchedRevealed && (
                  <button
                    type="button"
                    onClick={() => setScratchedRevealed(false)}
                    className="text-xs text-[#5B3DF5] hover:underline font-semibold flex items-center gap-1"
                  >
                    <RefreshCw size={12} />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 3. Quiz Funnel */}
          {activeTab === 'quiz' && (
            <div className="w-full max-w-md space-y-4 relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <HelpCircle size={14} className="text-[#5B3DF5]" />
                  <span>2-Question Interactive Quiz</span>
                </strong>
                <span className="sample-badge">Step {quizStep + 1} of 2</span>
              </div>

              {quizStep === 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[#0B1B3A] font-heading">
                    Q1: What is your primary sales model?
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['High-Ticket B2B', 'Clinic Consultations', 'Property Deals', 'E-commerce Direct'].map(
                      (opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setQuizAnswer1(opt);
                            setQuizStep(1);
                          }}
                          className="p-3 text-left rounded-xl border border-[#E4E7F0] hover:border-[#5B3DF5] hover:bg-[#F8F9FD] bg-white font-semibold text-[#0B1B3A] transition-all flex items-center justify-between group shadow-2xs"
                        >
                          <span>{opt}</span>
                          <ArrowRight
                            size={12}
                            className="text-[#8A94A6] group-hover:text-[#5B3DF5] group-hover:translate-x-0.5 transition-all"
                          />
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {quizStep === 1 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[#0B1B3A] font-heading">
                    Q2: Current average lead response time?
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Under 5 minutes', '1 – 4 hours', 'Next day', 'No tracking'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setQuizAnswer2(opt);
                          setQuizStep(2);
                        }}
                        className="p-3 text-left rounded-xl border border-[#E4E7F0] hover:border-[#5B3DF5] hover:bg-[#F8F9FD] bg-white font-semibold text-[#0B1B3A] transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span>{opt}</span>
                        <ArrowRight
                          size={12}
                          className="text-[#8A94A6] group-hover:text-[#5B3DF5] group-hover:translate-x-0.5 transition-all"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="p-4 bg-[#F8F9FD] border border-[#E4E7F0] rounded-xl text-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-[#5B3DF5] uppercase tracking-wider text-[11px]">
                      Sample Qualification Result
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#12A150] text-[10px] font-bold">
                      Instant Analysis
                    </span>
                  </div>
                  <p className="text-[#0B1B3A] text-xs">
                    Model: <strong className="font-bold">{quizAnswer1}</strong> · Response:{' '}
                    <strong className="font-bold">{quizAnswer2}</strong>
                  </p>
                  <p className="text-[#45516B] leading-relaxed">
                    Recommendation: Deploy an instant WhatsApp qualification funnel to reduce
                    response latency to &lt; 60 seconds with automated lead scoring.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuizStep(0)}
                    className="text-xs text-[#5B3DF5] font-bold hover:underline pt-1 inline-flex items-center gap-1"
                  >
                    <RefreshCw size={12} />
                    <span>Reset Quiz Demo</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. ROI Calculator */}
          {activeTab === 'calculator' && (
            <div className="w-full max-w-md space-y-4 relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <Calculator size={14} className="text-[#5B3DF5]" />
                  <span>Interactive ROI Calculator</span>
                </strong>
                <span className="sample-badge">Illustrative Estimate</span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5 text-[#0B1B3A]">
                    <span className="font-semibold text-xs">Monthly Ad Traffic:</span>
                    <span className="font-extrabold font-mono text-sm text-[#5B3DF5]">
                      {trafficVal.toLocaleString()} visitors
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="50000"
                    step="1000"
                    value={trafficVal}
                    onChange={(e) => setTrafficVal(Number(e.target.value))}
                    className="w-full accent-[#5B3DF5] h-2 bg-[#E4E7F0] rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 text-[#0B1B3A]">
                    <span className="font-semibold text-xs">Average Deal Size:</span>
                    <span className="font-extrabold font-mono text-sm text-[#0B1B3A]">
                      ₹{dealVal.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={dealVal}
                    onChange={(e) => setDealVal(Number(e.target.value))}
                    className="w-full accent-[#5B3DF5] h-2 bg-[#E4E7F0] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#F8F9FD] to-[#EEF2F8] border border-[#E4E7F0] rounded-xl text-xs flex justify-between items-center shadow-xs">
                <div>
                  <span className="text-[#45516B] block text-[11px] font-medium">
                    Projected Qualified Leads / mo:
                  </span>
                  <span className="text-xl font-extrabold text-[#5B3DF5] font-mono">
                    ~{Math.round(trafficVal * 0.045)} leads
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[#45516B] block text-[11px] font-medium">
                    Potential Pipeline:
                  </span>
                  <span className="text-sm font-extrabold text-[#0B1B3A] font-mono">
                    ~₹{((Math.round(trafficVal * 0.045) * dealVal) / 100000).toFixed(1)}L
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 5. Memory Match */}
          {activeTab === 'memory' && (
            <div className="w-full max-w-sm space-y-4 text-center relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <Grid size={14} className="text-[#5B3DF5]" />
                  <span>Memory Match Interactive Game</span>
                </strong>
                <span className="sample-badge">Sample Demo</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {cards.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCardClick(i)}
                    className={`h-16 rounded-xl text-xs font-bold transition-all border flex items-center justify-center ${
                      c.flipped || c.matched
                        ? 'bg-[#5B3DF5] text-white border-[#5B3DF5] shadow-xs scale-95'
                        : 'bg-[#F8F9FD] text-[#45516B] border-[#E4E7F0] hover:bg-white hover:border-[#CBD5E1]'
                    }`}
                  >
                    {c.flipped || c.matched ? c.val : '?'}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-[11px] text-[#45516B]">Flip cards to match campaign tools</span>
                <button
                  type="button"
                  onClick={resetMemoryGame}
                  className="text-xs text-[#5B3DF5] font-bold hover:underline flex items-center gap-1"
                >
                  <RefreshCw size={12} />
                  <span>Restart</span>
                </button>
              </div>
            </div>
          )}

          {/* 6. Assessment Gauge */}
          {activeTab === 'assessment' && (
            <div className="w-full max-w-md space-y-4 relative z-10">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E4E7F0]">
                <strong className="font-extrabold text-[#0B1B3A] font-heading tracking-tight flex items-center gap-2">
                  <Award size={14} className="text-[#FF7A1A]" />
                  <span>Assessment Score Gauge Demo</span>
                </strong>
                <span className="sample-badge">Sample Demo</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <div>
                  <label className="text-[11px] text-[#0B1B3A] block mb-1 font-bold">Intent Level:</label>
                  <select
                    value={assessQ1}
                    onChange={(e) => setAssessQ1(e.target.value)}
                    className="w-full bg-[#F8F9FD] border border-[#E4E7F0] rounded-xl p-2 text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#5B3DF5]"
                  >
                    <option value="High">High Intent</option>
                    <option value="Moderate">Moderate</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-[#0B1B3A] block mb-1 font-bold">Budget Set:</label>
                  <select
                    value={assessQ2}
                    onChange={(e) => setAssessQ2(e.target.value)}
                    className="w-full bg-[#F8F9FD] border border-[#E4E7F0] rounded-xl p-2 text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#5B3DF5]"
                  >
                    <option value="Yes">Yes, Approved</option>
                    <option value="Exploring">Exploring</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-[#0B1B3A] block mb-1 font-bold">Timeline:</label>
                  <select
                    value={assessQ3}
                    onChange={(e) => setAssessQ3(e.target.value)}
                    className="w-full bg-[#F8F9FD] border border-[#E4E7F0] rounded-xl p-2 text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#5B3DF5]"
                  >
                    <option value="Immediate">Immediate (&lt;7d)</option>
                    <option value="Later">Later (30d+)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#F8F9FD] to-[#EEF2F8] border border-[#E4E7F0] rounded-xl flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-[11px] text-[#45516B] font-semibold uppercase tracking-wider">
                    Dynamic Assessment Score
                  </div>
                  <div className="text-2xl font-extrabold text-[#0B1B3A] font-mono mt-0.5">
                    {assessScore} <span className="text-xs text-[#8A94A6] font-normal">/ 100</span>
                  </div>
                </div>

                <div
                  className={`px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                    assessScore >= 75
                      ? 'bg-rose-100 text-[#E5484D] border border-rose-200'
                      : 'bg-amber-100 text-[#FF7A1A] border border-amber-200'
                  }`}
                >
                  {assessScore >= 75 ? '🔥 Hot Lead' : '⚡ Warm Lead'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Note under grid */}
        <p className="mt-5 text-center text-xs text-[#6B7A99] flex items-center justify-center gap-1.5">
          <Info size={13} className="text-[#5B3DF5]" />
          <span>
            Every interactive experience is tailored around your brand, offer, and custom
            qualification logic.
          </span>
        </p>
      </div>
    </section>
  );
};
