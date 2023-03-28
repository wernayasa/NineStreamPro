/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent': '#e0443a',
        'base' : '#0e0e0e',
        'base2': '#171717',
        'caaa': '#aaaaaa',
        'c292': '#292929',
        'c1c1': '#1c1c1c'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
