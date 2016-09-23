console.log('sourced');


//get inputs

var myApp = angular.module('myApp', []);

//controller
myApp.controller('assignmentController', ['$scope', '$http', function ($scope, $http) {
  console.log('NG');
  $scope.allAssignments = [];




  $scope.addAssignment = function () {


    var newAssignment = {
      number: $scope.number,
      name: $scope.name,
      score: $scope.score
    };//end object newAssignment
    console.log('sending', newAssignment);
    $http({
      method: 'POST',
      url: '/assignment/addAssignment',
      data: newAssignment
    }).then(function (response) {
      console.log('got this from the server', response);
    });
    getAll();
  };//end addAssignment

  var getAll = function () {
    console.log('in getAll');
    $http({
      method: 'GET',
      url: '/assignment/all',
    }).then(function (response) {
      console.log('got this from the server', response);
      $scope.allAssignments = response.data;
      console.log($scope.allAssignments);

    });
  };//end getAll


getAll();

}]);//end controller
