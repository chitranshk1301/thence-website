/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'covered-by-your-grace': ['"Covered By Your Grace"', 'sans-serif'],
        'manrope': ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  mode: 'jit'
}