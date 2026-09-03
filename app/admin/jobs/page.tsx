import type { Metadata } from "next";
import { getAllJobs } from "@/lib/jobs";
import JobsClient from "./JobsClient";
import { logoutAction } from "@/app/admin/login/actions";

export const metadata: Metadata = {
  title: "Job Management | Zinoit Tech Admin",
  robots: { index: false, follow: false },
};

// Always fetch fresh data
export const dynamic = "force-dynamic";

export default async function AdminJobsPage() {
  const jobs = await getAllJobs();

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-charcoal-deep border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <span
                className="font-logo leading-none select-none"
                style={{ fontSize: "1.3rem", letterSpacing: "0em" }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #ff5542 0%, #ff7a5c 45%, #ffb8a8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  zinoit
                </span>
                <span className="text-slate-500" style={{ fontWeight: 300 }}>tech</span>
              </span>
              <span className="text-slate-600 text-sm hidden sm:inline">·</span>
              <span className="text-slate-400 text-sm font-medium hidden sm:inline">Admin</span>
            </div>

            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-brand-gray-soft min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page header */}
          <div className="mb-10">
            <span className="section-eyebrow">Job Management</span>
            <h1 className="section-heading mt-1">Active Listings</h1>
            <div className="section-divider-left mt-3" />
          </div>

          {/* Client component handles all interactivity */}
          <JobsClient initialJobs={jobs} />
        </div>
      </div>
    </>
  );
}
