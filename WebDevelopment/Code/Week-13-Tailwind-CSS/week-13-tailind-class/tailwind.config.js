/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-green': {
          '50': '#f1ffe6',
          '100': '#e0fec9',
          '200': '#c1fd99',
          '300': '#9af85e',
          '400': '#76ed2e',
          '500': '#5de710',
          '600': '#3ea907',
          '700': '#31800b',
          '800': '#2a650f',
          '900': '#255611',
          '950': '#0f3003',
        },

      },
    },
  },
  plugins: [],
};
