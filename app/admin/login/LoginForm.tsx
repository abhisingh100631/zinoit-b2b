"use client";

import { useState, useTransition } from "react";

interface Props {
  loginAction: (formData: FormData) => Promise<{ error: string } | never>;
  from: string;
}

export default function LoginForm({ loginAction, from }: Props) {
  const [error, setError]       = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setError(null);
    startTransition(async () => {
      const result = await loginAction(data);
      if (result && "error" in result) {
        setError(result.error);
      }
    });
  }

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 ${
      hasError
        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200"
        : "border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 bg-white"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="from" value={from} />

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-slate-700 mb-1.5"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter admin password"
          autoComplete="current-password"
          required
          onChange={() => setError(null)}
          className={inputCls(!!error)}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Signing in…
          </span>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}
