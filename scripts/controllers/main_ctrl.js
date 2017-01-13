(function(){
  'use strict';

  angular.module('angular-app')
    .controller('MainCtrl', MainCtrl);

  // When not injecting $scope, must use Controller As syntax. Because that way
  // Angular will treat MainCtrl as construction function and MainCtrl will have
  // its own namespace, $scope.main, according to index.html file.
  function MainCtrl(){
    var vm = this;
    vm.text = "Text from MainCtrl";
  }
})();
