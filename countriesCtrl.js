(function () {
  worldTourApp.controller('CountriesCtrl', ['countriesFactory', '$log', function (countriesFactory, $log) {
    scope = this;

    scope.countries = {};

    scope.regions = [
      {code:'europe', name:'Europa'},
      {code:'americas', name:'América'},
      {code:'asia', name:'Asia'},
      {code:'oceania', name:'Oceania'},
      {code:'africa', name:'Africa'}
    ];

    scope.region = scope.regions[0];

    scope.order = 'name';

    scope.update = function () {
      countriesFactory.getCountries(scope.region.code).success(function (data) {
        scope.countries = data;
      });
    };

    scope.order_is = function (order) {
      return (scope.order == order);
    }

    /* Cargamos la primer a vez */
    scope.update();

  }]);
}());
