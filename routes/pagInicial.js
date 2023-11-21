var express = require('express');
var router = express.Router();

var pagInicialController = require('../Controller/pagInicialController');


router.get('/pag-inicial', pagInicialController.index);


module.exports = router;