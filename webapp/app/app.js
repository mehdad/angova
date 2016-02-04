'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # RS_webApp
 *
 * Main module of the application.
 */
angular.module('RS_webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'users',
    'ads'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sdf', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });

  angular.element(document).ready(function(){
  	angular.bootstrap(document, ['RS_webApp']);
  });
