import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Mr Slators Furnishings – Real Storefront Colours ── */
        /* Source: Actual shopfront signage photo                  */
        forest:        "#1C2B5E", // Deep Navy Blue  (sign text & wordmark)
        "forest-light":"#2A3F80", // Medium Navy     (hover states)
        moss:          "#111A3A", // Darkest Navy    (deep backgrounds)
        wheat:         "#E8732A", // Burnt Orange    (bullet dots & logo badge)
        ivory:         "#FAF9F6", // Off-White       (canvas / page bg)
        linen:         "#F2F0EC", // Warm Linen      (section backgrounds)
        cream:         "#FFFFFF", // Pure White      (sign fascia)
        charcoal:      "#121212", // Near Black      (body text)
        graphite:      "#4A4A55", // Mid Gray        (nav bars)
        taupe:         "#8B8B99", // Muted Gray      (secondary text)
        bronze:        "#C05A1A", // Deep Orange     (darker accent / pressed state)
        smoke:         "#E4E2DE", // Light Gray      (borders & dividers)
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom:    "0 24px 70px rgba(28, 43, 94, 0.08)",
        card:        "0 8px 30px rgba(28, 43, 94, 0.05)",
        "card-hover":"0 16px 40px rgba(232, 115, 42, 0.18)",
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
