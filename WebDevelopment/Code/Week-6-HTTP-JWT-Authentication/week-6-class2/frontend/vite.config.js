import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    historyApiFallback: true, 
      // proxy: {
      //   "/signup": "http://localhost:3000",
      //   "/signin": "http://localhost:3000",
      //   "/me": "http://localhost:3000",
      // },
    },
  
  
})



