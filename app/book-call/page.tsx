"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const agendaItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ideal Customer Profile",
    detail: "We'll map your ICP together — firmographics, technographics, buying triggers, and the personas who control budget.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Target Account Strategy",
    detail: "Identify your top 50–500 accounts, tiering by revenue potential, engagement signals, and competitive displacement opportunity.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Demand Gen Strategy",
    detail: "Channels, cadences, content angles, and sequencing — built around your ACV and sales cycle, not a generic playbook.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "ABM & Appointment Setting",
    detail: "How we identify, warm, and convert decision-makers at your priority accounts into qualified meetings on your calendar.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Data & Targeting",
    detail: "Intent data, contact enrichment, list hygiene, and the data infrastructure needed to fuel a high-converting outbound motion.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Pipeline Objectives",
    detail: "Define what a successful engagement looks like — MQL volume, SQLs per month, pipeline coverage ratio, cost per meeting.",
  },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors duration-150";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
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

export default function BookCallPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", "New Strategy Call Request — Zinoit");
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
        setError("Something went wrong. Please email us directly at hello@zinoit.com.");
      }
    } catch {
      setError("Something went wrong. Please email us directly at hello@zinoit.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy-mid to-[#1a0f2e] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-4">
                Strategy Call
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                30 Minutes That Could{" "}
                <span className="text-brand-teal">Change Your Pipeline</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
                A focused strategy session with a Zinoit growth specialist. No sales pitch — just a direct look at your pipeline gaps and a concrete plan to close them.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  30-minute session
                </span>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  No commitment required
                </span>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Tailored to your market
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Agenda + Form ── */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-start">

            {/* Agenda */}
            <AnimateIn animation="slide-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-8">
                  What we&apos;ll cover
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {agendaItems.map((item) => (
                    <div key={item.title} className="bg-white rounded-2xl border border-slate-100 shadow-card p-5 hover:shadow-card-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-brand-green-xlight flex items-center justify-center text-brand-green mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-display font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-brand-green-xlight border border-brand-green-light rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-green">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-navy text-sm mb-1.5">Also on the agenda</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Sales and marketing alignment — how to make sure every lead we generate lands in the right hands at the right time, and how your CRM and reporting should be set up to measure it.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-400 text-center lg:text-left">
                  Prefer email first?{" "}
                  <Link href="/contact" className="text-brand-green font-medium hover:text-brand-green-dark transition-colors">
                    Send us a brief instead →
                  </Link>
                </p>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn animation="slide-right" delay={100}>
              <div className="lg:sticky lg:top-28">
                {submitted ? (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-green-xlight flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">You&apos;re on the calendar</h2>
                    <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
                      A growth strategist will reach out within 24 hours to confirm a time that works for you.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-8">
                    <div className="mb-6">
                      <h2 className="font-display text-xl font-bold text-slate-900">Request your strategy call</h2>
                      <p className="text-slate-500 mt-1.5 text-sm">We&apos;ll confirm a time within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="First Name" required>
                          <input type="text" name="firstName" required placeholder="Jane" className={inputClass} />
                        </Field>
                        <Field label="Last Name" required>
                          <input type="text" name="lastName" required placeholder="Smith" className={inputClass} />
                        </Field>
                      </div>

                      <Field label="Business Email" required>
                        <input type="email" name="email" required placeholder="jane@company.com" className={inputClass} />
                      </Field>

                      <Field label="Company" required>
                        <input type="text" name="company" required placeholder="Acme Corp" className={inputClass} />
                      </Field>

                      <Field label="Job Title" required>
                        <input type="text" name="jobTitle" required placeholder="VP of Sales" className={inputClass} />
                      </Field>

                      <Field label="Phone Number">
                        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={inputClass} />
                      </Field>

                      <Field label="What&apos;s your biggest pipeline challenge?">
                        <textarea
                          name="challenge"
                          rows={3}
                          placeholder="e.g. We're not generating enough qualified meetings with enterprise accounts…"
                          className={`${inputClass} resize-none`}
                        />
                      </Field>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full text-sm py-3.5 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
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
                            Book My Strategy Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-slate-400">
                        No commitment. No spam. Typically confirmed within 24 hours.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>
    </main>
  );
}
