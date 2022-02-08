const axios = require('axios');


const client = axios.create({
    baseURL:process.env.API_BASE_URL,
});

client.interceptors.response.use(
    response => response.data,
    error => {
        if (!error.response) {
            return Promise.reject({ message: error.message });
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response,
        });
    }
);

module.exports = client;