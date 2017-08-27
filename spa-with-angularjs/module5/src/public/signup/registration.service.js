(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = [];
function RegistrationService() {
  var service = this;

  service.save = function (user) {
    service.user = user;
  }
}
})();