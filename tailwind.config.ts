import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Deep slate / charcoal — the industrial, premium base.
        ink: {
          DEFAULT: "#0b1220",
          50: "#f4f6f9",
          100: "#e7ebf1",
          200: "#c7d0de",
          300: "#9caabf",
          400: "#6b7d99",
          500: "#4a5b76",
          600: "#38475e",
          700: "#2c384b",
          800: "#1c2534",
          900: "#111826",
          950: "#0b1220",
        },
        // Warm amber — polished-concrete / premium-craft accent.
        brand: {
          DEFAULT: "#d97706",
          50: "#fff8eb",
          100: "#fdedc8",
          200: "#fbd88d",
          300: "#f9c052",
          400: "#f6a723",
          500: "#e88c0c",
          600: "#d97706",
          700: "#b45f09",
          800: "#924b0e",
          900: "#783f10",
          950: "#451f05",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.06), 0 8px 24px -12px rgba(11,18,32,0.18)",
        "card-hover": "0 2px 4px rgba(11,18,32,0.08), 0 20px 40px -16px rgba(11,18,32,0.28)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
