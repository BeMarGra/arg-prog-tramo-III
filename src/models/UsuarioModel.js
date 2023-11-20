const { DataTypes } = require('sequelize');

const { sequelize } = require('./../config/sequelizeConfig.js');

const usuarioModel = sequelize.define('Usuario', {
  // Model attributes are defined here
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Apellido: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  //
});

module.exports = usuarioModel;