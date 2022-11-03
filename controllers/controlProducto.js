const conexion = require('../database/conexionBd')
const controlador = {}

/// PASO UNO:  mostrar el inicio 

controlador.render_inicio=(req, res) =>{
    res.render('indexProducto')
}

/// PASO DOS: realizar la consulta, mostrar los datos en la page
controlador.ListarProducto= (req, res)=>{
    let sql = "SELECT * FROM  producto;"
    conexion.query(sql,(err, result)=>{
        if(err) return res.json({mesaje:"Error al realizar la consulta"});
        else return res.json(result);
    })
}

///   PASO TRES: registrar datos en la base

controlador.registrarProducto=(req,res)=>{
    const{codigo, nombre, referencia, descripcion,  tipoProducto, estadoProducto, precioCom, precioVen, stock, categoria, empresa}=req.body; 
    console.log(req.body)
    const sql = `INSERT INTO producto(nombreProducto, referencia, descripcion, tipoProducto, estadoProducto, precioCompra, precioVenta, stock, FK_idCategoria, FK_idEmpresa) VALUES('${nombre}', ${referencia}, '${descripcion}',  '${tipoProducto}', '${estadoProducto}', ${precioCom}, ${precioVen}, ${stock}, ${categoria}, ${empresa})`; 
    console.log('hola'+ sql)
    conexion.query(sql,(err, datos)=>{
        if(err)return res.json({mensaje:"No se pueden registrar los datos" + err});
        else return res.json({mensaje: "se registro"});
    })
}

// PASO CUATRO: realizar la consulta para llamr el datos que se quiere actualizar 

controlador.buscarProducto=(req, res)=>{
    const id = req.params.PK_codigoProducto;
    let sql = `SELECT PK_codigoProducto, nombreProducto, referencia, descripcion, tipoProducto, estadoProducto, precioCompra, precioVenta, stock, FK_idCategoria, FK_idEmpresa FROM producto WHERE PK_codigoProducto = ${id}` ;

    conexion.query(sql,(error, datos)=>{
        if(error) return res.json({mesaje:'No se a podido realizar la busqueda'});
        else return res.json(datos);
    })
}

// QUINTO PASO  :obteniendo los datos se pasa a remplazarlos, para actualizar 

controlador.actualizarProducto=(req,res)=>{  
    const{ codigo, nombre, referencia, descripcion,  tipoProducto, estadoProducto, precioCom, precioVen, stock, categoria, empresa}=req.body

    let sql =`update producto set nombreProducto='${nombre}',referencia=${referencia},descripcion='${descripcion}',tipoProducto='${tipoProducto}',estadoProducto='${estadoProducto}', precioCompra=${precioCom}, precioVenta=${precioVen}, stock=${stock}, FK_idCategoria='${categoria}', FK_idEmpresa='${empresa}' 
    where  PK_codigoProducto= ${codigo}`;

    console.log(sql)
    conexion.query(sql,(error,datos)=>{
    if(error) return res.json({mensaje:'Error al actualizar en la bd...'+error});
    else return res.json({mensaje:'usuario actualizado con éxitos' +datos});
    });
}

module.exports = controlador