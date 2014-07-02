(function () {
  worldTourApp.controller('CountriesCtrl', ['countriesFactory', '$log', function (countriesFactory, $log) {
    scope = this;

    scope.countries = {};

    scope.regions = [
      {code:'europe', name:'Europa'},
      {code:'americas', name:'América'},
      {code:'asia', name:'Asia'},
      {code:'africa', name:'Africa'}
    ];

    scope.region = scope.regions[0];

    scope.update = function () {
      countriesFactory.getCountries(scope.region.code).success(function (data) {
        scope.countries = data;
      });
    };

    /* Cargamos la primer a vez */
    scope.update();

  }]);
}());
