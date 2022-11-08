const express = require('express')
const app = express.Router();
const controlador = require('../controllers/controlIndex')

app.get('/index', controlador.render_inicio)

module.exports = app;