import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import IndustriesNav from "@/components/IndustriesNav";

export const metadata: Metadata = {
  title: "Industries | Zinoit Tech",
  description:
    "Specialized staffing across Technology, Life Sciences & Biotech, and Insurance. Deep domain expertise, not generalist guesswork.",
};

/* ─── Icons ─────────────────────────────────────────────────── */

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Illustrations ─────────────────────────────────────────── */

/**
 * Technology — animated network topology on dark background.
 * Coral palette. Dashed lines flow toward a pulsing central node.
 */
const TechIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "210px", background: "linear-gradient(145deg,#0f1117 0%,#1a1d23 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 360 210"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <pattern id="tech-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.055)" />
        </pattern>
        <radialGradient id="tech-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ff5542" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ff5542" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* dot-grid background */}
      <rect width="360" height="210" fill="url(#tech-dots)" />
      {/* warm radial glow behind center */}
      <ellipse cx="180" cy="105" rx="140" ry="95" fill="url(#tech-glow)" />

      {/* ── Flowing connection lines ── */}
      <line x1="82" y1="48" x2="180" y2="105" stroke="#ff5542" strokeWidth="1"
            strokeOpacity="0.45" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s"   repeatCount="indefinite" />
      </line>
      <line x1="278" y1="48" x2="180" y2="105" stroke="#ff5542" strokeWidth="1"
            strokeOpacity="0.45" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="20"  dur="2.4s" repeatCount="indefinite" />
      </line>
      <line x1="44" y1="165" x2="180" y2="105" stroke="#ff7a5c" strokeWidth="0.8"
            strokeOpacity="0.35" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s"   repeatCount="indefinite" />
      </line>
      <line x1="316" y1="165" x2="180" y2="105" stroke="#ff7a5c" strokeWidth="0.8"
            strokeOpacity="0.35" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" from="0" to="20"  dur="3.5s" repeatCount="indefinite" />
      </line>
      {/* horizontal connectors between satellites */}
      <line x1="82"  y1="48"  x2="278" y2="48" stroke="#ff5542" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="44"  y1="165" x2="316" y2="165" stroke="#ff7a5c" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* ── Central pulsing node ── */}
      {/* outer glow ring */}
      <circle cx="180" cy="105" r="18" fill="#ff5542" fillOpacity="0.08">
        <animate attributeName="r"            values="14;24;14" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.12;0.04;0.12" dur="2.8s" repeatCount="indefinite" />
      </circle>
      {/* core */}
      <circle cx="180" cy="105" r="9" fill="#ff5542" fillOpacity="0.95">
        <animate attributeName="r"            values="9;11;9"  dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.95;0.55;0.95" dur="2.8s" repeatCount="indefinite" />
      </circle>

      {/* ── Satellite nodes ── */}
      <circle cx="82"  cy="48"  r="6" fill="#ff7a5c" fillOpacity="0.85">
        <animate attributeName="fill-opacity" values="0.85;0.35;0.85" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="278" cy="48"  r="5" fill="#ffb8a8" fillOpacity="0.75">
        <animate attributeName="fill-opacity" values="0.75;0.30;0.75" dur="4s"   repeatCount="indefinite" />
      </circle>
      <circle cx="44"  cy="165" r="5" fill="#ff7a5c" fillOpacity="0.65">
        <animate attributeName="fill-opacity" values="0.65;0.25;0.65" dur="3.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="316" cy="165" r="6" fill="#ff5542" fillOpacity="0.8">
        <animate attributeName="fill-opacity" values="0.8;0.35;0.8"  dur="2.6s" repeatCount="indefinite" />
      </circle>

      {/* ── Floating micro-particles ── */}
      <circle cx="132" cy="70" r="2" fill="#ff5542" fillOpacity="0.45">
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 5,-7; 0,0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="228" cy="138" r="2" fill="#ff7a5c" fillOpacity="0.35">
        <animateTransform attributeName="transform" type="translate"
          values="0,0; -5,6; 0,0" dur="5.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="152" cy="155" r="1.5" fill="#ffb8a8" fillOpacity="0.4">
        <animateTransform attributeName="transform" type="translate"
          values="0,0; 3,5; 0,0" dur="3.8s" repeatCount="indefinite" />
      </circle>
    </svg>

    {/* floating monospace labels */}
    <span className="absolute top-5 right-6 text-[10px] font-mono text-white/30 animate-float"
          style={{ animationDelay: "0s" }}>
      &lt;deploy /&gt;
    </span>
    <span className="absolute bottom-5 left-6 text-[10px] font-mono text-white/22 animate-float"
          style={{ animationDelay: "2.5s" }}>
      &#123;&nbsp;cluster:&nbsp;prod&nbsp;&#125;
    </span>
    <span className="absolute top-[43%] right-8 text-[10px] font-mono text-white/18 animate-float"
          style={{ animationDelay: "1.2s" }}>
      git push →
    </span>
  </div>
);

/**
 * Life Sciences — orbiting particles around a nucleus on an emerald field.
 * Two rings orbit in opposite directions; center pulses.
 */
const LifeSciIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "260px", background: "linear-gradient(145deg,#f0fdf4 0%,#d1fae5 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 360 260"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ls-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* background hex accents */}
      <polygon points="52,36 72,25 92,36 92,58 72,69 52,58"
               stroke="#10b981" strokeWidth="0.6" strokeOpacity="0.15" />
      <polygon points="268,192 288,181 308,192 308,214 288,225 268,214"
               stroke="#10b981" strokeWidth="0.6" strokeOpacity="0.15" />
      <polygon points="290,28 310,17 330,28 330,50 310,61 290,50"
               stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.1"  />

      {/* central glow */}
      <circle cx="180" cy="130" r="105" fill="url(#ls-glow)" />

      {/* static orbit ring 1 */}
      <circle cx="180" cy="130" r="66"
              stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="4 7" />
      {/* static orbit ring 2 */}
      <circle cx="180" cy="130" r="98"
              stroke="#0d9488" strokeWidth="0.6" strokeOpacity="0.14" strokeDasharray="3 9" />

      {/* ── Nucleus ── */}
      <circle cx="180" cy="130" r="22" fill="#10b981" fillOpacity="0.12"
              stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45">
        <animate attributeName="r"            values="22;27;22" dur="3s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.12;0.24;0.12" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="130" r="10" fill="#10b981" fillOpacity="0.85">
        <animate attributeName="fill-opacity" values="0.85;0.45;0.85" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* ── Ring-1 orbit — two particles 180° apart, CW ── */}
      <g transform="translate(180,130)">
        <g>
          <animateTransform attributeName="transform" type="rotate"
            from="0" to="360" dur="9s" repeatCount="indefinite" />
          <circle cx="66" cy="0" r="7" fill="#10b981" fillOpacity="0.9" />
          <circle cx="66" cy="0" r="11" fill="#10b981" fillOpacity="0.12" />
          <circle cx="-66" cy="0" r="5" fill="#34d399" fillOpacity="0.8" />
        </g>
      </g>

      {/* ── Ring-2 orbit — two particles, CCW ── */}
      <g transform="translate(180,130)">
        <g>
          <animateTransform attributeName="transform" type="rotate"
            from="360" to="0" dur="15s" repeatCount="indefinite" />
          <circle cx="98" cy="0"   r="5.5" fill="#0d9488" fillOpacity="0.75" />
          <circle cx="-49" cy="84" r="4"   fill="#6ee7b7" fillOpacity="0.6"  />
        </g>
      </g>

      {/* radial axis lines */}
      <line x1="180" y1="108" x2="180" y2="38"  stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.18" />
      <line x1="180" y1="152" x2="180" y2="222" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.18" />
      <line x1="157" y1="130" x2="65"  y2="130" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.18" />
      <line x1="203" y1="130" x2="295" y2="130" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.18" />
    </svg>

    <span className="absolute top-4 right-6 text-[10px] font-mono text-emerald-800/35 animate-float"
          style={{ animationDelay: "0s" }}>
      GxP verified
    </span>
    <span className="absolute bottom-5 left-6 text-[10px] font-mono text-emerald-800/28 animate-float"
          style={{ animationDelay: "2.2s" }}>
      Phase III →
    </span>
    <span className="absolute top-[46%] right-7 text-[10px] font-mono text-emerald-700/22 animate-float"
          style={{ animationDelay: "1.4s" }}>
      IND filed
    </span>
  </div>
);

/**
 * Insurance — concentric dashed rings around a shield; rings rotate slowly
 * in alternating directions. Data nodes pulse on ring intersections.
 * Violet palette.
 */
const InsuranceIllustration = () => (
  <div
    aria-hidden="true"
    className="relative w-full rounded-2xl overflow-hidden select-none"
    style={{ height: "220px", background: "linear-gradient(145deg,#faf5ff 0%,#ede9fe 100%)" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 360 220"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ins-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"    />
        </radialGradient>
      </defs>

      <circle cx="180" cy="110" r="106" fill="url(#ins-glow)" />

      {/* ── Rotating concentric rings ── */}
      {/* ring 1 — CW slow */}
      <circle cx="180" cy="110" r="46"
              stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 5">
        <animate attributeName="stroke-dashoffset" from="0" to="22" dur="8s" repeatCount="indefinite" />
      </circle>
      {/* ring 2 — CCW */}
      <circle cx="180" cy="110" r="74"
              stroke="#7c3aed" strokeWidth="0.9" strokeOpacity="0.2" strokeDasharray="6 7">
        <animate attributeName="stroke-dashoffset" from="0" to="-26" dur="12s" repeatCount="indefinite" />
      </circle>
      {/* ring 3 — CW slowest */}
      <circle cx="180" cy="110" r="102"
              stroke="#a78bfa" strokeWidth="0.6" strokeOpacity="0.14" strokeDasharray="5 9">
        <animate attributeName="stroke-dashoffset" from="0" to="28" dur="18s" repeatCount="indefinite" />
      </circle>

      {/* ── Shield shape ── */}
      <path
        d="M 180 76 C 204 76 212 90 212 108 L 212 118 C 212 132 198 143 180 150
           C 162 143 148 132 148 118 L 148 108 C 148 90 156 76 180 76 Z"
        fill="#8b5cf6" fillOpacity="0.12"
        stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.5">
        <animate attributeName="fill-opacity" values="0.12;0.26;0.12" dur="3s" repeatCount="indefinite" />
      </path>
      {/* checkmark inside shield */}
      <path d="M 170 112 L 177 120 L 193 100"
            stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.7"
            strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Pulsing data nodes on rings ── */}
      {/* ring 1 — N E S W */}
      <circle cx="180" cy="64"  r="4"   fill="#8b5cf6" fillOpacity="0.7">
        <animate attributeName="fill-opacity" values="0.7;0.25;0.7"  dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="226" cy="110" r="3.5" fill="#7c3aed" fillOpacity="0.6">
        <animate attributeName="fill-opacity" values="0.6;0.2;0.6"   dur="3.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="156" r="4"   fill="#8b5cf6" fillOpacity="0.65">
        <animate attributeName="fill-opacity" values="0.65;0.2;0.65" dur="3.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="134" cy="110" r="3.5" fill="#a78bfa" fillOpacity="0.6">
        <animate attributeName="fill-opacity" values="0.6;0.2;0.6"   dur="2.9s" repeatCount="indefinite" />
      </circle>
      {/* ring 2 — diagonal */}
      <circle cx="252" cy="72"  r="3"   fill="#7c3aed" fillOpacity="0.4">
        <animate attributeName="fill-opacity" values="0.4;0.12;0.4"  dur="4.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="252" cy="148" r="3"   fill="#8b5cf6" fillOpacity="0.4">
        <animate attributeName="fill-opacity" values="0.4;0.12;0.4"  dur="3.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="108" cy="72"  r="3"   fill="#a78bfa" fillOpacity="0.4">
        <animate attributeName="fill-opacity" values="0.4;0.12;0.4"  dur="5s"   repeatCount="indefinite" />
      </circle>
      <circle cx="108" cy="148" r="3"   fill="#7c3aed" fillOpacity="0.4">
        <animate attributeName="fill-opacity" values="0.4;0.12;0.4"  dur="3.8s" repeatCount="indefinite" />
      </circle>
    </svg>

    <span className="absolute top-4 right-6 text-[10px] font-mono text-violet-700/32 animate-float"
          style={{ animationDelay: "0s" }}>
      risk: managed
    </span>
    <span className="absolute bottom-5 left-6 text-[10px] font-mono text-violet-700/25 animate-float"
          style={{ animationDelay: "1.8s" }}>
      compliance ✓
    </span>
    <span className="absolute top-[44%] right-7 text-[10px] font-mono text-violet-600/20 animate-float"
          style={{ animationDelay: "1s" }}>
      FCAS verified
    </span>
  </div>
);

/* ─── Data ──────────────────────────────────────────────────── */

const techFunctions = [
  {
    family: "Engineering & Architecture",
    roles: [
      "Software Engineers",
      "Backend / Full-Stack Developers",
      "Solution Architects",
      "Staff & Principal Engineers",
    ],
  },
  {
    family: "Data & AI",
    roles: [
      "Data Engineers",
      "ML / AI Engineers",
      "Analytics Engineers",
      "Data Scientists",
    ],
  },
  {
    family: "Infrastructure & Security",
    roles: [
      "DevOps & Platform Engineers",
      "Cloud Engineers (AWS / Azure / GCP)",
      "Site Reliability Engineers",
      "Security & AppSec Analysts",
    ],
  },
  {
    family: "Product & Delivery",
    roles: [
      "Technical Product Managers",
      "Engineering Managers",
      "QA / SDET Engineers",
    ],
  },
];

const lifeSciColumns = [
  {
    function: "Clinical Operations",
    roles: [
      "Clinical Research Associates",
      "Clinical Trial Managers",
      "Site Management Professionals",
      "Study Start-Up Specialists",
    ],
  },
  {
    function: "Regulatory & Quality",
    roles: [
      "Regulatory Affairs Specialists",
      "QA / QC Managers",
      "Validation Engineers",
      "CMC Specialists",
    ],
  },
  {
    function: "Scientific & Research",
    roles: [
      "Research Scientists",
      "Bioinformaticians",
      "Lab Analysts",
      "Computational Biologists",
    ],
  },
  {
    function: "Medical Affairs & Commercial",
    roles: [
      "Medical Science Liaisons",
      "Medical Writers",
      "HEOR Analysts",
      "Clinical Educators",
    ],
  },
];

const lifeSciCapabilities = [
  {
    title: "Compliance-aware sourcing.",
    body: "We understand GxP environments, ICH guidelines, and FDA regulatory frameworks. That knowledge shapes how we qualify candidates before they reach your scientific leadership.",
  },
  {
    title: "Credentialing by sub-discipline.",
    body: "A CRA with Phase I oncology experience is not interchangeable with one from Phase III cardiovascular trials. We know the difference and screen accordingly.",
  },
  {
    title: "Contract-to-perm in regulated settings.",
    body: "We manage employment classification, background checks, and onboarding documentation for both contract and permanent placements in FDA-regulated environments.",
  },
];

const insuranceCore = [
  "Actuaries (FCAS / MAAA / FSA)",
  "Underwriters — P&C, Commercial, Specialty",
  "Claims Adjusters & Examiners",
  "Risk Analysts",
  "Compliance & Regulatory Officers",
  "Benefits Administrators",
];

const insuranceTech = [
  "Insurance Technology Specialists",
  "Data & Predictive Analytics",
  "Digital Operations Managers",
  "Product Managers — Insurtech",
  "Automation & Core Systems Engineers",
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function IndustriesPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">Industries</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 max-w-3xl mx-auto leading-tight">
              Built for industries where hiring mistakes are expensive
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Zinoit operates in three verticals where domain knowledge is
              non-negotiable. Our recruiters don't generalize — they specialize,
              and that distinction shows up in every shortlist we deliver.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Anchor Nav ── */}
      <IndustriesNav />

      {/* ══════════════════════════════════════════════════
          TECHNOLOGY
          Layout: left = narrative  |  right = illustration + role card
      ══════════════════════════════════════════════════ */}
      <section id="technology" className="bg-white py-24 scroll-mt-[120px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-start">

            {/* Narrative */}
            <AnimateIn animation="slide-left">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">01</span>
                <span className="h-px w-8 bg-slate-200" />
                <span className="section-eyebrow mb-0">Technology</span>
              </div>

              <h2 className="section-heading">
                The market for technical talent
                <br className="hidden md:block" />
                has never been more compressed.
              </h2>
              <div className="section-divider-left mt-5" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                Engineers with specialized skills — cloud-native architecture, applied
                AI, distributed systems, security engineering — operate in a
                candidate-driven market where top performers are rarely unplaced for
                more than a few weeks. The challenge for most hiring managers isn't
                awareness of the gap. It's what comes through the door:
                resume-screened candidates who pass ATS filters but can't hold a
                technical conversation.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Zinoit's technical recruiters conduct structured capability
                conversations before a candidate ever reaches your team — covering
                system design, architectural trade-offs, and domain reasoning specific
                to your environment. Most shortlists are delivered within 48 hours of
                a completed intake.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/employers" className="btn-primary">
                  Hire Tech Talent <ArrowRight />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to Our Team
                </Link>
              </div>
            </AnimateIn>

            {/* Right column: illustration on top, role card below */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="flex flex-col gap-5 lg:sticky lg:top-32">

                {/* Animated tech visualization */}
                <TechIllustration />

                {/* Role families card */}
                <div className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-6">
                    Functions we support
                  </p>
                  <div className="space-y-6">
                    {techFunctions.map((group) => (
                      <div key={group.family}>
                        <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.1em] mb-2.5">
                          {group.family}
                        </p>
                        <ul className="space-y-1.5">
                          {group.roles.map((role) => (
                            <li key={role} className="flex items-center gap-2.5 text-sm text-slate-600">
                              <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LIFE SCIENCES & BIOTECH
          Layout: header is 2-col (narrative | illustration)
                  then roles grid, then capability cards
      ══════════════════════════════════════════════════ */}
      <section
        id="life-sciences"
        className="bg-brand-gray-soft py-24 border-t border-slate-100 scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header — narrative left, illustration right */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-16 items-start">

            <AnimateIn animation="slide-left">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">02</span>
                <span className="h-px w-8 bg-slate-300" />
                <span className="section-eyebrow mb-0">Life Sciences & Biotech</span>
              </div>

              <h2 className="section-heading">
                A wrong hire in a regulated environment
                <br className="hidden md:block" />
                isn't a setback. It's a program risk.
              </h2>
              <div className="section-divider-left mt-5" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                Hiring in life sciences operates under constraints that don't exist in
                other industries. Regulatory timelines, GxP compliance requirements,
                and the credentialing demands of clinical environments create a narrow
                margin for error. Most staffing firms treat this vertical like any
                other — they search for job titles, forward credentials, and leave the
                real evaluation to your scientific leadership.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Zinoit was built differently. Our life sciences recruiters understand
                GxP environments, ICH guidelines, and FDA regulatory frameworks. That
                knowledge shapes how we qualify candidates, structure shortlists, and
                advise on hiring decisions — before anyone reaches your team.
              </p>
            </AnimateIn>

            {/* Animated molecular/orbital visualization */}
            <AnimateIn animation="slide-right" delay={100}>
              <LifeSciIllustration />
            </AnimateIn>

          </div>

          {/* Role families — 4 labeled columns */}
          <AnimateIn animation="fade-up" delay={80}>
            <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              {lifeSciColumns.map((col) => (
                <div key={col.function}>
                  <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.1em] mb-3">
                    {col.function}
                  </p>
                  <ul className="space-y-2">
                    {col.roles.map((role) => (
                      <li key={role} className="text-sm text-slate-600 leading-snug">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Capability cards */}
          <AnimateIn animation="fade-up" delay={140}>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {lifeSciCapabilities.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-100 shadow-card p-6"
                >
                  <p className="font-display font-semibold text-slate-900 mb-2 text-[0.95rem]">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/employers" className="btn-primary">
                Hire Life Sciences Talent <ArrowRight />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INSURANCE
          Layout: left = role card  |  right = illustration + narrative
      ══════════════════════════════════════════════════ */}
      <section
        id="insurance"
        className="bg-white py-24 border-t border-slate-100 scroll-mt-[120px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[360px_1fr] gap-16 xl:gap-24 items-start">

            {/* Role families — dual category */}
            <AnimateIn animation="slide-left">
              <div className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-8 lg:sticky lg:top-32">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-7">
                  Functions we support
                </p>

                <div>
                  <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.1em] mb-3">
                    Traditional & Core
                  </p>
                  <ul className="space-y-2">
                    {insuranceCore.map((role) => (
                      <li key={role} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-7 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.1em] mb-3">
                    Emerging & Technical
                  </p>
                  <ul className="space-y-2">
                    {insuranceTech.map((role) => (
                      <li key={role} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>

            {/* Narrative — illustration on top, text below */}
            <AnimateIn animation="slide-right" delay={100}>

              {/* Animated shield visualization */}
              <InsuranceIllustration />

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">03</span>
                  <span className="h-px w-8 bg-slate-200" />
                  <span className="section-eyebrow mb-0">Insurance</span>
                </div>

                <h2 className="section-heading">
                  The industry is mid-transformation.
                  <br className="hidden md:block" />
                  The talent market hasn't kept pace.
                </h2>
                <div className="section-divider-left mt-5" />

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Legacy carriers are modernizing core systems. Insurtech challengers
                  are scaling product and operations teams. Both face the same
                  constraint: a limited pool of credentialed, domain-knowledgeable
                  professionals who can operate effectively in either environment.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Most staffing firms don't serve insurance well. The market is too
                  niche for generalists, too regulated for firms without compliance
                  infrastructure, and too technically bifurcated — traditional actuarial
                  and underwriting roles on one side, data and technology roles on the
                  other — for a single recruiter to serve competently across both.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Zinoit maintains active pipelines across both sides of that divide.
                  Our recruiters understand state licensing requirements, actuarial
                  credentialing, and the distinct cultural expectations of mutual
                  carriers versus venture-backed challengers. Whether you're staffing a
                  core systems migration or building a new product function, we bring
                  the same domain fluency your internal team would.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/employers" className="btn-primary">
                    Hire Insurance Talent <ArrowRight />
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
          CTA
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to start a search?
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Tell us about the role. We'll respond within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/employers" className="btn-primary">
                Talk to Our Team <ArrowRight />
              </Link>
              <Link href="/candidates" className="btn-secondary">
                Browse Open Roles
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </main>
  );
}
