<template>
  <v-app-bar height="25px" flat>
    <div class="w-100">
      <div class="d-flex w-100">
        <div class="d-flex w-100 my-auto">
          <v-row>
            <v-col cols="10"
              ><v-breadcrumbs :items="items" divider="|"> </v-breadcrumbs
            ></v-col>

            <v-col cols="1"
              ><v-breadcrumbs :items="items" divider="|"> </v-breadcrumbs
            ></v-col>
          </v-row>
        </div>
      </div>
      <div class="w-100">
        <v-row>
          <v-col cols="3">
            <v-btn
              variant="outlined"
              color="secondary"
              height="65"
              class="mx-2"
              rounded="0"
            >
              <span
                class="text-primary text-h3 my-auto"
                style="font-weight: 900"
                >E</span
              >
            </v-btn>
            <span class="my-auto text-h3" style="font-weight: 600"
              >Shopper</span
            ></v-col
          >
          <v-col cols="5"
            ><v-text-field
              append-icon="mdi-magnify"
              variant="outlined"
              type="text"
              density="compact"
              rounded="0"
              flat
              color="secondary"
            ></v-text-field
          ></v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-btn variant="outlined" color="secondary" rounded="0" class="mx-2"
              ><v-icon color="primary">mdi-heart</v-icon></v-btn
            >
            <v-btn variant="outlined" color="secondary" rounded="0"
              ><v-icon color="primary">mdi-cart</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
const items = [
  { title: "FAQs", href: "#" },
  { title: "Help", href: "#" },
  { title: "Support", href: "#" },
];
</script>
