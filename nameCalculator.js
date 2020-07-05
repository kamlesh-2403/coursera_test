(function (){

  'use strict'
  angular.module('nameCalculator',[])

.controller('nameCalculatorController',function ($scope){
    $scope.name = "";
    $scope.nameValue = 0;

    $scope.displayNoValue = function()
    {
      var totalValue = calculateValue($scope.name);
      $scope.nameValue = totalValue;
    };
    function calculateValue(string)
    {
      var total = 0;
      for (var i=0;i<string.length;i++)
      {
        total += string.charCodeAt(i);
      }
      return total;
    };

  });

})();
