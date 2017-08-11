(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

 bought.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy and items bought already
  var toBuy = [{name: "cookies", quantity: 10}, {name: "milk", quantity: 2}, {name: "coffee", quantity: 3}, {name: "bread", quantity: 1}, {name: "chips", quantity: 2}]
  var bought = [];

  service.getItemsToBuy = function () {
    return toBuy;
  };

  service.getItemsBought = function () {
    return bought;
  };
}

})();