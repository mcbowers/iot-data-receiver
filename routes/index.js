'use strict';
const routeConfiguration = require('./routeConfiguration');

const routes = (server) => {
    routeConfiguration.forEach(route => {
        server[route.method](route.path, async (req, res) => res.status(200).send(await route.handler(req.body)));
    });
};

module.exports = routes