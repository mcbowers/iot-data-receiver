'use strict';
const hello = require('../controllers/hello');
const iot = require('../controllers/iot');

const routes = (server) => {
    server.get('/', async (req, res) => res.status(200).send(hello.read()));

    server.get('/iot', async (req, res) => {
        res.status(200).send(await iot.read())
    })

    server.post('/iot', async (req, res) => {
        res.status(201).send(await iot.save(req.body))
    })
};



module.exports = routes