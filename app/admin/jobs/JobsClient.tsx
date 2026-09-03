"use client";

import { useState, useTransition, FormEvent } from "react";
import type { Job, JobType, Vertical } from "@/types/jobs";
import {
  createJobAction,
  deleteJobAction,
  toggleFeaturedAction,
} from "./actions";

// ── Constants ────────────────────────────────────────────────────────────────

const TYPE_COLORS: Record<JobType, string> = {
  Contract: "bg-blue-50 text-blue-700 border border-blue-100",
  C2H:      "bg-amber-50 text-amber-700 border border-amber-100",
  Direct:   "bg-emerald-50 text-emerald-700 border border-emerald-100",
};

const TYPE_LABELS: Record<JobType, string> = {
  Contract: "Contract",
  C2H:      "Contract-to-Hire",
  Direct:   "Direct Placement",
};

const VERTICALS: Vertical[] = [
  "Information Technology",
  "Life Sciences & Biotech",
  "Insurance",
];

const VERTICAL_COLORS: Record<Vertical, string> = {
  "Information Technology":  "text-brand-coral",
  "Life Sciences & Biotech": "text-emerald-600",
  "Insurance":               "text-violet-600",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day:   "numeric",
    year:  "numeric",
  });
}

// ── Add Job form ─────────────────────────────────────────────────────────────

interface AddJobFormProps {
  onAdded: (job: Job) => void;
}

function AddJobForm({ onAdded }: AddJobFormProps) {
  const [title,    setTitle]    = useState("");
  const [type,     setType]     = useState<JobType>("Contract");
  const [location, setLocation] = useState("");
  const [vertical, setVertical] = useState<Vertical>("Information Technology");
  const [featured, setFeatured] = useState(false);
  const [error,    setError]    = useState<string | null>(null);
  const [success,  setSuccess]  = useState(false);
  const [pending,  startTransition] = useTransition();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const data = new FormData();
    data.set("title",    title.trim());
    data.set("type",     type);
    data.set("location", location.trim());
    data.set("vertical", vertical);
    data.set("featured", String(featured));

    startTransition(async () => {
      const result = await createJobAction(data);
      if (result.error) {
        setError(result.error);
        return;
      }
      if (result.job) {
        onAdded(result.job);
        setTitle("");
        setLocation("");
        setType("Contract");
        setVertical("Information Technology");
        setFeatured(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    });
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none transition-all duration-150 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 bg-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 space-y-5 mb-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-slate-900">
          Add New Listing
        </h2>
        {success && (
          <span className="text-sm text-emerald-600 font-semibold flex items-center gap-1.5 animate-in fade-in">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Job added
          </span>
        )}
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700 font-medium flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
          Job Title <span className="text-brand-coral">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Senior DevOps Engineer"
          required
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Engagement Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as JobType)}
            className={inputCls}
          >
            <option value="Contract">Contract</option>
            <option value="C2H">Contract-to-Hire</option>
            <option value="Direct">Direct Placement</option>
          </select>
        </div>

        {/* Vertical */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Vertical
          </label>
          <select
            value={vertical}
            onChange={(e) => setVertical(e.target.value as Vertical)}
            className={inputCls}
          >
            {VERTICALS.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
          Location <span className="text-brand-coral">*</span>
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Remote · US  or  San Diego, CA"
          required
          className={inputCls}
        />
      </div>

      {/* Featured toggle */}
      <label className="flex items-center gap-3 cursor-pointer select-none group">
        <div className="relative">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-10 h-6 rounded-full border border-slate-200 bg-slate-100 peer-checked:bg-brand-coral peer-checked:border-brand-coral transition-all duration-200" />
          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm peer-checked:translate-x-4 transition-transform duration-200" />
        </div>
        <span className="text-sm font-medium text-slate-700">
          Feature on homepage
          <span className="ml-1.5 text-xs text-slate-400 font-normal">
            (shows in the hero card — max 4)
          </span>
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary text-sm py-2.5 px-6 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Adding…
          </span>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Job
          </>
        )}
      </button>
    </form>
  );
}

// ── Job row ──────────────────────────────────────────────────────────────────

interface JobRowProps {
  job: Job;
  onDelete:         (id: string) => void;
  onToggleFeatured: (id: string, newVal: boolean) => void;
}

function JobRow({ job, onDelete, onToggleFeatured }: JobRowProps) {
  const [deletePending,   startDeleteTransition]   = useTransition();
  const [featurePending,  startFeatureTransition]  = useTransition();
  const [confirmDelete,   setConfirmDelete]         = useState(false);

  function handleDelete() {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    startDeleteTransition(async () => {
      await deleteJobAction(job.id);
      onDelete(job.id);
    });
  }

  function handleToggleFeatured() {
    startFeatureTransition(async () => {
      const result = await toggleFeaturedAction(job.id);
      if (result.job) {
        onToggleFeatured(job.id, result.job.featured);
      }
    });
  }

  return (
    <div
      className={`bg-white rounded-2xl border shadow-card hover:shadow-card-md transition-all duration-200 p-5
        ${job.featured ? "border-brand-coral/20" : "border-slate-100"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        {/* Featured star */}
        <button
          onClick={handleToggleFeatured}
          disabled={featurePending}
          title={job.featured ? "Remove from homepage" : "Feature on homepage"}
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150
            ${job.featured
              ? "bg-orange-50 text-brand-coral border border-brand-coral/20 hover:bg-orange-100"
              : "bg-slate-50 text-slate-300 border border-slate-200 hover:text-brand-coral hover:bg-orange-50"
            }
            ${featurePending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <svg className="w-4 h-4" fill={job.featured ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>

        {/* Job info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap">
            <p className="font-display text-base font-bold text-slate-900">
              {job.title}
            </p>
            {job.featured && (
              <span className="text-[10px] font-bold uppercase tracking-wide bg-orange-50 text-brand-coral border border-brand-coral/20 px-2 py-0.5 rounded-full leading-5">
                Featured
              </span>
            )}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className={`font-semibold ${VERTICAL_COLORS[job.vertical as Vertical] ?? "text-slate-500"}`}>
              {job.vertical}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
            <span>Posted {formatDate(job.posted)}</span>
          </div>
        </div>

        {/* Type badge + delete */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${TYPE_COLORS[job.type]}`}>
            {TYPE_LABELS[job.type]}
          </span>

          {confirmDelete ? (
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-500 hidden sm:inline">Sure?</span>
              <button
                onClick={handleDelete}
                disabled={deletePending}
                className="text-xs font-semibold text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-xl transition-colors disabled:opacity-60"
              >
                {deletePending ? "Removing…" : "Yes, remove"}
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-700 px-2 py-1.5"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleDelete}
              aria-label={`Remove ${job.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-red-200 transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main dashboard ───────────────────────────────────────────────────────────

interface Props {
  initialJobs: Job[];
}

export default function JobsClient({ initialJobs }: Props) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [filter, setFilter] = useState<"all" | Vertical>("all");

  function handleAdded(job: Job) {
    setJobs((prev) => [job, ...prev]);
  }

  function handleDelete(id: string) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  function handleToggleFeatured(id: string, featured: boolean) {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, featured } : j)));
  }

  const filtered = filter === "all" ? jobs : jobs.filter((j) => j.vertical === filter);

  const stats = {
    total:    jobs.length,
    featured: jobs.filter((j) => j.featured).length,
    contract: jobs.filter((j) => j.type === "Contract").length,
    direct:   jobs.filter((j) => j.type === "Direct").length,
    c2h:      jobs.filter((j) => j.type === "C2H").length,
  };

  return (
    <>
      {/* ── Stats ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Listings",  value: stats.total,    color: "text-slate-900"     },
          { label: "Featured",        value: stats.featured, color: "text-brand-coral"   },
          { label: "Contract",        value: stats.contract, color: "text-blue-600"      },
          { label: "Direct / C2H",    value: stats.direct + stats.c2h, color: "text-emerald-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-slate-100 shadow-card p-5 text-center">
            <p className={`font-display text-3xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Add form ──────────────────────────────────────────── */}
      <AddJobForm onAdded={handleAdded} />

      {/* ── Filter tabs ───────────────────────────────────────── */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {(["all", ...VERTICALS] as const).map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
              filter === v
                ? "bg-brand-coral text-white border-brand-coral shadow-sm"
                : "bg-white text-slate-500 border-slate-200 hover:text-brand-coral hover:border-brand-coral/50"
            }`}
          >
            {v === "all" ? "All verticals" : v}
            <span className="ml-1.5 opacity-70">
              ({v === "all" ? jobs.length : jobs.filter((j) => j.vertical === v).length})
            </span>
          </button>
        ))}
      </div>

      {/* ── Job list ──────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-14 text-center shadow-card">
          <svg className="w-10 h-10 text-slate-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-slate-400 text-base font-medium">
            {filter === "all" ? "No jobs yet. Add one above." : `No ${filter} jobs.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onDelete={handleDelete}
              onToggleFeatured={handleToggleFeatured}
            />
          ))}
        </div>
      )}

      {/* ── Footer hint ───────────────────────────────────────── */}
      <p className="mt-8 text-xs text-slate-400 text-center">
        Changes are saved immediately.
        Featured jobs (max 4) appear in the homepage hero card.{" "}
        <span className="text-slate-300">
          {process.env.NODE_ENV === "development"
            ? "Dev mode: writes to data/jobs.json"
            : "Production: persisted to Vercel KV"}
        </span>
      </p>
    </>
  );
}
