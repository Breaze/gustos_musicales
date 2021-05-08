//Use exress and body parser
const express = require('express');
const bodyParser = require('body-parser');
//Create an express server
const app = express();
const cors = require('cors');
//Import routes for each controller
const usuario_routes = require('../routes/UsuarioRoutes'); 



//Configure bodyParser to convert our requests body to JSON 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//Configuracion de headers cors origin 
app.use((req, res, next) => {//Asignamos a la variable app la función flecha que configurará los encabezados de datos entrantes por la URL
    res.header('Access-Control-Allow-Origin', '*');//Configuramos en el encabezado de respuesta que todos los clientes que se conecten a la URL podrán acceder sin ningún problema
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');//Configuramos en los encabezados de respuesta los datos que podrá ver el cliente
    res.header('Allow', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos permitidos por el cliente
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//Configuramos en los encabezados de respuesta los métodos a los cuales puede acceder el cliente
    next();//Configuramos un llamado asincrono para que procese datos en caso de que se demore la respuesta
});
// Use routes
 app.use('/api', usuario_routes);


//Export the app to be used on the main file
module.exports = app;