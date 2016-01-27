angular.module('mainList').controller('MainListController', ['$scope', 
	function($scope){
        $scope.find = function() {
            var adsd = [
                {"id": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "title": "President and CEO", "cellPhone": "617-000-0001" },
                {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "title": "VP of Marketing", "cellPhone": "617-000-0002"},
                {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "title": "CFO", "cellPhone": "617-000-0003"},
                {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "title": "VP of Engineering", "cellPhone": "617-000-0004"}
            ];
            $scope.ads = adsd;
        }
	}
]);
