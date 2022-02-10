#!/usr/bin/env node
require('dotenv').config();
const inquirer = require('inquirer');
inquirer.registerPrompt("date", require("inquirer-date-prompt"));
const { COMMANDS } = require('./helpers');

//llamar servicio de datos
const { getDevelopers, createDeveloper } = require('./dataService/api/dataDevelopers')

const params = process.argv;
params.length <= 2 && process.exit(0);

const args = params.slice(2);

const command = args[0];

const queryParams = () => {
    let qs = [
        {
            name: 'name',
            type: 'input',
            message: 'Developer`s name:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Developer`s email:'
        },
        {
            name: 'category',
            type: 'list',
            message: 'Select category: ',
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
            message: 'Developer`s phone:'
        },
        {
            name: 'date',
            type: 'date',
            format: { month: 'short', hour: undefined, minute: undefined },
            message: 'Developer MWC Attendance Day: (use arrows -> <- and up/down)'
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