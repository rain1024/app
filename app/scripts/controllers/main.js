'use strict';

/**
 * @ngdoc function
 * @name desktopAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopAppApp
 */
angular.module('desktopAppApp')
  .controller('MainCtrl', function (Database, $scope) {

	$scope.model = Database().load();

	// $scope.insert= function(){
	// 	$scope.model.new.done = 0;
	// 	$scope.tasks.push($scope.model.new);
	// };
    //
	// $scope.update = function(){
	// }
  });
