(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkLunch = function () {
    var menu = $scope.menu
    if (!menu || 0 === menu.length) {
      $scope.message = "Please enter data first";
    }
    else {
      var items = menu.split(",").length;
      if (items <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
  }
};
})();