// Utilities
import { defineStore } from 'pinia'
import { getProducts, getCategories } from '../../helpers/api.js';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    categories: []
  }),
  actions: {
    async getProducts() {
      try {
        this.products = await getProducts();
        console.log(`product are ${this.products}`)
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        this.categories = await getCategories();
      } catch (error) {
        console.log(error);
      }
    },
  }

})
