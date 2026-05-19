import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Homeflair – Est. 1972 ── */
        forest:        "#1A1A1A", // Near-Black (Primary Dark)
        "forest-light":"#2E2E2E", // Soft Charcoal
        moss:          "#111111", // Deep Black
        wheat:         "#C5A880", // Champagne Gold (Signature Accent)
        ivory:         "#FAFAF8", // Off-White Canvas
        linen:         "#F5F3EF", // Warm Linen
        cream:         "#FFFFFF",
        charcoal:      "#0D0D0D", // True Black
        graphite:      "#5C5C5C", // Mid Gray
        taupe:         "#8A8072", // Warm Taupe
        bronze:        "#D01B22", // Crimson Red (Highlight)
        smoke:         "#EDECE8", // Light Warm Gray
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(26, 26, 26, 0.08)",
        card:     "0 8px 30px rgba(26, 26, 26, 0.05)",
        "card-hover": "0 16px 40px rgba(197, 168, 128, 0.18)",
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
