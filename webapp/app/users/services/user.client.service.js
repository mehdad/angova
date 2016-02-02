angular.module('users').factory('User', ['$resource', function ($resource){
    return $resource('http://localhost:1337/user/:UserId', {
        UserId: '@_id'
    },{
        update: {
            method: 'PUT'
        }
    });
}]);
