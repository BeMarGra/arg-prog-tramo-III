require('dotenv').config();

const express = require('express');
const usuarioRouter = require('./routes/usuarioRoutes.js');

const app = express();
const PORT = 3000;

app.use(usuarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
