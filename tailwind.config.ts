import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Derbyshire Suite Centre Brand ────────── */
        // We keep the variable names the same so the components don't break, 
        // but inject the Navy & Gold hex codes.
        forest:        "#0F2041", // Deep Navy Blue (Primary)
        "forest-light":"#1D335E", // Lighter Navy
        moss:          "#2A4474", // Soft Navy
        wheat:         "#D4AF37", // Warm Gold (Secondary/Accent)
        ivory:         "#F8F9FA",
        linen:         "#F1F5F9",
        cream:         "#F8FAFC",
        charcoal:      "#0A1128", // Deep Dark Navy/Black
        graphite:      "#1E293B",
        taupe:         "#64748B",
        bronze:        "#B8860B", // Dark Gold
        smoke:         "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(10, 17, 40, 0.14)",
        card:     "0 8px 30px rgba(10, 17, 40, 0.07)",
        "card-hover": "0 16px 40px rgba(10, 17, 40, 0.12)",
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
