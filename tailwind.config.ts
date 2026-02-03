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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        surface: "var(--surface)",
        
        card: "var(--card-bg)",
        "card-border": "var(--card-border)",
        muted: "var(--text-muted)",
        input: "var(--input-bg)",
        ftrbg: "var(--footer-bg)",
      },
    },
  },
  plugins: [],
};
export default config;