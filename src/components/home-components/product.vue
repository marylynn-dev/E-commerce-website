<template>
  <v-card>
    <v-img width="350" height="350"></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle>{{ `$ ${product.price}` }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" prepend-icon="mdi-eye-outline" variant="text">
        View Detail
        <template v-slot:prepend><v-icon color="primary"></v-icon> </template>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" prepend-icon="mdi-cart" variant="text">
        Add To Cart
        <template v-slot:prepend><v-icon color="primary"></v-icon> </template>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
defineProps({
  product: Object,
});
</script>
