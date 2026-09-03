import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Find Roles | Zinoit Tech",
  description:
    "Zinoit places IT, Life Sciences, and Insurance professionals in contract, contract-to-hire, and permanent roles. We brief you before every interview. We stay involved through the offer.",
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

/* ─── Role Brief Card ────────────────────────────────────────
   A realistic preview of the written brief Zinoit sends to
   candidates before every employer introduction. Makes the
   candidate experience concrete rather than abstract.
──────────────────────────────────────────────────────────── */
const RoleBriefCard = () => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-card-lg overflow-hidden w-full max-w-sm font-sans">

    {/* Header strip */}
    <div className="bg-brand-charcoal-deep px-5 py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 mb-1.5">
            Role Brief · Confidential
          </p>
          <p className="font-display font-semibold text-white text-sm leading-snug">
            Senior Cloud Infrastructure Engineer
          </p>
          <p className="text-[11px] text-white/50 mt-1">
            Series C HealthTech · Remote (US) · Direct Placement
          </p>
        </div>
        <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full mt-0.5 whitespace-nowrap">
          Active search
        </span>
      </div>
    </div>

    {/* Body sections */}
    <div className="divide-y divide-slate-50">

      {/* The work */}
      <div className="px-5 py-3.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">
          The Work
        </p>
        <p className="text-[11.5px] text-slate-600 leading-relaxed">
          Moving a multi-tenant HIPAA platform from legacy AWS to EKS-native
          infrastructure. You&apos;d own architecture decisions, not execute
          someone else&apos;s design. ~180 employees, Series C.
        </p>
      </div>

      {/* The team */}
      <div className="px-5 py-3.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">
          The Team
        </p>
        <p className="text-[11.5px] text-slate-600 leading-relaxed">
          4 platform engineers, VP Eng is a hands-on technical leader. Async-first.
          Post-mortems are blameless. Documentation is actually maintained.
        </p>
      </div>

      {/* What they care about */}
      <div className="px-5 py-3.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1.5">
          What They Actually Care About
        </p>
        <p className="text-[11.5px] text-slate-600 leading-relaxed">
          Kubernetes depth over cloud-provider preference. Previous hires
          over-optimized for tooling — reliability engineering judgment
          matters more here.
        </p>
      </div>

      {/* Comp */}
      <div className="px-5 py-3.5 bg-orange-50/40">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          Compensation
        </p>
        <div className="flex gap-4">
          <div>
            <p className="text-[10px] text-slate-400 mb-0.5">Base</p>
            <p className="text-[12px] font-semibold text-slate-800">$155k – $185k</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-0.5">Equity</p>
            <p className="text-[12px] font-semibold text-slate-800">0.10 – 0.18%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-0.5">Process</p>
            <p className="text-[12px] font-semibold text-slate-800">2 rounds</p>
          </div>
        </div>
      </div>

      {/* Recruiter note */}
      <div className="px-5 py-3.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-coral mb-1.5">
          Your Recruiter&apos;s Note
        </p>
        <p className="text-[11px] text-slate-500 leading-relaxed italic">
          VP Eng goes deep on incident response in round two — prep a specific
          example. Ask about on-call rotation; it&apos;s a genuine culture signal.
          Offer has moved fast for strong candidates — don&apos;t sit on it.
        </p>
      </div>

    </div>

    {/* Footer */}
    <div className="px-5 py-2.5 bg-brand-gray-soft border-t border-slate-100 flex items-center justify-between">
      <span className="text-[9px] text-slate-400">
        Sent before every introduction. Always.
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

/* ─── Data ──────────────────────────────────────────────────── */

const practices = [
  {
    num: "01",
    statement: "You get a written brief before every introduction. You never walk in cold.",
    detail: [
      "Before we introduce you to any employer, you receive a document: what the company is actually building, the team structure and size, what the hiring manager has told us they genuinely care about beyond the job description, the expected interview format, and any context we've gathered about how this team operates. It's not a forwarded JD. It's the information that makes the difference between a good interview and a great one.",
      "Most candidates tell us it's the most preparation they've ever received from a recruiter. That's not a high bar — but it reflects how consistently the industry ignores this step. We don't.",
    ],
  },
  {
    num: "02",
    statement: "We're honest with you about the market, even when it's not what you want to hear.",
    detail: [
      "If your compensation expectation is 20% above the current market rate for your profile and experience level, we'll tell you before you invest three weeks in a process that ends at an offer you'd reject. If a role is actually right for you — even if the title looks lateral — we'll make that case to you directly. We don't manufacture enthusiasm for placements we don't believe in.",
      "This occasionally means uncomfortable conversations early in the relationship. We think that's a better use of your time than six weeks of optimistic updates followed by a quiet disappearance.",
    ],
  },
  {
    num: "03",
    statement: "When the offer arrives, we stay in the room.",
    detail: [
      "Negotiating your own compensation with a prospective employer is awkward in the best circumstances. You don't know what their ceiling is. You don't want to seem difficult before you've started. You're uncertain whether the benefits package is standard or below market for this type of role. We know the answers — and we handle the conversation on your behalf.",
      "We'll tell you whether the number is negotiable and by how much, advise on whether equity, signing bonus, or start date flexibility is the right lever for this particular employer, and manage the back-and-forth so the relationship with your new team starts without tension. Then we check in at 30 days — not to ask for referrals, but to make sure the role is what we represented it to be.",
    ],
  },
];

const profiles = [
  {
    label: "You're not looking. You're selective.",
    sub: "Currently employed · open to the right conversation",
    body: "You have a good role. You're not spending evenings on job boards and you're not going to apply anywhere — the friction is too high relative to the likely outcome. But every few months, the thought surfaces: better scope, a stronger team, more equity in something that matters, a leadership opportunity you won't find where you are. If that role existed and came through someone who understood your work well enough to know why it was worth your time, you'd have the conversation. That's the only kind of conversation we bring to you.",
  },
  {
    label: "You have real depth. Most recruiters can't evaluate it.",
    sub: "Domain specialist · senior individual contributor or above",
    body: "You've spent eight years building infrastructure at enterprise scale, or run Phase II oncology trials for a major CRO, or you carry a credentialing designation and have a decade of experience in a specific discipline. You've been contacted by recruiters who clearly couldn't assess whether you were qualified for what they were presenting — which means they also couldn't tell whether it was right for you. You've probably had your resume sent somewhere without being asked. You need a recruiter who understands your domain well enough to match your actual level, not your title.",
  },
  {
    label: "Your contract is ending and timing matters.",
    sub: "Contractor · approaching end of current engagement",
    body: "You know what an organized search looks like: a recruiter who has active client relationships before the search starts, who can give you a realistic timeline for your discipline and market, who will tell you promptly if something doesn't fit rather than go quiet for two weeks. The mechanics matter when you're working with a defined end date. We maintain live pipelines across IT, Life Sciences, and Insurance — which means we're not starting from zero when you reach out.",
  },
];

const industries = [
  {
    label: "Information Technology",
    eyebrow: "01",
    note: "Contract, C2H, and direct roles across engineering, data, infrastructure, and product.",
    functions: ["Engineering & Architecture", "Data & AI", "Infrastructure & Security", "Product & Delivery"],
    href: "/industries#technology",
    accent: "text-brand-coral",
    dotColor: "bg-brand-coral",
    border: "hover:border-brand-coral/30",
  },
  {
    label: "Life Sciences & Biotech",
    eyebrow: "02",
    note: "Pharma, CRO, and medical device roles across clinical, regulatory, scientific, and commercial functions.",
    functions: ["Clinical Operations", "Regulatory & Quality", "Scientific & Research", "Medical Affairs"],
    href: "/industries#life-sciences",
    accent: "text-emerald-600",
    dotColor: "bg-emerald-500",
    border: "hover:border-emerald-300",
  },
  {
    label: "Insurance",
    eyebrow: "03",
    note: "Traditional carrier and insurtech roles in actuarial, underwriting, claims, compliance, and technology.",
    functions: ["Actuarial & Risk", "Underwriting & Claims", "Compliance & Regulatory", "Insurance Technology"],
    href: "/industries#insurance",
    accent: "text-violet-600",
    dotColor: "bg-violet-500",
    border: "hover:border-violet-300",
  },
];

const processSteps = [
  {
    heading: "A conversation, not a form",
    body: "It starts with 30 minutes on the phone. We want to understand where you are right now, what a good move looks like for you, what you're not willing to compromise on, and your honest timeline. We'll also tell you — during that call — what the market looks like for your specific profile. No intake form. No automated workflow. A recruiter who specializes in your vertical.",
  },
  {
    heading: "We map roles to you — including ones that aren't posted",
    body: "After the intake conversation, we map your profile against current searches and against clients we know well enough to approach proactively on your behalf. Many of the strongest roles we fill are never publicly posted. If nothing fits the brief right now, we'll tell you clearly and keep your profile active for when something does.",
  },
  {
    heading: "A written brief before every introduction",
    body: "Before you speak with any employer through Zinoit, you receive the role brief shown above. It covers what the company is building, how the team is structured, what the hiring manager has told us they actually care about, and a recruiter note with anything specific you should know going in. You walk into every conversation as the most prepared person in the room.",
  },
  {
    heading: "We manage the offer process",
    body: "When a number lands, we advise you on whether it's negotiable and by how much, which levers matter for this specific employer, and how to handle the conversation so your relationship with the team starts cleanly. We've been through this enough times to know when to push and when to accept — and we'll tell you which situation you're in.",
  },
  {
    heading: "We follow up — without being asked",
    body: "At 30 days in, you'll hear from us. Not a check-in for referrals. A genuine follow-up to confirm the role is what we represented it to be and that you're set up well. If something isn't right, we want to know and we'll help address it. This is where most staffing relationships end. Ours doesn't.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function CandidatesPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-14 xl:gap-20 items-center">

            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">For Candidates</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 leading-tight max-w-2xl">
                If you&apos;re good at what you do,
                you&apos;re probably not looking
                right now.
              </h1>
              <p className="mt-2 text-2xl font-display font-normal text-brand-coral tracking-tight">
                That&apos;s exactly when we should talk.
              </p>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                The staffing industry has a credibility problem — and most experienced
                professionals have experienced it firsthand. Recruiters who can&apos;t
                evaluate your domain, resumes submitted without consent, and silence
                after placement. Zinoit is built to work differently, specifically for
                IT, Life Sciences, and Insurance professionals who expect more from a
                recruiter than a keyword match and a forwarded resume.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Have a Conversation <ArrowRight />
                </Link>
                <a href="#how-it-works" className="btn-secondary">
                  How it works
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "No resume forwarding without consent",
                  "Written brief before every interview",
                  "Market-rate compensation guidance",
                ].map((item) => (
                  <span key={item} className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-coral/60 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* Role Brief Card */}
            <AnimateIn animation="slide-right" delay={120}>
              <div className="flex justify-center lg:justify-end">
                <RoleBriefCard />
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
              What makes this different
            </p>
            <h2 className="section-heading max-w-2xl">
              Three things we do that most
              recruiters don&apos;t.
            </h2>
          </AnimateIn>

          <div className="mt-14 divide-y divide-slate-200">
            {practices.map((p, i) => (
              <AnimateIn key={p.num} animation="fade-up" delay={i * 80}>
                <div className="grid md:grid-cols-[220px_1fr] gap-8 py-10 items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 block mb-3">
                      {p.num}
                    </span>
                    <p className="font-display font-semibold text-slate-900 text-[0.95rem] leading-snug">
                      {p.statement}
                    </p>
                  </div>
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
          WHO THIS WORKS FOR
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="max-w-2xl mb-12">
              <span className="section-eyebrow">Who this works for</span>
              <h2 className="section-heading mt-2">
                We work best with professionals
                in specific situations.
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Not every recruiter is the right fit for every candidate. Here is
                exactly who gets the most value from working with Zinoit.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((profile, i) => (
              <AnimateIn key={profile.label} animation="fade-up" delay={i * 80}>
                <div className="bg-brand-gray-soft rounded-2xl border border-slate-100 p-7 h-full flex flex-col">
                  <div className="mb-5">
                    <p className="font-display font-bold text-slate-900 text-[1rem] leading-snug mb-1.5">
                      {profile.label}
                    </p>
                    <p className="text-[11px] font-medium text-brand-coral uppercase tracking-[0.1em]">
                      {profile.sub}
                    </p>
                  </div>
                  <p className="text-[0.9rem] text-slate-600 leading-relaxed flex-1">
                    {profile.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ROLES BY VERTICAL
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="section-eyebrow">Roles we place</span>
                <h2 className="section-heading mt-1">
                  Three verticals. Senior-level focus.
                </h2>
              </div>
              <Link
                href="/industries"
                className="text-sm font-medium text-brand-coral hover:text-brand-coral-dark flex items-center gap-1 transition-colors flex-shrink-0 mb-1"
              >
                Full industry depth <ChevronRight />
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
                  <h3 className={`font-display font-semibold text-slate-900 text-[1rem] mb-2 group-hover:${ind.accent} transition-colors`}>
                    {ind.label}
                  </h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed mb-5">
                    {ind.note}
                  </p>
                  <ul className="space-y-2">
                    {ind.functions.map((fn) => (
                      <li key={fn} className="flex items-center gap-2 text-sm text-slate-500">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${ind.dotColor}`} />
                        {fn}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 flex items-center gap-1 text-xs font-semibold ${ind.accent}`}>
                    See roles <ChevronRight />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS — HOW IT WORKS
      ══════════════════════════════════════════════════ */}
      <section id="how-it-works" className="bg-white py-24 scroll-mt-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up">
            <div className="max-w-2xl mb-14">
              <span className="section-eyebrow">The process</span>
              <h2 className="section-heading mt-2">
                What working with Zinoit actually
                looks like from your side.
              </h2>
            </div>
          </AnimateIn>

          {/* Alternating rows — different visual from employers page */}
          <div className="space-y-0 divide-y divide-slate-100">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.heading} animation="fade-up" delay={i * 70}>
                <div className={`py-9 grid md:grid-cols-[60px_1fr_1fr] gap-6 items-start ${
                  i % 2 === 1 ? "md:grid-cols-[60px_1fr_1fr]" : ""
                }`}>
                  {/* Step number */}
                  <div className="flex items-center md:block">
                    <span className="font-display text-3xl font-bold text-slate-100 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Heading */}
                  <div className="md:pr-8">
                    <h3 className="font-display font-semibold text-slate-900 text-[1.05rem] leading-snug">
                      {step.heading}
                    </h3>
                  </div>
                  {/* Body */}
                  <div>
                    <p className="text-slate-500 leading-relaxed text-[0.9375rem]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — WARM, CONVERSATIONAL
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">

            {/* Left */}
            <AnimateIn animation="slide-left">
              <span className="section-eyebrow">Start here</span>
              <h2 className="section-heading mt-2 max-w-lg">
                It starts with a conversation.
                Not a form, not a portal.
              </h2>
              <p className="mt-5 text-slate-500 leading-relaxed max-w-lg">
                Tell us where you are right now — your discipline, your level, your
                timeline, and what a good move looks like for you. We&apos;ll tell you
                what the market looks like for your profile and whether we have
                something worth your time to look at.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed max-w-lg">
                If the timing isn&apos;t right, we&apos;ll keep your profile on file
                and reach out when something matches — not on a mailing list, but a
                direct note from a recruiter who has looked at your background.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Your background is not shared with any employer without your explicit
                consent. Always.
              </p>
            </AnimateIn>

            {/* Right — two action cards */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="space-y-4">

                {/* Primary: have a conversation */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-7">
                  <p className="font-display font-semibold text-slate-900 mb-1.5">
                    Have a conversation
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    30 minutes. Tell us about your background, what you&apos;re open to,
                    and your timeline. We&apos;ll give you honest market feedback and
                    tell you what we have that&apos;s worth your time.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Schedule a Call <ArrowRight />
                  </Link>
                </div>

                {/* Secondary: send background */}
                <div className="bg-white rounded-2xl border border-slate-100 p-7">
                  <p className="font-display font-semibold text-slate-900 mb-1.5">
                    Send your background
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    If a call isn&apos;t the right starting point, email us your resume
                    and a few lines on what you&apos;re open to. A recruiter who works
                    in your vertical will review it and follow up directly.
                  </p>
                  <a
                    href="mailto:info@zinoit-tech.com"
                    className="btn-secondary w-full justify-center"
                  >
                    Email Your Background
                  </a>
                </div>

                <p className="text-xs text-slate-400 text-center pt-1">
                  Response within one business day. No automated workflows.
                </p>

              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

    </main>
  );
}
