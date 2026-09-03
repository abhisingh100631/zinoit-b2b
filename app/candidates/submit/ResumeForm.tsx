"use client";

import { useState, useRef, useTransition, FormEvent } from "react";
import { submitResumeAction } from "./actions";

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-150 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/15 bg-white";

const labelCls = "block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5";

type Field = { label: string; name: string; type?: string; placeholder: string; required?: boolean };

const FIELDS: Field[] = [
  { label: "Full Name",        name: "name",     placeholder: "Jane Smith",                 required: true  },
  { label: "Email Address",    name: "email",    type: "email", placeholder: "jane@email.com", required: true  },
  { label: "Phone Number",     name: "phone",    type: "tel",   placeholder: "+1 (555) 000-0000"               },
  { label: "LinkedIn Profile", name: "linkedin", placeholder: "linkedin.com/in/janesmith"                      },
];

export default function ResumeForm() {
  const [pending,  startTransition] = useTransition();
  const [error,    setError]        = useState<string | null>(null);
  const [success,  setSuccess]      = useState(false);
  const [fileName, setFileName]     = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) { setFileName(null); return; }
    if (file.size > 5 * 1024 * 1024) {
      setError("File must be under 5 MB."); setFileName(null);
      e.target.value = "";
      return;
    }
    setError(null);
    setFileName(file.name);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitResumeAction(data);
      if (result.success) {
        setSuccess(true);
        formRef.current?.reset();
        setFileName(null);
      } else {
        setError(result.error);
      }
    });
  }

  /* ── Success state ──────────────────────────────────────────────── */
  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-2">We've got your resume.</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          Someone from our team will review it and be in touch if there's a search that fits your background.
          Usually within 1–2 business days.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm font-semibold text-brand-coral hover:underline"
        >
          Submit another →
        </button>
      </div>
    );
  }

  /* ── Form ───────────────────────────────────────────────────────── */
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

      {/* Error banner */}
      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3.5 text-sm text-red-700">
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{error}</span>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        {FIELDS.slice(0, 2).map((f) => (
          <div key={f.name}>
            <label className={labelCls}>{f.label}{f.required && <span className="text-brand-coral ml-0.5">*</span>}</label>
            <input name={f.name} type={f.type || "text"} placeholder={f.placeholder} required={f.required}
              className={inputCls} onChange={() => setError(null)} />
          </div>
        ))}
      </div>

      {/* Phone + LinkedIn */}
      <div className="grid sm:grid-cols-2 gap-5">
        {FIELDS.slice(2, 4).map((f) => (
          <div key={f.name}>
            <label className={labelCls}>{f.label}</label>
            <input name={f.name} type={f.type || "text"} placeholder={f.placeholder}
              className={inputCls} />
          </div>
        ))}
      </div>

      {/* Vertical + Engagement type */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Sector <span className="text-brand-coral">*</span></label>
          <select name="vertical" required className={inputCls} defaultValue="">
            <option value="" disabled>Select your sector</option>
            <option>Information Technology</option>
            <option>Life Sciences &amp; Biotech</option>
            <option>Insurance</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Engagement Preference</label>
          <select name="engType" className={inputCls} defaultValue="Open to all">
            <option>Open to all</option>
            <option>Contract</option>
            <option>Contract-to-Hire</option>
            <option>Direct / Full-Time</option>
          </select>
        </div>
      </div>

      {/* Background */}
      <div>
        <label className={labelCls}>Brief Background <span className="text-brand-coral">*</span></label>
        <textarea
          name="background"
          rows={4}
          required
          placeholder="Tell us about your experience, the type of roles you're targeting, and where you are in your search — 2–4 sentences is plenty."
          className={`${inputCls} resize-none`}
          onChange={() => setError(null)}
        />
      </div>

      {/* Resume upload */}
      <div>
        <label className={labelCls}>Resume <span className="text-brand-coral">*</span></label>
        <div
          onClick={() => fileRef.current?.click()}
          className={`relative flex items-center gap-4 border-2 border-dashed rounded-xl px-5 py-4 cursor-pointer transition-all duration-150 ${
            fileName
              ? "border-brand-coral/40 bg-orange-50/50"
              : "border-slate-200 bg-slate-50 hover:border-brand-coral/40 hover:bg-orange-50/30"
          }`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            fileName ? "bg-brand-coral/10" : "bg-white border border-slate-200"
          }`}>
            {fileName ? (
              <svg className="w-5 h-5 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {fileName ? (
              <>
                <p className="text-sm font-semibold text-slate-800 truncate">{fileName}</p>
                <p className="text-xs text-slate-400 mt-0.5">Click to replace</p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold text-slate-600">Click to upload your resume</p>
                <p className="text-xs text-slate-400 mt-0.5">PDF, DOC, or DOCX · Max 5 MB</p>
              </>
            )}
          </div>
          <input
            ref={fileRef}
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={handleFile}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending…
          </span>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Submit Resume
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        Your information is kept confidential and never shared without your consent.
      </p>
    </form>
  );
}
