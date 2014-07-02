(function () {

  worldTourApp.factory('countriesFactory', ['$http', '$log', function ($http, $log)  {
    var urlBase = "http://restcountries.eu/rest/v1/";

    var factory = {};

    factory .getCountries = function (region)  {
      var result = $http.get(urlBase + 'region/' + region);
      return result;
    };

    return factory;
  }]);  

}());