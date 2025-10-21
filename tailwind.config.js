const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FAFAFA',
        neutral: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        oswald: ['Oswald', 'sans'],
        roboto: ['Roboto', 'sans'],
      },
      screens: {
        'tablet': '780px',
      },
    },
  },
  plugins: [],
}

