angular.module('ads').controller('AdsController', ['$scope','Ads','AdsConfig','Authentication','$location',function ($scope, Ads, AdsConfig, Authentication, $location) {
"use strict";
    $scope.authentication = Authentication;
    $scope.find = function() {
        $scope.ads = Ads.query({limit:AdsConfig.adsPerPage});
    };

    $scope.create = function () {

        var ad = new Ads({
            user: Authentication.user,
            favorate: '0',
            title: this.data.title,
            description: this.data.description,
            type: this.data.type==null ? 0 : parseInt(this.data.type),
            price: this.data.price==null ? 0 : parseInt(this.data.price) ,
            lease: this.data.lease==null ? 0 : parseInt(this.data.lease),
            mortgage: this.data.mortgage==null ? 0 : parseInt(this.data.mortgage)
        });
        console.log(ad);
        ad.$save(function(response){
            console.log('yes');
            console.log(response);
            $location.path('ads/'+response._id);
        },function(error){
            console.log('no');
            console.log(error);
        });
    }
}]);
