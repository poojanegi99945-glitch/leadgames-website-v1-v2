import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Sparkles, Check, Gift, HelpCircle, Calculator, Grid, Activity, Award } from 'lucide-react';

export const SampleExperiencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spin' | 'scratch' | 'quiz' | 'calculator' | 'memory' | 'assessment'>('spin');

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
        'Free Strategic Audit',
        '₹5,000 Implementation Credit',
        'Priority VIP Booking Slot',
        '20% Setup Discount',
      ];
      setWheelPrize(samplePrizes[Math.floor(Math.random() * samplePrizes.length)]);
    }, 2400);
  };

  // 2. Scratch & Win Canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scratchedRevealed, setScratchedRevealed] = useState(false);

  useEffect(() => {
    if (activeTab === 'scratch' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#CBD5E1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#45516B';
        ctx.textAlign = 'center';
        ctx.fillText('Scratch or click Reveal', canvas.width / 2, canvas.height / 2 + 5);
      }
    }
  }, [activeTab]);

  const handleCanvasScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
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
    ctx.arc(x, y, 18, 0, Math.PI * 2);
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
        newCards[first].matched = true;
        newCards[second].matched = true;
        setCards(newCards);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards(newCards);
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  // 6. Assessment state
  const [assessQ1, setAssessQ1] = useState('High');
  const [assessQ2, setAssessQ2] = useState('Yes');
  const [assessQ3, setAssessQ3] = useState('Immediate');

  const assessScore = (assessQ1 === 'High' ? 40 : 20) + (assessQ2 === 'Yes' ? 30 : 15) + (assessQ3 === 'Immediate' ? 30 : 10);

  return (
    <section id="samples" className="py-16 md:py-24 border-b border-[#E4E7F0] bg-[#F6F7FB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#5B3DF5] mb-2">
            Interactive Formats
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight font-heading">
            Try Them Yourself
          </h2>
          <p className="mt-3 text-base text-[#45516B] leading-relaxed">
            Live samples of what we build. All content here is demo content.
          </p>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'spin', label: '1. Spin & Win' },
            { id: 'scratch', label: '2. Scratch & Win' },
            { id: 'quiz', label: '3. Quiz Funnel' },
            { id: 'calculator', label: '4. ROI Calculator' },
            { id: 'memory', label: '5. Memory Match' },
            { id: 'assessment', label: '6. Assessment Gauge' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-[#5B3DF5] text-white shadow-sm'
                  : 'bg-white border border-[#E4E7F0] text-[#45516B] hover:text-[#0B1B3A] hover:bg-[#F6F7FB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Playable Sandbox Box */}
        <div className="card-soft p-6 sm:p-8 bg-white min-h-[380px] flex items-center justify-center">
          
          {/* 1. Spin & Win */}
          {activeTab === 'spin' && (
            <div className="w-full max-w-lg text-center space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">Playable Spin & Win Demo</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Sample data</span>
              </div>

              {/* Wheel Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-[#0B1B3A] p-1 shadow-lg flex items-center justify-center">
                {/* Pointer */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-[#E5484D]" />
                
                {/* Disc */}
                <div
                  className="w-full h-full rounded-full border-2 border-slate-300 relative overflow-hidden transition-transform duration-[2400ms] cubic-bezier(0.15, 0.9, 0.25, 1)"
                  style={{ transform: `rotate(${wheelRotation}deg)` }}
                >
                  <div className="absolute inset-0 bg-[conic-gradient(#5B3DF5_0deg_60deg,#3B82F6_60deg_120deg,#12A150_120deg_180deg,#F5A524_180deg_240deg,#8B5CF6_240deg_300deg,#EC4899_300deg_360deg)] opacity-90" />
                  <div className="absolute inset-1/4 rounded-full bg-white border border-[#E4E7F0] flex items-center justify-center font-bold text-[10px] text-[#0B1B3A]">
                    TEZPLAY
                  </div>
                </div>
              </div>

              <button
                onClick={handleSpin}
                disabled={spinning}
                className="btn-primary text-xs"
              >
                <RotateCw className={`w-3.5 h-3.5 ${spinning ? 'animate-spin' : ''}`} />
                <span>{spinning ? 'Spinning...' : 'Spin the Wheel'}</span>
              </button>

              {wheelPrize && (
                <div className="p-3 bg-[#5B3DF5]/5 border border-[#5B3DF5]/20 rounded-xl text-xs text-[#0B1B3A]">
                  <span className="font-bold text-[#5B3DF5]">Demo prize:</span> {wheelPrize}
                </div>
              )}
            </div>
          )}

          {/* 2. Scratch & Win */}
          {activeTab === 'scratch' && (
            <div className="w-full max-w-sm text-center space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">Scratch & Win Demo</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Sample data</span>
              </div>

              <div className="relative w-full h-44 rounded-xl border border-[#E4E7F0] overflow-hidden flex items-center justify-center bg-[#F6F7FB]">
                {/* Secret background code */}
                <div className="p-4 space-y-1">
                  <div className="text-xs font-bold text-[#12A150]">DEMO PRIZE UNLOCKED!</div>
                  <div className="text-lg font-extrabold text-[#0B1B3A] font-mono">PROPOSAL-VIP-2026</div>
                  <div className="text-[11px] text-[#45516B]">Free Funnel Strategy Session</div>
                </div>

                {/* Canvas Overlay for pointer scratching */}
                {!scratchedRevealed && (
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={176}
                    onMouseMove={handleCanvasScratch}
                    onTouchMove={handleCanvasScratch}
                    className="absolute inset-0 w-full h-full cursor-pointer touch-none"
                    aria-label="Scratch card canvas. Use Reveal button if using assistive tech."
                  />
                )}
              </div>

              {/* Accessible Reveal Button for keyboard and assistive tech */}
              <button
                type="button"
                onClick={() => setScratchedRevealed(true)}
                className="btn-secondary text-xs"
              >
                <span>{scratchedRevealed ? 'Revealed' : 'Reveal (Keyboard Accessible)'}</span>
              </button>
            </div>
          )}

          {/* 3. Quiz Funnel */}
          {activeTab === 'quiz' && (
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">2-Question Quiz Demo</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Sample data</span>
              </div>

              {quizStep === 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[#0B1B3A]">Q1: What is your primary sales model?</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['High-Ticket B2B', 'Clinic Consultations', 'Property Deals', 'E-commerce Direct'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setQuizAnswer1(opt);
                          setQuizStep(1);
                        }}
                        className="p-3 text-left rounded-lg border border-[#E4E7F0] hover:border-[#5B3DF5] bg-white font-medium text-[#0B1B3A]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 1 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[#0B1B3A]">Q2: Current average lead response time?</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Under 5 minutes', '1 – 4 hours', 'Next day', 'No tracking'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setQuizAnswer2(opt);
                          setQuizStep(2);
                        }}
                        className="p-3 text-left rounded-lg border border-[#E4E7F0] hover:border-[#5B3DF5] bg-white font-medium text-[#0B1B3A]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="p-4 bg-[#F6F7FB] border border-[#E4E7F0] rounded-xl text-xs space-y-2">
                  <div className="font-bold text-[#5B3DF5]">Sample Result Card:</div>
                  <p className="text-[#0B1B3A]">
                    Model: <strong>{quizAnswer1}</strong> · Response: <strong>{quizAnswer2}</strong>
                  </p>
                  <p className="text-[#45516B]">
                    Recommendation: Deploy an instant WhatsApp qualification funnel to reduce response latency to &lt; 60 seconds.
                  </p>
                  <button
                    onClick={() => setQuizStep(0)}
                    className="text-xs text-[#5B3DF5] font-semibold underline pt-2 block"
                  >
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. Calculator */}
          {activeTab === 'calculator' && (
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">Interactive Calculator Demo</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Illustrative estimate</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1 text-[#0B1B3A]">
                    <span>Monthly Traffic:</span>
                    <span className="font-bold font-tabular">{trafficVal.toLocaleString()} visitors</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="50000"
                    step="1000"
                    value={trafficVal}
                    onChange={(e) => setTrafficVal(Number(e.target.value))}
                    className="w-full accent-[#5B3DF5]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-[#0B1B3A]">
                    <span>Average Deal Size:</span>
                    <span className="font-bold font-tabular">₹{dealVal.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={dealVal}
                    onChange={(e) => setDealVal(Number(e.target.value))}
                    className="w-full accent-[#5B3DF5]"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-[#F6F7FB] border border-[#E4E7F0] rounded-xl text-xs flex justify-between items-center">
                <span className="text-[#45516B]">Projected Qualified Leads / mo:</span>
                <span className="text-base font-extrabold text-[#5B3DF5] font-tabular">
                  ~{Math.round((trafficVal * 0.045))} leads
                </span>
              </div>
            </div>
          )}

          {/* 5. Memory Match */}
          {activeTab === 'memory' && (
            <div className="w-full max-w-sm space-y-3 text-center">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">Memory Match Interactive Game</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Sample data</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {cards.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCardClick(i)}
                    className={`h-16 rounded-lg text-xs font-bold transition-all border ${
                      c.flipped || c.matched
                        ? 'bg-[#5B3DF5] text-white border-[#5B3DF5]'
                        : 'bg-[#F6F7FB] text-[#45516B] border-[#E4E7F0] hover:bg-slate-200'
                    }`}
                  >
                    {c.flipped || c.matched ? c.val : '?'}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#45516B]">Flip cards to match campaign tools</p>
            </div>
          )}

          {/* 6. Assessment Gauge */}
          {activeTab === 'assessment' && (
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1B3A]">Assessment Score Gauge Demo</span>
                <span className="text-[11px] bg-[#F6F7FB] px-2 py-0.5 rounded border border-[#E4E7F0]">Sample data</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <label className="text-[10px] text-[#45516B] block mb-1">Intent:</label>
                  <select
                    value={assessQ1}
                    onChange={(e) => setAssessQ1(e.target.value)}
                    className="w-full bg-[#F6F7FB] border border-[#E4E7F0] rounded p-1 text-xs"
                  >
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-[#45516B] block mb-1">Budget Set:</label>
                  <select
                    value={assessQ2}
                    onChange={(e) => setAssessQ2(e.target.value)}
                    className="w-full bg-[#F6F7FB] border border-[#E4E7F0] rounded p-1 text-xs"
                  >
                    <option value="Yes">Yes</option>
                    <option value="Exploring">Exploring</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-[#45516B] block mb-1">Timeline:</label>
                  <select
                    value={assessQ3}
                    onChange={(e) => setAssessQ3(e.target.value)}
                    className="w-full bg-[#F6F7FB] border border-[#E4E7F0] rounded p-1 text-xs"
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="Later">Later</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-[#F6F7FB] border border-[#E4E7F0] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#45516B]">Dynamic Assessment Score</div>
                  <div className="text-2xl font-bold text-[#0B1B3A] font-tabular mt-0.5">
                    {assessScore} / 100
                  </div>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  assessScore >= 75
                    ? 'bg-rose-50 text-[#E5484D] border border-rose-200'
                    : 'bg-amber-50 text-[#F5A524] border border-amber-200'
                }`}>
                  {assessScore >= 75 ? 'Hot Lead' : 'Warm Lead'}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Note under grid */}
        <p className="mt-4 text-center text-xs text-[#45516B]">
          Your experience is designed around your brand, offer and qualification rules.
        </p>

      </div>
    </section>
  );
};
