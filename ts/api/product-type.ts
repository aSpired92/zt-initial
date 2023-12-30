import {apiFetch} from "~/composables/api.fetch";

export const getProductTypes = async () => {
    return apiFetch('product-types', {server: false});
}

export const deleteProductType = async (id: number) => {
    return apiFetch(`product-types/${id}`, {server: false, method: 'delete'});
}

export const addProductType = async (name: string) => {
    return apiFetch(`product-types`, {server: false, method: 'post', body: {name: name}});
}