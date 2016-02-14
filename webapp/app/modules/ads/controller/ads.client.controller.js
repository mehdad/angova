angular.module('ads').controller('AdsController', ['$scope','Ads','AdsConfig',function ($scope,Ads,AdsConfig) {
"use strict";
    $scope.find = function() {
        $scope.ads = Ads.query({limit:AdsConfig.adsPerPage});
    };
}]);
