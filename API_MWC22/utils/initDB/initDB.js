require('../db-connection');
const { Developers, mongoose, connectMongoose } = require('../../models');

const fs = require('fs');
const data = fs.readFileSync((__dirname + '/mwc22_backend.json'), 'utf8');
const dataParse = JSON.parse(data);

async function  dropChargeBd(){
    if(Developers){
        try {
            await Developers.deleteMany();
            console.log('Collection deleted');
            await Developers.insertMany(dataParse);
            console.log("Data inserted");
            console.log("Closing DB Conecction...");
            mongoose.connection.close();
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            await Developers.insertMany(dataParse);
            console.log("Data inserted");
        } catch(err) {
            console.log(err);
        }
    }
}

dropChargeBd();