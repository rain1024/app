'use strict';

/**
 * @ngdoc function
 * @name desktopAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desktopAppApp
 */
angular.module('desktopAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
