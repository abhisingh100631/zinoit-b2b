import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ServicesNav from "@/components/ServicesNav";

export const metadata: Metadata = {
  title: "Services | Zinoit Tech",
  description:
    "Contract staffing, contract-to-hire, direct placement, and managed talent services across IT, Life Sciences, and Insurance. Built for employers who can't afford a mis-hire.",
};

/* ─── Icons ─────────────────────────────────────────────────── */

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Check = () => (
  <svg className="w-4 h-4 text-brand-coral flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── Illustrations ─────────────────────────────────────────── */

/**
 * Contract Staffing — pipeline velocity.
 * Dots flow left-to-right along horizontal tracks at staggered speeds.
 * Stage markers punctuate each track. Coral palette, dark bg.
 */
const VelocityIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "200px", background: "linear-gradient(145deg,#0f1117 0%,#1a1d23 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 380 200"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <pattern id="vel-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <linearGradient id="track-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stopColor="#ff5542" stopOpacity="0"   />
          <stop offset="15%"  stopColor="#ff5542" stopOpacity="0.3" />
          <stop offset="85%"  stopColor="#ff5542" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff5542" stopOpacity="0"   />
        </linearGradient>
      </defs>

      <rect width="380" height="200" fill="url(#vel-dots)" />

      {/* ── Track lines ── */}
      <line x1="0" y1="52"  x2="380" y2="52"  stroke="url(#track-fade)" strokeWidth="0.8" />
      <line x1="0" y1="88"  x2="380" y2="88"  stroke="url(#track-fade)" strokeWidth="0.8" />
      <line x1="0" y1="124" x2="380" y2="124" stroke="url(#track-fade)" strokeWidth="0.8" />
      <line x1="0" y1="160" x2="380" y2="160" stroke="url(#track-fade)" strokeWidth="0.8" />

      {/* ── Stage markers (vertical ticks) ── */}
      {[95, 190, 285].map((x) => (
        <g key={x}>
          <line x1={x} y1="40"  x2={x} y2="64"  stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1={x} y1="76"  x2={x} y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1={x} y1="112" x2={x} y2="136" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1={x} y1="148" x2={x} y2="172" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </g>
      ))}

      {/* ── Track 1 — fast, brightest ── */}
      <circle cy="52" r="4" fill="#ff5542" fillOpacity="0.95">
        <animate attributeName="cx" from="-15" to="395" dur="2.2s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cy="52" r="3" fill="#ff7a5c" fillOpacity="0.75">
        <animate attributeName="cx" from="-15" to="395" dur="2.2s" repeatCount="indefinite" begin="0.73s" />
      </circle>
      <circle cy="52" r="3.5" fill="#ffb8a8" fillOpacity="0.6">
        <animate attributeName="cx" from="-15" to="395" dur="2.2s" repeatCount="indefinite" begin="1.47s" />
      </circle>

      {/* ── Track 2 ── */}
      <circle cy="88" r="3.5" fill="#ff5542" fillOpacity="0.85">
        <animate attributeName="cx" from="-15" to="395" dur="2.8s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      <circle cy="88" r="3" fill="#ff7a5c" fillOpacity="0.65">
        <animate attributeName="cx" from="-15" to="395" dur="2.8s" repeatCount="indefinite" begin="1.33s" />
      </circle>
      <circle cy="88" r="2.5" fill="#ffb8a8" fillOpacity="0.5">
        <animate attributeName="cx" from="-15" to="395" dur="2.8s" repeatCount="indefinite" begin="2.27s" />
      </circle>

      {/* ── Track 3 ── */}
      <circle cy="124" r="3" fill="#ff7a5c" fillOpacity="0.7">
        <animate attributeName="cx" from="-15" to="395" dur="3.4s" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle cy="124" r="3.5" fill="#ff5542" fillOpacity="0.55">
        <animate attributeName="cx" from="-15" to="395" dur="3.4s" repeatCount="indefinite" begin="1.13s" />
      </circle>
      <circle cy="124" r="2.5" fill="#ffb8a8" fillOpacity="0.45">
        <animate attributeName="cx" from="-15" to="395" dur="3.4s" repeatCount="indefinite" begin="2.27s" />
      </circle>

      {/* ── Track 4 — slowest, faintest ── */}
      <circle cy="160" r="2.5" fill="#ff5542" fillOpacity="0.45">
        <animate attributeName="cx" from="-15" to="395" dur="4s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cy="160" r="2" fill="#ff7a5c" fillOpacity="0.35">
        <animate attributeName="cx" from="-15" to="395" dur="4s" repeatCount="indefinite" begin="2s" />
      </circle>
    </svg>

    {/* floating labels */}
    <span className="absolute top-5 left-6 text-[10px] font-mono text-white/30 animate-float"
          style={{ animationDelay: "0s" }}>
      intake → screen → place
    </span>
    <span className="absolute bottom-5 right-6 text-[10px] font-mono text-white/22 animate-float"
          style={{ animationDelay: "1.8s" }}>
      48h turnaround
    </span>
    <span className="absolute top-[44%] right-8 text-[10px] font-mono text-white/18 animate-float"
          style={{ animationDelay: "1s" }}>
      W2 &amp; C2C
    </span>
  </div>
);

/**
 * Direct Placement — precision targeting.
 * Bullseye target with converging candidate nodes; filtered nodes dimmed,
 * shortlisted nodes highlighted. Slate/warm palette, light bg.
 */
const PrecisionIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "220px", background: "linear-gradient(145deg,#fafafa 0%,#f1f5f9 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 380 220"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="prec-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ff5542" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ff5542" stopOpacity="0"    />
        </radialGradient>
      </defs>

      <circle cx="190" cy="110" r="110" fill="url(#prec-glow)" />

      {/* ── Bullseye rings ── */}
      <circle cx="190" cy="110" r="28"
              stroke="#ff5542" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="190" cy="110" r="56"
              stroke="#ff5542" strokeWidth="0.8" strokeOpacity="0.25" />
      <circle cx="190" cy="110" r="86"
              stroke="#ff5542" strokeWidth="0.6" strokeOpacity="0.14">
        <animate attributeName="r" values="86;92;86" dur="4s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.14;0.06;0.14" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* crosshair lines */}
      <line x1="190" y1="76"  x2="190" y2="20"  stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="190" y1="144" x2="190" y2="200" stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="156" y1="110" x2="80"  y2="110" stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="224" y1="110" x2="300" y2="110" stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* ── Converging lines — dimmed candidates ── */}
      <line x1="70"  y1="38"  x2="190" y2="110" stroke="#94a3b8" strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="4 5" />
      <line x1="310" y1="38"  x2="190" y2="110" stroke="#94a3b8" strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="4 5" />
      <line x1="50"  y1="155" x2="190" y2="110" stroke="#94a3b8" strokeWidth="0.7" strokeOpacity="0.25" strokeDasharray="4 5" />
      <line x1="330" y1="155" x2="190" y2="110" stroke="#94a3b8" strokeWidth="0.7" strokeOpacity="0.25" strokeDasharray="4 5" />

      {/* ── Converging lines — shortlisted (brighter, animated flow) ── */}
      <line x1="310" y1="75" x2="190" y2="110" stroke="#ff5542" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="165" x2="190" y2="110" stroke="#ff5542" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.2s" repeatCount="indefinite" />
      </line>

      {/* ── Dimmed candidate nodes ── */}
      <circle cx="70"  cy="38"  r="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="310" cy="38"  r="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="50"  cy="155" r="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="330" cy="155" r="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      {/* small x inside dimmed */}
      <path d="M 67 35 L 73 41 M 73 35 L 67 41" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 307 35 L 313 41 M 313 35 L 307 41" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Shortlisted (highlighted) candidate nodes ── */}
      <circle cx="310" cy="75" r="9" fill="#fff5f4" stroke="#ff5542" strokeWidth="1.5">
        <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="310" cy="75" r="5" fill="#ff5542" fillOpacity="0.85">
        <animate attributeName="fill-opacity" values="0.85;0.4;0.85" dur="2.5s" repeatCount="indefinite" />
      </circle>

      <circle cx="70" cy="165" r="9" fill="#fff5f4" stroke="#ff5542" strokeWidth="1.5">
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="165" r="5" fill="#ff5542" fillOpacity="0.75">
        <animate attributeName="fill-opacity" values="0.75;0.35;0.75" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* ── Center match node ── */}
      <circle cx="190" cy="110" r="14" fill="#fff5f4" stroke="#ff5542" strokeWidth="2" strokeOpacity="0.6">
        <animate attributeName="r" values="14;17;14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="110" r="7" fill="#ff5542" fillOpacity="0.9">
        <animate attributeName="fill-opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>

    <span className="absolute top-4 right-6 text-[10px] font-mono text-slate-400/70 animate-float"
          style={{ animationDelay: "0s" }}>
      passive candidates
    </span>
    <span className="absolute bottom-5 left-6 text-[10px] font-mono text-slate-400/55 animate-float"
          style={{ animationDelay: "2s" }}>
      evaluator notes included
    </span>
  </div>
);

/**
 * Managed Talent Services — team assembly visualization.
 * Eight role nodes (coral/amber/slate) cluster and connect, representing
 * a cross-functional squad. Each node drifts gently; connective lines
 * pulse. Warm off-white background.
 */
const TeamAssemblyIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "230px", background: "linear-gradient(145deg,#fffbf8 0%,#fff5ef 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 380 230"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="team-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ff5542" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff5542" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="190" cy="115" rx="155" ry="100" fill="url(#team-glow)" />

      {/* ── Team boundary — outer breathing ellipse ── */}
      <ellipse cx="190" cy="115" rx="148" ry="95"
               stroke="#ff5542" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="6 8">
        <animate attributeName="rx" values="148;156;148" dur="5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="95;101;95"   dur="5s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.12;0.04;0.12" dur="5s" repeatCount="indefinite" />
      </ellipse>

      {/* ── Connecting lines between nodes ── */}
      {/* ring connections */}
      <line x1="190" y1="40"  x2="272" y2="72"  stroke="#ff5542" strokeWidth="0.7" strokeOpacity="0.2">
        <animate attributeName="stroke-opacity" values="0.2;0.06;0.2" dur="3.5s" repeatCount="indefinite" />
      </line>
      <line x1="272" y1="72"  x2="300" y2="148" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.2">
        <animate attributeName="stroke-opacity" values="0.2;0.06;0.2" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="300" y1="148" x2="240" y2="196" stroke="#64748b" strokeWidth="0.7" strokeOpacity="0.18">
        <animate attributeName="stroke-opacity" values="0.18;0.05;0.18" dur="3.8s" repeatCount="indefinite" />
      </line>
      <line x1="240" y1="196" x2="140" y2="196" stroke="#64748b" strokeWidth="0.7" strokeOpacity="0.18">
        <animate attributeName="stroke-opacity" values="0.18;0.05;0.18" dur="4.5s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="196" x2="80"  y2="148" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.2">
        <animate attributeName="stroke-opacity" values="0.2;0.06;0.2" dur="3.2s" repeatCount="indefinite" />
      </line>
      <line x1="80"  y1="148" x2="108" y2="72"  stroke="#ff7a5c" strokeWidth="0.7" strokeOpacity="0.2">
        <animate attributeName="stroke-opacity" values="0.2;0.06;0.2" dur="4.2s" repeatCount="indefinite" />
      </line>
      <line x1="108" y1="72"  x2="190" y2="40"  stroke="#ff5542" strokeWidth="0.7" strokeOpacity="0.2">
        <animate attributeName="stroke-opacity" values="0.2;0.06;0.2" dur="3.6s" repeatCount="indefinite" />
      </line>
      {/* spoke connections to center */}
      <line x1="190" y1="115" x2="272" y2="72"  stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 5" />
      <line x1="190" y1="115" x2="300" y2="148" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 5" />
      <line x1="190" y1="115" x2="80"  y2="148" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 5" />
      <line x1="190" y1="115" x2="108" y2="72"  stroke="#ff7a5c" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 5" />

      {/* ── Center LEAD node ── */}
      <circle cx="190" cy="115" r="18" fill="#fff5f4" stroke="#ff5542" strokeWidth="1.5" strokeOpacity="0.4">
        <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="115" r="9" fill="#ff5542" fillOpacity="0.9">
        <animate attributeName="fill-opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="190" y="119" textAnchor="middle"
            fontSize="6" fontFamily="system-ui" fontWeight="700"
            fill="#ff5542" fillOpacity="0" >LEAD</text>

      {/* ── Coral nodes — Engineering ── */}
      {/* Top */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 2,-4; 0,0" dur="5s" repeatCount="indefinite" />
        <circle cx="190" cy="40" r="10" fill="#fff5f4" stroke="#ff5542" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="190" cy="40" r="5"  fill="#ff5542" fillOpacity="0.8">
          <animate attributeName="fill-opacity" values="0.8;0.35;0.8" dur="3.4s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Top-left */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -3,-3; 0,0" dur="6s" repeatCount="indefinite" />
        <circle cx="108" cy="72" r="9" fill="#fff5f4" stroke="#ff7a5c" strokeWidth="1.2" strokeOpacity="0.55" />
        <circle cx="108" cy="72" r="4.5" fill="#ff7a5c" fillOpacity="0.75">
          <animate attributeName="fill-opacity" values="0.75;0.3;0.75" dur="4.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Amber nodes — Data / Analytics ── */}
      {/* Top-right */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 3,-2; 0,0" dur="5.5s" repeatCount="indefinite" />
        <circle cx="272" cy="72" r="9" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="272" cy="72" r="4.5" fill="#f59e0b" fillOpacity="0.75">
          <animate attributeName="fill-opacity" values="0.75;0.3;0.75" dur="3.8s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Right */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 4,2; 0,0" dur="7s" repeatCount="indefinite" />
        <circle cx="300" cy="148" r="9" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.55" />
        <circle cx="300" cy="148" r="4.5" fill="#f59e0b" fillOpacity="0.7">
          <animate attributeName="fill-opacity" values="0.7;0.25;0.7" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Slate nodes — Ops / QA / PM ── */}
      {/* Bottom-right */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 2,4; 0,0" dur="6.5s" repeatCount="indefinite" />
        <circle cx="240" cy="196" r="8.5" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="240" cy="196" r="4" fill="#64748b" fillOpacity="0.6">
          <animate attributeName="fill-opacity" values="0.6;0.2;0.6" dur="4.8s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Bottom-left */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -2,4; 0,0" dur="5.8s" repeatCount="indefinite" />
        <circle cx="140" cy="196" r="8.5" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="140" cy="196" r="4" fill="#64748b" fillOpacity="0.55">
          <animate attributeName="fill-opacity" values="0.55;0.18;0.55" dur="3.6s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Left */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -4,2; 0,0" dur="6.2s" repeatCount="indefinite" />
        <circle cx="80" cy="148" r="9" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="80" cy="148" r="4.5" fill="#94a3b8" fillOpacity="0.6">
          <animate attributeName="fill-opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>

    <span className="absolute top-4 right-6 text-[10px] font-mono text-slate-400/60 animate-float"
          style={{ animationDelay: "0s" }}>
      team assembled
    </span>
    <span className="absolute bottom-5 left-6 text-[10px] font-mono text-slate-400/45 animate-float"
          style={{ animationDelay: "2s" }}>
      2–4 wk deployment
    </span>
    <span className="absolute top-[44%] right-7 text-[10px] font-mono text-slate-400/35 animate-float"
          style={{ animationDelay: "1.3s" }}>
      cross-functional
    </span>
  </div>
);

/* ─── Data ──────────────────────────────────────────────────── */

const contractHandles = [
  "Worker classification (W2 and C2C)",
  "Contract drafting and execution",
  "Background and reference screening",
  "Payroll and benefits administration",
  "Onboarding coordination",
  "Mid-contract check-ins",
];

const contractScenarios = [
  "Project backlog has outpaced your permanent headcount",
  "A key team member is on extended leave and the work can't wait",
  "You have budget approval for output but not for a new headcount line",
  "You need to move in two weeks, not two months",
];

const cthSteps = [
  {
    num: "01",
    title: "Contract Placement",
    body: "The candidate enters on a defined contract with clear scope and duration. Both sides know the evaluation is active — not a formality.",
  },
  {
    num: "02",
    title: "30 / 60-Day Checkpoints",
    body: "Zinoit checks in with both the hiring manager and the contractor at 30 and 60 days. We surface friction early, before it becomes a decision.",
  },
  {
    num: "03",
    title: "Conversion Decision",
    body: "We facilitate the permanent offer conversation, handle the compensation transition, and execute the placement documentation — a managed handoff, not a dropped handoff.",
  },
];

const managedCapabilities = [
  {
    title: "Program Scoping",
    body: "We define the team composition with you before sourcing begins — role mix, seniority balance, skill depth, and integration points. The output is a team blueprint, not a staffing order.",
  },
  {
    title: "Rapid Assembly",
    body: "We draw from existing candidate relationships across our IT, Life Sciences, and Insurance networks — not cold sourcing. Target deployment: 2–4 weeks from scoping to full team in seat.",
  },
  {
    title: "Pre-Deployment Alignment",
    body: "The team is briefed on your environment, processes, tooling, and delivery expectations before day one. Your project doesn't slow down for onboarding.",
  },
  {
    title: "Active Program Support",
    body: "One dedicated point of contact throughout the engagement. Mid-program scaling — up or down — handled without disruption. No handoff after placement.",
  },
];

const managedUseCases = [
  "You need a functioning squad for a defined program, not sequential individual placements",
  "You're launching a system, product, or clinical program with a hard delivery date",
  "Your internal team doesn't have the bandwidth to staff up at the required pace",
  "The work is project-scoped with a clear end-state — not an open-ended headcount need",
];

const directFit = [
  {
    label: "Senior Individual Contributors",
    roles: "Staff, Principal, and Distinguished-level engineers; Senior Regulatory, Clinical, and Actuarial specialists",
  },
  {
    label: "Technical & Domain Leadership",
    roles: "Engineering Managers, VPs, CTOs; Clinical Operations Directors; Chief Actuaries",
  },
  {
    label: "Specialized Functions",
    roles: "Roles where credential depth matters: CRA, Regulatory Affairs, FCAS / FSA actuaries, Security Architects",
  },
  {
    label: "Strategic Hires",
    roles: "Positions where a poor hire sets the team back by months, not weeks — product, data science, clinical leadership",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 max-w-3xl mx-auto leading-tight">
              Four engagement models. One standard of execution.
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              The right staffing model depends on your situation — the timeline, the
              risk tolerance, and whether you need one person or a full team. We'll
              help you choose, then execute to the same standard regardless of which
              path you take.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Anchor Nav ── */}
      <ServicesNav />

      {/* ══════════════════════════════════════════════════
          CONTRACT STAFFING
          Layout: left = narrative + scenarios  |  right = illustration + checklist
      ══════════════════════════════════════════════════ */}
      <section id="contract-staffing" className="bg-white py-24 scroll-mt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-start">

            {/* Narrative */}
            <AnimateIn animation="slide-left">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">01</span>
                <span className="h-px w-8 bg-slate-200" />
                <span className="section-eyebrow mb-0">Contract Staffing</span>
              </div>

              <h2 className="section-heading">
                When the work can't wait for<br className="hidden md:block" /> a permanent hire.
              </h2>
              <div className="section-divider-left mt-5" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                Contract staffing is the right model when speed and flexibility matter
                more than permanence. It gives you immediate access to qualified
                professionals without the overhead, commitment, or timeline of a
                direct hire — and it works especially well when the scope of the
                need is defined.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The staffing decision is fast. The compliance burden isn't. Worker
                classification, contract structuring, payroll logistics, onboarding
                documentation — all of it lands on your HR and legal teams when the
                firm you're using isn't set up to own it. Zinoit owns all of it,
                so your team receives a productive contractor, not a stack of
                administrative work.
              </p>

              {/* When-to-use scenarios */}
              <div className="mt-9">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
                  Use contract staffing when
                </p>
                <ul className="space-y-3">
                  {contractScenarios.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-slate-600 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/employers" className="btn-primary">
                  Start a Contract Search <ArrowRight />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to Our Team
                </Link>
              </div>
            </AnimateIn>

            {/* Right: illustration + what we handle */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="flex flex-col gap-5 lg:sticky lg:top-32">

                <VelocityIllustration />

                <div className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                    What Zinoit handles end-to-end
                  </p>
                  <ul className="space-y-3">
                    {contractHandles.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Available on <span className="font-semibold text-slate-600">W2</span> and{" "}
                      <span className="font-semibold text-slate-600">C2C</span> terms.
                      Most shortlists delivered within{" "}
                      <span className="font-semibold text-slate-600">48 hours</span> of intake.
                    </p>
                  </div>
                </div>

              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTRACT-TO-HIRE
          Layout: full-width narrative  →  3-step process strip
      ══════════════════════════════════════════════════ */}
      <section
        id="contract-to-hire"
        className="bg-brand-gray-soft py-24 border-t border-slate-100 scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Narrative */}
          <AnimateIn animation="fade-up">
            <div className="flex items-center gap-3 mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">02</span>
              <span className="h-px w-8 bg-slate-300" />
              <span className="section-eyebrow mb-0">Contract-to-Hire</span>
            </div>

            <div className="max-w-3xl">
              <h2 className="section-heading">
                The 90-day trial period isn't legal cover.
                <br className="hidden md:block" />
                It's structured evaluation time.
              </h2>
              <div className="section-divider-left mt-5" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                A direct hire at a senior level carries real risk — and most hiring
                managers know it after they've made one that didn't work. No interview
                process, however rigorous, fully predicts how someone performs inside
                your actual codebase, alongside your specific team, under the real
                pressure of your environment. Contract-to-hire exists to close that gap.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The C2H model works when you want decision quality, not just decision
                speed. The contract period gives you 60 to 90 days of actual work
                output — the most reliable signal available in hiring. Used correctly,
                it eliminates mis-hires at the level where mis-hires are most
                expensive.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Zinoit doesn't treat the contract period as a waiting room. We structure
                it as an active evaluation: both parties know the criteria, Zinoit stays
                involved through formal check-ins, and we facilitate the conversion
                conversation when the time comes.
              </p>
            </div>
          </AnimateIn>

          {/* 3-step process strip */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="mt-14 pt-10 border-t border-slate-200 relative">
              {/* connecting line — desktop only */}
              <div className="hidden md:block absolute top-[3.75rem] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-slate-200" />

              <div className="grid md:grid-cols-3 gap-10">
                {cthSteps.map((step, i) => (
                  <AnimateIn key={step.num} animation="fade-up" delay={i * 80}>
                    <div className="flex flex-col items-start md:items-center md:text-center">
                      {/* step indicator */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                        <span className="font-display font-bold text-brand-coral text-sm">{step.num}</span>
                      </div>
                      <h3 className="font-display font-semibold text-slate-900 text-[1rem] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        {step.body}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/employers" className="btn-primary">
                Start a C2H Search <ArrowRight />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DIRECT PLACEMENT
          Layout: left = role-fit card  |  right = illustration + narrative
      ══════════════════════════════════════════════════ */}
      <section
        id="direct-placement"
        className="bg-white py-24 border-t border-slate-100 scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[360px_1fr] gap-16 xl:gap-24 items-start">

            {/* Role-fit card */}
            <AnimateIn animation="slide-left">
              <div className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-8 lg:sticky lg:top-32">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-7">
                  Right for this if you&apos;re hiring
                </p>
                <div className="space-y-6">
                  {directFit.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.1em] mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.roles}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Not sure if direct placement is the right model for your situation?{" "}
                    <Link href="/contact" className="text-brand-coral hover:underline font-medium">
                      Talk to our team
                    </Link>
                    {" "}— we'll tell you honestly.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Illustration + narrative */}
            <AnimateIn animation="slide-right" delay={100}>

              <PrecisionIllustration />

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">03</span>
                  <span className="h-px w-8 bg-slate-200" />
                  <span className="section-eyebrow mb-0">Direct Placement</span>
                </div>

                <h2 className="section-heading">
                  Most direct hire processes optimize<br className="hidden md:block" /> for
                  the wrong thing.
                </h2>
                <div className="section-divider-left mt-5" />

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Volume of candidates creates the illusion of thoroughness. Twelve
                  resumes on your desk means twelve screening calls for your team —
                  not twelve strong options. What actually predicts hire quality is
                  the signal-to-noise ratio in the shortlist: how well each candidate
                  has been screened, how accurately they've been evaluated, and how
                  precisely they've been matched to what the role actually demands.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Zinoit's direct hire process begins before the first resume is
                  submitted. We map the market for the specific profile — including
                  passive candidates who aren't applying anywhere. We run structured
                  technical and domain conversations. Every shortlist we deliver
                  includes our recruiter's written evaluation of each candidate:
                  strengths, gaps, and a direct comparison to what you told us you
                  need.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  You walk into every interview already briefed. That shortens
                  the process and sharpens the outcome.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/employers" className="btn-primary">
                    Start a Direct Search <ArrowRight />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Talk to Our Team
                  </Link>
                </div>
              </div>

            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MANAGED TALENT SERVICES
          Layout: left = illustration + narrative  |  right = use-cases + capability grid
      ══════════════════════════════════════════════════ */}
      <section
        id="managed-talent"
        className="bg-brand-gray-soft py-24 border-t border-slate-100 scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-start">

            {/* Narrative */}
            <AnimateIn animation="slide-left">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">04</span>
                <span className="h-px w-8 bg-slate-300" />
                <span className="section-eyebrow mb-0">Managed Talent Services</span>
              </div>

              <h2 className="section-heading">
                When you need a team delivered,
                <br className="hidden md:block" /> not just individuals placed.
              </h2>
              <div className="section-divider-left mt-5" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                Individual placements work well for steady-state hiring. They don't
                work well when you need five engineers, a clinical operations lead,
                and two QA specialists by the same date. The sequential approach —
                sourcing, screening, and onboarding each person separately — compounds
                delay at exactly the moment your project can least afford it.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Managed Talent Services is Zinoit's project-based model. Rather than
                filling requisitions one at a time, we scope the full team composition
                with you, assemble the right mix of professionals from across our
                candidate network, align the team on your environment and delivery
                expectations, and deploy them as a configured, functional unit.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The result is a team that operates from day one — not a group of
                contractors who happen to share a start date. This model is
                particularly effective for system migrations, clinical program
                build-outs, digital transformation initiatives, and any scoped
                program with a defined delivery target.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Scope a Team <ArrowRight />
                </Link>
                <Link href="/employers" className="btn-secondary">
                  Explore Employer Options
                </Link>
              </div>
            </AnimateIn>

            {/* Right: illustration + when-to-use */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="flex flex-col gap-5 lg:sticky lg:top-32">

                <TeamAssemblyIllustration />

                <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                    Use managed talent when
                  </p>
                  <ul className="space-y-3">
                    {managedUseCases.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <Check />
                        <span className="text-sm text-slate-600 leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </AnimateIn>

          </div>

          {/* Capability blocks — 2×2 grid below the columns */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="mt-16 pt-12 border-t border-slate-200 grid sm:grid-cols-2 gap-5">
              {managedCapabilities.map((item, i) => (
                <AnimateIn key={item.title} animation="fade-up" delay={i * 60}>
                  <div className="bg-white rounded-xl border border-slate-100 shadow-card p-6 h-full">
                    <p className="font-display font-semibold text-slate-900 mb-2 text-[0.95rem]">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — ADVISORY
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Not sure which model fits your situation?
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Describe the role and the timeline. We'll recommend the right engagement
              type — and tell you honestly if something else would serve you better.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to Our Team <ArrowRight />
              </Link>
              <Link href="/employers" className="btn-secondary">
                Explore Employer Options
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </main>
  );
}
