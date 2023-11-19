const georefRouters = require('express').Router();
const { 
    obtenerProvincias 
} = require('../controllers/GeorefController.js')

georefRouters.get('/obtenerProvincias', obtenerProvincias);



module.exports = georefRouters;