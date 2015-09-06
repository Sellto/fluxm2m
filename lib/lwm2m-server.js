/**
 * Copyright (c) Mainflux
 *
 * Coreflux is licensed under an MIT license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var coap    = require('coap');
var url     = require('url');
var router  = require('router');
var route = router();

/**
 * Registration
 * ============
 *
 * 8.2.3 Registration Interface
 * The registration interface is used by a LWM2M Client to register with a LWM2M Server,
 * identified by the LWM2M Server URI. Registration is performed by sending a CoAP POST 
 * to the LWM2M Server URI, with registration parameters passed as query string parameters
 * as per Table 19 and Object and Object Instances included in the payload as specified in Section 5.2.1.
 * The response includes Location-Path Options, which indicate the path to use for updating or deleting
 * the registration. The erver MUST return a location under the /rd path segment.
 * Registration update is performed by sending a CoAP PUT to the Location path returned to the
 * LWM2M Client as a result of a successful registration.
 *
 * De-registration is performed by sending a CoAP DELETE to the Location path returned to the LWM2M Client
 * as a result of a successful registration.
 *
 *
 *  +------------+-------------+----------------------------------------+--------------+----------------+
 *  | Operation  | CoAP Method |                   URI                  |    Success   |     Failure    |
 *  +------------+-------------+----------------------------------------+--------------+----------------+
 *  | Register   | POST        | /rd?ep={Endpoint Client                | 2.01 Created | 4.00 Bad       |    
 *  |            |             | Name}&lt={Lifetime}&sms={MSISDN}       |              | Request, 4.09  |
 *  |            |             | &lwm2m={version}&b={binding}           |              | Conflict       |
 *  +------------+-------------+----------------------------------------+--------------+----------------+
 *  | Update     | PUT         | /{location}?lt={Lifetime}&sms={MSISDN} | 2.04 Changed | 4.00 Bad       |    
 *  |            |             | &b={binding}                           |              | Request, 4.04  |
 *  |            |             |                                        |              | Not Found      |
 *  +------------+-------------+----------------------------------------+--------------+----------------+
 *  | Deregister | DELETE      | /{location}                            | 2.02 Deleted | 4.04 Not Found |    
 *  +------------+-------------+----------------------------------------+--------------+----------------+
 *
 *                           Table 19: Operation to Method and URI Mapping
 *
 *
 *
 */
lwm2mRegister = function() {
}



/**
 * Routes
 */
route.get('/', function(req, res) {
    res.writeHead(200);
    res.end('hello index page\n');
});

/**
 * LWM2M Server class
 */
function Lwm2mServer() {
    if (!(this instanceof Lwm2mServer)) {
        return new Lwm2mServer();
    }

    console.log('Creating LWM2M Server');
    this.server = coap.createServer(route);
}

/**
 * LWM2M Server Methods
 */
Lwm2mServer.prototype.start = function() {
    this.server.listen(function() {
        console.log('LWM2M server listening');
    });
}

/**
 * Exports
 */
module.exports = Lwm2mServer;
