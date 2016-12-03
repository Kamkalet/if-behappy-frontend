(function(){
    var app = angular.module('therapy', [ ]);


    app.controller('TherapyController', ['$scope', '$http', function($scope, $http) {

        $scope.therapies =  [];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/therapies'
            /*url: 'http://localhost:8080/therapies'*/
        }).then(function successCallback(response) {
            $scope.therapies = response.data;
        }, function errorCallback(response) {
            alert("Cannot display test.json")
        });

    }]);

    app.directive("therapyDescription", function () {
       return {
         restrict: 'E',
         templateUrl: 'therapy-description.html'
       };
    });


    app.controller("PanelController", ['$scope', function($scope){

        $scope.selectTab = function(setTab){
            $scope.tab = setTab;
        };
        $scope.checkTab = function(){
             if ($scope.tab > 0)
                 return 1;
            else
                return 0;
        };

    }]);

    app.controller("PatientsController", ['$scope', function($scope){
        $scope.patients = [];
        $http({
            method: 'GET',
            url: 'http://localhost:3000/therapies/{{tab}}/members'
            /*url: 'http://localhost:8080/therapies'*/
        }).then(function successCallback(response) {
            $scope.patients = response.data;
        }, function errorCallback(response) {
            alert("Cannot display test.json")
        });
    }]);

})();

