"use strict";
angular.module('account').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/account/create',{
        templateUrl: 'modules/account/views/create-account.client.view.html'
    })
    .when('/account/login',{
        templateUrl: 'modules/account/views/login-account.client.view.html'
    });
}]);
