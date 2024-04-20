// api.js
import axios from 'axios';


export const getProducts = async () => {
    try {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products');
        return JSON.stringify(res.data)
    } catch (error) {
        console.error(`Error fetching products: ${error}`);
    }
};

export const getCategories = async () => {
    try {
        return await axios.get('https://api.escuelajs.co/api/v1/categories');

    } catch (error) {
        console.error(`Error fetching categories: ${error}`);
    }
};
