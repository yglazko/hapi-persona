'use strict';

var server = require('./server/index');

server.start(function () {
  console.log('Hapi server running at: %s', server.info.uri);
});
