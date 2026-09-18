import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Lead Generation",       href: "/services" },
    { label: "Appointment Setting",   href: "/services" },
    { label: "Demand Generation",     href: "/services" },
    { label: "Account-Based Marketing", href: "/services" },
    { label: "SDR as a Service",      href: "/services" },
  ],
  Industries: [
    { label: "SaaS & Technology",     href: "/industries" },
    { label: "Financial Services",    href: "/industries" },
    { label: "Healthcare & Life Sci", href: "/industries" },
    { label: "Professional Services", href: "/industries" },
    { label: "Cybersecurity",         href: "/industries" },
  ],
  Company: [
    { label: "About Us",    href: "/contact"       },
    { label: "Case Studies",href: "/case-studies"  },
    { label: "Contact",     href: "/contact"       },
    { label: "Book a Call", href: "/book-call"     },
  ],
};

const ZLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#6B21A8" />
    <path d="M8.5 10.5H23.5L8.5 21.5H23.5" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">

          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 hover:opacity-85 transition-opacity" aria-label="Zinoit — home">
              <ZLogo />
              <span className="font-display font-bold text-[1.3rem] text-white tracking-tight leading-none select-none">zinoit</span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              A B2B growth agency specializing in lead generation, appointment setting, and demand generation for ambitious revenue teams.
            </p>

            <div className="mt-6 space-y-3">
              <a href="mailto:info@zinoit.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-green/30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@zinoit.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                12684 Cabezon Pl, San Diego, CA USA 92129
              </div>
            </div>

            <div className="mt-6">
              <a href="https://www.linkedin.com/company/zinoit" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#0077B5]/30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>

            <div className="mt-7">
              <Link href="/book-call" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white text-sm font-semibold py-2.5 px-5 rounded-full hover:bg-brand-green-dark transition-colors shadow-green">
                Book a Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-5">{heading}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-green-mid transition-colors duration-150">
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

      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zinoit LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-brand-green-mid transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-green-mid transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
