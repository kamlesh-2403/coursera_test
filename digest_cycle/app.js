// (function () {
// 'use strict'
//
// angular.module('app1',[])
// .controller('AppController1',AppController1);
//
// AppController1.$inject = ['$scope'];
// function AppController1($scope){
//         $scope.showNumber = function () {
//           console.log($scope);
//         };
//   }
//
// })();
(function () {
    'use strict'
    angular.module('app1',[])
    .controller('AppController1',AppController1);

    AppController1.$inject = ['$scope'];

    // function AppController1($scope){
    //   $scope.counter=0;
    //   $scope.upCounter = function () {
    //     $scope.counter++;
    //   };
    // }

    function AppController1($scope) {
        $scope.counter = 0;
        $scope.upCounter = function () {
            setTimeout(function () {
              $scope.counter++;
              console.log("Increment");
            },200);
        };
    }


})();
