/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
      colors: {
        'pastel-pink': '#fce7f3',
        'soft-coral': '#fed7d7',
        'warm-pink': '#f9a8d4',
        'gentle-rose': '#fbb6ce',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}