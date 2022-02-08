const client = require('../client');

const developersBaseUrl = '/api/v1/developers/list';

const getDevelopers = () => {
    const url = `${developersBaseUrl}`;
    return client.get(url);
}

const createDeveloper = developerData => {
    const url = `${developersBaseUrl}`;
    return client.post(url, developerData);
}

module.exports = {
    getDevelopers,
    createDeveloper
}