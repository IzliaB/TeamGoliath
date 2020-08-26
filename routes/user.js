//importar express
var express = require('express');
//importar CORS para los permisos de acceso
//var  cors  = require ( ' cors ' ); 
//inicializar express
var app = express();
//importar mi esquema del modelo
var Usuario = require('../models/user');

//Get para leer usuarios almacenados
app.get('/', (req, res, next) => {
    Usuario.find( {}, 'correo password')
    .exec(
        (err, usuario) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error cargando usuario',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                usuario: usuario
            });
        })
});

//post login
app.post("/login",  function(req, res) {
    const correo = req.body.correo;
    const password = req.body.password;

    Usuario.find({correo: correo, password: password}, function (err, usuario) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }

        if(!usuario) {
            return res.status(404).send();
        }

        return res.status(200).send(usuario);
    })
});

//post almacenar usuario
app.post("/registro", async (req, res) => {
    console.log(req.body);
    try {
        const { identidad, nombre, apellido, edad, telefono, correo, password } = req.body;
        console.log(req.body);
        let usuario = {};
        usuario.identidad = identidad,
        usuario.nombre = nombre,
        usuario.apellido = apellido,
        usuario.edad = edad,
        usuario.telefono = telefono,
        usuario.correo = correo,
        usuario.password = password
        let usuarioModel = new Usuario(usuario);
        await usuarioModel.save();
        res.status(200).json({
            usuarioModel
        });
    } catch (err) {
        res.send({ message: err });
    }
});

module.exports = app;