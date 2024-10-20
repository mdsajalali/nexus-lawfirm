/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F1B23",
        secondary: "#B98D44",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
