'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # RS_webApp
 *
 * Main module of the application.
 */
angular
  .module('RS_webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainList'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sdf', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.element(document).ready(function(){
  	angular.bootstrap(document, ['RS_webApp']);
  });
