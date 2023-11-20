const baseUrl = 'http://localhost:3030/jsonstore/catalog';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);
    console.log(data)
    return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const body = {
        brand: data.brand,
        imgUrl: imgUrl,
        taste: data.taste,
        strength: data.strength,
        description: data.description,
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    console.log(result);

    return result;
};

export const remove = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};