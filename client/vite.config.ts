import {defineConfig} from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, 'src')}]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/_functions.scss" as *;
        @use "@/assets/styles/_mixins" as *;
        @use "@/assets/styles/_constants" as *;
        `
      }
    }
  }
})
