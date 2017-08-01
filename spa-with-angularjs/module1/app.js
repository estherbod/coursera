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
      $scope.color = "red";
    }
    else {
      var items = menu.split(",").filter(isNotEmpty).length;
      if (items <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
      $scope.color = "green";
    }
  }

  function isNotEmpty(string) {
    return string.trim().length > 0;
  }
};
})();