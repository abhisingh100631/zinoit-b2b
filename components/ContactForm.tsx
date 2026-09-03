"use client";

import { useState, FormEvent } from "react";

type ContactType = "employer" | "candidate";

const verticals = ["Information Technology", "Life Sciences & Biotech", "Insurance", "Multiple / Not Sure"];
const engagements = ["Contract Staffing", "Contract-to-Hire", "Direct Placement", "Managed Talent Services", "Not Sure Yet"];
const timelines = ["Within 2 weeks", "Within a month", "1–3 months", "Exploring options"];
const candidateSituations = [
  "Currently employed — open to the right opportunity",
  "Actively looking for a new role",
  "Between contracts — need the next engagement",
  "Just exploring what's available",
];
const roleTypes = ["Contract / C2C", "Contract-to-Hire", "Permanent / Direct", "Open to any of the above"];

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}

const Field = ({ label, required, children, hint }: FieldProps) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-[0.1em] mb-1.5">
      {label}
      {required && <span className="text-brand-coral ml-1">*</span>}
    </label>
    {children}
    {hint && <p className="mt-1 text-[11px] text-slate-400">{hint}</p>}
  </div>
);

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral transition-colors duration-150";

const selectClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral transition-colors duration-150 cursor-pointer";

export default function ContactForm() {
  const [type, setType] = useState<ContactType>("employer");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network delay — wire up to your form handler / email API here
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-slate-900 text-xl mb-2">
          We&apos;ve got your message.
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          A member of our team will review your note and follow up within{" "}
          <span className="font-medium text-slate-700">four business hours</span>.
          If your need is urgent, email us directly at{" "}
          <a href="mailto:info@zinoit-tech.com" className="text-brand-coral hover:underline">
            info@zinoit-tech.com
          </a>
          .
        </p>
        <button
          onClick={() => { setSubmitted(false); }}
          className="mt-7 text-xs font-medium text-slate-400 hover:text-brand-coral transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">

      {/* Type toggle */}
      <div className="flex border-b border-slate-100">
        {(["employer", "candidate"] as ContactType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`flex-1 py-4 text-sm font-semibold transition-colors duration-150 ${
              type === t
                ? "text-brand-coral border-b-2 border-brand-coral bg-orange-50/40"
                : "text-slate-400 hover:text-slate-600 border-b-2 border-transparent"
            }`}
          >
            {t === "employer" ? "I'm hiring" : "I'm a candidate"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-7 space-y-5">

        {/* Shared fields */}
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full Name" required>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              className={inputClass}
            />
          </Field>
          <Field label="Email Address" required>
            <input
              type="email"
              name="email"
              required
              placeholder="jane@company.com"
              className={inputClass}
            />
          </Field>
        </div>

        {/* ── Employer fields ── */}
        {type === "employer" && (
          <>
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
              <Field label="Role you're looking to fill" required>
                <input
                  type="text"
                  name="role"
                  required
                  placeholder="e.g. Senior Data Engineer"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Industry vertical" required>
                <select name="vertical" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select a vertical</option>
                  {verticals.map((v) => <option key={v}>{v}</option>)}
                </select>
              </Field>
              <Field label="Engagement type">
                <select name="engagement" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select if known</option>
                  {engagements.map((e) => <option key={e}>{e}</option>)}
                </select>
              </Field>
            </div>

            <Field label="Hiring timeline">
              <select name="timeline" defaultValue="" className={selectClass}>
                <option value="" disabled>When do you need someone?</option>
                {timelines.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>

            <Field
              label="Anything else we should know"
              hint="Team context, must-have skills, previous search history — the more specific, the better."
            >
              <textarea
                name="message"
                rows={4}
                placeholder="e.g. We've tried two agencies already. The role needs someone with hands-on experience in regulated environments, not just exposure."
                className={`${inputClass} resize-none`}
              />
            </Field>
          </>
        )}

        {/* ── Candidate fields ── */}
        {type === "candidate" && (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your vertical" required>
                <select name="vertical" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select your field</option>
                  {verticals.map((v) => <option key={v}>{v}</option>)}
                </select>
              </Field>
              <Field label="Current situation">
                <select name="situation" defaultValue="" className={selectClass}>
                  <option value="" disabled>Where are you right now?</option>
                  {candidateSituations.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>

            <Field label="Type of role you're open to">
              <select name="roleType" defaultValue="" className={selectClass}>
                <option value="" disabled>Contract, permanent, or both?</option>
                {roleTypes.map((r) => <option key={r}>{r}</option>)}
              </select>
            </Field>

            <Field
              label="Brief background"
              required
              hint="Your current title, years of experience, and what a good next move looks like for you. Two or three sentences is enough."
            >
              <textarea
                name="background"
                required
                rows={4}
                placeholder="e.g. I'm a Clinical Trial Manager with 9 years in oncology studies. Currently with a mid-size CRO, open to sponsor-side or larger CRO roles in Phase II–III. Not urgent, but the right opportunity would move me."
                className={`${inputClass} resize-none`}
              />
            </Field>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Your background will not be shared with any employer without your
              explicit consent. We&apos;ll review it and follow up directly — not
              via an automated workflow.
            </p>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-brand-coral text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-brand-coral-dark transition-colors shadow-coral disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {submitting ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z" />
              </svg>
              Sending…
            </>
          ) : (
            type === "employer" ? "Submit Role Brief" : "Send My Background"
          )}
        </button>

      </form>
    </div>
  );
}
