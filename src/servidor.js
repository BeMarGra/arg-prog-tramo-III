require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRouters.js');
const archivosRouters = require('./routes/archivosRouters.js');
const georefRouters = require('./routes/georefRouters.js');
const emailRouters = require('./routes/emailRouters.js');

const { database } = require('./config/sequelizeConfig.js');
const conectarMongo = require('./config/mongooseConfig.js');

const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());
app.use(fileUpload());

//rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(archivosRouters);
app.use(georefRouters);
app.use(emailRouters);

//conexion al puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    //database();
    conectarMongo();
});
