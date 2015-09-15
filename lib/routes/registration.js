/**
 * Copyright (c) Mainflux
 *
 * Coreflux is licensed under an MIT license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

/**
 * 5.2.1 Register
 *
 * Registration is performed when a LWM2M Client sends a "Register" operation to the LWM2M Server. After the LWM2M
 * Device is turned on and the bootstrap procedure has been completed, the LWM2M Client MUST perform a "Register"
 * operation to each LWM2M Server that the LWM2M Client has a Server Object Instance.
 *
 * Upon receiving a "Register" operation from the LWM2M Client, the LWM2M Server records the IP address and port from
 * the IP packet of the registration message and uses this information for all future interactions with that LWM2M Client.
 * If the LWM2M Client sends a "Register" operation to the LWM2M Server even though the LWM2M Server has registration
 * information of the LWM2M Client, the LWM2M Server removes the existing registration information and performs the new
 * “Register” operation. This situation happens when the LWM2M Client forgets the state of the LWM2M Server (e.g., factory
 * reset).
 *
 */

var coap    = require('coap');
var url = require("url");
var querystring = require('querystring');


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

/**
 * Register
 */
register = function(req, res) {
    console.log("Register");
    console.log(req.url);

    var queryString = url.parse(req.url).query;
    var query = querystring.parse(queryString);
    console.log(query);
}


/**
 * Update
 */
update = function(req, res) {
    console.log("Update");
    
    var queryString = url.parse(req.url).query;
    var query = querystring.parse(queryString);
    console.log(query);
}


/**
 * Deregister
 */
deregister = function(req, res) {
    console.log("Deregister");
}

/**
 * Exports
 */
module.exports.register     = register;
module.exports.update       = update;
module.exports.deregister   = deregister;



