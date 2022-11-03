const mysql= require('mysql');

const conexion= mysql.createConnection(
        {
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_DATABASE
        }
    
);
conexion.connect((err)=>{
    if(err){
        console.log("Error al relizar la conexion con la bd "+err);
    }else{
        console.log("Se realizo la conexion con exito con mysql");
    }
});
module.exports = conexion;