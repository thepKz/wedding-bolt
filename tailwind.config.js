/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: 'var(--ivory)',
        'rose-gold': 'var(--rose-gold)',
        champagne: 'var(--champagne)',
        sage: 'var(--sage)',
        graphite: 'var(--graphite)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}