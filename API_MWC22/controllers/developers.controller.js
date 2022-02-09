'use strict';

const { Developers } = require('../models');
const mongoose = require('mongoose');


class DevelopersController {

    /**
     * GET /
     */
    async getDevelopers(req, res, next) {

        try {
            let developersData = await Developers.find().select("-id");

            developersData = developersData.map(dev => {
                let { name, email, category, phone, date} = dev 
                const dateOptions = { dateStyle: 'medium' }
                date = date.toLocaleString('es-ES', dateOptions);
                return { name, email, category, phone, date };
            });

            res.status(200).json({ developersData });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    /**
     * POST /createDeveloper
     */

    async createDeveloper(req, res, next) {

        try {
            const dataDeveloper = req.body;

            const developer = new Developers(dataDeveloper);
            await developer.save();
            res.status(200).json({response: 'Developer created successfully'})

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}


module.exports = new DevelopersController();