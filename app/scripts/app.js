'use strict';

/**
 * @ngdoc overview
 * @name desktopAppApp
 * @description
 * # desktopAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('desktopAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'core',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(function(editableOptions){
	editableOptions.theme = 'bs3';
});
