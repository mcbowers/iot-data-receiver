'use strict';
const routeConfiguration = require('./routeConfiguration');

const routes = (server) => {
    routeConfiguration.forEach(route => {
        if (route.method === 'GET') {
            server.get(route.path, async (req, res) => res.status(200).send(await route.handler(req.body)));
        } else if (
            route.method === 'POST') {
            server.post(route.path, async (req, res) => res.status(200).send(await route.handler(req.body)));
        } else {
            console.error(`${route.method} in ${JSON.stringify(route)} not currently supported.`);
        }
    });
};

module.exports = routes