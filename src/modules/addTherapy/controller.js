module.exports = controller;

function controller($scope, $http, $log, moment) {
  // vm = this;
  $scope.formModel = {};
  $scope.roleModel = {};

  $scope.onSubmit = function () {
    $scope.localFormat = 'YYYY-MM-DD[T]HH:mm:ss';
    $scope.date = moment($scope.formModel.beginningDate).format($scope.localFormat);
    $scope.toSend = {
      name: $scope.formModel.name,
      beginningDate: $scope.date,
      role: $scope.formModel.role
    };
    $log($scope.toSend.name);
    $log($scope.toSend.beginningDate);
    $log($scope.toSend.role);
    $http({
      method: 'POST',
      url: 'http://localhost:8080/api/therapies',
      data: $scope.toSend
    }).then(function successCallback() {
      $log("Submitted!");
    }, function errorCallback(response) {
      $log("Http error status code:" + response.status.toString());
    });
  };
}