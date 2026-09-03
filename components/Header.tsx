"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Services",   href: "/services"   },
  { label: "Employers",  href: "/employers"  },
  { label: "Candidates", href: "/candidates" },
  { label: "Contact",    href: "/contact"    },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_0_#e2e8f0,0_4px_20px_-4px_rgba(0,0,0,0.09)]"
          : "shadow-[0_1px_0_0_#f1f5f9]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────────── */}
          {/*
            Font: Circular Std / Avenir Next → Nunito (Google Fonts fallback)
            Same rounded-geometric DNA. Weight 800 for "zinoit", 300 for "tech".
          */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-85 transition-opacity duration-150"
            aria-label="Zinoit Tech — home"
          >
            <span
              className="font-logo leading-none select-none whitespace-nowrap"
              style={{ fontSize: "1.75rem", letterSpacing: "0em" }}
            >
              <span
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  background: "linear-gradient(90deg, #ff5542 0%, #ff7a5c 45%, #ffb8a8 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                zinoit
              </span>
              <span className="text-slate-400" style={{ fontWeight: 300, letterSpacing: "0.04em" }}>tech</span>
            </span>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link px-3 py-2 rounded-md">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/zinoit/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zinoit Tech on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <Link href="/employers" className="btn-primary text-sm py-2.5 px-5">
              Hire Talent
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* ── Mobile Hamburger ─────────────────────────── */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-brand-coral hover:bg-orange-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-5 shadow-card-md">
          <nav className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-coral hover:bg-orange-50 py-3 px-2 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-100">
            <Link href="/employers" className="btn-primary text-sm text-center w-full" onClick={() => setMenuOpen(false)}>
              Hire Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
