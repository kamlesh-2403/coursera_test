(function () {
  'use strict'

var shoppingList1 = [
  "milk", "biscuit", "chai", "coffee", "milk powder"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2 ltrs"
  },
  {
    name: "Biscuits",
    quantity: "2 pkts"
  },
  {
    name: "Chai",
    quantity: "2 ltrs"
  },
  {
    name: "Coffee",
    quantity: "2 ltrs"
  },
  {
    name: "Milk",
    quantity: "2 ltrs"
  },
  {
    name: "Milk powder",
    quantity: "2 pkts"
  }
];


  angular.module('app',[])
  .controller('appController',appController);

function appController($scope){
  // $scope.name = "kamlesh"
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;
  $scope.updateValue = function () {
      var item = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.shoppingList2.push(item);
  };
}

})();
