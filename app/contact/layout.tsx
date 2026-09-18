import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Zinoit",
  description:
    "Ready to build a predictable B2B pipeline? Tell us about your growth goals and we'll put together a tailored demand generation strategy for your team.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
