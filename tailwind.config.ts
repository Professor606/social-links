import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bag)",
        fg: "var(--fag)",
        card: "var(--card)",
        incard: "var(--incard)",
        greena: "var(--greena)",
      },
    },
  },
  plugins: [],
} satisfies Config;
