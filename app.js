

const express= require('express');

const session = require('express-session')

const bodyparser= require("body-parser"); //Se importa el módulo body-parser para recivir parametros 

// se configura las variables de entorno 
const dotenv = require('dotenv');

 dotenv.config({
    path: "./env/.env"
}) 

const Servidor = express(); 
Servidor.use(express.static(__dirname+'/public'));//Se configura la carpeta publica 
Servidor.use(bodyparser.json());//Se configura para recibir parametros json 
Servidor.use(bodyparser.urlencoded({extended:false}));// Se configura para recibir parametros de formularios 
 Servidor.set('view engine','ejs');//Se configura el motor de plantillas ejs 
Servidor.set('views',__dirname+'/views');//Se configura la carpeta contenedora de las vistas 

Servidor.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

/* Servidor.use(require('./routes/routeProducto')); */
/* Servidor.use(require('./routes/routeCliente'));  */
Servidor.use(require('./routes/routUsuario'))
Servidor.use(require('./routes/routProductp'))
Servidor.use(require('./routes/routEmpresa'))
Servidor.use(require('./routes/routCategoria'))
Servidor.use(require('./routes/routSeguridad'))
Servidor.use(require('./routes/routReportes'))





Servidor.listen(4000,()=>{ 
    console.log("El servidor se esta ejecutando en el puerto 4000"); 
}); 
