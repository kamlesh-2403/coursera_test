// var shoppingList = [
//   "milk","coffee","donut","fries","bismol","bismol (choco)","pepto bismol"
// ];
// console.log("shoppingList", shoppingList);
// var searchList = "bismol";
// function containFilter(value) {
//   return value.indexOf(searchList) !==-1;
// }
// var searchShoppingList = shoppingList.filter(containFilter);
// console.log(searchShoppingList);
(function (){
'use strict'

angular.module('app',[])
.controller('AppController',AppController);

AppController.$inject = ['$scope'];

function AppController($scope){
  // $scope.name = "kamlesh";

var shoppingList = [
  "milk","cookie","cereal","cram-berries","plum"
];
  $scope.shoppingList = shoppingList;
};
})();
