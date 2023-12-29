import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0F172A",
        blue: "#2563EB",
        gray: "#64748B",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
