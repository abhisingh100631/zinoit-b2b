import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zinoit — B2B Lead Generation, Demand Gen & Appointment Setting",
    template: "%s — Zinoit",
  },
  description:
    "Zinoit is a B2B growth agency specializing in lead generation, appointment setting, and demand generation for ambitious revenue teams. Pay per qualified lead.",
  metadataBase: new URL("https://zinoit.com"),
  openGraph: {
    type: "website",
    siteName: "Zinoit",
    title: "Zinoit — B2B Lead Generation, Demand Gen & Appointment Setting",
    description:
      "Zinoit is a B2B growth agency specializing in lead generation, appointment setting, and demand generation for ambitious revenue teams.",
    url: "https://zinoit.com",
  },
  twitter: {
    card: "summary",
    title: "Zinoit — B2B Lead Generation, Demand Gen & Appointment Setting",
    description:
      "Zinoit is a B2B growth agency specializing in lead generation, appointment setting, and demand generation for ambitious revenue teams.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
