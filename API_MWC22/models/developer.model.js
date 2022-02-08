'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const developerSchema = new Schema({
    name: { type: 'string', unique: true, index:true , required:true },
    email: { type: 'string', unique: true, index:true , required:true },
    category: { type: 'string', index:true , required:true },
    phone: { type: 'string', unique: true, index:true , required:true },
    date: { type: 'date', index:true, required:true },
});

const Developers = mongoose.model('Developers', developerSchema);

module.exports = Developers;