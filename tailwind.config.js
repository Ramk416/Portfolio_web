/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // <- keep watching your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}