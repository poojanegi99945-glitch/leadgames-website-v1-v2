import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assignBand, calculateScore, configs, type FunnelConfig } from "./configs";

export function LeadStateBadge({ state }: { state: "hot" | "warm" | "cold" }) {
  const labels = { hot: "Hot", warm: "Warm", cold: "Cold" };
  return <span className={`lead-state lead-state-${state}`}><span aria-hidden="true">●</span> {labels[state]}</span>;
}

export function LeadScoreGauge({ score }: { score: number }) {
  return <div className="score-gauge" style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties} role="img" aria-label={`Lead score ${score} out of 100`}><span><strong>{score}</strong><small>/100</small></span></div>;
}

export function FunnelDemo({ config, compact = false }: { config?: FunnelConfig; compact?: boolean }) {
  const resolvedConfig = config ?? configs["homepage-hero"];
  const [step, setStep] = useState(0); const [answers, setAnswers] = useState<Record<string, number>>({}); const [done, setDone] = useState(false);
  const current = resolvedConfig.steps[step] ?? resolvedConfig.steps[0];
  if (!current) return null;
  const points = Object.values(answers); const possible = resolvedConfig.steps.slice(0, step + 1).map((s) => Math.max(...(s.options?.map((o) => o.score) ?? [0]))); const score = calculateScore(points, possible); const band = assignBand(score, resolvedConfig.bands);
  if (done) return <div className="demo-result" aria-live="polite"><span className="sample-badge">Sample data</span><LeadScoreGauge score={score} /><LeadStateBadge state={band.id} /><h3>{resolvedConfig.result(score, band).headline}</h3><p>{resolvedConfig.result(score, band).body}</p><div className="next-action"><strong>Recommended follow-up</strong><span>{band.action}</span></div><details><summary>How this sample score is calculated <ChevronDown size={16}/></summary>{resolvedConfig.steps.map((s) => <p key={s.id}>{s.question}: <strong>{answers[s.id] ?? 0} points</strong></p>)}</details><p className="demo-notice">Demo only. No data is stored or sent.</p><Button variant="outline" onClick={() => { setStep(0); setAnswers({}); setDone(false); }}>Start again</Button></div>;
  return <div className={`funnel-demo ${compact ? "compact" : ""}`} aria-label={resolvedConfig.title}><div className="demo-top"><span>Step {step + 1} of {resolvedConfig.steps.length}</span><span>{Math.round(((step + 1) / resolvedConfig.steps.length) * 100)}%</span></div><div className="progress"><span style={{ width: `${((step + 1) / resolvedConfig.steps.length) * 100}%` }} /></div>{step === 0 && !compact && <p className="demo-intro">{resolvedConfig.intro}</p>}<fieldset><legend>{current.question}</legend><div className="option-grid" role="radiogroup">{current.options?.map((item) => <button type="button" role="radio" aria-checked={answers[current.id] === item.score} className={answers[current.id] === item.score ? "selected" : ""} onClick={() => setAnswers((a) => ({ ...a, [current.id]: item.score }))} key={item.id}><span>{item.label}</span>{answers[current.id] === item.score && <Check size={17}/>}</button>)}</div></fieldset>{resolvedConfig.disclaimer && <p className="disclaimer">{resolvedConfig.disclaimer}</p>}<div className="demo-actions"><Button variant="ghost" size="sm" disabled={step === 0} onClick={() => setStep((s) => s - 1)}><ArrowLeft/> Back</Button><Button size="sm" disabled={answers[current.id] === undefined} onClick={() => step === resolvedConfig.steps.length - 1 ? setDone(true) : setStep((s) => s + 1)}>{step === resolvedConfig.steps.length - 1 ? "See result" : "Next"}<ArrowRight/></Button></div><span className="sr-only" aria-live="polite">Step {step + 1}: {current.question}</span></div>;
}