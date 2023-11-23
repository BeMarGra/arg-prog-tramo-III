const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
});

const usuarioModel = model('usuario', usuarioSchema);

module.exports = usuarioModel;