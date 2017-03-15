(function(){
  'use strict';

  // var url = 'https://erictang.herokuapp.com';
  var url = 'http://localhost:8000';

  angular.module('angular-app')
    .factory('authInterceptor', authInterceptor)
    .service('user', userService)
    .service('auth', authService)
    .constant('API', url)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    })
    .controller('AuthCtrl', AuthCtrl);

  function authInterceptor(API, auth) {
    return {
      // automatically attach Authorization header
      request: function(config) {
        return config;
      },

      // If a token was sent back, save it
      response: function(res) {
        return res;
      },
    };
  }

  function authService($window) {
    var vm = this;

    // Add JWT methods here
  }

  function userService($http, API, auth) {
    var vm = this;
    vm.getQuote = function() {
      return $http.get(API + '/auth/quote')
    };

    // add authentication methods here
    vm.signup = function(form) {
      return $http.post(API + '/auth/accounts/', { email: form.email, password: form.password });
    };

    vm.login = function(form) {
      return $http.post(API + '/api-token-auth/', { email: form.email, password: form.password });
    };
  }

  // When not injecting $scope, must use Controller As syntax. Because that way
  // Angular will treat LoginCtrl as construction function and LoginCtrl will have
  // its own namespace, $scope.login, according to index.html file.
  function AuthCtrl(user, auth){
    var vm = this;

    function handleRequest(res) {
      var token = res.data ? res.data.token : null;
      if(token) { console.log('JWT: ', token); }
      vm.message = res.data.message;
      if (res.data.non_field_errors) { vm.message = res.data.non_field_errors[0]; }
    }

    vm.login = function() {
      user.login(vm.loginForm)
          .then(handleRequest, handleRequest);
    };
    vm.signup = function() {
      user.signup(vm.signupForm)
        .then(handleRequest, handleRequest);
    };
    vm.getQuote = function() {
      user.getQuote()
        .then(handleRequest, handleRequest);
    };
    vm.logout = function() {
      auth.logout && auth.logout();
    };
    vm.isAuthed = function() {
      return auth.isAuthed ? auth.isAuthed() : false;
    };
  }
})();
