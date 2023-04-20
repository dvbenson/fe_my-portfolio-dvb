/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'electric-lime': '#CCFF00',
      'pink': '#FFCCCC',
      'blue': '#669999',
      'gray': '#CCCCCC',
      'gray-dark': '#9D9D9D',
      'black': '#000000',
      'black-gray': '#2C3333',
      'gray-black': '#434D49',
      'white': '#FFFFFF',
      'purple': '#CAB8FF',
    },

    extend: {},
  },
  plugins: [],
};
