var worldTourApp = angular.module('worldTourApp', ['ngRoute']);

worldTourApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'CountriesCtrl',
            controllerAs: 'countriesCtrl',
            templateUrl: 'region.html'
        })
        .when('/city/:country_code/:city_name', {
            controller: 'CitiesCtrl',
            controllerAs: 'citiesCtrl',
            templateUrl: 'city.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});