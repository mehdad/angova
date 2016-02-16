angular.module('account').controller('AccountController', ['$scope','$location','Account',function ($scope,$location,Account) {
"use strict";
    $scope.find = function() {
        $scope.accounts = Account.query();
    };

    $scope.create = function (){
        var account = new Account({
            name: this.name,
            uniqueid: this.uniqueid
        });
        account.$save(function(response){
            $location.path('user/'+response._id);
        },function(errorResponse){
            $scope.error = errorResponse.data.message;
        });
    };
}]);
