'use strict';

const { Developers } = require('../models');
const mongoose = require('mongoose');


class DevelopersController {

    /**
     * GET /
     */
    async getDevelopers(req, res, next) {

        try {
            // const developers = new Developers();
            const developersData = await Developers.find();

            res.status(200).json({ developersData });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}


module.exports = new DevelopersController();