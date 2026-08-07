import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF7FB",
        foreground: "#2B2135", // Text Main
        muted: "#7C7086", // Text Muted
        luxury: {
          primary: "#F06292",
          primaryLight: "#FF8DA1",
          secondary: "#FFB6C1",
          purple: "#C084FC",
          blue: "#A5D8FF",
          pink: "#FFD6E7",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        handwriting: ["var(--font-great-vibes)", "cursive"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        "text-shine": "text-shine 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1) translate(0, 0)" },
          "50%": { opacity: "0.65", transform: "scale(1.15) translate(3%, -3%)" },
        },
        "text-shine": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
