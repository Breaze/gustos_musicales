//Importar MySQL
let mysql = require('mysql2/promise');
//Variables de configuracion
const SERVER_PORT = process.env.PORT || 3800;
const SERVER_URL = 'localhost';
const DB_PORT =  '3306';
const DB_URL = 'localhost';
const DB_USER =  'root';
const DB_PASS = '';
const DB_NAME = 'proyecto';
//Crear la conexion
let db = mysql.createPool({
    host     : DB_URL,
    user     : DB_USER,
    password : DB_PASS,
    database : DB_NAME
  });

//Exportar elementos necesarios en el resto del sistema
module.exports = {
    SERVER_PORT,
    SERVER_URL,
    db
}
