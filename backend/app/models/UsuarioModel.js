//Modelo del usuario
const {db} = require("../../config/config");
class UsuarioModel{
    async crearUsuario(usuario){
        let res = false;
        try{
            // let validacion = await db.execute('SELECT * FROM usuarios WHERE correo = ?', [usuario.correo]);
            // console.log(validacion[0][0].nombre);
            let query = await db.query('INSERT INTO usuarios SET ?', usuario);
            
            res = true;
            
        }catch(e){
            console.log(e);
        }
        return res;
    }
    async iniciarSesion(correo, clave){
        let res = false;
        try{
            let query = await db.execute('SELECT id, nombre, apellido, correo FROM usuarios WHERE correo = ? and clave = ?', [correo, clave]);
            if(query[0].length>0){
                res = query[0];
            }
        }catch(e){
            console.log(e);
        }
        return res;
    }
    async actualizarCorreo(id, correo){
        let res = false;
        //El try maneja errores en caso de encontrar
        try{
            //Se hace la consulta de los gustos de los usuarios
            let query = await db.execute('UPDATE usuarios SET correo = ? WHERE id=?;', [correo, id]);
            if(query[0].affectedRows>0)
                res = true;
        }catch(e){
            console.log(e);
        }
        return res;
    }
    async eliminarUsuario(id){
        let res = false;
        //El try maneja errores en caso de encontrar
        try{
            //Se hace la consulta de los gustos de los usuarios
            let query = await db.execute('DELETE FROM usuarios WHERE id=?;', [id]);
            if(query[0].affectedRows>0)
                res = true;
        }catch(e){
            console.log(e);
        }
        return res;
    }
}
module.exports = UsuarioModel;