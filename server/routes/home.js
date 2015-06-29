'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('home', {
        msg: 'Welcome to the Q.A. Checklist',
        btn: 'I am not really sure what I am doing.. oh well :)'
      });
    }
  }
];
