// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: ["@/assets/css/tailwind.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
      transpile: ['gsap']
    },
})
