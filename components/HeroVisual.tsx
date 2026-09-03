"use client";

import { useEffect, useState } from "react";

const stages = [
  { label: "Prospect Identified",  sub: "ICP match confirmed",         color: "blue"    },
  { label: "Lead Qualified",        sub: "Intent signals detected",     color: "blue"    },
  { label: "Meeting Scheduled",     sub: "Decision-maker confirmed",    color: "amber" },
  { label: "Opportunity Created",   sub: "SQL handed to sales team",    color: "amber" },
];

const toasts = [
  { company: "Acme Technologies",   role: "VP of Sales"          },
  { company: "DataFlow Systems",    role: "Chief Revenue Officer" },
  { company: "Nexus Software",      role: "Head of Revenue"       },
];

export default function HeroVisual() {
  const [activeStages, setActiveStages] = useState<number[]>([]);
  const [toastIdx,     setToastIdx]     = useState(0);
  const [showToast,    setShowToast]    = useState(false);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      setActiveStages([]);
      setShowToast(false);

      stages.forEach((_, i) => {
        timers.push(
          setTimeout(() => setActiveStages(prev => [...prev, i]), 400 + 650 * i)
        );
      });

      // show toast after all stages lit
      timers.push(setTimeout(() => {
        setToastIdx(prev => (prev + 1) % toasts.length);
        setShowToast(true);
      }, 3400));

      // hide toast before restart
      timers.push(setTimeout(() => setShowToast(false), 5200));
    };

    runCycle();
    const loop = setInterval(() => {
      timers.forEach(clearTimeout);
      timers = [];
      runCycle();
    }, 6800);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  const toast = toasts[toastIdx];

  return (
    <div className="relative w-full flex items-center justify-center py-6">

      {/* ── Animated gradient blobs ───────────────────────── */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none select-none">
        <div className="absolute -top-8 -right-8  w-72 h-72 bg-brand-teal-light  rounded-full blur-3xl opacity-70 animate-blob-1" />
        <div className="absolute bottom-0  left-0   w-60 h-60 bg-brand-green-light rounded-full blur-3xl opacity-55 animate-blob-2" />
        <div className="absolute top-1/2  left-1/3  w-44 h-44 bg-yellow-100       rounded-full blur-3xl opacity-40 animate-blob-3" />
      </div>

      {/* ── Main pipeline card ────────────────────────────── */}
      <div className="relative z-10 bg-white/75 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_8px_40px_-8px_rgba(37,99,235,0.18)] p-5 w-full max-w-[340px]">

        {/* Card header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-display font-bold text-brand-navy text-[0.85rem]">Pipeline Progress</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Real-time · Zinoit managed</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
            Live
          </span>
        </div>

        {/* Pipeline stages */}
        <div className="space-y-2.5 mb-4">
          {stages.map((stage, i) => {
            const on = activeStages.includes(i);
            return (
              <div
                key={stage.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-500 ${
                  on
                    ? stage.color === "amber"
                      ? "bg-amber-50 border-amber-100"
                      : "bg-brand-green-xlight border-brand-green-light"
                    : "bg-slate-50 border-slate-100"
                }`}
                style={{
                  opacity:   on ? 1 : 0.38,
                  transform: on ? "translateX(0)" : "translateX(-5px)",
                }}
              >
                {/* Step indicator */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                    on
                      ? stage.color === "amber"
                        ? "bg-amber-400"
                        : "bg-brand-green"
                      : "bg-slate-200"
                  }`}
                >
                  {on ? (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400">{i + 1}</span>
                  )}
                </div>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <p className={`text-[12px] font-semibold leading-tight truncate ${on ? "text-brand-navy" : "text-slate-400"}`}>
                    {stage.label}
                  </p>
                  <p className={`text-[10px] leading-tight truncate mt-0.5 ${on ? (stage.color === "amber" ? "text-amber-600" : "text-brand-green") : "text-slate-300"}`}>
                    {stage.sub}
                  </p>
                </div>

                {/* Progress dot */}
                {on && (
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${stage.color === "amber" ? "bg-amber-400" : "bg-brand-green"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Metrics mini-row */}
        <div className="grid grid-cols-3 gap-2 mb-3.5">
          {[
            { v: "3×",    l: "Pipeline"  },
            { v: "48h",   l: "1st Appt"  },
            { v: "98%",   l: "Retained"  },
          ].map((m) => (
            <div key={m.l} className="bg-brand-gray-light rounded-xl py-2 text-center border border-slate-100">
              <p className="font-display font-extrabold text-brand-navy text-base leading-none">{m.v}</p>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">{m.l}</p>
            </div>
          ))}
        </div>

        {/* Animated toast notification */}
        <div
          className={`flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 transition-all duration-500 ${
            showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-amber-800 truncate">
              Meeting booked · {toast.company}
            </p>
            <p className="text-[10px] text-amber-600">{toast.role} · just now</p>
          </div>
          <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-md flex-shrink-0">New</span>
        </div>
      </div>

      {/* ── Floating badge — top right ────────────────────── */}
      <div className="absolute top-2 right-0 bg-white rounded-2xl shadow-card-md px-3.5 py-2.5 border border-slate-100 animate-float z-20 pointer-events-none">
        <p className="font-display font-extrabold text-brand-green text-xl leading-none">2,500+</p>
        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Meetings Set</p>
      </div>

      {/* ── Floating badge — bottom left ─────────────────── */}
      <div
        className="absolute bottom-2 -left-2 bg-white rounded-2xl shadow-card-md px-3.5 py-2.5 border border-slate-100 z-20 pointer-events-none"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1.8s" }}
      >
        <p className="font-display font-extrabold text-brand-navy text-xl leading-none">150+</p>
        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">B2B Clients</p>
      </div>
    </div>
  );
}
