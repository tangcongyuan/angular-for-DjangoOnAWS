(function(){
  'use strict';

  angular.module('tutor-app')
    .controller('ReviewsCtrl', ReviewsCtrl);

  ReviewsCtrl.inject = ['$auth'];

  // When not injecting $scope, must use Controller As syntax. Because that way
  // Angular will treat ReviewsCtrl as construction function and ReviewsCtrl will have
  // its own namespace, $scope.review, according to index.html file.
  function ReviewsCtrl($auth){
    var vm = this;
    vm.text = "Text from ReviewsCtrl";
  }
})();
