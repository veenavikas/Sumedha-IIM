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
        background: "#f8fafc",
        foreground: "#0f172a",
        navy: {
          DEFAULT: "#0B2A68",
          deep: "#061a40",
          footer: "#031436",
          dark: "#04173d",
        },
        gold: {
          DEFAULT: "#d9a441",
          light: "#ffe9b0",
          dark: "#b88328",
        },
        skyblue: {
          DEFAULT: "#0284c7",
          light: "#e0f2fe",
          mid: "#38bdf8",
          dark: "#0369a1",
        },
        border: {
          DEFAULT: "#dbeafe",
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #0B2A68 0%, #0284c7 50%, #0369a1 100%)',
        'gold-gradient': 'linear-gradient(90deg, #d9a441 0%, #ffe9b0 50%, #d9a441 100%)',
        'sky-gradient': 'linear-gradient(180deg, #f0f7ff 0%, #e0f2fe 50%, #f0f7ff 100%)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'page': '1500px',
      },
    },
  },
  plugins: [],
};
export default config;
