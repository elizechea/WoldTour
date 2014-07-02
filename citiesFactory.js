(function () {

  worldTourApp.factory('citiesFactory', ['$http', '$log', function ($http, $log)  {
    var urlBase = "http://api.openweathermap.org/data/2.5/weather";

    var factory = {};

    factory.getWeather = function (country_code, city_name)  {
      return $http.jsonp(urlBase + '?q=' + city_name + ',' + country_code + '&units=metric&callback=JSON_CALLBACK');
    };

    return factory;
  }]);  

}());