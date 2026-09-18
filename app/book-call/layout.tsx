import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Call — Zinoit",
  description:
    "Book a free 30-minute strategy call with Zinoit. We'll review your ICP, target accounts, demand generation approach, and pipeline objectives — no fluff, no pitch.",
};

export default function BookCallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
