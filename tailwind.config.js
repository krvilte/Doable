/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fcecde",
          200: "#fad9bc",
          300: "#f7c59b",
          400: "#f5b279",
          500: "#f29f58",
          600: "#c27f46",
          700: "#915f35",
          800: "#614023",
          900: "#302012",
        },

        // primary: {
        //   100: "#e4f0f5",
        //   200: "#c9e1eb",
        //   300: "#aed1e2",
        //   400: "#93c2d8",
        //   500: "#78b3ce",
        //   600: "#608fa5",
        //   700: "#486b7c",
        //   800: "#304852",
        //   900: "#182429",
        // },
      },
    },
  },
  plugins: [],
};
