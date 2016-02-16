"use strict";
angular.module('users').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/users',{
            templateUrl: 'modules/users/views/create-account.client.view.html'
        });
}]);
