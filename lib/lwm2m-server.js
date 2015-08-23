/**
 * Copyright (c) Mainflux
 *
 * Coreflux is licensed under an MIT license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var coap    = require('coap');

coapDataHandler = function(req, res) {
  res.end('Hello ' + req.url.split('/')[1] + '\n');
}

/**
 * LWM2M Server class
 */
function Lwm2mServer() {
    if (!(this instanceof Lwm2mServer)) {
        return new Lwm2mServer();
    }

    console.log('Creating LWM2M Server');
    this.server = coap.createServer()
}

/**
 * LWM2M Server Methods
 */
Lwm2mServer.prototype.start = function() {
    this.server.on('request', coapDataHandler);

    this.server.listen(function() {
        console.log('LWM2M server listening');
        //callback();
    });

    var req = coap.request('coap://localhost/Mainflux')

    req.on('response', function(res) {
        res.pipe(process.stdout)
        res.on('end', function() {
            process.exit(0)
        })
    })

  req.end();
}

/**
 * Exports
 */
module.exports = Lwm2mServer;


