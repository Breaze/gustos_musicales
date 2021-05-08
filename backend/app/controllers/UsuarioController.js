class UsuarioController{
    iniciarSesion(req, res){
        res.json("Hola Mundo");
    }
    saludar(req, res){
        const {query} = req;
        const {nombre} = query;
        
        res.json("Hola "+nombre);
    }
}

module.exports = UsuarioController;