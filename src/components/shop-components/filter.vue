<template>
  <v-row class="ml-4">
    <v-col cols="3">
      <div>
        <p>Filter by price</p>
        <div
          v-for="checkbox in priceCheckBoxes"
          :key="checkbox.value"
          class="d-flex justify-content-between"
          style="height: 50px"
        >
          <v-checkbox
            v-model="selected"
            :label="checkbox.label"
            :value="checkbox.value"
            color="primary"
          ></v-checkbox>
          <v-chip rounded="0" variant="outlined" class="mt-3">{{
            checkbox.chip
          }}</v-chip>
        </div>
      </div>
      <div class="my-10">
        <p>Filter by category</p>
        <div
          v-for="category in productStore.categories"
          :key="category.id"
          class="d-flex justify-content-between"
          style="height: 50px"
        >
          <v-checkbox
            v-model="selected"
            :label="category.name"
            :value="category.name"
            color="primary"
          ></v-checkbox>
          <v-chip rounded="0" variant="outlined" class="mt-3">{{
            category.id
          }}</v-chip>
        </div>
      </div>
    </v-col>

    <v-col>
      <div>
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
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import product from "../home-components/product.vue";
import { useProductStore } from "@/store/product-store";

const productStore = useProductStore();

productStore.getProducts();

const priceCheckBoxes = [
  { label: "All Price", value: "All Price", chip: 100 },
  { label: "$0 - $100", value: [0, 100], chip: 100 },
  { label: "$100 - $200", value: [100, 200], chip: 200 },
  { label: "$200 - $300", value: [200, 300], chip: 300 },
  { label: "$300 - $400", value: [300, 400], chip: 400 },
  { label: "$400 - $500", value: [400, 500], chip: 500 },
];

const selected = ref([]);

const filter = async () => {
  try {
    products.value = [];

    // Check if "All Price" is selected
    if (selected.value.includes("All Price")) {
      // If "All Price" is selected, set min and max to null
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      products.value = res.data;
    } else {
      // If there are multiple selected ranges, handle them
      for (const range of selected.value) {
        const res = await axios.get(
          "https://api.escuelajs.co/api/v1/products",
          {
            params: {
              price_min: range[0],
              price_max: range[1],
            },
          }
        );
        products.value.push(...res.data);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

watch(selected, filter);
</script>
