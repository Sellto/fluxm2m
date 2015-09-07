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
        //process.exit(0)
    });
});

req.end();

/** Register */
coap
    .request(
        {
            host: 'localhost',
            method: 'POST',
            query: 'HELLO REGISTER',
            pathname: '/rd'
        })
    .end();

/** Update */
coap
    .request(
        {
            host: 'localhost',
            method: 'PUT',
            query: 'HELLO UPDATE',
            pathname: '/rd'
        })
    .end();

/** Deregister */
coap
    .request(
        {
            host: 'localhost',
            method: 'DELETE',
            query: 'HELLO DEREGISTER',
            pathname: '/rd'
        })

    .on('end', function() {
        process.exit(0);
    })
    
    .end();
