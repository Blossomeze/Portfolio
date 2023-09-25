/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#272d3b',
      white: '#fff',
      secondary: '#FF0000',
      black: '#000',
      gray: '#d3d3d3'
    },
    extend: {},
  },
  plugins: [],
}