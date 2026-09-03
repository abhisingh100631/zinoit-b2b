"use client";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import Link from "next/link";

// ── Sector data ───────────────────────────────────────────────────────────────

const sectors = [
  {
    name:    "Information Technology",
    color:   "#ff5542",
    shadow:  "rgba(255,85,66,0.55)",
    dotCls:  "bg-brand-coral",
    textCls: "text-brand-coral",
    bgCls:   "bg-brand-coral/10 border-brand-coral/20",
    bar:     "bg-brand-coral",
    roles:   ["Software Engineering","Cloud & DevOps","Data & AI","Cybersecurity","Platform Engineering","ML Infrastructure"],
    types:   "Contract · C2H · Direct",
  },
  {
    name:    "Life Sciences & Biotech",
    color:   "#34d399",
    shadow:  "rgba(52,211,153,0.5)",
    dotCls:  "bg-emerald-400",
    textCls: "text-emerald-400",
    bgCls:   "bg-emerald-400/10 border-emerald-400/20",
    bar:     "bg-emerald-400",
    roles:   ["Bioinformatics","Clinical Data Systems","Regulatory Affairs","QA & Validation","Scientific Computing"],
    types:   "Contract · Direct",
  },
  {
    name:    "Insurance & Risk",
    color:   "#a78bfa",
    shadow:  "rgba(167,139,250,0.5)",
    dotCls:  "bg-violet-400",
    textCls: "text-violet-400",
    bgCls:   "bg-violet-400/10 border-violet-400/20",
    bar:     "bg-violet-400",
    roles:   ["InsurTech Engineering","Actuarial Systems","Risk & Compliance","Policy Administration","Claims Technology"],
    types:   "Contract · Direct",
  },
];

// Ping-pong sequence: IT → LS → Insurance → LS → IT → …
const SEQUENCE = [0, 1, 2, 1];

// ── Helpers ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration: number, delay: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, duration, delay]);
  return value;
}

function useRoleCycle(roles: string[], every: number, startDelay: number) {
  const [idx,   setIdx]  = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  useEffect(() => {
    const init = setTimeout(() => {
      const id = setInterval(() => {
        setPhase("out");
        setTimeout(() => { setIdx(i => (i + 1) % roles.length); setPhase("in"); }, 270);
      }, every);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(init);
  }, [roles.length, every, startDelay]);
  return { role: roles[idx], phase };
}

function ActivityTicker() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 3), 480);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-1 h-1 rounded-full bg-emerald-400" style={{
          opacity:   tick === i ? 1 : 0.2,
          transform: tick === i ? "scale(1.5)" : "scale(1)",
          transition: "opacity 180ms ease, transform 180ms ease",
        }} />
      ))}
    </div>
  );
}

function ShimmerSweep() {
  const [active, setActive] = useState(false);
  useEffect(() => { const t = setTimeout(() => setActive(true), 250); return () => clearTimeout(t); }, []);
  return (
    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
      <div style={{
        position: "absolute", top: 0, bottom: 0, width: "55%",
        background: "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.045) 50%,transparent 100%)",
        transform: active ? "translateX(280%)" : "translateX(-150%)",
        transition: active ? "transform 850ms cubic-bezier(0.4,0,0.2,1)" : "none",
      }} />
    </div>
  );
}

// ── Sector row (forwardRef so parent can measure dot position) ────────────────

type SectorRowProps = {
  sector:  (typeof sectors)[0];
  visible: boolean;
  delay:   number;
  active:  boolean; // is the bouncing ball currently on this row?
};

const SectorRow = forwardRef<HTMLDivElement, SectorRowProps>(
  function SectorRow({ sector, visible, delay, active }, ref) {
    const { role, phase } = useRoleCycle(sector.roles, 2700, delay + 900);

    return (
      <div
        ref={ref}
        style={{
          transform:  visible ? "translateX(0)" : "translateX(18px)",
          opacity:    visible ? 1 : 0,
          transition: `transform 560ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 560ms ease ${delay}ms`,
          boxShadow:  active ? `inset 0 0 0 1px ${sector.color}28` : "none",
        }}
        className="flex items-start gap-3 bg-white/[0.05] hover:bg-white/[0.09] rounded-xl px-3.5 py-3 transition-colors duration-300 cursor-default"
      >
        {/* Static dot (the bouncing ball travels along the left edge) */}
        <div className="relative flex-shrink-0 mt-[3px]">
          <span className={`block w-2 h-2 rounded-full ${sector.dotCls}`}
            style={{ opacity: active ? 0 : 0.6, transition: "opacity 250ms ease" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white/85 text-[13px] font-semibold leading-tight">{sector.name}</p>
          <div className="mt-1 h-[18px] overflow-hidden">
            <span
              className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${sector.bgCls} ${sector.textCls} leading-tight`}
              style={{
                opacity:   phase === "in" ? 1 : 0,
                transform: phase === "in" ? "translateY(0)" : "translateY(-5px)",
                transition: "opacity 260ms ease, transform 260ms ease",
              }}
            >{role}</span>
          </div>
          <p className="text-white/25 text-[9px] font-medium mt-1 tracking-wide">{sector.types}</p>
        </div>

        {/* Accent bar */}
        <div className="flex-shrink-0 self-stretch flex items-center">
          <div className={`w-0.5 h-full rounded-full ${sector.bar} transition-opacity duration-300`}
            style={{ opacity: active ? 0.8 : 0.2 }} />
        </div>
      </div>
    );
  }
);

// ── Bouncing ball + connector ─────────────────────────────────────────────────

function BouncingBall({
  yPositions,
  activeIdx,
  ready,
}: {
  yPositions: number[];
  activeIdx:  number;
  ready:      boolean;
}) {
  const y     = yPositions[activeIdx] ?? 0;
  const color  = sectors[activeIdx].color;
  const shadow = sectors[activeIdx].shadow;
  const top    = yPositions[0] ?? 0;
  const bottom = yPositions[2] ?? 0;

  return (
    <>
      {/* Connector line */}
      <div style={{
        position: "absolute",
        left:     17,
        top,
        height:   Math.max(0, bottom - top),
        width:    1,
        background: "linear-gradient(to bottom,rgba(255,85,66,0.22),rgba(52,211,153,0.22),rgba(167,139,250,0.22))",
        transform: "translateX(-50%)",
        borderRadius: 1,
        opacity: ready ? 1 : 0,
        transition: "opacity 400ms ease 600ms",
        pointerEvents: "none",
      }} />

      {/* Ball */}
      <div style={{
        position:  "absolute",
        left:      17,
        top:       y,
        width:     10,
        height:    10,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 12px 4px ${shadow}, 0 0 4px 1px ${color}`,
        transform:  "translate(-50%, -50%)",
        transition: ready
          ? `top 820ms cubic-bezier(0.34,1.56,0.64,1), background 350ms ease, box-shadow 350ms ease, opacity 400ms ease 600ms`
          : "opacity 400ms ease 600ms",
        opacity:   ready ? 1 : 0,
        zIndex:    10,
        pointerEvents: "none",
      }} />
    </>
  );
}

// ── Main card ─────────────────────────────────────────────────────────────────

export default function HeroOpportunitiesCard() {
  const [mounted,    setMounted]    = useState(false);
  const [ballReady,  setBallReady]  = useState(false);
  const [step,       setStep]       = useState(0);
  const [yPositions, setYPositions] = useState([0, 0, 0]);

  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const count = useCountUp(340, 1200, 420);

  // Mount entrance
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Measure dot positions after rows are visible, then start ball
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      const containerEl = containerRef.current;
      if (!containerEl) return;
      const cTop = containerEl.getBoundingClientRect().top;
      const positions = rowRefs.map(r => {
        if (!r.current) return 0;
        const rect = r.current.getBoundingClientRect();
        // dot center = row-top + py-3(12px) + mt-[3px](3px) + half h-2(4px) = +19px
        return rect.top - cTop + 19;
      });
      setYPositions(positions);
      setBallReady(true);
    }, 700); // wait for entrance animations to settle
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // Ping-pong step
  useEffect(() => {
    if (!ballReady) return;
    const id = setInterval(() => setStep(s => (s + 1) % SEQUENCE.length), 950);
    return () => clearInterval(id);
  }, [ballReady]);

  const activeIdx = SEQUENCE[step];

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute inset-4 bg-brand-coral/18 blur-2xl rounded-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-3xl overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)]">
        <ShimmerSweep />

        {/* Top accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-coral/55 to-transparent" />

        <div className="p-6">

          {/* ── Header ───────────────────────────────────── */}
          <div style={{
            opacity:   mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 480ms ease, transform 480ms cubic-bezier(0.22,1,0.36,1)",
          }} className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.08]">

            <div className="w-9 h-9 rounded-xl bg-brand-coral/15 border border-brand-coral/25 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-white text-sm font-semibold leading-none">Open Positions</p>
                <ActivityTicker />
              </div>
              <p className="text-white/35 text-[10px] mt-1 font-medium">Across three sectors</p>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="font-display text-[22px] font-extrabold text-white leading-none tabular-nums">
                {count}<span className="text-brand-coral">+</span>
              </p>
              <p className="text-white/30 text-[9px] font-medium mt-0.5">roles placed</p>
            </div>
          </div>

          {/* ── Sectors + bouncing ball ───────────────────── */}
          <div ref={containerRef} className="relative space-y-2 mb-5">
            {/* Ball travels here */}
            <BouncingBall yPositions={yPositions} activeIdx={activeIdx} ready={ballReady} />

            {sectors.map((s, i) => (
              <SectorRow
                key={s.name}
                ref={rowRefs[i]}
                sector={s}
                visible={mounted}
                delay={i * 120}
                active={ballReady && activeIdx === i}
              />
            ))}
          </div>

          {/* ── Note ─────────────────────────────────────── */}
          <div style={{
            opacity:   mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 500ms ease 560ms, transform 500ms ease 560ms",
          }} className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-3.5 py-3 mb-4">
            <p className="text-white/45 text-[11px] leading-relaxed">
              <span className="text-white/70 font-semibold">Most searches move fast and stay off the market.</span>
              {" "}Get in touch before the right one closes.
            </p>
          </div>

          {/* ── CTA ──────────────────────────────────────── */}
          <div style={{
            opacity:   mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 500ms ease 680ms, transform 500ms ease 680ms",
          }}>
            <Link href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-coral-dark text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-coral hover:-translate-y-px"
            >
              Connect With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </div>
  );
}
