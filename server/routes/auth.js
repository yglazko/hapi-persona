'use strict';

var verify = require('browserid-verify')();

function isMozillian(email) {
  // This is gross and I hate myself.
  var mozEmailRegExp = /@mozilla\.com$/i;
  return mozEmailRegExp.test(email);
}

module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: function (request, reply) {
      var assertion = request.payload.assertion;
      var audience = request.info.host;
      //I'm trying to change the view with no luck... WHYYYY.... WHYYYYYYY
      reply.view('home', {
        msg: 'WHAT THE HECK IS GOING ONNNN',
        btn: 'I am a noob ok?'
      });

      verify(assertion, audience, function(err, email, response) {
        if (err) {
          console.error('There was an error : ' + err);
          return reply(err);
        }

        response.isMozillian = isMozillian(email);
        response.isOkay = (response.status === 'okay');

        // if (response.isMozillian) {
        //   console.log('HELLO MOZILLIAN, %s!', email);
        // } else {
        //   console.warn('STRANGER DANGER!');
        // }

        console.log(JSON.stringify(response, null, 2));
        reply(response);
      });
    }
  }, {
    method: 'POST',
    path: '/auth/logout',
    handler: function (request, reply) {
      reply('bu-bye from logout');
    }
  }
];
