(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.findItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function (response) {
      ctrl.foundItems = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
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
      // TODO Filter items on search term
      return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
}

})();