//Load express
const express = require('express');
// Load Controller
const UsuarioController = require('../app/controllers/UsuarioController');
const usuario = new UsuarioController();;
// Call the router
const api = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/usuario', usuario.crearUsuario);
api.post('/usuario/login', usuario.iniciarSesion);
api.put('/usuario/actualizar_correo', usuario.actualizarCorreo);
api.delete('/usuario', usuario.eliminarUsuario);
// Export the configuration
module.exports = api;