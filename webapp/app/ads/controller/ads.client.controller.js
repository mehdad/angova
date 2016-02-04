angular.module('ads').controller('AdsController', ['$scope','Ads',function ($scope,Ads) {
"use strict";
    $scope.find = function() {
        $scope.ads = Ads.query();
    };
}]);
