const express = require('express')
const app = express.Router();
const controlador = require('../controllers/controlReporte')


app.get('/r', controlador.render_inicio)
app.get('/reporte1',controlador.ListarReportes)


module.exports = app;