/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLight: '#38bdf8',
        blueDark: '#0284c7',
      },
    },
  },
  plugins: [],
}