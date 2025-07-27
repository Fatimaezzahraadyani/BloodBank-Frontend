// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-red': '#D92425',
        'brand-red-dark': '#C01A1B',
        'brand-dark': '#20202D',
        'brand-gray': '#6B7280',
      }
    },
  },
  plugins: [],
}