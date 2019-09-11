const express = require('express');
const accountsRouter = require('./accountsRouter.js');

const server = express();

server.use(express.json());
server.use('/accounts', accountsRouter);

module.exports = server;