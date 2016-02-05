angular.module('users').controller('UserController', ['$scope','$location','User',function ($scope,$location,User) {
"use strict";
    $scope.find = function() {
        $scope.users = User.query();
    };

    $scope.create = function (){
        var user = new User({
            name: this.name,
            uniqueid: this.uniqueid
        });
        user.$save(function(response){
            $location.path('user/'+response._id);
        },function(errorResponse){
            $scope.error = errorResponse.data.message;
        });
    };
}]);
