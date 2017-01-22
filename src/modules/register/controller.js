module.exports = controller;
/** @ngInject */
function controller($log, $http, $stateParams, $scope, api) {
  var vm = this;
  var uri = api.endpoint + "/users";
  $scope.needEmail = 1;

  $log.log($stateParams.userId);
  $log.log(angular.isDefined($stateParams.userId));
  if (angular.isDefined($stateParams.userId)) {
    uri = api.endpoint + '/users/invite/' + $stateParams.userId;
    $scope.needEmail = 1;
  }

  $log.log(uri);
  vm.registerForm = {
    email: '',
    password: ''
  };

  vm.register = function () {
    $log.log(vm.registerForm);
    $http.post(uri, vm.registerForm)// TODO endpoint
      .then(
        function successCallback() {
          $log.log("Request Sent");
          // TokenStorage.store(response.data.token);
          // $state.go('app.home');
        },
        function failureCallback(response) {
          $log.log("Error while sending");
          $log.log(response);
          $log.log(vm.registerForm);
        });
  };
}
