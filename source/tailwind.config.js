/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./popup.html"],
  theme: {
    extend: {
      colors: {
        'space-dark': '#07101e',
        'space-deep': '#020810',
      },
    },
  },
  plugins: [],
}