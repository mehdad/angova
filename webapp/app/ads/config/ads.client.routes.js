"use strict";
angular.module('ads').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'ads/views/list-ads.client.view.html'
        });
}]);
