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

    //use of settimeout function

    // function AppController1($scope) {
    //     $scope.counter = 0;
    //     $scope.upCounter = function () {
    //         setTimeout(function () {
    //           $scope.counter++;
    //           console.log("Increment");
    //         },200);
    //     };
    // }


    //use of $digest which can make the clock fire even there is an error or an exception


    // function AppController1($scope){
    //   $scope.counter = 0;
    //   $scope.upCounter = function () {
    //       setTimeout(function (){
    //         $scope.counter++;
    //         console.log("incremented");
    //         $scope.$digest;
    //       },2000);
    //   };
    // }

    // use of the appropriate or preffered method for setting up the digest clock
    function AppController1($scope) {
      $scope.counter = 0;
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.counter++;
          console.log("incremented");
        });
      },2000);
    };
})();
