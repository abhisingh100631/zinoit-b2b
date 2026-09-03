import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Zinoit Tech",
  description:
    "Reach out to Zinoit Tech. Submit a role brief, send your background, or ask a question. We respond within four business hours.",
};

const afterSubmit = [
  {
    timing: "Within 4 business hours",
    detail:
      "A recruiter who works in your vertical will review your note. You'll receive a direct reply — not an automated confirmation.",
  },
  {
    timing: "Intake call — 30 to 45 min",
    detail:
      "We'll schedule a short call to understand the specifics: the role, the timeline, and what a good outcome looks like for you.",
  },
  {
    timing: "Written confirmation",
    detail:
      "Within 24 hours of the intake call, we send back a brief confirming how we understood your requirement. You correct anything before work begins.",
  },
  {
    timing: "Search or match begins",
    detail:
      "For employers, we begin market mapping. For candidates, we map your profile against active searches and proactive client outreach.",
  },
];

export default function ContactPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════
          HERO — brief, functional
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">Get in touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 max-w-2xl leading-tight">
              Tell us what you need.
              We&apos;ll tell you what&apos;s possible.
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
              Whether you&apos;re looking to fill a role or find one, the starting
              point is the same — a direct conversation with someone who understands
              your field.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MAIN CONTENT — sidebar + form
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 xl:gap-16 items-start">

            {/* ── Left sidebar ── */}
            <AnimateIn animation="slide-left">
              <div className="space-y-10 lg:sticky lg:top-32">

                {/* What happens next */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-6">
                    What happens after you reach out
                  </p>
                  <div className="space-y-6">
                    {afterSubmit.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                            <span className="text-[10px] font-bold text-brand-coral">
                              {i + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-brand-coral uppercase tracking-[0.1em] mb-0.5">
                            {step.timing}
                          </p>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200" />

                {/* Contact info */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                    Prefer to reach out directly
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@zinoit-tech.com"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-brand-coral/40 transition-colors">
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-coral transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">Email</p>
                        <p className="text-sm text-slate-700 group-hover:text-brand-coral transition-colors font-medium">
                          info@zinoit-tech.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/zinoit-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#0077B5]/40 transition-colors">
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">LinkedIn</p>
                        <p className="text-sm text-slate-700 group-hover:text-[#0077B5] transition-colors font-medium">
                          Zinoit Tech LLC
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">Location</p>
                        <p className="text-sm text-slate-700 font-medium">
                          12684 Cabezon Pl, San Diego, CA 92129
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200" />

                {/* Quick links */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
                    More information
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "How we work with employers", href: "/employers" },
                      { label: "How we work with candidates", href: "/candidates" },
                      { label: "Services & engagement models", href: "/services" },
                      { label: "Industries we cover", href: "/industries" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between text-sm text-slate-500 hover:text-brand-coral transition-colors group py-1"
                      >
                        {link.label}
                        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </AnimateIn>

            {/* ── Form ── */}
            <AnimateIn animation="slide-right" delay={100}>
              <ContactForm />
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BOTTOM TRUST STRIP
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-3">
              {[
                "Response within 4 business hours",
                "No retainer or upfront fee for employers",
                "Your background never shared without consent",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 text-brand-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 flex-shrink-0">
              &copy; {new Date().getFullYear()} Zinoit Tech LLC
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
