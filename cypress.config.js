import { defineConfig } from 'vite'

export default defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'vue'
    }
  },
})