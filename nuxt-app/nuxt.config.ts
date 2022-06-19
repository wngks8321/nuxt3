import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  baseUrl: "/",
  app: {
    head: {
      "charset": "utf-8",
      "title": "Nuxt3 테스트",
      "style": [
        { type: 'text/css', src: 'assets/styles/reset.css' }
      ]
    }
  }
})
