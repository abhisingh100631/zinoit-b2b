import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { caseStudies } from "./data";

export const metadata: Metadata = {
  title: "Case Studies | Zinoit — B2B Demand Generation",
  description:
    "Explore representative B2B demand generation campaign scenarios from Zinoit — covering ABM, intent-based demand gen, appointment setting, global content syndication, and more.",
};

/* ─── Per-industry abstract SVG illustrations ──────────────── */

const CybersecurityIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <pattern id="cs-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
    </pattern>
    <rect width="400" height="200" fill="url(#cs-grid)" />
    {/* Outer glow */}
    <ellipse cx="200" cy="100" rx="90" ry="70" fill="#6B21A8" fillOpacity="0.08" />
    {/* Central hexagon shield */}
    <polygon points="200,52 230,68 230,100 200,116 170,100 170,68" stroke="#6B21A8" strokeWidth="1.5" fill="#6B21A8" fillOpacity="0.15" />
    <polygon points="200,62 222,74 222,98 200,110 178,98 178,74" stroke="#9B59D6" strokeWidth="1" fill="none" />
    {/* Check inside shield */}
    <path d="M190 88 L198 96 L214 80" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Radiating nodes */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x = 200 + Math.cos(rad) * 65;
      const y = 100 + Math.sin(rad) * 50;
      const x2 = 200 + Math.cos(rad) * 44;
      const y2 = 100 + Math.sin(rad) * 34;
      return (
        <g key={i}>
          <line x1={x2} y1={y2} x2={x} y2={y} stroke={i % 2 === 0 ? "#6B21A8" : "#9B59D6"} strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 3 === 0 ? "#F59E0B" : "#6B21A8"} fillOpacity="0.85" />
        </g>
      );
    })}
    {/* Outer ring nodes */}
    {[22, 112, 202, 292].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x = 200 + Math.cos(rad) * 110;
      const y = 100 + Math.sin(rad) * 80;
      const xm = 200 + Math.cos(rad) * 70;
      const ym = 100 + Math.sin(rad) * 54;
      return (
        <g key={i}>
          <line x1={xm} y1={ym} x2={x} y2={y} stroke="#9B59D6" strokeWidth="0.6" strokeOpacity="0.4" strokeDasharray="3 3" />
          <circle cx={x} cy={y} r="4" fill="#9B59D6" fillOpacity="0.5" />
          <circle cx={x} cy={y} r="7" stroke="#9B59D6" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
        </g>
      );
    })}
  </svg>
);

const CloudDataIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <pattern id="cd-dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.05)" />
    </pattern>
    <rect width="400" height="200" fill="url(#cd-dots)" />
    {/* Cloud shape */}
    <path d="M160 120 Q145 120 140 108 Q135 96 148 90 Q148 72 165 70 Q175 60 192 65 Q202 55 218 62 Q235 58 242 72 Q258 74 258 90 Q272 96 265 110 Q260 120 248 120 Z" fill="#1E293B" stroke="#6B21A8" strokeWidth="1.5" />
    <path d="M160 120 Q145 120 140 108 Q135 96 148 90 Q148 72 165 70 Q175 60 192 65 Q202 55 218 62 Q235 58 242 72 Q258 74 258 90 Q272 96 265 110 Q260 120 248 120 Z" fill="#6B21A8" fillOpacity="0.1" />
    {/* Upload arrows into cloud */}
    {[140, 200, 260].map((x, i) => (
      <g key={i}>
        <line x1={x} y1={155} x2={x} y2={128} stroke="#9B59D6" strokeWidth="1.2" strokeOpacity="0.7" strokeDasharray={i === 1 ? "none" : "4 3"} />
        <path d={`M${x - 6} 140 L${x} 128 L${x + 6} 140`} stroke={i === 1 ? "#F59E0B" : "#9B59D6"} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        <rect x={x - 10} y={155} width="20" height="14" rx="4" fill="#6B21A8" fillOpacity="0.25" stroke="#6B21A8" strokeWidth="0.8" />
      </g>
    ))}
    {/* Nodes on cloud */}
    {[165, 200, 235].map((x, i) => (
      <circle key={i} cx={x} cy={95} r={i === 1 ? 5 : 3.5} fill={i === 1 ? "#F59E0B" : "#9B59D6"} fillOpacity="0.9" />
    ))}
    <line x1="168" y1="95" x2="196" y2="95" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="204" y1="95" x2="232" y2="95" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
    {/* Right side output nodes */}
    {[80, 105, 130].map((y, i) => (
      <g key={i}>
        <line x1="265" y1={y} x2="305" y2={y} stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 2" />
        <circle cx={310} cy={y} r="4" fill={i === 1 ? "#F59E0B" : "#6B21A8"} fillOpacity="0.8" />
      </g>
    ))}
  </svg>
);

const SaaSIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <pattern id="saas-grid" width="22" height="22" patternUnits="userSpaceOnUse">
      <path d="M22 0 L0 0 0 22" fill="none" stroke="rgba(107,33,168,0.08)" strokeWidth="0.5" />
    </pattern>
    <rect width="400" height="200" fill="url(#saas-grid)" />
    {/* Stack of module layers */}
    {[
      { y: 60,  w: 200, color: "#6B21A8", opacity: 0.9, label: "Executive Layer" },
      { y: 95,  w: 240, color: "#7C3AED", opacity: 0.75, label: "Management Layer" },
      { y: 130, w: 280, color: "#9B59D6", opacity: 0.6, label: "Operational Layer" },
    ].map((layer, i) => (
      <g key={i}>
        <rect x={200 - layer.w / 2} y={layer.y} width={layer.w} height="28" rx="6" fill={layer.color} fillOpacity={layer.opacity * 0.2} stroke={layer.color} strokeWidth="1" strokeOpacity={layer.opacity} />
        {/* Connection dots on left and right */}
        <circle cx={200 - layer.w / 2 - 1} cy={layer.y + 14} r="3.5" fill={layer.color} fillOpacity="0.8" />
        <circle cx={200 + layer.w / 2 + 1} cy={layer.y + 14} r="3.5" fill={layer.color} fillOpacity="0.8" />
        {/* Connecting lines between layers */}
        {i < 2 && (
          <>
            <line x1="195" y1={layer.y + 28} x2="195" y2={layer.y + 38} stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="205" y1={layer.y + 28} x2="205" y2={layer.y + 38} stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.5" />
          </>
        )}
      </g>
    ))}
    {/* Amber accent layer highlight */}
    <rect x="100" y="95" width="240" height="28" rx="6" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.6" fill="none" strokeDasharray="4 3" />
    {/* Side nodes */}
    {[73, 108, 143].map((y, i) => (
      <g key={i}>
        <line x1="68" y1={y} x2="88" y2={y + (i === 0 ? 0 : 0)} stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="64" cy={y} r="4" fill={i === 1 ? "#F59E0B" : "#6B21A8"} fillOpacity="0.7" />
        <line x1="313" y1={y} x2="333" y2={y} stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="337" cy={y} r="4" fill={i === 1 ? "#F59E0B" : "#9B59D6"} fillOpacity="0.7" />
      </g>
    ))}
  </svg>
);

const AIDataIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
    </radialGradient>
    <ellipse cx="200" cy="100" rx="130" ry="90" fill="url(#ai-glow)" />
    {/* Neural network nodes — input layer */}
    {[60, 85, 110, 135].map((y, i) => (
      <circle key={i} cx="90" cy={y} r="5" fill="#6B21A8" fillOpacity="0.8" />
    ))}
    {/* Hidden layer 1 */}
    {[70, 100, 130].map((y, i) => (
      <circle key={i} cx="160" cy={y} r="6" fill="#7C3AED" fillOpacity="0.9" />
    ))}
    {/* Hidden layer 2 */}
    {[75, 100, 125].map((y, i) => (
      <circle key={i} cx="240" cy={y} r="6" fill="#9B59D6" fillOpacity="0.9" />
    ))}
    {/* Output layer */}
    {[85, 115].map((y, i) => (
      <circle key={i} cx="310" cy={y} r="7" fill={i === 0 ? "#F59E0B" : "#6B21A8"} fillOpacity="0.9" />
    ))}
    {/* Connections input → hidden1 */}
    {[60, 85, 110, 135].flatMap((y1, i) =>
      [70, 100, 130].map((y2, j) => (
        <line key={`${i}-${j}`} x1="95" y1={y1} x2="154" y2={y2} stroke="#6B21A8" strokeWidth="0.6" strokeOpacity="0.3" />
      ))
    )}
    {/* Connections hidden1 → hidden2 */}
    {[70, 100, 130].flatMap((y1, i) =>
      [75, 100, 125].map((y2, j) => (
        <line key={`h${i}-${j}`} x1="166" y1={y1} x2="234" y2={y2} stroke="#9B59D6" strokeWidth="0.6" strokeOpacity={i === 1 && j === 1 ? 0.8 : 0.25} />
      ))
    )}
    {/* Connections hidden2 → output */}
    {[75, 100, 125].flatMap((y1, i) =>
      [85, 115].map((y2, j) => (
        <line key={`o${i}-${j}`} x1="246" y1={y1} x2="303" y2={y2} stroke={j === 0 ? "#F59E0B" : "#9B59D6"} strokeWidth={j === 0 && i === 1 ? 1.2 : 0.6} strokeOpacity={j === 0 ? 0.6 : 0.25} />
      ))
    )}
    {/* Animated signal dots along highlighted path */}
    <circle cx="125" cy="92" r="2.5" fill="#F59E0B" fillOpacity="0.9" />
    <circle cx="200" cy="98" r="2.5" fill="#F59E0B" fillOpacity="0.7" />
    <circle cx="275" cy="93" r="2.5" fill="#F59E0B" fillOpacity="0.9" />
  </svg>
);

const MultiRegionIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    {/* Globe ellipses */}
    <ellipse cx="200" cy="100" rx="85" ry="85" stroke="#6B21A8" strokeWidth="1" strokeOpacity="0.4" fill="none" />
    <ellipse cx="200" cy="100" rx="85" ry="42" stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
    <ellipse cx="200" cy="100" rx="42" ry="85" stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
    <line x1="115" y1="100" x2="285" y2="100" stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.3" />
    <line x1="200" y1="15" x2="200" y2="185" stroke="#6B21A8" strokeWidth="0.8" strokeOpacity="0.3" />
    {/* Globe fill */}
    <ellipse cx="200" cy="100" rx="85" ry="85" fill="#6B21A8" fillOpacity="0.05" />
    {/* Region markers */}
    {[
      { x: 152, y: 72, label: "NA", color: "#F59E0B" },
      { x: 220, y: 68, label: "EU", color: "#9B59D6" },
      { x: 175, y: 125, label: "UK", color: "#6B21A8" },
    ].map((r) => (
      <g key={r.label}>
        <circle cx={r.x} cy={r.y} r="8" fill={r.color} fillOpacity="0.85" />
        <circle cx={r.x} cy={r.y} r="14" stroke={r.color} strokeWidth="1" strokeOpacity="0.3" fill="none" />
      </g>
    ))}
    {/* Connection arcs between regions */}
    <path d="M155 70 Q186 50 217 68" stroke="#F59E0B" strokeWidth="1.2" strokeOpacity="0.6" fill="none" />
    <path d="M155 75 Q162 100 178 123" stroke="#9B59D6" strokeWidth="1" strokeOpacity="0.5" fill="none" />
    <path d="M215 73 Q205 100 180 122" stroke="#9B59D6" strokeWidth="1" strokeOpacity="0.4" fill="none" strokeDasharray="3 2" />
    {/* Data flow dots on arcs */}
    <circle cx="186" cy="57" r="2.5" fill="#F59E0B" fillOpacity="0.9" />
    <circle cx="165" cy="97" r="2" fill="#9B59D6" fillOpacity="0.8" />
    <circle cx="197" cy="97" r="2" fill="#9B59D6" fillOpacity="0.8" />
  </svg>
);

const IntentDataIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    {/* Radar circles */}
    {[20, 40, 60, 80].map((r, i) => (
      <circle key={i} cx="200" cy="108" r={r} stroke="#6B21A8" strokeWidth="0.8" strokeOpacity={0.6 - i * 0.1} fill={i === 0 ? "#6B21A8" : "none"} fillOpacity="0.08" />
    ))}
    {/* Radar sweep line */}
    <line x1="200" y1="108" x2="265" y2="58" stroke="#6B21A8" strokeWidth="1.2" strokeOpacity="0.7" />
    <path d="M200 108 L265 58 A80 80 0 0 1 280 108 Z" fill="#6B21A8" fillOpacity="0.08" />
    {/* Target point */}
    <circle cx="255" cy="68" r="6" fill="#F59E0B" fillOpacity="0.9" />
    <circle cx="255" cy="68" r="11" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.4" fill="none" />
    {/* Signal dots at various distances */}
    <circle cx="228" cy="88" r="3.5" fill="#9B59D6" fillOpacity="0.8" />
    <circle cx="175" cy="85" r="2.5" fill="#6B21A8" fillOpacity="0.6" />
    <circle cx="185" cy="135" r="3" fill="#6B21A8" fillOpacity="0.5" />
    <circle cx="235" cy="138" r="2.5" fill="#9B59D6" fillOpacity="0.5" />
    {/* Center dot */}
    <circle cx="200" cy="108" r="4" fill="#F59E0B" fillOpacity="0.9" />
    <circle cx="200" cy="108" r="8" stroke="#F59E0B" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
    {/* Cross hairs */}
    <line x1="186" y1="108" x2="194" y2="108" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="206" y1="108" x2="214" y2="108" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="200" y1="94" x2="200" y2="100" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="200" y1="116" x2="200" y2="122" stroke="#9B59D6" strokeWidth="0.8" strokeOpacity="0.6" />
  </svg>
);

const ReengagementIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <pattern id="re-dots" width="18" height="18" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.04)" />
    </pattern>
    <rect width="400" height="200" fill="url(#re-dots)" />
    {/* Database cylinders */}
    {[120, 200, 280].map((x, i) => (
      <g key={i}>
        <ellipse cx={x} cy={76} rx="28" ry="8" fill="#1E293B" stroke={i === 1 ? "#6B21A8" : "#334155"} strokeWidth="1.2" />
        <rect x={x - 28} y={76} width="56" height="44" fill="#1E293B" stroke={i === 1 ? "#6B21A8" : "#334155"} strokeWidth="1.2" />
        <ellipse cx={x} cy={120} rx="28" ry="8" fill="#1E293B" stroke={i === 1 ? "#6B21A8" : "#334155"} strokeWidth="1.2" />
        <ellipse cx={x} cy={76} rx="28" ry="8" fill={i === 1 ? "#6B21A8" : "#334155"} fillOpacity={i === 1 ? 0.3 : 0.2} />
        {/* Data lines inside cylinder */}
        {[88, 96, 104].map((y) => (
          <line key={y} x1={x - 18} y1={y} x2={x + 18} y2={y} stroke={i === 1 ? "#9B59D6" : "#475569"} strokeWidth="0.8" strokeOpacity="0.6" />
        ))}
        {i === 1 && (
          <text x={x} y={101} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="600">ACTIVE</text>
        )}
      </g>
    ))}
    {/* Circular re-engagement arrows */}
    <path d="M148 98 Q174 148 200 148 Q226 148 252 98" stroke="#9B59D6" strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeDasharray="4 3" />
    {/* Arrow heads */}
    <path d="M148 98 L143 108 L153 106" stroke="#9B59D6" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    <path d="M252 98 L257 108 L247 106" stroke="#F59E0B" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    {/* Central activation arrow upward */}
    <path d="M200 148 L200 130" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" />
    <path d="M196 134 L200 126 L204 134" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>
);

const FintechIllustration = () => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect width="400" height="200" fill="#0F172A" />
    <radialGradient id="fin-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.08" />
      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
    </radialGradient>
    <ellipse cx="200" cy="100" rx="120" ry="80" fill="url(#fin-glow)" />
    {/* Central committee node */}
    <circle cx="200" cy="100" r="18" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="200" cy="100" r="10" fill="#F59E0B" fillOpacity="0.8" />
    {/* Committee member nodes */}
    {[
      { x: 135, y: 65, label: "Tech", color: "#6B21A8" },
      { x: 265, y: 65, label: "Fin", color: "#9B59D6" },
      { x: 110, y: 115, label: "Ops", color: "#6B21A8" },
      { x: 290, y: 115, label: "Risk", color: "#9B59D6" },
      { x: 200, y: 155, label: "Biz", color: "#7C3AED" },
    ].map((node) => (
      <g key={node.label}>
        <line x1="200" y1="100" x2={node.x} y2={node.y} stroke={node.color} strokeWidth="1" strokeOpacity="0.5" />
        <circle cx={node.x} cy={node.y} r="14" fill={node.color} fillOpacity="0.15" stroke={node.color} strokeWidth="1.2" />
        <circle cx={node.x} cy={node.y} r="7" fill={node.color} fillOpacity="0.8" />
      </g>
    ))}
    {/* Outer ring connections between nodes */}
    <path d="M135 65 Q102 90 110 115" stroke="#6B21A8" strokeWidth="0.7" strokeOpacity="0.35" fill="none" strokeDasharray="3 2" />
    <path d="M265 65 Q298 90 290 115" stroke="#9B59D6" strokeWidth="0.7" strokeOpacity="0.35" fill="none" strokeDasharray="3 2" />
    <path d="M110 115 Q155 162 200 155" stroke="#6B21A8" strokeWidth="0.7" strokeOpacity="0.35" fill="none" strokeDasharray="3 2" />
    <path d="M290 115 Q245 162 200 155" stroke="#9B59D6" strokeWidth="0.7" strokeOpacity="0.35" fill="none" strokeDasharray="3 2" />
    <path d="M135 65 Q200 42 265 65" stroke="#F59E0B" strokeWidth="0.8" strokeOpacity="0.3" fill="none" strokeDasharray="3 2" />
  </svg>
);

const illustrations: Record<string, React.FC> = {
  "cybersecurity-enterprise-abm": CybersecurityIllustration,
  "cloud-data-transformation": CloudDataIllustration,
  "b2b-saas-abm": SaaSIllustration,
  "ai-data-appointment-setting": AIDataIllustration,
  "multi-region-global": MultiRegionIllustration,
  "intent-data-activation": IntentDataIllustration,
  "prospect-reengagement": ReengagementIllustration,
  "fintech-buying-committee": FintechIllustration,
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-brand-navy overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-green/8 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green-mid mb-5">
              Real-World B2B Growth Strategies
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              From Audience to{" "}
              <span className="text-brand-teal">Opportunity</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">
              Explore how modern demand generation strategies can help B2B organizations identify the right accounts, engage buying committees, and create more meaningful paths to pipeline.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <div className="mt-10 flex flex-wrap gap-3">
              {["ABM", "Lead Generation", "Appointment Setting", "Content Syndication", "Intent Data", "Global Programs"].map((tag) => (
                <span key={tag} className="text-xs font-semibold text-brand-green-mid bg-brand-green/10 border border-brand-green/20 px-3.5 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <svg className="w-4 h-4 text-brand-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-white/50 leading-relaxed">
            The scenarios below are representative examples of the types of campaigns Zinoit is designed to execute. Metrics are illustrative of program design and approach. All case studies are labeled{" "}
            <span className="text-brand-teal font-semibold">Representative Campaign Scenario</span>.
          </p>
        </div>
      </div>

      {/* ── Case study cards grid ── */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-7">
            {caseStudies.map((cs, i) => {
              const Illustration = illustrations[cs.slug];
              return (
                <AnimateIn key={cs.slug} animation="fade-up" delay={i * 60}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Illustration area */}
                    <div className="relative h-[180px] overflow-hidden bg-brand-navy flex-shrink-0">
                      <Illustration />
                      {/* Number overlay */}
                      <div className="absolute top-4 left-4 font-display font-bold text-5xl text-white/[0.07] leading-none select-none pointer-events-none">
                        {cs.number}
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Industry + campaign */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="chip text-xs">{cs.industry}</span>
                        <span className="text-[11px] text-slate-400 font-medium">{cs.targetMarket}</span>
                      </div>

                      <h2 className="font-display font-bold text-brand-navy text-lg leading-snug mb-3 group-hover:text-brand-green transition-colors duration-200">
                        {cs.title}
                      </h2>

                      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                        {cs.summary}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-slate-100">
                        {cs.cardMetrics.map((m) => (
                          <div key={m.label}>
                            <p className="font-display font-extrabold text-brand-navy text-xl leading-none mb-1">
                              {m.value}
                            </p>
                            <p className="text-[11px] text-slate-400 leading-tight">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-green group-hover:gap-2.5 transition-all duration-200">
                        Explore Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-green-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Build Your Next Demand Generation Program?
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Let&apos;s discuss your audience, ICP, campaign objectives, and pipeline goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/book-call" className="btn-white text-sm">
                Book a Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-ghost-white text-sm">
                Send us a brief
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
