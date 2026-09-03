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
          /* ── Movate-inspired dark palette ── */
          "charcoal-deep": "#111315",   // deepest dark — hero bg, footer
          "charcoal":      "#26282b",   // Movate primary — main text, dark btns
          "charcoal-mid":  "#2f3235",   // slightly lighter charcoal
          "plum":          "#4f3144",   // Movate secondary — gradient mid
          "plum-light":    "#6b3e5e",   // lighter plum

          /* ── Movate warm accent palette ── */
          "coral":         "#ff5542",   // Movate tertiary — primary CTA accent
          "coral-dark":    "#cc4435",   // hover state
          "coral-light":   "#ff7a6e",   // lighter accent
          "warm":          "#ff863b",   // warm orange (Movate gradient)
          "yellow":        "#ffdb4a",   // bright yellow (Movate gradient)
          "pink":          "#ff5ca9",   // pink (Movate gradient end)

          /* ── Neutrals ── */
          "gray":          "#64748B",   // body text
          "gray-mid":      "#c3c3c3",   // borders / dividers
          "gray-light":    "#fdfeff",   // off-white bg (Movate base)
          "gray-soft":     "#f8f9fa",   // section alternating bg
        },
      },
      fontFamily: {
        sans:    ["Inter",               "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter",     "system-ui", "sans-serif"],
        brand:   ['"DM Sans"',           "Inter",     "system-ui", "sans-serif"],
        logo:    ["-apple-system", "BlinkMacSystemFont", '"Helvetica Neue"', "Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        "5xl": ["3rem",    { lineHeight: "1.15" }],
        "6xl": ["3.75rem", { lineHeight: "1.1"  }],
        "7xl": ["4.5rem",  { lineHeight: "1.05" }],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight:   "-0.02em",
      },
      boxShadow: {
        card:       "0 1px 4px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        "card-md":  "0 4px 16px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)",
        "card-lg":  "0 12px 40px -6px rgb(0 0 0 / 0.14), 0 4px 10px -4px rgb(0 0 0 / 0.08)",
        "coral":    "0 4px 20px -4px rgba(255, 85, 66, 0.45)",
        "coral-lg": "0 8px 36px -4px rgba(255, 85, 66, 0.55)",
        "warm":     "0 4px 20px -4px rgba(255, 134, 59, 0.4)",
      },
      backgroundImage: {
        /* hero / CTA dark sections */
        "hero-gradient": "linear-gradient(135deg, #111315 0%, #4f3144 55%, #26282b 100%)",
        "cta-gradient":  "linear-gradient(135deg, #111315 0%, #4f3144 55%, #26282b 100%)",

        /* Movate's signature warm gradient for text/accents */
        "movate-warm":   "linear-gradient(90deg, #ff312b 0%, #ff863b 30%, #ffdb4a 60%, #ff5ca9 100%)",
        "coral-gradient":"linear-gradient(135deg, #ff5542 0%, #ff863b 100%)",
        "warm-soft":     "linear-gradient(135deg, #fff5f4 0%, #fff8f2 100%)",
      },
      backgroundSize: {
        "200": "200% auto",
      },
      keyframes: {
        /* entrance */
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%":   { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)"     },
        },
        "slide-right": {
          "0%":   { opacity: "0", transform: "translateX(32px)"  },
          "100%": { opacity: "1", transform: "translateX(0)"     },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)"    },
        },
        /* continuous */
        "float": {
          "0%, 100%": { transform: "translateY(0px)"   },
          "50%":      { transform: "translateY(-14px)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center"  },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1"   },
          "50%":      { opacity: "0.4" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)"   },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)"   },
          "50%":      { transform: "translateX(4px)" },
        },
      },
      animation: {
        "fade-up":    "fade-up    0.65s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":    "fade-in    0.5s  ease both",
        "slide-left": "slide-left 0.65s cubic-bezier(0.22,1,0.36,1) both",
        "slide-right":"slide-right 0.65s cubic-bezier(0.22,1,0.36,1) both",
        "scale-in":   "scale-in   0.5s  cubic-bezier(0.22,1,0.36,1) both",
        "float":      "float      6s    ease-in-out infinite",
        "shimmer":    "shimmer    4s    linear infinite",
        "pulse-slow": "pulse-slow 3s    ease-in-out infinite",
        "spin-slow":  "spin-slow  12s   linear infinite",
        "bounce-x":   "bounce-x   1.2s  ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
