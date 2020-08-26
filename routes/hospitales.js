var express = require('express');
var app = express();

var Hospital = require('../models/hospitales');

app.get('/', (req, res, next) => {
    Hospital.find( {}, 'hos_codigo nombre apellido direccion telefono')
    .exec(
        (err, hospital) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar el hospital',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                hospital: hospital
            });
        })
});

module.exports = app;