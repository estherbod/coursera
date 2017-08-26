(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (response) {
       return response.data;
     })
    .catch(function (error) {
      console.log(error);
    })
  };

}

})();