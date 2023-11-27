const usuarioRoutes = require('express').Router();

const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/mongoose/usuarioControllers.js');

// Ver usuarios
usuarioRoutes.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRoutes.get('/usuario/:id', verUsuario);

// Crear usuario
usuarioRoutes.post('/usuario', crearUsuario);

// Editar usuario
usuarioRoutes.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRoutes.delete('/usuario', eliminarUsuario);

module.exports = usuarioRoutes;