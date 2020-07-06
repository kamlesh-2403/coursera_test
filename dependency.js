// (function () {
//
// 'use strict'  // used to protect us from the global scope leakage of variables
// angular.module('diApp',[])
//
// .controller('diController', diController);
// diController.$inject = ['$scope','$filter'];
// function diController($scope, $filter) {
//   $scope.name = "kamlesh";
//
//   $scope.upper = function () {
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
//
// }
//
// })();
!function(){"use strict";function e(e,n){e.name="kamlesh",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("diApp",[]).controller("diController",e),e.$inject=["$scope","$filter"]}();
