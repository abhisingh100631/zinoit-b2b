"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services",      href: "/services"      },
  { label: "Industries",    href: "/industries"    },
  { label: "Case Studies",  href: "/case-studies"  },
  { label: "How It Works",  href: "/#how-it-works" },
  { label: "Contact",       href: "/contact"       },
];

const ZLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#6B21A8" />
    <path d="M8.5 10.5H23.5L8.5 21.5H23.5" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? "shadow-[0_1px_0_0_#e2e8f0,0_4px_20px_-4px_rgba(0,0,0,0.08)]" : "shadow-[0_1px_0_0_#f1f5f9]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 hover:opacity-90 transition-opacity duration-150" aria-label="Zinoit — home">
            <ZLogo size={30} />
            <span className="font-display font-bold text-[1.35rem] text-brand-navy tracking-tight leading-none select-none">
              zinoit
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} className="nav-link px-3.5 py-2 rounded-md">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Link href="/book-call" className="btn-primary text-sm py-2.5 px-5">
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-brand-green hover:bg-brand-green-xlight transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-5 shadow-card-md">
          <nav className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-green hover:bg-brand-green-xlight py-3 px-3 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Link href="/book-call" className="btn-primary text-sm text-center w-full" onClick={() => setMenuOpen(false)}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
