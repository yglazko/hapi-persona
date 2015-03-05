'use strict';

/**
 * Set up routes for our static /bower_components/* and client-side /scripts/* directories.
 */

module.exports = [
  {
    method: 'GET',
    path: '/bower_components/{param*}',
    handler: {
      directory: {
        path: 'bower_components',

        index: false,
        listing: true,
        lookupCompressed: true
      }
    }
  }, {
    method: 'GET',
    path: '/scripts/{param*}',
    handler: {
      directory: {
        path: 'scripts',

        index: false,
        listing: true,
        lookupCompressed: true
      }
    }
  }
];
