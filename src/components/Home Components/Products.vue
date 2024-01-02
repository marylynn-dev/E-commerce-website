<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="4"
      class="mx-auto"
      rounded="0"
      ><v-card>
        <v-img :src="product.images[0]" width="350" height="350"></v-img>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-subtitle>{{ `$ ${product.price}` }}</v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary" prepend-icon="mdi-eye-outline" variant="text">
            View Detail
            <template v-slot:prepend
              ><v-icon color="primary"></v-icon>
            </template>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" prepend-icon="mdi-cart" variant="text">
            Add To Cart
            <template v-slot:prepend
              ><v-icon color="primary"></v-icon>
            </template>
          </v-btn>
        </v-card-actions> </v-card></v-col
  ></v-row>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);

onMounted(() => {
  fetchProducts();
});

const fetchProducts = () => {
  axios
    .get(`https://api.escuelajs.co/api/v1/products`)
    .then((res) => {
      res.data.splice(9, Infinity);
      products.value = res.data;
      console.log(products.value[0]);
    })
    .catch((err) => console.log(err));
};
</script>
