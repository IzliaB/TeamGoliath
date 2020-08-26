//Importar express
var express = require('express');
//inicializar express
var app = express();
//Ruta para cargar en el navegador
app.get('/', (req, res, next) => {
	res.status(200).json({
	ok: true,
	mensaje: 'peticion realizada correctamente'
	})
});
//exportar
module.exports = app;