//Importar el modelo del usuario
const GustoModel = require("../models/GustoModel");
const gustos = new GustoModel();
//Controlador del usuario
class GustoController{
    
    async obtenerGustos(req, res){
        const {query} = req;
        const {id_usuario} = query;
        let response = await gustos.obtenerGustos(id_usuario);
        res.json(response);
    }
}

module.exports = GustoController;