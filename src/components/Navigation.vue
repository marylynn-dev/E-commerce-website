<template>
  <v-card class="mx-auto" width="300" flat>
    <v-list class="text-left">
      <v-list-group value="Categories" class="bg-color-primary">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Categories"></v-list-item>
        </template>

        <v-list-group value="Dresses">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Dresses"></v-list-item>
          </template>

          <v-list-item
            v-for="([title], i) in dresses"
            :key="i"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-item
          v-for="([title], i) in categories"
          :key="i"
          :value="title"
          :title="title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script setup>
const dresses = [["Men's Dresses"], ["Women's Dresses"], ["Baby's Dresses"]];
const categories = [
  ["Shirts"],
  ["Jeans"],
  ["Swimwear"],
  ["Sleepwear"],
  ["Sportswear"],
  ["Jumpsuits"],
  ["Blazers"],
  ["Jackets"],
  ["Shoes"],
];
</script>
