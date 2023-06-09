/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      green: "green",
      white: '#ffffff',
      yellow: '#E0FF00',
      purple:'#140D20',
      grey: '#c7c3c3',
      error: 'red'
    },
    fontFamily: {
      krona: 'krona one',
      inter: 'inter', 
    },
    extend: {},
  },
  plugins: [],
}

