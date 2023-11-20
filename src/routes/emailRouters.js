const emailRouters = require('express').Router();

const {
    enviarEmail
} = require('./../controllers/emailController.js');

emailRouters.post('/enviarEmail', enviarEmail);

module.exports = emailRouters;