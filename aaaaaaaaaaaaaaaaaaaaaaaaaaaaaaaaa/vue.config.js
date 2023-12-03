const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  modules: ['@sidebase/nuxt-auth'],
  auth: {
      provider: {
          type: 'authjs'
      }
  }
})
