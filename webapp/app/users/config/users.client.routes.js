"use strict";
angular.module('users').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/users',{
            templateUrl: 'users/views/list-user.client.view.html'
        });
}]);
