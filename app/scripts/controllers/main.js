'use strict';

/**
 * @ngdoc function
 * @name desktopAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopAppApp
 */
angular.module('desktopAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [
		{ 
			'name' : 'Dolor quos debitis natus pariatur',
			'done' : 0
		},
		{ 
			'name' : 'Magnam nostrum aspernatur nobis tempore ',
			'done' : 1 
		},
		{ 
			'name' : 'Dicta quis quas ipsam modi pariatur ',
			'done' : 0
		}
	];
	$scope.model = {};
	$scope.model.init = function(){
		$scope.model.new = {};
	};

	$scope.add = function(){
		console.log("kaka");
		$scope.model.new.done = 0;
		$scope.tasks.push($scope.model.new);
		$scope.model.init();
	};
  });
