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
      },
      keyframes: {
        'blink': {
          '0%': { opacity: 1, },
          '50%': { opacity: 0, },
          '100%': { opacity: 1, },
        }
      }
    },
  },
  plugins: [],
}
