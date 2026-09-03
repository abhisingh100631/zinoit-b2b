import type { Metadata } from "next";
import Link from "next/link";
import { loginAction } from "./actions";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Zinoit Tech",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { from?: string; error?: string };
}) {
  const from = searchParams.from || "/admin/jobs";

  return (
    <div className="min-h-screen bg-brand-gray-soft flex flex-col items-center justify-center px-4">
      {/* Back to site */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-coral transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to zinoit<span className="text-slate-400 font-light">tech</span>
      </Link>

      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card-md p-8">

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 mx-auto">
            <svg className="w-7 h-7 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="font-display text-2xl font-bold text-slate-900 text-center mb-1">
            Admin Access
          </h1>
          <p className="text-sm text-slate-500 text-center mb-7">
            Manage job listings and site content.
          </p>

          {/* Form — client component for inline error display */}
          <LoginForm loginAction={loginAction} from={from} />
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Set <code className="bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-600">ADMIN_PASSWORD</code> in{" "}
          <code className="bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-600">.env.local</code>
        </p>
      </div>
    </div>
  );
}
