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
    <products />
    <v-row
      class="text-center my-15"
      style="background-color: #edf1ff"
      align-content-center
      ><stayUpdated
    /></v-row>
    <v-row class="mt-15"
      ><v-col cols="3"><p class="text-h4 fw-bold">Just Arrived</p></v-col>
    </v-row>
    <products />
  </v-container>
</template>

<script setup>
import category from "../Home Components/Category.vue";
import products from "../Home Components/Products.vue";
import stayUpdated from "./StayUpdated.vue";
import collection from "./Collection.vue";

const items = [
  { title: "Quality Product", icon: "mdi-check" },
  { title: "Free Shipping", icon: "mdi-truck-fast" },
  { title: "14-Day Return", icon: "mdi-swap-horizontal" },
  { title: "24/7 Support", icon: "mdi-phone-in-talk" },
];
</script>
