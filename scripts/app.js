(function(){
  'use strict';

  angular.module('angular-app', ['ui.router'])
    .config(config);

  config.inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home/index.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio/index.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact/index.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about/index.html'
      });
  }

})();
