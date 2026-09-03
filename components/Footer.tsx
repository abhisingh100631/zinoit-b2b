import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "Industries", href: "/industries" },
    { label: "Services",   href: "/services"   },
    { label: "Contact",    href: "/contact"    },
  ],
  "For Employers": [
    { label: "Hire IT Talent",        href: "/employers" },
    { label: "Hire Life Sciences",    href: "/employers" },
    { label: "Hire Insurance Talent", href: "/employers" },
    { label: "Contract Staffing",     href: "/services"  },
    { label: "Direct Placement",      href: "/services"  },
  ],
  "For Candidates": [
    { label: "How We Work With You",  href: "/candidates"        },
    { label: "IT & Technology",       href: "/candidates"        },
    { label: "Life Sciences",         href: "/candidates"        },
    { label: "Insurance",             href: "/candidates"        },
    { label: "Submit Your Resume",    href: "/candidates/submit" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal-deep text-slate-400">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

          {/* ── Brand column ─────────────────────────── */}
          <div>
            {/* Logo — dark variant */}
            <Link
              href="/"
              className="inline-block mb-5 hover:opacity-80 transition-opacity duration-150"
              aria-label="Zinoit Tech — home"
            >
              <span
                className="font-logo leading-none select-none whitespace-nowrap"
                style={{ fontSize: "1.6rem", letterSpacing: "0em" }}
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
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              A US-based staffing firm connecting skilled professionals with industry-leading
              companies across IT, Life Sciences, and Insurance.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <a href="mailto:info@zinoit-tech.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-coral/20 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@zinoit-tech.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                San Diego, CA 92129
              </div>
            </div>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/zinoit/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#0077B5]/30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-2.5">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center gap-2 bg-brand-coral text-white text-sm font-semibold py-2.5 px-5 rounded-full hover:bg-brand-coral-dark transition-colors shadow-coral"
              >
                Hire Talent
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/candidates/submit"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-slate-300 text-sm font-semibold py-2.5 px-5 rounded-full hover:bg-white/5 hover:text-white transition-colors"
              >
                Submit Resume
              </Link>
            </div>
          </div>

          {/* ── Link columns ─────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-brand-coral transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zinoit Tech LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-brand-coral transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-coral transition-colors">Terms of Service</Link>
            <span className="text-slate-600">Staffing solutions across the United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
