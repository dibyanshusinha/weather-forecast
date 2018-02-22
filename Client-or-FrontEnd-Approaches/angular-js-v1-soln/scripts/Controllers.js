app.controller("mainController", function ($scope, weatherApi) {
        $scope.buttonText = "Find Weather";
        var zip = "";
        var country = "";
        var add = zip + "," + country;
        $scope.fetchWeather = function () {
            $scope.buttonText = "Please wait..."
            $scope.showerrors = false;
            $scope.showresult = false;
            var address = '';
            if ($scope.address) {
                address = $scope.address.trim();
            }

            if (address) {
                weatherApi.getData(address).then(function (response) {
                        $scope.showresult = true;
                        $scope.buttonText = "Find Weather";
                        $scope.responseData = response.data;
                    })
                    .catch(function (err) {
                        $scope.buttonText = "Find Weather";
                        $scope.showerrors = true;
                        $scope.error = err.data.message + "! Please try again.";
                    });
            } else {
                $scope.buttonText = "Find Weather";
                $scope.showerrors = true;
                $scope.error = "Please enter a city!";
            }
        };
    })
    .controller("notFoundController", function ($scope) {
        $scope.title = "Page Not Found";
    })

    .service('weatherApi', function ($http) {
        this.getData = function (address) {

            //For future use case
            var authorized = true;
            if (authorized) {
                return $http({
                    url: "https://api.openweathermap.org/data/2.5/forecast?zip=" + address + "&appid=d8c207ec1bc2b9b60b10802a68b7cda4",
                    method: "GET"
                });
            };
        };
    });
