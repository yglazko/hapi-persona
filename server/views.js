'use strict';

/**
 * Add Nunjucks support to Hapi.
 * This file just sets the Hapi view engine to Nunjucks.
 */

var path = require('path');

var NunjucksHapi = require('nunjucks-hapi');

var viewPath = path.join(__dirname, 'views');
/*var env =*/
NunjucksHapi.configure(viewPath);

module.exports = {
  engines: {
    html: NunjucksHapi
  },
  path: viewPath
};
