import { productEndpoint } from '../api/endpoints';
import axios from 'axios';

export const createProduct = async (product) => {
    const url = productEndpoint.createProduct;
    try {
        const response = await axios.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const readAllProducts = async () => {
    const url = productEndpoint.readAllProducts;
    try {
        const response = await axios.post(url);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const readOneProduct = async (id) => {
    const url = productEndpoint.readOneProduct;
    try {
        const response = await axios.post(url, id);
        if(response.data.status === 200) return response.data;
    }catch(error) {
        return error.data;
    }
}

export const updateProduct = async (product) => {
    const url = productEndpoint.updateProduct;
    try {
        const response = await axios.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const publishProduct = async (product) => {
    const url = productEndpoint.publishProduct;
    try {
        const response = await axios.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

export const deleteProduct = async (product) => {
    const url = productEndpoint.deleteProduct;
    try {
        const response = await axios.post(url, product);
        return response.data;
    }catch(error) {
        return error.data;
    }
}

