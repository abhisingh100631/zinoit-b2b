import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import HeroOpportunitiesCard from "@/components/HeroOpportunitiesCard";

/* ─── Icon helpers ─────────────────────────────────────── */
const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────── */

const heroIndustries = [
  { name: "Information Technology", count: "200+", dot: "bg-brand-coral"  },
  { name: "Life Sciences & Biotech", count: "80+",  dot: "bg-emerald-400" },
  { name: "Insurance & Risk",        count: "60+",  dot: "bg-brand-warm"  },
];


const industries = [
  {
    num: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Information Technology",
    description:
      "From full-stack engineers to enterprise architects, our IT recruiters have placed talent across application development, cloud infrastructure, data platforms, and security operations. We evaluate candidates the way your hiring managers do — because we understand the tech, not just the title.",
    tags: ["Software Dev", "Cloud & DevOps", "Data & AI", "Cybersecurity"],
    topColor: "#ff5542,#ff863b",
    border: "border-orange-100 hover:border-brand-coral/40",
    iconBg: "bg-orange-50 text-brand-coral",
  },
  {
    num: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Life Sciences & Biotech",
    description:
      "Staffing clinical trials, regulatory submissions, and quality systems requires more than sourcing skills — it requires industry fluency. Our Life Sciences recruiters support pharma sponsors, CROs, and medical device firms through every phase of development, placing professionals who understand GxP, FDA frameworks, and the urgency of your timelines.",
    tags: ["Clinical Research", "Regulatory Affairs", "Bioinformatics", "QA/QC"],
    topColor: "#10b981,#0d9488",
    border: "border-emerald-100 hover:border-emerald-400/50",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
  {
    num: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Insurance",
    description:
      "From P&C to group benefits, our insurance recruiters understand the technical and regulatory demands of the industry. We place actuaries, underwriters, claims professionals, and compliance leaders who are credentialed, immediately productive, and aligned with your organization's risk appetite.",
    tags: ["Actuarial Science", "Underwriting", "Claims Management", "Compliance"],
    topColor: "#8b5cf6,#7c3aed",
    border: "border-violet-100 hover:border-violet-400/50",
    iconBg: "bg-violet-50 text-violet-700",
  },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Contract Staffing",
    sub: "C2C & W2",
    description:
      "When your pipeline can't wait, we deliver. Our contract staffing practice gives you immediate access to pre-vetted IT, Life Sciences, and Insurance professionals on C2C or W2 terms — without the overhead of a permanent hire. We own the compliance, contracts, and onboarding logistics from day one.",
    accent: "bg-orange-50 text-brand-coral",
    border: "hover:border-brand-coral/40",
    hoverTitle: "group-hover:text-brand-coral",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Contract-to-Hire",
    sub: "Trial → Permanent",
    description:
      "Not every critical hire needs to be permanent from day one. Our contract-to-hire model lets you evaluate a professional's technical output, communication style, and cultural fit in your actual work environment — before you extend a permanent offer. It's the most effective way to eliminate mis-hires at senior levels.",
    accent: "bg-orange-50 text-brand-warm",
    border: "hover:border-brand-warm/40",
    hoverTitle: "group-hover:text-brand-warm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Direct Placement",
    sub: "Full-Time Hire",
    description:
      "When the role is mission-critical and the fit must be exact, our direct hire team goes deep. We map the market, engage passive candidates, conduct structured technical screens, and deliver a shortlist accompanied by our evaluator's notes — so you walk into every interview with context, not just a resume.",
    accent: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-300",
    hoverTitle: "group-hover:text-amber-600",
  },
];

const stats = [
  {
    value: "500+",
    label: "Professionals Placed",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "3",
    label: "Specialized Verticals",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    value: "48h",
    label: "Avg. Time-to-Shortlist",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const whyUs = [
  {
    title: "Vertical Expertise, Not Generalist Guesswork",
    description: "Our recruiters don't work across every industry — they go deep in one. Each member of our team is embedded in IT, Life Sciences, or Insurance, which means they evaluate talent the same way your hiring managers do.",
  },
  {
    title: "Qualified Shortlists in 48 Hours",
    description: "The best candidates are rarely available for long. Once engaged, we move immediately — most clients receive a curated, pre-screened shortlist within 48 hours, with our recruiter's written evaluation of each candidate.",
  },
  {
    title: "Every Candidate is Pre-Briefed, Not Just Submitted",
    description: "We don't forward resumes. Every candidate we present has been technically screened, reference-verified, and personally briefed on your role, your team, and your success criteria before you meet them.",
  },
  {
    title: "End-to-End Compliance You Can Count On",
    description: "Whether you need C2C, W2, or a direct hire, we manage classification, contract execution, background screening, and onboarding — keeping your organization protected at every step of the engagement.",
  },
];

const steps = [
  {
    step: "01",
    title: "Define the Requirement",
    description: "We start with a structured intake — not a generic form. We invest time understanding the role's business impact, the team's working style, the technical environment, and what success looks like at 30, 60, and 90 days.",
  },
  {
    step: "02",
    title: "Targeted Market Mapping",
    description: "Our recruiters go far beyond job boards. We actively map talent pools, engage passive candidates through proprietary networks built over years in the industry, and verify credentials before a name ever reaches your desk.",
  },
  {
    step: "03",
    title: "A Shortlist Worth Your Time",
    description: "You receive 3–5 pre-screened, pre-briefed candidates — each accompanied by our recruiter's written assessment. Every profile we submit is one we're personally willing to stand behind.",
  },
  {
    step: "04",
    title: "Seamless Onboarding & Ongoing Support",
    description: "We don't disappear at the offer letter. We manage counter-offer scenarios, coordinate start logistics, handle all compliance documentation, and conduct 30-day check-ins to ensure the placement is delivering.",
  },
];

const testimonials = [
  {
    quote:
      "We've worked with a number of staffing firms, but Zinoit Tech operates on a different level. They took the time to understand our engineering culture — not just the job description — and placed three senior engineers who are still with us nearly two years later.",
    name: "Sarah M.",
    title: "VP of Engineering",
    company: "FinTech SaaS Company",
    initials: "SM",
    avatarBg: "bg-brand-coral",
    accentBg: "bg-brand-coral",
  },
  {
    quote:
      "Clinical staffing requires a recruiter who understands GCP, protocol complexity, and sponsor timelines. Zinoit Tech's Life Sciences team consistently delivers CRAs who don't need hand-holding. They've become a true extension of our clinical operations.",
    name: "Dr. James P.",
    title: "Director of Clinical Operations",
    company: "Phase III Biotech Firm",
    initials: "JP",
    avatarBg: "bg-emerald-600",
    accentBg: "bg-emerald-500",
  },
  {
    quote:
      "Most recruiters submit your resume and vanish. Zinoit Tech prepped me thoroughly for every interview, advocated on my behalf during rate negotiations, and checked in through my first 90 days on contract. It's a fundamentally different experience.",
    name: "Priya R.",
    title: "Senior Business Analyst",
    company: "Fortune 500 Insurance Carrier",
    initials: "PR",
    avatarBg: "bg-violet-600",
    accentBg: "bg-violet-500",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO  — Movate dark charcoal + plum gradient
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden">

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* ── Animated ambient glows ─────────────────────── */}
        <div className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-brand-coral/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute top-16 -left-24 w-[450px] h-[450px] rounded-full bg-brand-plum/50 blur-[110px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-brand-warm/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: "1s" }} />

        {/* ── Slowly rotating rings ──────────────────────── */}
        <div className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[0.04] animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/[0.06] pointer-events-none" style={{ animation: "spin-slow 18s linear infinite reverse" }} />
        <div className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-brand-coral/10 pointer-events-none" style={{ animation: "spin-slow 10s linear infinite" }} />

        {/* ── Floating particles ─────────────────────────── */}
        <div className="absolute w-2   h-2   rounded-full bg-brand-coral/50 top-[20%] left-[22%]  animate-float pointer-events-none" style={{ animationDelay: "0s",   animationDuration: "7s"  }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-warm/60  top-[35%] left-[60%]  animate-float pointer-events-none" style={{ animationDelay: "1.5s", animationDuration: "9s"  }} />
        <div className="absolute w-3   h-3   rounded-full bg-white/5        top-[65%] left-[15%]  animate-float pointer-events-none" style={{ animationDelay: "3s",   animationDuration: "8s"  }} />
        <div className="absolute w-1   h-1   rounded-full bg-brand-yellow/50 top-[75%] left-[70%] animate-float pointer-events-none" style={{ animationDelay: "2s",   animationDuration: "6s"  }} />
        <div className="absolute w-2   h-2   rounded-full bg-brand-coral/30 top-[15%] left-[75%]  animate-float pointer-events-none" style={{ animationDelay: "4s",   animationDuration: "11s" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/10       top-[55%] left-[42%]  animate-float pointer-events-none" style={{ animationDelay: "0.8s", animationDuration: "8.5s"}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-center">

            {/* ── Left: Copy ───────────────────────────── */}
            <div>
              {/* Eyebrow — animate immediately */}
              <div
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse-slow" />
                Specialized Staffing · IT · Life Sciences · Insurance
              </div>

              {/* Headline */}
              <h1
                className="font-display text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                Stop Settling for
                <br />
                {/* Movate warm gradient on accent line */}
                <span className="gradient-text">
                  Almost the Right Fit.
                </span>
              </h1>

              {/* CTAs */}
              <div
                className="mt-9 flex flex-col sm:flex-row gap-3.5 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <Link href="/employers" className="btn-white">
                  Hire Talent <ArrowRight />
                </Link>
                <Link href="/contact" className="btn-ghost-white">
                  Get in Touch
                </Link>
              </div>

              {/* Trust strip */}
              <div
                className="mt-10 flex items-center gap-4 flex-wrap animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <div className="flex -space-x-2">
                  {["bg-brand-coral","bg-emerald-400","bg-brand-warm","bg-violet-400"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-brand-charcoal-deep flex items-center justify-center`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/60">
                  <span className="text-white font-semibold">500+ professionals placed</span> — from startups to Fortune 500 teams
                </p>
              </div>
            </div>

            {/* ── Right: Opportunities Card ────────────── */}
            <div
              className="hidden lg:block animate-slide-right animate-float"
              style={{ animationDelay: "200ms" }}
            >
              <HeroOpportunitiesCard />
            </div>

          </div>
        </div>

        {/* Wave — off-white to match next section */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,72 C240,20 480,64 720,36 C960,8 1200,52 1440,20 L1440,72 Z" fill="#fdfeff" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-light py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 gap-y-10">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} animation="fade-up" delay={i * 80} className="flex flex-col items-center px-6 text-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-brand-coral flex items-center justify-center mb-1 shadow-sm">
                  {s.icon}
                </div>
                <p className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">{s.value}</p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up" className="max-w-2xl mb-16">
            <span className="section-eyebrow">Domain Expertise</span>
            <h2 className="section-heading">We Recruit in Three Verticals.<br />We Master All Three.</h2>
            <div className="section-divider-left" />
            <p className="section-sub">
              Generalist staffing firms spread attention thin. We don&apos;t. Our recruiters operate exclusively
              within their assigned industry — which means they understand your talent market, compliance
              requirements, and urgency at a level most firms simply can&apos;t match.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.title} animation="fade-up" delay={i * 100}>
                <div className={`group relative bg-white rounded-2xl border ${ind.border} shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full`}>
                  {/* Colored top bar */}
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${ind.topColor})` }} />

                  <div className="p-8 pt-9 flex flex-col flex-1">
                    <div className={`w-14 h-14 rounded-2xl ${ind.iconBg} flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                      {ind.icon}
                    </div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">{ind.title}</h3>
                      <span className="text-xs font-bold text-slate-300 font-display ml-2 flex-shrink-0 mt-1">{ind.num}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{ind.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {ind.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                    </div>
                    <Link href="/industries" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-coral hover:gap-3 transition-all duration-200 animate-bounce-x">
                      Explore roles <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={200} className="mt-10 text-center">
            <Link href="/industries" className="btn-secondary">
              View All Industries
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up" className="text-center mb-16">
            <span className="section-eyebrow">Engagement Models</span>
            <h2 className="section-heading">Every Engagement Structured<br />Around Your Objectives</h2>
            <div className="section-divider" />
            <p className="section-sub mx-auto">
              Whether you need a specialist by next week or are making a strategic permanent hire,
              we structure the engagement to minimize your risk and maximize quality at every stage.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <AnimateIn key={svc.title} animation="fade-up" delay={i * 100}>
                <div className={`group bg-white rounded-2xl border border-slate-100 ${svc.border} shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 p-8 h-full flex flex-col`}>
                  <div className={`w-12 h-12 rounded-xl ${svc.accent} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    {svc.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{svc.sub}</p>
                  <h3 className={`font-display text-xl font-bold text-slate-900 mb-3 ${svc.hoverTitle} transition-colors duration-200`}>
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.description}</p>
                  <Link href="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-coral hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={200} className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW IT WORKS — dark charcoal+plum gradient
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-cta-gradient py-24 overflow-hidden">
        {/* Dot overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Coral glow accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-coral/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-plum/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-16">
            <span className="section-eyebrow-light">Our Proven Process</span>
            <h2 className="section-heading-white">From Requirement to Hire.<br />Without the Noise.</h2>
            {/* Movate warm gradient divider line */}
            <div className="w-14 h-1 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, #ff5542, #ff863b, #ffdb4a)" }} />
            <p className="section-sub-light mx-auto">
              Every search follows a disciplined four-step framework we&apos;ve refined across hundreds
              of placements — designed to protect your time and eliminate guesswork at every stage.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimateIn key={s.step} animation="fade-up" delay={i * 100}>
                <div className="relative bg-white/[0.07] hover:bg-white/[0.11] border border-white/[0.12] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Coral accent on active step number */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 flex-shrink-0">
                    <span className="font-display text-2xl font-extrabold text-brand-coral">{s.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2.5">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={300} className="text-center mt-12">
            <Link href="/contact" className="btn-white">
              Get Started Today <ArrowRight />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateIn animation="fade-up" className="text-center mb-16">
            <span className="section-eyebrow">Client & Candidate Outcomes</span>
            <h2 className="section-heading">Results That Speak for Themselves</h2>
            <div className="section-divider" />
            <p className="section-sub mx-auto">
              Our success is measured by one metric — whether the placement works long-term.
              Here&apos;s what clients and candidates say about working with Zinoit Tech.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} animation="fade-up" delay={i * 100}>
                <div className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden h-full">
                  {/* Colored accent top */}
                  <div className={`h-1 w-full ${t.accentBg}`} />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>

                    <p className="text-slate-600 text-[0.9rem] leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-7 pt-5 border-t border-slate-100 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{t.title} · {t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DUAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {/* Employers — dark charcoal */}
            <AnimateIn animation="slide-left">
              <div className="relative bg-hero-gradient rounded-3xl p-10 flex flex-col overflow-hidden h-full">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-coral/30 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col flex-1">
                  <span className="section-eyebrow-light">For Employers</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1 mb-4 leading-snug">
                    Stop settling for candidates<br />who almost fit.
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
                    Our domain-expert recruiters evaluate talent the way your own hiring managers do.
                    Submit a requirement today and receive a qualified, pre-briefed shortlist within
                    48 hours — with our written assessment of every candidate.
                  </p>
                  <ul className="space-y-2.5 mb-9">
                    {[
                      "Domain-expert recruiters — IT, Life Sci & Insurance",
                      "Pre-screened shortlists delivered within 48 hours",
                      "C2C, W2 & direct hire — fully compliant",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                        <svg className="w-4 h-4 text-brand-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/employers" className="btn-white mt-auto self-start">
                    Submit a Requirement <ArrowRight />
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* Candidates — white */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="relative bg-white rounded-3xl p-10 flex flex-col border border-slate-100 shadow-card-md overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col flex-1">
                  <span className="section-eyebrow">For Candidates</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mt-1 mb-4 leading-snug">
                    Your skills deserve<br />the right opportunity.
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                    We don&apos;t blanket-submit resumes. We invest time understanding your background,
                    your goals, and what a great next role looks like for you — then advocate on your
                    behalf to hiring managers who are actively building teams.
                  </p>
                  <ul className="space-y-2.5 mb-9">
                    {[
                      "Personalized matching — no spray-and-pray",
                      "Access to contract, C2H & direct hire roles",
                      "Dedicated recruiter through offer and day 90",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-brand-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/candidates" className="btn-primary mt-auto self-start">
                    Explore Opportunities <ArrowRight />
                  </Link>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FINAL CTA STRIP — coral gradient
      ══════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #ff5542 0%, #ff863b 60%, #ffdb4a 100%)" }}>
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <AnimateIn animation="fade-up" className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
            Let&apos;s solve your next hiring challenge together.
          </h2>
          <p className="text-white/80 mt-4 text-lg mb-9 max-w-xl mx-auto">
            Whether you&apos;re scaling a team or navigating a complex search, our recruiters are
            ready to move fast. Most clients receive a response within four business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link href="/contact" className="btn-dark">
              Talk to a Recruiter <ArrowRight />
            </Link>
            <Link
              href="/candidates"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Browse Open Roles
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
