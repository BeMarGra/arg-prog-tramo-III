require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRouters.js');

const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());

app.use(usuarioRouter);
app.use(autenticacionRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
