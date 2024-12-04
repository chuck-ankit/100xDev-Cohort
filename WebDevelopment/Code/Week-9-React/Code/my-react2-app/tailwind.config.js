/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-orange': {
          '50': '#fff1f1',
          '100': '#ffe2e1',
          '200': '#ffcac8',
          '300': '#ffa4a1',
          '400': '#fe706b',
          '500': '#f6352e',
          '600': '#e4251e',
          '700': '#c01b15',
          '800': '#9f1a15',
          '900': '#831d19',
          '950': '#480907',
        },
      },
    },
  },
  plugins: [],
}
