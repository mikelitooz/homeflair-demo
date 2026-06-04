import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Mr Slators Furnishings – Navy, Gold & Burgundy ── */
        forest:        "#101D36", // Deep Navy Blue (Primary Dark)
        "forest-light":"#1C325B", // Medium Navy Blue
        moss:          "#080F1D", // Deepest Dark Navy
        wheat:         "#D4AF37", // Gold / Warm Yellow (Secondary Accent)
        ivory:         "#FAF9F6", // Off-White Canvas
        linen:         "#F1EFEA", // Warm Linen
        cream:         "#FFFFFF",
        charcoal:      "#121212", // Near Black
        graphite:      "#555555", // Mid Gray
        taupe:         "#8B8B99", // Warm Muted Gray
        bronze:        "#8A1528", // Burgundy Red (Highlight Accent)
        smoke:         "#E8E6E1", // Light Warm Gray
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(16, 29, 54, 0.08)",
        card:     "0 8px 30px rgba(16, 29, 54, 0.05)",
        "card-hover": "0 16px 40px rgba(212, 175, 55, 0.18)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in":  "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
