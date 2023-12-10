import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/items";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (itemId) => {
  try {
    const result = await request.get(`${baseUrl}/${itemId}`);
    return result;
  } catch (error) {
    if (error.code === 404) {
      console.error(`Item with ID ${itemId} not found.`);
    } else {
      console.error("Error fetching item:", error);
    }
    throw error;
  }
};

export const create = async (itemData) => {
  const result = await request.post(baseUrl, itemData);

  return result;
};

export const edit = async (itemId, itemData) => {
  const result = await request.put(`${baseUrl}/${itemId}`, itemData);

  return result;
};

export const delelete = async (itemId) => {
  const result = await request.remove(`${baseUrl}/${itemId}`);

  return result;
};
