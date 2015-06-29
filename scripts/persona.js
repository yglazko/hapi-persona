$(function () {
  'use strict';

  var currentUser = null;

  $('#signin').on('click', function () {
    navigator.id.request();
  });

  $('#signout').on('click', function() {
    navigator.id.logout();
  });

  navigator.id.watch({
    loggedInUser: currentUser,
    onlogin: function(assertion) {
      $.ajax({
        type: 'POST',
        url: '/auth/login',
        data: {
          assertion: assertion
        },
        success: function(res, status, xhr) {
          alert('Welcome to the Checklist.');
          window.location.replace('/checklist');
        },
        error: function(xhr, status, err) {
          console.error(err);
          currentUser = null;
          navigator.id.logout();
        }
      });
    },
    onlogout: function() {
      $.ajax({
        type: 'POST',
        url: '/auth/logout',
        success: function(res, status, xhr) {
          currentUser = null;
          //This isn't working for some reason
          window.location.replace('/home');
        },
        error: function(xhr, status, err) {
          console.error(err);
          currentUser = null;
        }
      });
    }
  });
});
