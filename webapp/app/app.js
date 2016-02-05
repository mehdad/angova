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
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

  angular.element(document).ready(function(){
  	angular.bootstrap(document, ['RS_webApp']);
  });
