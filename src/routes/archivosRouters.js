const archivosRouters = require('express').Router();

const {
    subirArchivo,
} = require('./../controllers/ArchivosController.js');

archivosRouters.post('/subirArchivo', subirArchivo);

module.exports = archivosRouters;