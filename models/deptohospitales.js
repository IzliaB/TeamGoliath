const mongoose = require("mongoose");

const deptoHospitales = new mongoose.Schema({
    depto_codigo: { type: String, unique: true, required: true },
    hos_codigo: { type: String },
    nombre: { type: String }
});

module.exports = mongoose.model('deptohospitales', deptoHospitales);