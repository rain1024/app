'use strict';

/**
 * @ngdoc function
 * @name desktopAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopAppApp
 */
angular.module('desktopAppApp')
  .controller('MainCtrl', function (Database, $scope, $q) {

	$scope.model = new Database().load('data');

	$scope.newItem = {};

	$scope.tasks = {};

	$scope.getClone = function(entity){
		return _.clone(entity)
	}

	$scope.loadPromise = function(){
		var defer = $q.defer();
		$scope.model.find({}, function(err, data){
			console.log($scope.tasks);
			defer.resolve(data);
		})
		return defer.promise; 
	}

	$scope.load = function() {
		$scope.loadPromise().then(function(data){
			$scope.tasks = data;
		});
	}

	$scope.load();

	$scope.insert = function(item){

		$scope.model.insert(item, function(err, data){
			$scope.newItem = {};
			$scope.load();
		});
	}

	$scope.remove = function(item){
		$scope.model.remove({"_id" : item._id }, {}, function(err, data){ 
			$scope.load();
		})
	}

	$scope.update = function(item){
		$scope.model.update({"_id" : item._id}, {$set: item}, {}, function(err, data){
			$scope.load();
		});
	}
  });
