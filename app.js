//Importar express
const express = require('express');
//importar cors para los permisos de acceso
const cors = require('cors');
//Importar moongose
const mongoose = require('mongoose');
//extrae toda la parte del cuerpo de un flujo de solicitud entrante y lo expone en req.body 
const bodyParser = require('body-parser');

//importacion de dotenv
require ('dotenv/config');

//inicializar express
const app = express();

//importarroutes
const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/user');
const hospitalesRoutes = require('./routes/hospitales');
const deptohospitalesRoutes = require('./routes/deptohospitales');

//inicializar cors
app.use(cors());

//Inicializo el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//AllowOrigin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

//Conexion a Mongo Atlas 
mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log('Connected to the database');
    } 
);

//rutas
app.use('/deptohospitales', deptohospitalesRoutes);
app.use('/hospitales', hospitalesRoutes);
app.use('/user', usuarioRoutes);
app.use('/', appRoutes);

//Escuchar la peticion en puerto heroku
app.listen(process.env.PORT || 3000, () => {
    console.log('Express Server On Port 3000: \x1b[32m%s\x1b[0m', 'online');
});