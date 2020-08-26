const mongoose = require("mongoose");

const Hospitales = new mongoose.Schema({
    hos_codigo: { type: String, unique: true, required: true },
    nombre: { type: String },
    direccion: { type: String },
    telefono: { type: String }
});

module.exports = mongoose.model('hospitales', Hospitales);