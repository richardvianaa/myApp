var express = require('express');
var router = express.Router();

const usuarioController = require('../Controller/usuarioController');


router.get('/usuario', usuarioController.index);

module.exports = router;