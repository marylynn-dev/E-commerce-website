<template>
  <v-container
    ><v-row class="my-15"
      ><v-col v-for="item in items" cols="3">
        <v-card variant="outlined" max-width="300" rounded="0">
          <v-card-text class="d-flex justify-content-between">
            <v-icon color="primary" size="55px" :icon="item.icon"></v-icon>
            <div class="my-auto text-h5" style="font-weight: 600">
              {{ item.title }}
            </div>
          </v-card-text>
        </v-card>
      </v-col></v-row
    >
    <v-row class="my-15"><category /> </v-row>
    <v-row><collection /></v-row>
    <v-row class="mt-15"
      ><v-col cols="3"><p class="text-h4 fw-bold">Trandy Products</p></v-col>
    </v-row>
    <v-row v-if="productStore.products">
      <v-col
        v-for="product in productStore.products"
        :key="product.id"
        cols="4"
        class="mx-auto"
        rounded="0"
      >
        <product :product="product"> </product> </v-col
    ></v-row>
    <v-row
      class="text-center my-15"
      style="background-color: #edf1ff"
      align-content-center
      ><stayUpdated
    /></v-row>
    <v-row class="mt-15"
      ><v-col cols="3"><p class="text-h4 fw-bold">Just Arrived</p></v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in productStore.products"
        :key="product.id"
        cols="4"
        class="mx-auto"
        rounded="0"
      >
        <product :product="product"> </product> </v-col
    ></v-row>
  </v-container>
</template>

<script setup>
//imports
import { useProductStore } from "../../store/product-store.js";
import category from "./category.vue";
import product from "./product.vue";
import stayUpdated from "./stay-updated.vue";
import collection from "./collection.vue";

//middleware
const productStore = useProductStore();

//data
const items = [
  { title: "Quality Product", icon: "mdi-check" },
  { title: "Free Shipping", icon: "mdi-truck-fast" },
  { title: "14-Day Return", icon: "mdi-swap-horizontal" },
  { title: "24/7 Support", icon: "mdi-phone-in-talk" },
];

productStore.getProducts();
</script>
