const { Sequelize } = require('sequelize');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_localhost = process.env.DB_HOST;

const sequelize = new Sequelize(db_name, db_user, db_password,{
    host: db_localhost,
    dialect: 'mysql',
  });

const database = async() =>{
    try {
      await sequelize.sync();

      console.log('Conexion establecida con exito');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  module.exports = { database, sequelize };