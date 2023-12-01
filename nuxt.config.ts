// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@bg-dev/nuxt-naiveui'
  ],
  typescript: {
    shim: false
  }
})
