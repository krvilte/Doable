/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fffcde",
          200: "#fff9bd",
          300: "#fff69c",
          400: "#fff37b",
          500: "#fff05a",
          600: "#ccc048",
          700: "#999036",
          800: "#666024",
          900: "#333012",
        },
      },
    },
  },
  plugins: [],
};
