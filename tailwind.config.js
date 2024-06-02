/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        clash: "'Clash Display', sans-serif",
      },
      colors: {
        primary: "#ff5555",
        gradientYellow: "#fdcc8e",
      },
    },
  },
  plugins: [],
};
