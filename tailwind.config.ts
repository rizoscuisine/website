// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // includes TypeScript files
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
    colors: {
      "main-black": "var(--main-black)",
      "main-brown": "var(--main-brown)",
    },
    keyframes: {
      slideInFromTop: {
        "0%": { transform: "translate(-50%, -100%)", opacity: "0" },
        "100%": { transform: "translate(-50%, -50%)", opacity: "1" },
      },
    },
    animation: {
      slideInFromTop: "slideInFromTop 0.5s ease-out",
    },
  },
  plugins: [],
};

export default config;
