(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController() {
  var ctrl = this;
}

function MenuSearchService() {
  var service = this;
}

})();