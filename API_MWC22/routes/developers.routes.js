var express = require('express');
var router = express.Router();

const { DevelopersController } = require('../controllers');

/* GET developers listing. */
router.get('/list', DevelopersController.getDevelopers);

module.exports = router;
