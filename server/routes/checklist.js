// server/routes/checklist.js
'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/checklist',
    handler: function (request, reply) {
      reply.view('checklist', {
        msg: 'I am displaying this message.',
        btn: 'I really need to stop refreshing because this is annoying.'
      });
    }
  }
];