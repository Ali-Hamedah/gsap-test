// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // دعم TypeScript الصارم
  typescript: {
    strict: true
  },

  // استيراد ملفات CSS (Vuetify)
  css: [
    '@/assets/css/main.css',  // Tailwind
    'vuetify/styles'          // Vuetify
  ],


  // تمكين auto-import للمكونات
  components: true,

  // إعداد البناء ليعرف Vuetify
  build: {
    transpile: ['vuetify']
  },

  //vite: {
   // plugins: [
    //  tailwindcss(),
    //],
  //},

   postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})

  