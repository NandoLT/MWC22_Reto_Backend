#!/usr/bin/env node

require('dotenv').config();
const { COMMANDS } = require('./helpers');

//llamar servicio de datos
const { getDevelopers, createDeveloper } = require('./dataService/api/dataDevelopers')

const params = process.argv;
params.length <= 2 && process.exit(0);

const args = params.slice(2);

const command = args[0];

switch (command) {
    case COMMANDS.DATAINFO:
        console.log(process.env.MWC_DAYS_OPEN);
        break;
    case COMMANDS.DEVSLIST:
            getDevelopers()
                .then(response => { console.log(response) });
        break;
    case COMMANDS.CREATEDEV:
        //ir solicitando info para almacenar el
        //enviar por axios
        break;
    default:
        console.log('Command not found');
}