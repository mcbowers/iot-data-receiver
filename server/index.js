'use strict';
const express = require('express')
const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use((req, res, next) => {
    console.log(`${Date()}: ${req.url} called with ${JSON.stringify(req.body)}`);
    next();
});

require('../routes')(server);

module.exports = server;
