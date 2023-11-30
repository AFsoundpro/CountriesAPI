const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser')

const server = express();

server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());

// Ruta de prueba
server.get('/', (req, res) => {
    res.json({ message: 'Esta es una ruta de prueba.' });
  });

server.get('/countries', router);
server.get('/countries/name', router);
server.get('/countries/:id', router);
server.get('/continents', router);
server.post('/activities', router);
server.get('/activities', router);

module.exports = server;
