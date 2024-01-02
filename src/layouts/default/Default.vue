<template>
  <v-layout>
    <Appbar />
    <v-main class="main">
      <Main />
    </v-main>
  </v-layout>
</template>

<script setup>
//imports
import Appbar from "../default/AppBar.vue";
import Main from "../default/Main.vue";
</script>

<style scoped>
.main {
  margin-top: 125px;
}
</style>