//Modelo del usuario
const {db} = require("../../config/config");
class GustoModel{
    async obtenerGustos(id){
        let res = false;
        //El try maneja errores en caso de encontrar
        try{
            //Se hace la consulta de los gustos de los usuarios
            let query = await db.execute('SELECT g.usuarios_id, g.canciones_id, u.nombre, u.apellido, c.nombre as cancion, a.nombre as album FROM gustos g INNER JOIN canciones c ON g.canciones_id = c.id INNER JOIN usuarios u ON g.usuarios_id = u.id INNER JOIN albumes a ON c.albumes_id = a.id WHERE u.id = ?', [id]);
            if(query[0].length>0)
                res = query[0];
        }catch(e){
            console.log(e);
        }
        return res;
    }
    
}
module.exports = GustoModel;