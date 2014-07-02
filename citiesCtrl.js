(function () {
  worldTourApp.controller('CitiesCtrl', ['citiesFactory', '$routeParams', '$log', function (citiesFactory, $routeParams, $log) {
    var scope = this;

    scope.country_code = $routeParams.country_code;
    scope.city_name = $routeParams.city_name;

    citiesFactory.getWeather(scope.country_code, scope.city_name).success(function (data) {
      scope.weather = data.weather[0];
    });

  }]);
}());
