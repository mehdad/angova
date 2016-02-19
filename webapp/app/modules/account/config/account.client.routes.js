"use strict";
angular.module('account').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/account/create',{
        templateUrl: 'modules/account/views/create-account.client.view.html'
    })
    .when('/account/login',{
        templateUrl: 'modules/account/views/login-account.client.view.html'
    })
    .when('/account/info',{
        templateUrl: 'modules/account/views/info-account.clinet.view.html'
    })
    .when('/account/edit',{
        templateUrl: 'modules/account/views/edit-account.client.view.html'
    });
}]);
