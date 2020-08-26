//importar moongose
const mongoose = require("mongoose");

//esquema de usuarios
const Usuario = new mongoose.Schema({
    identidad: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: {  type: String, required: true},
    edad: { type: String, required: true},
    telefono: { type: String, required: true},
    correo: { type: String, required: true },
    password: { type: String, required: true }
});

//exportar esquema
module.exports = mongoose.model('usuario', Usuario);