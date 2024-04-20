<template>
  <div class="border">
    <v-row>
      <v-col cols="3">
        <navigation />
      </v-col>
      <v-col>
        <v-tabs v-model="tab">
          <v-tab value="home">Home</v-tab>
          <v-tab value="shop">Shop</v-tab>
          <v-tab value="shopDetails">Shop Details</v-tab>
          <v-tab value="contact">Contact</v-tab>
          <div class="custom">
            <span class="mx-5">Login</span> <span>Register</span>
          </div>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="home">
            <carousel />
          </v-window-item>
          <v-window-item value="shop">
            <div
              style="
                background-color: #edf1ff;
                height: 300px;
                display: grid;
                place-items: center;
              "
            >
              <div>
                <p style="font-weight: 500; font-size: 50px">OUR SHOP</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                    href="#"
                    style="color: #d19c97"
                    >Home</a
                  >
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; Shop
                </p>
              </div>
            </div>
          </v-window-item>
          <v-window-item value="shopDetails">
            <div
              style="
                background-color: #edf1ff;
                height: 300px;
                display: grid;
                place-items: center;
              "
            >
              <div>
                <p style="font-weight: 500; font-size: 50px">SHOP DETAILS</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                    href="#"
                    style="color: #d19c97"
                    >Home</a
                  >
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; Shop Details
                </p>
              </div>
            </div>
          </v-window-item>
          <v-window-item value="pages"> Pages </v-window-item>
          <v-window-item value="contact">
            <div
              style="
                background-color: #edf1ff;
                height: 300px;
                display: grid;
                place-items: center;
              "
            >
              <div>
                <p style="font-weight: 500; font-size: 50px">CONTACT US</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                    href="#"
                    style="color: #d19c97"
                    >Home</a
                  >
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; Contact
                </p>
              </div>
            </div></v-window-item
          >
        </v-window>
      </v-col>
    </v-row>
    <v-row v-if="tab === 'home'">
      <home />
    </v-row>
    <v-row v-if="tab === 'shop'">
      <shop />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import carousel from "../components/Carousel.vue";
import navigation from "../components/Navigation.vue";
import home from "../components/home-components/home-component.vue";
import shop from  "../components/shop-components/filter.vue"

const tab = ref("home");
</script>
<style scoped>
.custom {
  margin-left: 250px;
  margin-top: 10px;
}

.border {
  border-top: 1px solid red;
}
</style>
