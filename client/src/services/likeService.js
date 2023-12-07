import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (likeId) => {
    try {
        const result = await request.get(`${baseUrl}/${likeId}`);
        return result;
    } catch (error) {
        if (error.code === 404) {
            console.error(`Item with ID ${likeId} not found.`);
        } else {
            console.error('Error fetching item:', error);
        }
        throw error;
    }
}


export const create = async (data) => {

    const result = await request.post(baseUrl, data);
    return result;
};

export const remove = async (likeId) => request.remove(`${baseUrl}/${likeId}`);