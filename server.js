const express = require('express');
const carsRouter = require('./cars.js');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/cars', carsRouter);

module.exports = server;