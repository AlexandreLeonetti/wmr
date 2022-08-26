/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        boxShadow: {
           'cmc' : 'rgb(128 138 157 / 12%) 0px 1px 2px, rgb(128 138 157 / 24%) 0px 8px 32px',
        }
    },
  },
  plugins: [],
}
