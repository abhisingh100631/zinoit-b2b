import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import AnimateIn from "@/components/AnimateIn";

/* ─── Ticker logos ──────────────────────────────────────── */
const tickerItems = [
  "Salesforce", "HubSpot", "Gartner", "Zendesk", "Workday",
  "ServiceNow", "Cloudflare", "Datadog", "Okta", "Snowflake",
];

/* ─── Services ──────────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Lead Generation",
    desc: "We identify, research, and engage decision-makers that match your ideal customer profile — delivering a steady, qualified flow of prospects into your pipeline every month.",
    tags: ["ICP Targeting", "Prospect Research", "Outbound Outreach"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Appointment Setting",
    desc: "Your sales team's calendar, filled with qualified meetings. We handle the prospecting, multi-touch outreach, and scheduling — you walk into conversations ready to close.",
    tags: ["Qualified Meetings", "Multi-Touch Sequences", "Calendar Mgmt"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Demand Generation",
    desc: "Full-funnel campaigns that warm your market, capture intent, and nurture prospects through every stage of the buying cycle — across email, LinkedIn, content, and paid.",
    tags: ["Content Strategy", "Email Nurture", "LinkedIn Campaigns"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Account-Based Marketing",
    desc: "Laser-focused outreach to your highest-value target accounts. We align sales and marketing around the same accounts, signals, and messaging for maximum impact.",
    tags: ["Target Account Lists", "Personalized Outreach", "Intent Data"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "SDR as a Service",
    desc: "A fully managed sales development function — trained reps, proven playbooks, and reporting — without the overhead of hiring, onboarding, and managing an in-house SDR team.",
    tags: ["Managed SDR Team", "Playbook Development", "Pipeline Reporting"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Revenue Intelligence",
    desc: "Data-driven insights that tell you where your pipeline is leaking, which segments convert best, and what messaging drives meetings — so you can optimize and scale faster.",
    tags: ["Pipeline Analytics", "Conversion Insights", "Market Intelligence"],
  },
];

/* ─── How It Works ──────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "ICP & Strategy",
    desc: "We build your ideal customer profile and craft a go-to-market strategy aligned to your revenue goals and competitive landscape.",
  },
  {
    num: "02",
    title: "Multi-Channel Outreach",
    desc: "Personalized email, LinkedIn, and phone sequences targeting decision-makers with the right message at the right time.",
  },
  {
    num: "03",
    title: "Qualify & Book",
    desc: "Every lead is qualified against your criteria before a meeting lands on your sales team's calendar — no wasted calls.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    desc: "Weekly reporting, A/B testing, and continuous iteration to lower cost-per-meeting and scale what's working.",
  },
];

/* ─── Industries ────────────────────────────────────────── */
const industries = [
  {
    icon: "💻",
    title: "SaaS & Technology",
    desc: "Helping software companies build predictable pipeline across SMB, mid-market, and enterprise segments.",
    color: "text-brand-green",
    bg: "bg-brand-green-xlight",
  },
  {
    icon: "🏦",
    title: "Financial Services",
    desc: "Navigating compliance-sensitive outreach for FinTech, wealth management, and banking clients.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: "🏥",
    title: "Healthcare & Life Sci",
    desc: "Reaching clinical and administrative decision-makers in hospitals, health systems, and biotech.",
    color: "text-brand-green",
    bg: "bg-brand-green-xlight",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Breaking through the noise in a crowded market with targeted outreach to security leaders and CISOs.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: "⚙️",
    title: "Professional Services",
    desc: "Generating qualified pipeline for consulting, legal, HR, and managed services firms.",
    color: "text-brand-green",
    bg: "bg-brand-green-xlight",
  },
  {
    icon: "📊",
    title: "B2B Marketplaces",
    desc: "Driving both supply and demand-side growth through precision targeting and sequenced campaigns.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

/* ─── Testimonials ──────────────────────────────────────── */
const testimonials = [
  {
    quote: "Zinoit had a multi-channel program running in under three weeks and booked more meetings in month one than we'd generated in the entire previous quarter.",
    name: "Priya K.",
    title: "Head of Revenue",
    company: "Series B FinTech",
    initials: "PK",
    avatarBg: "bg-purple-700",
  },
  {
    quote: "Their team knew exactly which pain points to lead with and which personas actually hold budget. The conversion rate from meeting to opportunity has been remarkable.",
    name: "David R.",
    title: "Chief Revenue Officer",
    company: "B2B Cybersecurity",
    initials: "DR",
    avatarBg: "bg-amber-500",
  },
  {
    quote: "We went from inconsistent outbound to a repeatable pipeline engine in 60 days. Zinoit is the real deal — transparent, fast, and obsessed with results.",
    name: "Marcus T.",
    title: "VP of Sales",
    company: "SaaS Platform",
    initials: "MT",
    avatarBg: "bg-purple-500",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white bg-crosshatch relative overflow-hidden">
        {/* Soft right-side glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green-xlight rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left copy */}
            <div>
              {/* Eyebrow ticker pill */}
              <div className="inline-flex items-center gap-2 bg-brand-green-xlight border border-brand-green-light text-brand-green text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-slow" />
                B2B Lead Generation · Demand Gen · Appointment Setting
              </div>

              <h1 className="font-display font-bold text-brand-navy text-4xl md:text-5xl lg:text-[3.25rem] leading-tight tracking-tight mb-6">
                Build a Predictable{" "}
                <span className="gradient-text">B2B Pipeline.</span>
              </h1>

              {/* Value props */}
              <div className="space-y-3 mb-8">
                {[
                  "Pay per qualified lead",
                  "No long-term contract commitment",
                  "Only pay for qualified appointments",
                ].map((vp) => (
                  <div key={vp} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-brand-navy-light">{vp}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
                Zinoit helps B2B technology and services companies generate qualified pipeline through precision outreach, multi-channel campaigns, and expert appointment setting — so your sales team can focus on closing.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                  Book a Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/#how-it-works" className="btn-secondary text-sm py-2.5 px-5">
                  See How It Works
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-slate-100">
                {[
                  { v: "150+", l: "B2B Clients"    },
                  { v: "2,500+", l: "Meetings Set" },
                  { v: "3×",   l: "Pipeline Growth" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display font-extrabold text-brand-navy text-xl leading-none">{s.v}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TICKER
      ══════════════════════════════════════════════════════ */}
      <div className="border-y border-slate-100 bg-brand-gray-light py-4 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm font-semibold text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green opacity-50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-heading mt-2">
              Everything Your Pipeline Needs,<br className="hidden md:block" /> Under One Roof
            </h2>
            <div className="section-divider" />
            <p className="section-sub mx-auto text-center mt-4">
              From first touch to booked meeting, we own the full top-of-funnel motion so your team can focus on what they do best — building relationships and closing deals.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 80}>
                <div className="card-base p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-xlight flex items-center justify-center text-brand-green mb-4 flex-shrink-0">
                    {svc.icon}
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="chip text-[11px] py-0.5">{tag}</span>
                    ))}
                  </div>
                  <Link href="/services" className="text-sm font-semibold text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1 transition-colors mt-auto">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="bg-green-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { v: "2,500+", l: "Qualified Meetings Set"  },
              { v: "150+",   l: "B2B Clients Served"      },
              { v: "3×",     l: "Avg. Pipeline Growth"    },
              { v: "98%",    l: "Client Retention Rate"   },
            ].map((stat, i) => (
              <div key={i} className={i < 3 ? "md:border-r border-white/20" : ""}>
                <p className="font-display font-extrabold text-4xl md:text-5xl leading-none mb-2">{stat.v}</p>
                <p className="text-white/70 text-sm font-medium">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(107,33,168,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green-mid mb-3">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mt-2">
              Outreach That Converts.<br className="hidden md:block" /> Revenue You Keep.
            </h2>
            <div className="w-10 h-0.5 bg-brand-green rounded-full mx-auto mt-4 mb-0" />
            <p className="text-white/70 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              A proven four-step framework that transforms cold outbound into a reliable source of qualified pipeline.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 100}>
                <div className="rounded-2xl p-6 border border-white/12 hover:border-brand-green/40 transition-all duration-300 h-full" style={{ backgroundColor: "rgba(30,41,59,0.7)" }}>
                  <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center mb-5 shadow-green">
                    <span className="font-display font-extrabold text-white text-sm">{step.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/book-call" className="btn-primary text-sm">
              Start Building Your Pipeline
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY ZINOIT
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <span className="section-eyebrow">Why Zinoit</span>
              <h2 className="section-heading mt-2">
                A Pipeline Partner,<br />Not Just a Vendor
              </h2>
              <div className="section-divider-left" />
              <p className="section-sub mt-4">
                Most lead gen agencies optimize for activity metrics. We optimize for one thing — qualified pipeline that your sales team can actually close.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { title: "Vertical-Specialized Teams",   desc: "Our teams aren't generalists. Each specialist knows your buyers' language, pain points, and buying cycle — so outreach resonates instead of bouncing." },
                  { title: "No Long-Term Contracts",       desc: "We earn your business month after month. No lock-in, no minimums. Just results that make you want to stay." },
                  { title: "Full Transparency",            desc: "Real-time dashboards, weekly calls, and honest reporting. You always know exactly what's working and what we're optimizing." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Proof card */}
            <AnimateIn delay={150}>
              <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-card-lg">
                <p className="text-brand-green-mid text-sm font-semibold mb-1">Average pipeline growth</p>
                <p className="font-display font-extrabold text-5xl text-white mb-1">3<span className="text-brand-green">×</span></p>
                <p className="text-white/50 text-xs mb-8">Measured across 150+ client programs in the first 6 months.</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { v: "2,500+", l: "Meetings Booked"  },
                    { v: "98%",    l: "Retention Rate"   },
                    { v: "< 3wk",  l: "Time to First Appt" },
                    { v: "150+",   l: "Clients Served"   },
                  ].map((m) => (
                    <div key={m.l} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="font-display font-extrabold text-2xl text-white leading-none mb-1">{m.v}</p>
                      <p className="text-white/50 text-xs font-medium">{m.l}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-4">
                  <p className="text-amber-300 text-xs font-semibold mb-1">Client Spotlight</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    "Zinoit booked more meetings in month one than we'd generated in the entire previous quarter."
                  </p>
                  <p className="text-white/40 text-xs mt-2">— Head of Revenue, Series B FinTech</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <span className="section-eyebrow">Industries We Serve</span>
            <h2 className="section-heading mt-2">Built for B2B,<br className="hidden md:block" /> Specialized by Vertical</h2>
            <div className="section-divider" />
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.title} delay={i * 70}>
                <div className="card-base p-6">
                  <div className={`w-10 h-10 rounded-xl ${ind.bg} flex items-center justify-center text-xl mb-4`}>
                    {ind.icon}
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-base mb-2">{ind.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <span className="section-eyebrow">Client Stories</span>
            <h2 className="section-heading mt-2">Results That Speak for Themselves</h2>
            <div className="section-divider" />
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-brand-navy text-sm font-semibold leading-tight">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.title} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-green-gradient py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
              Let&apos;s build your pipeline.
            </h2>
            <p className="text-white/75 text-base md:text-lg mb-8">
              Most clients see qualified meetings within the first 30 days. Book your strategy call today — no commitment, just a real conversation about your pipeline goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-white text-sm">
                Book a Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-ghost-white text-sm">
                View Our Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </main>
  );
}
