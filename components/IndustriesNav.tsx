"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "technology",    label: "Technology"              },
  { id: "life-sciences", label: "Life Sciences & Biotech" },
  { id: "insurance",     label: "Insurance"               },
];

export default function IndustriesNav() {
  const [active, setActive] = useState("technology");

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
    <nav className="sticky top-[72px] z-40 bg-white border-b border-slate-100 shadow-[0_1px_0_0_#f1f5f9]">
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
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                active === id
                  ? "border-brand-coral text-brand-coral"
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
