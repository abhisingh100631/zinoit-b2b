import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ResumeForm from "./ResumeForm";

export const metadata: Metadata = {
  title: "Submit Your Resume | Zinoit Tech",
  description:
    "Share your background with our recruiting team. We'll match you to active searches in IT, Life Sciences, and Insurance.",
};

export default function SubmitResumePage() {
  return (
    <div className="bg-brand-gray-soft min-h-screen">

      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimateIn animation="fade-up">
            <Link
              href="/candidates"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand-coral transition-colors mb-6"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Candidates
            </Link>

            <span className="section-eyebrow">For Candidates</span>
            <h1 className="section-heading mt-2">Submit Your Resume</h1>
            <div className="section-divider-left mt-3 mb-5" />

            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
              We don't post job listings publicly — our searches move fast and stay confidential.
              Share your background and we'll reach out when something fits.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">

          {/* ── Form ────────────────────────────────────────── */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-8">
              <ResumeForm />
            </div>
          </AnimateIn>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <AnimateIn animation="fade-up" delay={200}>
            <div className="space-y-4">

              {/* What happens next */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
                <h3 className="font-display text-sm font-bold text-slate-900 mb-4">
                  What happens next
                </h3>
                <ol className="space-y-4">
                  {[
                    { step: "01", text: "Our team reviews your resume and background" },
                    { step: "02", text: "We match you to any active searches that fit" },
                    { step: "03", text: "A recruiter reaches out within 1–2 business days" },
                    { step: "04", text: "We brief you fully before any client interaction" },
                  ].map((s) => (
                    <li key={s.step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 border border-brand-coral/20 flex items-center justify-center text-[10px] font-bold text-brand-coral">
                        {s.step}
                      </span>
                      <p className="text-sm text-slate-500 leading-snug pt-0.5">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sectors */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
                <h3 className="font-display text-sm font-bold text-slate-900 mb-4">
                  We place in
                </h3>
                <div className="space-y-2.5">
                  {[
                    { name: "Information Technology",  dot: "bg-brand-coral"  },
                    { name: "Life Sciences & Biotech", dot: "bg-emerald-400"  },
                    { name: "Insurance & Risk",        dot: "bg-violet-400"   },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                      <span className="text-sm text-slate-600">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct email fallback */}
              <div className="bg-orange-50 border border-brand-coral/15 rounded-2xl p-5">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Prefer to email directly?{" "}
                  <a
                    href="mailto:info@zinoit-tech.com"
                    className="font-semibold text-brand-coral hover:underline"
                  >
                    info@zinoit-tech.com
                  </a>
                </p>
              </div>

            </div>
          </AnimateIn>

        </div>
      </div>

    </div>
  );
}
