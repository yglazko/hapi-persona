'use strict';

/**
 * Creates and exports a Hapi Server object.
 */

var Hapi = require('hapi');

var routes = require('./routes/index').routes;
var views = require('./views');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 5000 // Set a default port of 5000.
});
server.views(views);
server.route(routes);

module.exports = server;
