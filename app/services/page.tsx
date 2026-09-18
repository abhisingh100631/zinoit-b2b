import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ServicesNav from "@/components/ServicesNav";

export const metadata: Metadata = {
  title: "Services | Zinoit — B2B Lead Generation & Demand Gen",
  description:
    "From lead generation and appointment setting to ABM and demand gen — Zinoit's B2B growth services build predictable pipeline for revenue teams.",
};

const Check = () => (
  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ServicesPage() {
  return (
    <main>
      <ServicesNav />

      {/* ── Hero ── */}
      <section className="bg-white pt-16 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">What we do</span>
            <h1 className="section-heading mt-2 max-w-3xl">
              B2B Growth Services Built for <span className="gradient-text">Revenue Teams</span>
            </h1>
            <p className="section-sub max-w-2xl">
              Every service we offer is designed around one outcome: qualified pipeline that converts. No vanity metrics, no spray-and-pray — just a system that fills your calendar with the right conversations.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Lead Generation ── */}
      <section id="lead-generation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">01</span>
              <h2 className="section-heading mt-2">Lead Generation</h2>
              <p className="section-sub mt-4">
                We identify and engage B2B prospects who match your ICP — using a combination of intent data, outbound sequences, and multi-touch nurturing to surface buyers who are actually in-market.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "ICP-matched prospect identification",
                  "Intent data and buying signal monitoring",
                  "Multi-channel outreach (email, LinkedIn, phone)",
                  "Lead scoring and qualification frameworks",
                  "CRM integration and handoff workflows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/book-call" className="btn-primary text-sm">
                  Get started <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-right" delay={100}>
              <div className="bg-gradient-to-br from-brand-green-xlight to-brand-teal-light rounded-3xl p-8 border border-brand-green-light">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green mb-5">How it works</p>
                <div className="space-y-4">
                  {[
                    { n: "1", t: "ICP definition", d: "We align on your ideal customer profile — firmographics, technographics, and buying triggers." },
                    { n: "2", t: "List build & enrichment", d: "Verified, intent-scored contact data matched to your target accounts." },
                    { n: "3", t: "Outreach & nurture", d: "Personalized sequences across email and LinkedIn, optimized by response data." },
                    { n: "4", t: "Qualified lead handoff", d: "Only leads that meet your qualification criteria reach your sales team." },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-green">
                        {step.n}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-navy">{step.t}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Appointment Setting ── */}
      <section id="appointment-setting" className="py-20 bg-brand-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-right" delay={100} className="lg:order-2">
              <span className="section-eyebrow">02</span>
              <h2 className="section-heading mt-2">Appointment Setting</h2>
              <p className="section-sub mt-4">
                We book qualified discovery calls with decision-makers at your target accounts — so your AEs walk into conversations that are already warmed up and ready to advance.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Decision-maker identification and outreach",
                  "Multi-touch engagement (email + LinkedIn + phone)",
                  "Objection handling and nurture sequences",
                  "Calendar integration — meetings land directly with your AE",
                  "Pre-call briefing notes for every appointment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/book-call" className="btn-primary text-sm">
                  Book a strategy call <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-left" className="lg:order-1">
              <div className="bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-5">What to expect</p>
                  <div className="space-y-5">
                    {[
                      { label: "Average time to first meeting", value: "48 hrs" },
                      { label: "Show rate on booked calls", value: "> 85%" },
                      { label: "Decision-maker attendance", value: "Verified" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <span className="text-sm text-white/60">{stat.label}</span>
                        <span className="font-display font-bold text-brand-teal text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Demand Generation ── */}
      <section id="demand-generation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">03</span>
              <h2 className="section-heading mt-2">Demand Generation</h2>
              <p className="section-sub mt-4">
                We build the awareness, interest, and intent that fuels your pipeline long-term — combining content strategy, paid channels, and always-on nurturing to create a consistent flow of inbound interest.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Demand gen strategy and channel planning",
                  "Content and messaging aligned to buyer journey",
                  "Paid media management (LinkedIn, Google)",
                  "Marketing automation and nurture tracks",
                  "Attribution reporting and funnel analytics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/book-call" className="btn-primary text-sm">
                  Get started <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-right" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Awareness", icon: "📡", desc: "Brand visibility with your target market across channels" },
                  { label: "Interest", icon: "🎯", desc: "Engage in-market buyers with timely, relevant content" },
                  { label: "Intent", icon: "⚡", desc: "Capture and prioritize high-intent signals in your CRM" },
                  { label: "Pipeline", icon: "📈", desc: "Convert intent into qualified opportunities for sales" },
                ].map((item) => (
                  <div key={item.label} className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-5">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="font-display font-bold text-brand-navy text-sm mt-3 mb-1">{item.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── ABM ── */}
      <section id="account-based-marketing" className="py-20 bg-brand-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-right" delay={100} className="lg:order-2">
              <span className="section-eyebrow">04</span>
              <h2 className="section-heading mt-2">Account-Based Marketing</h2>
              <p className="section-sub mt-4">
                Stop spraying. Start focusing. We build ABM programs that concentrate your resources on the specific accounts most likely to close — with coordinated outreach across every touchpoint in the buying committee.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Target account selection and tiering",
                  "Buying committee mapping",
                  "Personalized, account-specific messaging",
                  "Coordinated sales + marketing plays",
                  "Account engagement scoring and reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/book-call" className="btn-primary text-sm">
                  Build your ABM program <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-left" className="lg:order-1">
              <div className="bg-gradient-to-br from-brand-navy to-[#1a0f2e] rounded-3xl p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-6">ABM tiers</p>
                <div className="space-y-4">
                  {[
                    { tier: "Tier 1", label: "Strategic", desc: "1:1 — Fully bespoke programs for your top 10–20 priority accounts", color: "text-brand-teal" },
                    { tier: "Tier 2", label: "Scale", desc: "1:few — Personalized plays for 50–200 similar high-value accounts", color: "text-brand-green-mid" },
                    { tier: "Tier 3", label: "Programmatic", desc: "1:many — Broad targeting with account-level personalization at scale", color: "text-slate-400" },
                  ].map((t) => (
                    <div key={t.tier} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex-shrink-0">
                        <span className={`text-xs font-bold uppercase tracking-[0.1em] ${t.color}`}>{t.tier}</span>
                        <p className="text-white font-semibold text-sm mt-0.5">{t.label}</p>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SDR as a Service ── */}
      <section id="sdr-as-a-service" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">05</span>
              <h2 className="section-heading mt-2">SDR as a Service</h2>
              <p className="section-sub mt-4">
                Get a fully managed Sales Development team without the overhead. We provide trained SDRs embedded in your process — prospecting, qualifying, and booking meetings while you close.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Dedicated SDRs trained on your product and ICP",
                  "Outbound prospecting across email, LinkedIn, and phone",
                  "Quota-carrying reps with transparent KPI tracking",
                  "Ramp in weeks, not months",
                  "Full reporting — activity, pipeline, and conversion data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book-call" className="btn-primary text-sm">
                  Get started <ArrowRight />
                </Link>
                <Link href="/contact" className="btn-secondary text-sm">
                  Learn more
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-right" delay={100}>
              <div className="space-y-4">
                {[
                  { q: "How quickly can SDRs ramp?", a: "Most engagements reach full productivity within 2–3 weeks of onboarding." },
                  { q: "Who manages the SDRs?", a: "Zinoit provides day-to-day management, coaching, and quality oversight — you get pipeline visibility, not management overhead." },
                  { q: "How is performance measured?", a: "Weekly reporting on dials, emails, LinkedIn touches, connects, and qualified meetings booked. No black boxes." },
                ].map((item) => (
                  <div key={item.q} className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-5">
                    <p className="font-semibold text-brand-navy text-sm mb-2">{item.q}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Data Solutions ── */}
      <section id="data-solutions" className="py-20 bg-brand-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn animation="slide-right" delay={100} className="lg:order-2">
              <span className="section-eyebrow">06</span>
              <h2 className="section-heading mt-2">Data Solutions</h2>
              <p className="section-sub mt-4">
                Your outbound is only as good as your data. We source, enrich, and maintain the contact and account intelligence that powers every prospecting motion — from ICP lists to intent feeds.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "ICP list building with verified contact data",
                  "Contact enrichment and email validation",
                  "Intent data integration (G2, Bombora, and more)",
                  "CRM data hygiene and deduplication",
                  "Custom data segmentation by persona or territory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/book-call" className="btn-primary text-sm">
                  Discuss your data needs <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-left" className="lg:order-1">
              <div className="bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-6">Data quality matters</p>
                  <div className="space-y-5">
                    {[
                      { problem: "Stale contact data", result: "Missed connections and wasted sequences" },
                      { problem: "No intent signals", result: "Reaching out to accounts not in buying mode" },
                      { problem: "Poor ICP match", result: "High-effort, low-conversion pipeline" },
                    ].map((row) => (
                      <div key={row.problem} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <p className="text-xs text-brand-teal font-semibold uppercase tracking-[0.08em]">Without it:</p>
                        <p className="text-sm text-white/40 mt-0.5">{row.problem} → {row.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-green-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to build a pipeline that actually converts?
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Book a 30-minute strategy call and we&apos;ll show you exactly which service fits your growth stage.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/book-call" className="btn-white text-sm">
                Book a Strategy Call <ArrowRight />
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
