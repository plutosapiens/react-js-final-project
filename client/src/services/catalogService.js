import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (itemId) => {
    const result = await request.get(`${baseUrl}/${itemId}`, );

    return result;
}

export const create = async (itemData) => {
    const result = await request.post(baseUrl, itemData);

    return result;
};
