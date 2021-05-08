//Load express
const express = require('express');
// Load Controller
const UsuarioController = require('../app/controllers/UsuarioController');
const usuario = new UsuarioController();;
// Call the router
const api = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/usuario/saludar', usuario.saludar);
api.post('/usuario/iniciar_sesion', usuario.iniciarSesion);
// Export the configuration
module.exports = api;