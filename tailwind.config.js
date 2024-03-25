/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./config/**/*.{js,jsx,ts,tsx,html,xml,}",
    "./**/*.{js,jsx,ts,tsx,html,xml,}"
  ],
  theme: {
    extend: {
      colors: {
        color: {
          darkPrimary: "#252b42",
          darkSecondary: "#394264"
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
  darkMode: 'class'
}