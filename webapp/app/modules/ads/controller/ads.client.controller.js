angular.module('ads').controller('AdsController', ['$scope','Ads','AdsConfig','Authentication',function ($scope,Ads,AdsConfig,Authentication) {
"use strict";
    $scope.authentication = Authentication;
    $scope.find = function() {
        $scope.ads = Ads.query({limit:AdsConfig.adsPerPage});
    };
}]);
