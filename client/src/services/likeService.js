import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const likeItem = async (itemId, userId) => {
    try {
        const response = await request.post(`${baseUrl}`, {
            itemId,
            userId,
        });
        return response.data;
    } catch (error) {
        console.error('Error liking item:', error);
        throw new Error('Failed to like item');
    }
};

export const getLikeStatus = async (itemId, userId) => {
    try {
        const response = await request.get(`${baseUrl}?itemId=${itemId}&userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching like status:', error);
        throw new Error('Failed to fetch like status');
    }
};

export const getLikesForItem = async (itemId) => {
    try {
        const likesResponse = await request.get(`${baseUrl}?itemId=${itemId}`);
        return likesResponse;
    } catch (error) {
        // Handle errors or return an error response
        console.error('Error fetching likes:', error);
        return { error: 'Failed to fetch likes' };
    }
};
