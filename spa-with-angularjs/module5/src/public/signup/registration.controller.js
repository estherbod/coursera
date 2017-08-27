(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var reg = this;

  reg.submit = function () {
    RegistrationService.save(reg.user);
  };
}

})();