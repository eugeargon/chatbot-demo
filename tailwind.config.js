/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        rankia: {
          light: '#F9F9F9',
          DEFAULT: '#F5F5F5',
          dark: '#ECECEC',
        },
      },
      textColor: {
        rankia: {
          DEFAULT: '#FF9900',
          dark: '#CC7A00',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
