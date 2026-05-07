import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sublima", "sans-serif"],
        display: ["Sublima", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        card: "var(--card-bg)",
        "card-border": "var(--card-border)",
        muted: "var(--muted)",

        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
export default config;