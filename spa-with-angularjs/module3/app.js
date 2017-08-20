(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      message: "@",
      foundItems: '<',
      onRemove: '&'
    },
    restrict: 'E',
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.message = "";

  ctrl.findItems = function () {
    if (ctrl.searchTerm === "") {
      ctrl.message = "Nothing found";
      ctrl.foundItems = [];
    }
    else {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function (response) {
        ctrl.foundItems = response;
        if (ctrl.foundItems.length == 0) {
          ctrl.message = "Nothing found";
        }
        else {
          ctrl.message = "";
        }
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }
  };

  ctrl.removeItem = function (index) {
    ctrl.foundItems.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
    }).then(function (response) {
      var foundItems = response.data["menu_items"];
      var filteredItems = [];
      for (var i = 0; i < foundItems.length; i++) {
        var item = foundItems[i];
        if (item.description.indexOf(searchTerm) !== -1) {
          filteredItems.push(item);
        }
      }
      return filteredItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
}

})();