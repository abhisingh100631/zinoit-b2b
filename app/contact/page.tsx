"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";

const services = [
  "Demand Generation",
  "Lead Generation",
  "Appointment Setting",
  "Account-Based Marketing (ABM)",
  "Data Solutions",
  "Digital Marketing",
  "Other",
];

const afterSubmit = [
  {
    timing: "Within 24 hours",
    detail:
      "A growth strategist reviews your submission and reaches out to schedule a brief discovery call — no generic auto-replies.",
  },
  {
    timing: "Discovery call — 20 to 30 min",
    detail:
      "We'll understand your ICP, target market, current pipeline gaps, and what success looks like for your revenue team.",
  },
  {
    timing: "Strategy brief",
    detail:
      "Within 48 hours of the discovery call, we share a tailored approach covering channels, targeting, and projected outcomes.",
  },
  {
    timing: "Engagement begins",
    detail:
      "Once aligned on scope, we get to work building pipeline — fast onboarding, clear milestones, transparent reporting.",
  },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors duration-150";

const selectClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors duration-150 cursor-pointer appearance-none";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-[0.1em] mb-1.5">
        {label}
        {required && <span className="text-brand-green ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", "New Contact Submission — Zinoit");
    formData.append("from_name", "Zinoit Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at info@zinoit.com.");
      }
    } catch {
      setError("Something went wrong. Please email us directly at info@zinoit.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white pt-20 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <span className="section-eyebrow">Get in touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2 max-w-3xl leading-tight">
              Let&apos;s Build Your Next{" "}
              <span className="gradient-text">Growth Campaign</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
              Tell us about your target market, revenue goals, and where your pipeline falls short. We&apos;ll show you exactly how Zinoit can help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[360px_1fr] gap-12 xl:gap-16 items-start">

            {/* Left sidebar */}
            <AnimateIn animation="slide-left">
              <div className="space-y-10 lg:sticky lg:top-32">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-6">
                    What happens after you reach out
                  </p>
                  <div className="space-y-6">
                    {afterSubmit.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shadow-green">
                            <span className="text-[10px] font-bold text-white">{i + 1}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-brand-green uppercase tracking-[0.1em] mb-0.5">
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

                <div className="border-t border-slate-200" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                    Reach us directly
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:info@zinoit.com" className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/40 transition-colors">
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">Email</p>
                        <p className="text-sm text-slate-700 group-hover:text-brand-green transition-colors font-medium">info@zinoit.com</p>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/company/zinoit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#0077B5]/40 transition-colors">
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-0.5">LinkedIn</p>
                        <p className="text-sm text-slate-700 group-hover:text-[#0077B5] transition-colors font-medium">Zinoit LLC</p>
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
                        <p className="text-sm text-slate-700 font-medium">12684 Cabezon Pl, San Diego, CA USA 92129</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn animation="slide-right" delay={100}>
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green-xlight flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Message received</h2>
                  <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                    A growth strategist will review your brief and follow up within 24 hours to schedule a discovery call.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-slate-900">Tell us about your growth goals</h2>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                      The more detail you share, the more specific we can be in our response.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="First Name" required>
                        <input
                          type="text"
                          name="firstName"
                          required
                          placeholder="Jane"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Last Name" required>
                        <input
                          type="text"
                          name="lastName"
                          required
                          placeholder="Smith"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Business Email" required>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="jane@company.com"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Phone Number">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Company" required>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Acme Corp"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Job Title" required>
                        <input
                          type="text"
                          name="jobTitle"
                          required
                          placeholder="VP of Sales"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field label="Company Website">
                      <input
                        type="url"
                        name="website"
                        placeholder="https://yourcompany.com"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Service Interested In" required>
                      <div className="relative">
                        <select name="service" required className={selectClass}>
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </Field>

                    <Field label="Target Market / Geography">
                      <input
                        type="text"
                        name="targetMarket"
                        placeholder="e.g. Mid-market SaaS in North America"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Message">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your current pipeline challenges, ideal customer profile, and what success looks like…"
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full text-sm py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Let&apos;s Discuss Your Growth Strategy
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-center text-xs text-red-500 mt-1">{error}</p>
                    )}
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      No spam. No retainer required to start a conversation. We respond within 24 hours.
                    </p>
                  </form>
                </div>
              )}
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "Response within 24 hours",
              "No commitment required",
              "B2B specialists only — no generalists",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
