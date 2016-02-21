"use strict";
angular.module('ads').factory('Ads', ['$resource', function ($resource){
    return $resource('http://localhost:1337/ad/:AdId', {
        AdId: '@_id'
    },{
        update: {
            method: 'PUT'
        }
    });
}]);
