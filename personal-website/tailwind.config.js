import { defineConfig } from "vite";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Update paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['"Roboto Mono"', "monospace"],
      },
      colors: {
        secondary: "#DA2530",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" }, // Start from initial position
          "100%": { transform: "translateX(-100%)" }, // Scroll halfway (since content is duplicated)
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
      },

      // typography: {
      //   DEFAULT: {
      //     css: {
      //       h1: {
      //         fontSize: "5rem", // Adjust as needed
      //         fontWeight: "700",
      //         lineHeight: "2.5rem",
      //         color: "#FFF", // Default color
      //       },
      //       h2: {
      //         fontSize: "1.875rem",
      //         fontWeight: "600",
      //         lineHeight: "2.25rem",
      //         color: "#2d3748",
      //       },
      //       h3: {
      //         fontSize: "1.5rem",
      //         fontWeight: "500",
      //         lineHeight: "2rem",
      //         color: "#4a5568",
      //       },
      //       p: {
      //         fontSize: "1rem",
      //         lineHeight: "1.75rem",
      //         color: "#56d2b8",
      //       },
      //       a: {
      //         color: "#3182ce",
      //         textDecoration: "underline",
      //         "&:hover": {
      //           color: "#2b6cb0",
      //         },
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
