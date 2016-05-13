/**
 * Copyright (c) Mainflux
 *
 * Liteflux is licensed under an Apache-2.0 license.
 * All rights not explicitly granted in the Apache-2.0 license are reserved.
 * See the included LICENSE file for more details.
 */

var coap    = require('coap');
var router  = require('lean-router');
var route   = router();

var registration = require('./routes/registration');


/**
 * Routes
 */
route.get('/', function(req, res) {
    res.writeHead(200);
    res.end('hello index page\n');
});

/**
 * Registration
 */
/** Register */
route.post('/rd', registration.register);

/** Update */
route.put('/rd/{location}', registration.update);

/** Deregister */
route.del('/rd/{location}', registration.deregister);


/**
 * LWM2M Server class
 */
function Lwm2mServer() {
    if (!(this instanceof Lwm2mServer)) {
        return new Lwm2mServer();
    }

    console.log('Creating LWM2M Server');
    this.server = coap.createServer(route);
    this.serverStatus = 'STOPPED';
}


/**
 * LWM2M Server Methods
 */
Lwm2mServer.prototype.start = function() {
    this.server.listen(function() {
        console.log('LWM2M server listening');
    });
    this.serverStatus = 'RUNNING';
}

Lwm2mServer.prototype.stop = function() {
    this.server.close(function() {
        console.log('LWM2M server stopped');
    });
    this.serverStatus = 'STOPPED';
}

Lwm2mServer.prototype.getStatus = function() {
    return this.serverStatus;
}




/**
 * Exports
 */
module.exports = Lwm2mServer;
