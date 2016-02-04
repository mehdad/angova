"use strict";
angular.module('ads').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/ads',{
            templateUrl: 'ads/views/list-ads.client.view.html'
        });
}]);
