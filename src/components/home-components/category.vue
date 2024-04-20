<template>
  <v-col
    v-for="category in categories"
    :key="category.id"
    cols="4"
    class="mx-auto"
  >
    <p class="text-right">15 products</p>
    <br />
    <img
      :src="category.image"
      width="350"
      height="350"
      style="margin-left: -12px"
    />
    <p class="text-h6 fw-bold">{{ category.name }}</p></v-col
  >
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const categories = ref([]);
onMounted(() => {
  fetchCategories();
});

const fetchCategories = () => {
  axios
    .get(`https://api.escuelajs.co/api/v1/categories`)
    .then((res) => {
      categories.value = res.data;
      console.log(categories.value.length)
    })
    .catch((err) => console.log(`Error ${err} occured!`));
};
</script>
