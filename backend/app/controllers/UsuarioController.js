//Importar el modelo del usuario
const UsuarioModel = require("../models/UsuarioModel");
const usuario = new UsuarioModel();
//Controlador del usuario
class UsuarioController{
    async iniciarSesion(req, res){
        const {body} = req;
        const {correo, clave} = body;
        let response = await usuario.iniciarSesion(correo, clave);
        res.json(response);
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async crearUsuario(req, res){
        const {body} = req;
        const {nombre, apellido, correo, clave} = body;
        let response = await usuario.crearUsuario({nombre, apellido, correo, clave});
        res.json(response);
    }
    async actualizarCorreo(req, res){
        const {body} = req;
        const {correo, id} = body;
        let response = await usuario.actualizarCorreo(id, correo);
        res.json(response);
    }
    async eliminarUsuario(req, res){
        const {query} = req;
        const {id} = query;
        let response = await usuario.eliminarUsuario(id);
        res.json(response);
    }
   
}

module.exports = UsuarioController;