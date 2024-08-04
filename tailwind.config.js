/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#232323',
        'code-green': '#79ff5b',
        'code-blue': '#74cdf7',
        'code-orange': '#fcbf5c',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      fontFamily: {
        'code': ['Source Code Pro', 'monospace'],
        'heading': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}