/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'deep-navy-blue': '#1A202C',
        'soft-white': '#F7FAFC',
        'pastel-green': '#38B2AC',
        'charcoal-black': '#2D3748',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}