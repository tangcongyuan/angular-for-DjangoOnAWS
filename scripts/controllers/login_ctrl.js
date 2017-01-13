(function(){
  'use strict';

  angular.module('tutor-app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.inject = ['$auth', '$state'];

  // When not injecting $scope, must use Controller As syntax. Because that way
  // Angular will treat LoginCtrl as construction function and LoginCtrl will have
  // its own namespace, $scope.login, according to index.html file.
  function LoginCtrl($auth, $state){
    var vm = this;
    vm.text = "Text from LoginCtrl";

    vm.handleLoginBtnClick = function(){
      $auth.submitLogin(vm.loginForm)
        .then(function(resp){
          console.log(resp);
          $state.go('reviews');
        })
        .catch(function(resp){
          console.log(resp);
        });
      console.log(vm.loginForm);
    };
  }
})();
