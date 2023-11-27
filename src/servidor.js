require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const conectarMongo = require('./config/MongooseConfig.js');

const usuarioRoutes = require('./routes/usuarioRoutes.js');
const autenticacionRouters = require('./routes/autenticacionRouters.js');
const archivosRouters = require('./routes/archivosRouters.js');
const georefRouters = require('./routes/georefRouters.js');
const posteoRouters = require('./routes/posteoRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRoutes);
app.use(autenticacionRouters);
app.use(archivosRouters);
app.use(georefRouters);
app.use(posteoRouters);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    conectarMongo();
});