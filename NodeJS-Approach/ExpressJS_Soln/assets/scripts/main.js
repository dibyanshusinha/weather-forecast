var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.buttonText = "Find Weather";
  // var zip = "";
  // var country = "";
  // var add = zip + "," + country;
  $scope.fetchWeather = function () {
      $scope.buttonText = "Please wait..."
      $scope.showerrors = false;
      $scope.showresult = false;
      var address = '';
      if ($scope.address) {
          address = $scope.address.trim();
      }

      if (address) {
          $http({
            method : "POST",
            url : "/fetchWeather",
            data: { "zip" : address }
          })
          .then(function (response) {
                  $scope.showresult = true;
                  $scope.buttonText = "Find Weather";
                  $scope.responseData = response.data;
              })
              .catch(function (err) {
                  $scope.buttonText = "Find Weather";
                  $scope.showerrors = true;
                  $scope.error = err.data + "! Please try again.";
              });
      } else {
          $scope.buttonText = "Find Weather";
          $scope.showerrors = true;
          $scope.error = "Please enter a city!";
      }
  };
});
