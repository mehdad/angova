angular.module('users').controller('UserController', ['$scope','$location','User',function ($scope,$location,User) {
    $scope.find = function() {
        $scope.users = User.query();
    }
}])
