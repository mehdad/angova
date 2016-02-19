angular.module('account').controller('AccountController', ['$scope','$location','Account','Authentication',function ($scope,$location,Account,Authentication) {
"use strict";
    $scope.authentication = Authentication;

    $scope.authenticate = function(permission) {
        if(Authentication.user != null){
            $location.path('/account/info');
        }else{
            if(permission == 'secure'){
                $location.path('/account/login');
            }
        }
    };

    $scope.login = function() {
        var account = Account.query({ where: { name: this.uniqueid , password: this.password }});

        account.$promise.then(function(data) {
            if(data.length < 1){
                $scope.error = 'Email or Password is not valid';
            } else {
                Authentication.user = data[0];
                $location.path('/account/info');
            }
        });
    }

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
