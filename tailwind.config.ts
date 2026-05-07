import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Emmy's Shop Brand ────────── */
        forest:        "#D9777F", // Rose Pink (Primary)
        "forest-light":"#E59CA2", // Light Rose
        moss:          "#C06068", // Deep Rose
        wheat:         "#A9C1B8", // Sage Green (Secondary)
        ivory:         "#FAF7F5", // Soft Cream/Blush
        linen:         "#F2EBE9", // Warm neutral
        cream:         "#FFFFFF",
        charcoal:      "#2D3748", // Soft Black/Slate
        graphite:      "#4A5568", // Gray
        taupe:         "#A0AEC0",
        bronze:        "#8E9A8E", // Muted Sage
        smoke:         "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"], // Boutique feel
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(217, 119, 127, 0.08)",
        card:     "0 8px 30px rgba(217, 119, 127, 0.05)",
        "card-hover": "0 16px 40px rgba(217, 119, 127, 0.1)",
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
