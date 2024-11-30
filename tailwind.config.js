/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cef4db",
          200: "#9eeab7",
          300: "#6ddf92",
          400: "#3dd56e",
          500: "#0cca4a",
          600: "#0aa23b",
          700: "#07792c",
          800: "#05511e",
          900: "#02280f",
        },
      },
    },
  },
  plugins: [],
};
