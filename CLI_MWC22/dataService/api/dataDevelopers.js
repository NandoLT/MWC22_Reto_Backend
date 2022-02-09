const client = require('../client');

const developersBaseUrl = '/api/v1/developers';

const getDevelopers = () => {
    const url = `${developersBaseUrl}/list`;
    return client.get(url);
}

const createDeveloper = developerData => {
    const url = `${developersBaseUrl}/createDeveloper`;
    return client.post(url, developerData);
}

module.exports = {
    getDevelopers,
    createDeveloper
}