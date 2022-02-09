#!/usr/bin/env node
require('dotenv').config();
const inquirer = require('inquirer');
const { COMMANDS } = require('./helpers');

//llamar servicio de datos
const { getDevelopers, createDeveloper } = require('./dataService/api/dataDevelopers')

const params = process.argv;
params.length <= 2 && process.exit(0);

const args = params.slice(2);

const command = args[0];

const queryParams = () => {
    const qs = [
        {
            name: 'name',
            type: 'input',
            message: 'Escribe el nombre del desarrollador/a'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Escribe el email del desarrollador/a'
        },
        {
            name: 'category',
            type: 'list',
            message: 'Selecciona categoría: ',
            choices: [
            'Front',
            'Back',
            'Mobile',
            'Data',
            ],
        },
        {
            name: 'phone',
            type: 'input',
            message: 'Escribe el teléfono del desarrollador/a'
        },
        {
            name: 'date',
            type: 'input',
            message: 'Escribe el día de asistencia a MWC del desarrollador/a [formato: Mes Día, Año || Ej: Mar 2, 2021',
        }
    ];
    return inquirer.prompt(qs);
};

switch (command) {
    case COMMANDS.DATAINFO:
        console.log(process.env.MWC_DAYS_OPEN);
        break;
    case COMMANDS.DEVSLIST:
            getDevelopers()
                .then(response => { console.table(response.developersData) })
        break;
    case COMMANDS.CREATEDEV:
        (async() => {
            const dataDeveloper = await queryParams();
            createDeveloper(dataDeveloper)
                .then(response => {console.log(response)});

        })();
        break;
    default:
        console.log('Command not found');
}