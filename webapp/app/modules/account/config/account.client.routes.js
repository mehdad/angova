"use strict";
angular.module('account').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/account',{
            templateUrl: 'modules/account/views/create-account.client.view.html'
        });
}]);
