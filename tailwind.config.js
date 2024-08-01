/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lm: "396px",
      sm: "620px",
      md: "768px",
      mf: "827px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
