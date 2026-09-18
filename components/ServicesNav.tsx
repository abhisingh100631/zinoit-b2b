"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "lead-generation",        label: "Lead Generation"        },
  { id: "appointment-setting",    label: "Appointment Setting"    },
  { id: "demand-generation",      label: "Demand Generation"      },
  { id: "account-based-marketing", label: "ABM"                   },
  { id: "sdr-as-a-service",       label: "SDR as a Service"       },
  { id: "data-solutions",         label: "Data Solutions"         },
];

export default function ServicesNav() {
  const [active, setActive] = useState("lead-generation");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="sticky top-[68px] z-40 bg-white border-b border-slate-100 shadow-[0_1px_0_0_#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                setActive(id);
              }}
              className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                active === id
                  ? "border-brand-green text-brand-green"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
