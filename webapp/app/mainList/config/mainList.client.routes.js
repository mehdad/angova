angular.module('mainList').config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'mainList/views/show_mainList.client.view.html'
    });
}]);
