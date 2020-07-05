(function () {

'use strict'
angular.module('myFirstApp',[]) //here we have binded module with the controller

.controller('myFirstController', function($scope) {
  $scope.name = "k";
  $scope.hello = function () {
      return "hey there";
    };
});

})();
