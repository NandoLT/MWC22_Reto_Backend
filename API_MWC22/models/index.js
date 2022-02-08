module.exports = {
    connectMongoose: require('../utils/db-connection'),
    mongoose: require('mongoose'),
    Developers: require('./developer.model'),
}