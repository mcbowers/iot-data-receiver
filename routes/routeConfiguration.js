'use strict';
const hello = require('../controllers/hello');
const iot = require('../controllers/iot');

module.exports = [
    {
        "method": "GET",
        "path": "/",
        "handler": hello.read
    },
    {
        "method": "GET",
        "path": "/iot",
        "handler": iot.read
    },
    {
        "method": "POST",
        "path": "/iot",
        "handler": iot.write
    }
]