var express = require('express');
var app = express();

var deptoHospital = require('../models/deptohospitales');

app.get('/', (req, res, next) => {
    deptoHospital.find( {}, 'depto_codigo hos_codigo nombre')
    .exec(
        (err, deptohospitales) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar el hospital',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                deptohospitales: deptohospitales
            });
        })
});

module.exports = app;