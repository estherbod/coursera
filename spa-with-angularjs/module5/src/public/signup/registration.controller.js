(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var reg = this;

  reg.message = "";

  reg.submit = function () {
    reg.message = RegistrationService.save(reg.user);
  };
}

})();