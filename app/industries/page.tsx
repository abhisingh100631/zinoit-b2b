import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Industries | Zinoit — B2B Lead Generation & Demand Gen",
  description:
    "Zinoit delivers B2B lead generation and demand gen for SaaS, financial services, healthcare, cybersecurity, professional services, and more.",
};

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const industries = [
  {
    id: "saas-technology",
    label: "SaaS & Technology",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    headline: "Pipeline for SaaS & Technology Companies",
    description:
      "Enterprise SaaS and technology companies face long sales cycles, complex buying committees, and fierce competitive pressure. We build outbound programs that surface in-market buyers early — before they reach your competitors.",
    useCases: [
      "Enterprise ACV deals with multi-stakeholder buying committees",
      "Competitive displacement campaigns targeting rivals' customers",
      "Product-led growth expansion into mid-market and enterprise",
      "Category creation demand gen for new-to-market solutions",
    ],
    personas: ["CIO / CTO", "VP of Engineering", "Head of IT", "VP of Product"],
  },
  {
    id: "financial-services",
    label: "Financial Services",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: "Growth Programs for Financial Services",
    description:
      "Financial services firms operate in a highly regulated, relationship-driven environment. Our outreach respects the compliance landscape while reaching the right stakeholders at banks, insurers, fintechs, and asset managers.",
    useCases: [
      "Fintech solutions targeting CFOs and treasury teams",
      "B2B insurance and risk management outreach",
      "Wealth management technology for RIAs and family offices",
      "Compliance and RegTech demand generation",
    ],
    personas: ["CFO", "Head of Finance", "Chief Risk Officer", "VP of Treasury"],
  },
  {
    id: "healthcare-life-sciences",
    label: "Healthcare & Life Sciences",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    headline: "Demand Gen for Healthcare & Life Sciences",
    description:
      "Selling into healthcare requires navigating complex procurement, multiple stakeholders, and long decision cycles. We know how to reach clinical leaders, IT decision-makers, and administrative buyers with messaging that lands.",
    useCases: [
      "Health IT and EHR/EMR solutions for hospitals and health systems",
      "Life sciences software and laboratory informatics",
      "Medical devices and equipment for IDNs and health systems",
      "Healthcare AI and analytics platforms",
    ],
    personas: ["CMO / CMIO", "CIO / IT Director", "VP of Operations", "Supply Chain Leader"],
  },
  {
    id: "professional-services",
    label: "Professional Services",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    headline: "Pipeline for Professional Services Firms",
    description:
      "Consulting, legal, accounting, and advisory firms grow on relationships — but relationships start with conversations. We create the outbound engine that gets you in front of the right buyers before they've already chosen a vendor.",
    useCases: [
      "Management consulting and strategy advisory",
      "B2B legal and compliance services",
      "Accounting, audit, and financial advisory",
      "HR consulting and organizational design",
    ],
    personas: ["CEO / COO", "General Counsel", "CFO", "CHRO / VP of People"],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    headline: "Outbound Programs for Cybersecurity Companies",
    description:
      "The cybersecurity market is crowded and noisy. Every buyer is skeptical, and the sales cycle starts long before an RFP. We build the awareness and outbound motion that puts you in front of CISOs and security leaders before the buying process begins.",
    useCases: [
      "SIEM, SOAR, and SOC-as-a-Service platforms",
      "Identity and access management (IAM) solutions",
      "Cloud security and endpoint protection",
      "GRC and compliance automation",
    ],
    personas: ["CISO", "VP of Security", "IT Director", "Head of Compliance"],
  },
  {
    id: "manufacturing-industrial",
    label: "Manufacturing & Industrial",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    headline: "Growth Programs for Manufacturing & Industrial",
    description:
      "Industrial and manufacturing companies selling B2B face long procurement cycles and conservative buyers. We reach plant managers, operations leaders, and procurement teams with outbound that speaks their language.",
    useCases: [
      "Industrial IoT and automation platforms",
      "Supply chain and procurement software",
      "ERP and MES solutions for manufacturers",
      "Maintenance, repair, and operations (MRO) services",
    ],
    personas: ["VP of Operations", "Plant Manager", "Chief Procurement Officer", "Head of Engineering"],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white pt-16 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">Industries we serve</span>
            <h1 className="section-heading mt-2 max-w-3xl">
              Vertical Expertise. <span className="gradient-text">Measurable Pipeline.</span>
            </h1>
            <p className="section-sub max-w-2xl">
              We don&apos;t run generic campaigns. Every engagement is built around the buyer behaviors, decision cycles, and competitive dynamics specific to your industry.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-green bg-brand-green-xlight border border-brand-green-light px-4 py-2 rounded-full hover:bg-brand-green hover:text-white transition-all duration-200"
                >
                  {ind.label}
                </a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Industry sections ── */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-brand-gray-soft"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-14 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <AnimateIn animation={i % 2 === 0 ? "slide-left" : "slide-right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-2xl bg-brand-green-xlight flex items-center justify-center text-brand-green mb-5">
                  {ind.icon}
                </div>
                <span className="section-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="section-heading mt-2">{ind.headline}</h2>
                <p className="section-sub mt-4">{ind.description}</p>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Common use cases</p>
                  <ul className="space-y-3">
                    {ind.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link href="/book-call" className="btn-primary text-sm">
                    Discuss your market <ArrowRight />
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn animation={i % 2 === 0 ? "slide-right" : "slide-left"} delay={100} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-5">
                      Personas we reach
                    </p>
                    <div className="space-y-3">
                      {ind.personas.map((persona) => (
                        <div key={persona} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                          <div className="w-7 h-7 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-brand-green-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-sm text-white/80 font-medium">{persona}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-green-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Don&apos;t see your industry listed?
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              We work across any B2B vertical. Book a strategy call and tell us about your market.
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
