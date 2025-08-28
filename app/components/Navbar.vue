<template>
  <v-app-bar flat app color="#825dd2" dark scroll-behavior="hide">
    <!-- شعار -->
    <v-toolbar-title>Juicy</v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="links">
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/test">About</v-btn>
      <v-btn text to="/Product">Product</v-btn>
      <v-btn text to="/Contact">Contact</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
// لا حاجة لأي منطق JS الآن
</script>

<style scoped>

nav a:hover {
  color: #ffeb3b;
}
.v-toolbar-title {
  position: relative;
  left: 150px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: x-large;
}
.links {
  position: relative;
  right: 150px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
