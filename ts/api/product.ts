import {apiFetch} from "~/composables/api.fetch";

export const getProducts = async () => {
    return apiFetch('products', {server: false});
}

export const deleteProduct = async (id: number) => {
    return apiFetch(`products/${id}`, {server: false, method: 'delete'});
}

export const addProduct = async (data: FormData) => {
    return apiFetch(`products`, {server: false, method: 'post', body: data});
}