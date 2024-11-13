/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // Add Flowbite content here
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
        'waikawa-gray': {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          '700': '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
        },
        'green-vogue': {
          '50': '#e9faff',
          '100': '#cef3ff',
          '200': '#a7ecff',
          '300': '#6be5ff',
          '400': '#26d1ff',
          '500': '#00acff',
          '600': '#0082ff',
          '700': '#0067ff',
          '800': '#0058e6',
          '900': '#0050b3',
          '950': '#002a5b',
    
        },
        "blue-new": "#d1d1d1",
        blue: {
          200: "#8094ad",
          500: "#19406a",
          700: "#002b5b",
        },
        green: {
          400: "#36c6c0"
        },
        slate: {
          200: "#e4e8ee",
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Add Flowbite plugin here
  ],
};
