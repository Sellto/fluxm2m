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
            pathname: '/rd',
            query: 'ep=MFL001&lt=86400&lwm2m=1.0&b=U'
        })
    .end();

/** Update */
coap
    .request(
        {
            host: 'localhost',
            method: 'PUT',
            query: 'HELLO UPDATE',
            pathname: '/rd/MFL001',
            query: 'lt=65000'
        })
    .end();

/** Deregister */
coap
    .request(
        {
            host: 'localhost',
            method: 'DELETE',
            query: 'HELLO DEREGISTER',
            pathname: '/rd/MFL001',
            query: 'MFL0'
        })

    .on('end', function() {
        process.exit(0);
    })
    
    .end();
