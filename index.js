'use strict';
const server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on port ${port}`);

server.on('error', error => {
    console.error(error);
});