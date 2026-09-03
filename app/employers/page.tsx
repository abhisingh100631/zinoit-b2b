import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Hire Talent | Zinoit Tech",
  description:
    "Specialized staffing for IT, Life Sciences, and Insurance employers. Pre-evaluated shortlists in 48 hours. Contract, C2H, direct placement, and managed talent.",
};

/* ─── Icons ─────────────────────────────────────────────────── */

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/* ─── Shortlist Preview Card ─────────────────────────────────
   Renders what a Zinoit shortlist delivery actually looks like.
   Makes the deliverable tangible rather than abstract.
──────────────────────────────────────────────────────────── */
const ShortlistPreview = () => {
  const candidates = [
    {
      initials: "AK",
      name: "A. Kumar",
      title: "Sr. DevOps · FinTech",
      note: "Strong Kubernetes + ArgoCD depth. Led ECS-to-EKS migration at scale. AWS is secondary to GCP — worth probing in interview.",
      tag: "Reviewed",
    },
    {
      initials: "MR",
      name: "M. Reyes",
      title: "Platform Eng. · HealthTech",
      note: "AWS-native, 4 yrs Terraform at enterprise scale. Directly comparable to your environment. High recommendation.",
      tag: "Top pick",
      highlight: true,
    },
    {
      initials: "SL",
      name: "S. Li",
      title: "DevOps Lead · Biotech",
      note: "HIPAA-compliant infra background. Compliance-aware ops is a differentiator for your regulated context.",
      tag: "Reviewed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card-lg overflow-hidden w-full max-w-sm">
      {/* Card header */}
      <div className="px-5 py-4 border-b border-slate-100 bg-brand-gray-soft">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">
              Shortlist · 3 of 5
            </p>
            <p className="font-display font-semibold text-slate-900 text-sm leading-tight">
              Senior DevOps Engineer
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Healthcare SaaS · Direct Placement
            </p>
          </div>
          <span className="flex-shrink-0 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full mt-0.5">
            Delivered
          </span>
        </div>
      </div>

      {/* Candidate rows */}
      {candidates.map((c) => (
        <div
          key={c.name}
          className={`px-5 py-3.5 border-b border-slate-50 last:border-0 ${
            c.highlight ? "bg-orange-50/40" : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                c.highlight
                  ? "bg-brand-coral text-white"
                  : "bg-orange-50 text-brand-coral"
              }`}
            >
              {c.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[13px] font-semibold text-slate-800">
                  {c.name}
                </span>
                <span className="text-[10px] text-slate-400">{c.title}</span>
                {c.highlight && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-coral bg-orange-50 px-1.5 py-0.5 rounded-full">
                    {c.tag}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {c.note}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="px-5 py-3 bg-brand-gray-soft border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">
          Delivered 41 hours after intake
        </span>
        <span
          className="text-[10px] font-logo font-bold select-none"
          style={{
            background: "linear-gradient(90deg,#ff5542 0%,#ff7a5c 45%,#ffb8a8 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          zinoit
        </span>
      </div>
    </div>
  );
};

/* ─── Data ──────────────────────────────────────────────────── */

const practices = [
  {
    num: "01",
    statement: "We map the market before we touch a job board.",
    detail: [
      "When most firms receive a requirement, they post it on job boards and wait. We move in the opposite direction. Before any job is posted, we identify the professionals already working in this exact discipline — who they work for, what they've built, and whether they're worth pursuing. Active outreach to passive talent is the starting point, not the fallback.",
      "The candidates you see on your shortlist were not waiting in an applicant queue. They were found.",
    ],
  },
  {
    num: "02",
    statement: "Every candidate you see has been evaluated in writing before you see them.",
    detail: [
      "We don't forward resumes. Before any candidate reaches your inbox, a Zinoit recruiter has conducted a structured capability conversation — assessing technical or domain depth against your specific brief — and written an evaluation. Strengths, gaps, notable context, and a direct comparison to what you told us you need.",
      "That evaluation travels with every profile. You walk into every interview with context, not just a CV.",
    ],
  },
  {
    num: "03",
    statement: "We stay involved until the engagement is stable — not until the placement is made.",
    detail: [
      "Most staffing firms measure success at the moment of placement. We measure it at 30, 60, and 90 days. For contract engagements, we run scheduled check-ins with both you and the contractor. For direct placements, we manage the counter-offer period, coordinate the offer mechanics, and follow up at the first performance milestone.",
      "The placement is not the finish line.",
    ],
  },
];

const deliverables = [
  {
    stage: "After intake call",
    heading: "Written brief confirmation",
    body: "A written summary confirming how we understood the role: the technical requirements, team context, success criteria, and any nuances you flagged. If we've misunderstood anything, you correct it before we start sourcing. This is the single most important step most firms skip.",
  },
  {
    stage: "Within 24 hours of search start",
    heading: "Market feedback",
    body: "If the supply picture for this profile differs from expectation — salary range, availability, competing demand — you'll know within 24 hours, not after six weeks of silence. We'd rather have a difficult conversation early than a failed search later.",
  },
  {
    stage: "Within 48 hours for most profiles",
    heading: "Shortlist with written evaluations",
    body: "3 to 5 candidates, each with a recruiter's written assessment: technical or domain strengths, gaps relative to your brief, and notable context from the conversation. Not a stack of resumes — a curated, evaluated set with our reasoning attached.",
  },
  {
    stage: "Before your first interview",
    heading: "Candidates fully pre-briefed",
    body: "Every candidate on your shortlist has been briefed on your role, your team, your expectations, and what success looks like in the first 90 days. They arrive informed. You start the conversation at depth, not at introduction.",
  },
  {
    stage: "After placement",
    heading: "Structured follow-through",
    body: "For contract and contract-to-hire engagements: check-ins at 30 and 60 days. For direct placements: counter-offer management, offer coordination, and a 30-day post-start check-in. We stay present until the engagement is stable.",
  },
];

const engagementModels = [
  {
    situation: "You need someone fast, on a defined scope",
    model: "Contract Staffing",
    outcome: "Pre-vetted professional in seat within days. W2 or C2C, compliance fully managed.",
    href: "/services#contract-staffing",
  },
  {
    situation: "You want to evaluate before making it permanent",
    model: "Contract-to-Hire",
    outcome: "60–90 day evaluation period with structured check-ins and a managed conversion.",
    href: "/services#contract-to-hire",
  },
  {
    situation: "This role is too important to get wrong",
    model: "Direct Placement",
    outcome: "Market-mapped search, passive outreach, written evaluator notes with every shortlist.",
    href: "/services#direct-placement",
  },
  {
    situation: "You need a full team for a program",
    model: "Managed Talent Services",
    outcome: "Scoped, assembled, and deployed as a functioning unit. Target: 2–4 weeks.",
    href: "/services#managed-talent",
  },
];

const industries = [
  {
    label: "Information Technology",
    eyebrow: "01",
    functions: [
      "Engineering & Architecture",
      "Data & AI",
      "Infrastructure & Security",
      "Product & Delivery",
    ],
    href: "/industries#technology",
    accent: "text-brand-coral",
    border: "hover:border-brand-coral/30",
  },
  {
    label: "Life Sciences & Biotech",
    eyebrow: "02",
    functions: [
      "Clinical Operations",
      "Regulatory & Quality",
      "Scientific & Research",
      "Medical Affairs & Commercial",
    ],
    href: "/industries#life-sciences",
    accent: "text-emerald-600",
    border: "hover:border-emerald-300",
  },
  {
    label: "Insurance",
    eyebrow: "03",
    functions: [
      "Traditional & Core",
      "Emerging & Technical",
      "Compliance & Regulatory",
      "Actuarial & Risk",
    ],
    href: "/industries#insurance",
    accent: "text-violet-600",
    border: "hover:border-violet-300",
  },
];

const expectationSteps = [
  {
    timing: "Within 4 business hours",
    action: "We confirm receipt and propose an intake call — typically same day or next morning.",
  },
  {
    timing: "Intake call — 30 to 45 minutes",
    action: "We listen first. No generic forms. We want to understand the role's business impact, the team's working style, and what a wrong hire would actually cost you.",
  },
  {
    timing: "Within 24 hours of intake",
    action: "Written brief confirmation. You review it, correct anything we've missed, and we start the search with alignment rather than assumptions.",
  },
  {
    timing: "Within 48 hours for most profiles",
    action: "First shortlist with written evaluations. You have qualified, pre-briefed candidates with our assessment attached — ready to interview.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function EmployersPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-14 xl:gap-20 items-center">

            {/* Copy */}
            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">For Employers</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 leading-tight max-w-2xl">
                The candidate this role needs
                isn&apos;t applying anywhere right now.
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl">
                Most specialized talent is employed, not actively looking. Reaching
                them requires domain knowledge, direct outreach, and recruiters
                who&apos;ve earned trust inside the industry. That&apos;s the work we
                do — and it&apos;s why the shortlist you receive looks different from
                what you&apos;ve seen before.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Submit a Role Brief <ArrowRight />
                </Link>
                <a href="#what-you-receive" className="btn-secondary">
                  See what you receive
                </a>
              </div>

              {/* Subtle inline credibility — no stats bar repeat */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "IT · Life Sciences · Insurance",
                  "Contract, C2H, Direct & Managed",
                  "48h avg. to first shortlist",
                ].map((item) => (
                  <span key={item} className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-coral/60 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* Shortlist preview */}
            <AnimateIn animation="slide-right" delay={120}>
              <div className="flex justify-center lg:justify-end">
                <ShortlistPreview />
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THREE PRACTICES
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
              How Zinoit works differently
            </p>
            <h2 className="section-heading max-w-2xl">
              Three practices that separate a good search
              from a&nbsp;wasted one.
            </h2>
          </AnimateIn>

          <div className="mt-14 space-y-0 divide-y divide-slate-200">
            {practices.map((p, i) => (
              <AnimateIn key={p.num} animation="fade-up" delay={i * 80}>
                <div className="grid md:grid-cols-[200px_1fr] gap-8 py-10 items-start">
                  {/* Left: number + bold statement */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 block mb-3">
                      {p.num}
                    </span>
                    <p className="font-display font-semibold text-slate-900 text-[1rem] leading-snug">
                      {p.statement}
                    </p>
                  </div>
                  {/* Right: body */}
                  <div className="space-y-3">
                    {p.detail.map((para, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DELIVERABLES TIMELINE
      ══════════════════════════════════════════════════ */}
      <section id="what-you-receive" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="max-w-2xl">
              <span className="section-eyebrow">What you receive</span>
              <h2 className="section-heading mt-2">
                Every stage of a Zinoit engagement
                produces a concrete output.
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Ambiguity is where staffing relationships break down. Here is
                exactly what lands in your inbox, and when.
              </p>
            </div>
          </AnimateIn>

          {/* Timeline */}
          <div className="mt-14 relative">
            {/* vertical line */}
            <div className="hidden md:block absolute left-[168px] top-3 bottom-3 w-px bg-slate-100" />

            <div className="space-y-0">
              {deliverables.map((d, i) => (
                <AnimateIn key={d.heading} animation="fade-up" delay={i * 70}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-8 py-8 border-b border-slate-50 last:border-0 items-start">
                    {/* Stage label */}
                    <div className="md:text-right md:pr-8 flex items-center gap-3 md:block">
                      {/* dot — visible on md+ */}
                      <div className="hidden md:block absolute left-[162px] w-3 h-3 rounded-full bg-white border-2 border-brand-coral mt-1.5" />
                      <p className="text-[11px] font-semibold text-brand-coral uppercase tracking-[0.1em] leading-snug">
                        {d.stage}
                      </p>
                    </div>
                    {/* Content */}
                    <div className="md:pl-8">
                      <h3 className="font-display font-semibold text-slate-900 mb-2">
                        {d.heading}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-[0.9375rem]">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ENGAGEMENT MODELS
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="section-eyebrow">Engagement models</span>
                <h2 className="section-heading mt-1">
                  Match the model to the situation.
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-medium text-brand-coral hover:text-brand-coral-dark flex items-center gap-1 transition-colors flex-shrink-0 mb-1"
              >
                Full services overview <ChevronRight />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementModels.map((m, i) => (
              <AnimateIn key={m.model} animation="fade-up" delay={i * 60}>
                <Link
                  href={m.href}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 p-6 hover:border-brand-coral/30 hover:shadow-card-md transition-all duration-200"
                >
                  <p className="text-[11px] text-slate-400 italic leading-relaxed mb-3">
                    &ldquo;{m.situation}&rdquo;
                  </p>
                  <p className="font-display font-semibold text-slate-900 mb-2 group-hover:text-brand-coral transition-colors">
                    {m.model}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {m.outcome}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-coral">
                    Learn more <ChevronRight />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="section-eyebrow">Industry coverage</span>
                <h2 className="section-heading mt-1">
                  Three verticals. Deep in each.
                </h2>
              </div>
              <Link
                href="/industries"
                className="text-sm font-medium text-brand-coral hover:text-brand-coral-dark flex items-center gap-1 transition-colors flex-shrink-0 mb-1"
              >
                Full industry detail <ChevronRight />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.label} animation="fade-up" delay={i * 80}>
                <Link
                  href={ind.href}
                  className={`group block bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-card-md transition-all duration-200 ${ind.border}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 mb-3">
                    {ind.eyebrow}
                  </p>
                  <h3 className={`font-display font-semibold text-slate-900 text-[1rem] mb-5 group-hover:${ind.accent} transition-colors`}>
                    {ind.label}
                  </h3>
                  <ul className="space-y-2">
                    {ind.functions.map((fn) => (
                      <li key={fn} className="flex items-center gap-2 text-sm text-slate-500">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${ind.accent.replace("text-", "bg-")}`} />
                        {fn}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 flex items-center gap-1 text-xs font-semibold ${ind.accent}`}>
                    View roles <ChevronRight />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT TO EXPECT + CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-charcoal-deep py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">

            {/* Left: expectation steps */}
            <AnimateIn animation="slide-left">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-warm mb-3">
                What happens when you reach out
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                No black box. You&apos;ll know
                exactly what comes next.
              </h2>

              <div className="mt-10 space-y-0">
                {expectationSteps.map((step, i) => (
                  <div key={i} className="flex gap-5 pb-8 last:pb-0 relative">
                    {/* connector line */}
                    {i < expectationSteps.length - 1 && (
                      <div className="absolute left-4 top-9 bottom-0 w-px bg-white/8" />
                    )}
                    {/* step dot */}
                    <div className="w-8 h-8 rounded-full bg-white/8 border border-white/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[11px] font-bold text-white/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-brand-warm uppercase tracking-[0.1em] mb-1">
                        {step.timing}
                      </p>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {step.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Right: CTA card */}
            <AnimateIn animation="slide-right" delay={120}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:sticky lg:top-32">
                <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">
                  Tell us about the role.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  No commitment required. Describe what you&apos;re looking for and
                  we&apos;ll tell you what to expect — timeline, supply outlook, and
                  recommended engagement model.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-brand-coral text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-brand-coral-dark transition-colors shadow-coral w-full"
                  >
                    Submit a Role Brief <ArrowRight />
                  </Link>
                  <a
                    href="mailto:info@zinoit-tech.com"
                    className="flex items-center justify-center gap-2 border border-white/15 text-slate-300 text-sm font-semibold py-3 px-6 rounded-full hover:bg-white/5 hover:text-white transition-colors w-full"
                  >
                    Email us directly
                  </a>
                </div>

                <div className="mt-7 pt-6 border-t border-white/8 space-y-2.5">
                  {[
                    "Response within 4 business hours",
                    "No retainer or upfront fee",
                    "Shortlist in 48h for most profiles",
                  ].map((item) => (
                    <p key={item} className="text-xs text-slate-500 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

    </main>
  );
}
