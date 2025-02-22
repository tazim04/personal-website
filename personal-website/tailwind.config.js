import { defineConfig } from "vite";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['"Roboto Mono"', "monospace"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
