<template>
  <div>
      <v-app>
            <NuxtRouteAnnouncer />
    <Navbar />      <!-- مكون Navbar -->
    <NuxtPage />    <!-- صفحاتك من app/pages -->
  </v-app>

  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
</script>