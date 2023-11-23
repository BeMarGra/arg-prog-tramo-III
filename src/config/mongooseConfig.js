const mongoose = require('mongoose');

const mongodb_uri = process.env.MONGODB_URI;

const conectarMongo = async () => {
    try{
        await mongoose.connect(mongodb_uri);
        console.log("Exito");
    } catch(error) {
        console.log('Error: ', error )
    }
}

module.exports = conectarMongo;