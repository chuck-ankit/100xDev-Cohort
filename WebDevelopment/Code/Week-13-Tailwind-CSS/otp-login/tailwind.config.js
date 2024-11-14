/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'victoria': {
        '50': '#f1f2fc',
        '100': '#e5e7fa',
        '200': '#d1d2f4',
        '300': '#b4b5ed',
        '400': '#9b96e3',
        '500': '#897cd8',
        '600': '#7962c9',
        '700': '#6852b0',
        '800': '#52428a',
        '900': '#483d72',
        '950': '#2a2343',
    },
    
    },
  },
  plugins: [],
}