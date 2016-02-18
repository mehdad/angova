"use strict";
angular.module('ads').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'modules/ads/views/list-ads.client.view.html'
    })
    .when('/ads/create',{
        templateUrl: 'modules/ads/views/create-ads.client.view.html'
    });
}]);
