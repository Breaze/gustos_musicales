//Load express
const express = require('express');
// Load Controller
const GustoController = require('../app/controllers/GustoController');
const usuario = new GustoController();;
// Call the router
const api = express.Router();
//var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/gustos', usuario.obtenerGustos);
// Export the configuration
module.exports = api;