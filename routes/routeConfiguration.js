'use strict';
const hello = require('../controllers/hello');
const iot = require('../controllers/iot');

module.exports = [
    {
        "method": "get",
        "path": "/",
        "handler": hello.read
    },
    {
        "method": "get",
        "path": "/iot",
        "handler": iot.read
    },
    {
        "method": "post",
        "path": "/iot",
        "handler": iot.write
    }
]