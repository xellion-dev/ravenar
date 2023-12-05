import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [  vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('sl-')
      }
    }
  })],
  meteor: {
    clientEntry: 'imports/ui/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },
})
