"use strict";
angular.module('ads').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'modules/ads/views/list-ads.client.view.html'
        });
}]);
