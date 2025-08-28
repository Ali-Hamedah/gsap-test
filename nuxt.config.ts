// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // دعم TypeScript الصارم
  typescript: {
    strict: true
  },

  // استيراد ملفات CSS (Vuetify)
  css: [
    'vuetify/styles'
  ],

  // تمكين auto-import للمكونات
  components: true,

  // إعداد البناء ليعرف Vuetify
  build: {
    transpile: ['vuetify']
  }
})
