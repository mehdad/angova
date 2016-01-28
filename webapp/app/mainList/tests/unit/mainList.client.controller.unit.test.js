describe('Controllers ::', function() {
  var _scope, MainListController;
  beforeEach(function () {
      module('RS_webApp')
      jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
      inject(function($rootScope, $controller) {
            _scope = $rootScope.$new();
            MainListController = $controller('MainListController', {
            $scope: _scope
        });
      });
  });

  describe('mainList controller', function() {
    var scope, mainlist, location;

    beforeEach(inject(function ($controller, $rootScope, $location) {
      scope = $rootScope.$new();
      location = $location;
      mainlist = $controller('MainListController', {
        $scope: scope
      });
    }));

    // markAll
    it('should have a find all function', function() {
      expect(scope.find).toBeDefined();
    });

  });
});
