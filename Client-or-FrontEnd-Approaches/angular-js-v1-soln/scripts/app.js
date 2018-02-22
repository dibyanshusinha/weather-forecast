var app = angular.module("weatherApp", ["ngRoute"])
    .config(function ($routeProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain.  Notice the difference between * and **.
          'https://api.openweathermap.org/data/**'
        ]);
        $routeProvider.
        when("/", {
            templateUrl: "Views/main.html",
            controller: "mainController"
        }).
        when("/404", {
            templateUrl: "Views/notfound.html",
            controller: "notFoundController"
        }).
        otherwise({
            redirectTo: "/404"
        });
    });
