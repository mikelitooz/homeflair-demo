import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Emmy's Shop – Charcoal Gray & Soft Cream ── */
        forest:        "#3A3A3A", // Charcoal (Primary)
        "forest-light":"#555555", // Medium Gray
        moss:          "#2A2A2A", // Deep Charcoal
        wheat:         "#D4C5A9", // Soft Cream/Warm Sand (Secondary)
        ivory:         "#FAFAF7", // Off-White
        linen:         "#F3F1EC", // Natural Linen
        cream:         "#FFFFFF",
        charcoal:      "#1E1E1E", // Near Black
        graphite:      "#6B6B6B", // Mid Gray
        taupe:         "#9E9E9E", // Warm Gray
        bronze:        "#BBA978", // Warm Sand Accent
        smoke:         "#EAEAE6", // Light Warm Gray
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(58, 58, 58, 0.06)",
        card:     "0 8px 30px rgba(58, 58, 58, 0.04)",
        "card-hover": "0 16px 40px rgba(212, 197, 169, 0.15)",
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
