import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* ── Core palette — Purple + Amber (Rippling-inspired) ── */
          navy:           "#0F172A",
          "navy-mid":     "#1E293B",
          "navy-light":   "#334155",

          /* Purple — primary / logo / CTA */
          green:          "#6B21A8",
          "green-dark":   "#581C87",
          "green-mid":    "#9B59D6",
          "green-light":  "#E9D5FF",
          "green-xlight": "#F5F0FF",

          /* Amber/Yellow — secondary / animation / accents */
          teal:           "#F59E0B",
          "teal-light":   "#FEF3C7",

          /* Neutrals */
          gray:          "#64748B",
          "gray-light":  "#F8FAFC",
          "gray-soft":   "#F1F5F9",
          "gray-mid":    "#CBD5E1",
        },
      },
      fontFamily: {
        sans:    ["Inter",               "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter",     "system-ui", "sans-serif"],
        logo:    ["-apple-system", "BlinkMacSystemFont", '"Helvetica Neue"', "Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        "5xl": ["3rem",    { lineHeight: "1.12" }],
        "6xl": ["3.75rem", { lineHeight: "1.08" }],
        "7xl": ["4.5rem",  { lineHeight: "1.04" }],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight:   "-0.02em",
      },
      boxShadow: {
        card:      "0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-md": "0 4px 16px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)",
        "card-lg": "0 10px 36px -4px rgb(0 0 0 / 0.12), 0 4px 10px -4px rgb(0 0 0 / 0.07)",
        green:      "0 4px 20px -4px rgba(107, 33, 168, 0.40)",
        "green-lg": "0 8px 36px -4px rgba(107, 33, 168, 0.50)",
      },
      backgroundImage: {
        "hero-gradient":  "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        "cta-gradient":   "linear-gradient(135deg, #0F172A 0%, #1a1a2e 50%, #0d2137 100%)",
        "green-gradient": "linear-gradient(135deg, #6B21A8 0%, #9B59D6 55%, #F59E0B 100%)",
        "navy-gradient":  "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)"   },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1"   },
          "50%":      { opacity: "0.4" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center"  },
        },
        "ticker": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-1": {
          "0%, 100%": { transform: "translate(0px,   0px)   scale(1)"    },
          "33%":      { transform: "translate(28px, -18px)  scale(1.08)" },
          "66%":      { transform: "translate(-18px, 12px)  scale(0.95)" },
        },
        "blob-2": {
          "0%, 100%": { transform: "translate(0px,   0px)   scale(1)"    },
          "33%":      { transform: "translate(-22px, 16px)  scale(1.06)" },
          "66%":      { transform: "translate(18px, -10px)  scale(1.1)"  },
        },
        "blob-3": {
          "0%, 100%": { transform: "translate(0px,  0px)  scale(1)"    },
          "50%":      { transform: "translate(14px, 18px) scale(1.12)" },
        },
        "slide-up-fade": {
          "0%":   { opacity: "0", transform: "translateY(8px)"  },
          "100%": { opacity: "1", transform: "translateY(0px)"  },
        },
      },
      animation: {
        "fade-up":       "fade-up       0.6s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":       "fade-in       0.5s ease both",
        "float":         "float         5s  ease-in-out infinite",
        "pulse-slow":    "pulse-slow    3s  ease-in-out infinite",
        "shimmer":       "shimmer       4s  linear infinite",
        "ticker":        "ticker        30s linear infinite",
        "blob-1":        "blob-1        13s ease-in-out infinite",
        "blob-2":        "blob-2        16s ease-in-out infinite",
        "blob-3":        "blob-3        11s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
