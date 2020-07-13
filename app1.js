(function () {
'use strict'

angular.module('app1',[])
.controller('AppController1',AppController1)
.filter('loves',lovesFilter)
.filter('truth', truthFilter);

AppController1.$inject = ['$scope', '$filter', 'lovesFilter'];
function AppController1($scope, $filter, lovesFilter){
    $scope.name = "Panda";
    $scope.stateofbeing = "hungry";
    $scope.cookieCost = 18;
    $scope.saymessage = function ()
    {
        var msg = "i am hungry";
        var op = $filter('uppercase')(msg);
        return op;
    };
    $scope.sayLovesmessage = function ()
    {
      var msg = "he likes to be hungry";
      msg = lovesFilter(msg);
        return msg;
    };
  $scope.FeedHim = function()
  {
    $scope.stateofbeing = "fed";
  };
  }

function lovesFilter() {
  return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
  };
}

function truthFilter(){
  return function (input,target,replace) {
    input = input || "";
    input = input.replace(target,replace);
    return input;
  };
}

})();
