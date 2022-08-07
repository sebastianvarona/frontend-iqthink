/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#4E1469',
        secondary: '#5365F8',
        grayscale: {
          5: '#EDEDED',
          15: '#A6AABF',
          30: '#5B5E6F',
          90: '#373B5C',
        },
        background: {
          default: '#F2F2F2',
          light: '#F9F9F9',
        },
      },
    },
  },
  plugins: [],
};
