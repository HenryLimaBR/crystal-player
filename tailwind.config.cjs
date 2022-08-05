/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.4s ease-out',
        'zoomIn': 'zoomIn 0.4s ease-out',
      },
      keyframes: {
        'blink': {
          '0%': { opacity: 1, },
          '50%': { opacity: 0, },
          '100%': { opacity: 1, },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'zoomIn': {
          '0%': { opacity: 0, transform: 'scale(0.25)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
