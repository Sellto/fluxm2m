/*
 * Copyright (c) Mainflux
 *
 * Coreflux is licensed under an MIT license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var lwm2m   = require ('../');
var coap    = require ('coap');

var server = lwm2m.server();

server.start();

var req = coap.request('coap://localhost/')

req.on('response', function(res) {
    res.pipe(process.stdout);
    res.on('end', function() {
        process.exit(0)
    });
});

req.end();
