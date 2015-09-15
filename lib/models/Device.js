/**
 * Copyright (c) Mainflux
 *
 * Coreflux is licensed under an MIT license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DeviceSchema   = new Schema({
    id: Number,
    name: String,
    address: String,
    path: String,
    port: Number,
    type: String,
    lifetime: String,
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Device', DeviceSchema);
