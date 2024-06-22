/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      // gridTemplateRows: {
      //   'layout': 'auto 1fr auto',
      // },
      colors: {
        'logo-main': '#CD5C5C',
      },
      fontFamily: {
        'main': ['Montserrat']
      }
    },
  },
  plugins: [],
}

