'use strict';
const hello = require('../controllers/hello');
const iot = require('../controllers/iot');

const routes = (server) => {
    server.get('/', (req, res) => res.status(200).send(hello.read()));

    server.get('/iot', (req, res) => res.status(200).send(iot.read()));
    server.post('/iot', (req, res) => res.status(201).send(iot.save(req.body)));

}

module.exports = routes