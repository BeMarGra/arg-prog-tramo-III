const usuarioRouter = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController.js');
    
const {
    verUsuariosMongoose,
    crearUsuarioMongoose,
    editarUsuarioMongoose,
    eliminarUsuarioMongoose,
    verUsuarioMongoose,
} = require('./../controllers/mongoose/usuarioControllers.js');

//---------- SEQUELIZE -------------

// Ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRouter.get('/usuario', verUsuario);

// Crear usuario
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuario
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);

//---------MONGOOSE-------------

// Ver usuarios
usuarioRouter.get('/m/usuarios', verUsuariosMongoose);

// Ver usuario
usuarioRouter.get('/m/usuario', verUsuarioMongoose);

// Crear usuario
usuarioRouter.post('/m/usuario', crearUsuarioMongoose);

// Editar usuario
usuarioRouter.put('/m/usuario', editarUsuarioMongoose);

// Eliminar Usuario
usuarioRouter.delete('/m/usuario', eliminarUsuarioMongoose);


module.exports = usuarioRouter;