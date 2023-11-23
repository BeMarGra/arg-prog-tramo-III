const usuarioModel = require('./../../models/mongoose/usuarioModel.js');

const usuarioControllers = {}

// Ver usuarios
usuarioControllers.verUsuariosMongoose = async(req, res) => {
    try{
        const listaUsuarios = await usuarioModel.find();
        
        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error interno',
        error: error 
        })
    }
}

// Ver usuario
usuarioControllers.verUsuarioMongoose = async (req, res) => {
    try{
        const { id } = req.body;

        const usuario = await usuarioModel.findById(id);

            return res.json({mensaje: usuario});
        
    } catch (error) {
        let mensaje = "Ocurrio un error interno al intentar obtener el usuario";

        if (error.kind === 'ObjectId'){  
            mensaje = "No se encontro el usuario";
        }
            
        return res.status(500).json({ 
            mensaje: mensaje,
            error: error 
        })
    }
}

// Crear usuario
usuarioControllers.crearUsuarioMongoose = async (req, res) => {
    try{
        const {nombre, apellido} = req.body;

        const nuevoUsuario = new usuarioModel({
            nombre: nombre,
            apellido: apellido,
        });

        await nuevoUsuario.save();

        return res.json({ mensaje: 'Usuario creado con exito' });
    }catch(error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error interno al intentar crear el usuario',
        error: error 
        })
    }
}

// Editar usuario
usuarioControllers.editarUsuarioMongoose = async (req, res) => {
    try{
        const {id, nombre, apellido} = req.body;

        await usuarioModel.findByIdAndUpdate(
            id,
            { nombre: nombre, apellido: apellido }
        );

        return res.json({ mensaje: 'Usuario actualizado con exito' });
    }catch(error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error interno al intentar editar el usuario',
        error: error 
        })
    }
}

// Eliminar usuario
usuarioControllers.eliminarUsuarioMongoose =  async (req, res) => {
    try{
        const { id } = req.body;

        await usuarioModel.findByIdAndDelete(id);

    return res.json({ mensaje: 'Usuario eliminado con exito' });
    }catch(error){
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error interno al intentar editar el usuario',
        error: error 
        })
    }
}
module.exports = usuarioControllers;
