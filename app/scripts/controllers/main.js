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

		var defer = $q.defer();
		$scope.model.insert(item, function(err, data){
			$scope.newItem = {};
			$scope.load();
			defer.resolve();
		});
		return defer.promise; 
	}

	$scope.remove = function(item){
		var defer = $q.defer();
		console.log("delete task ", item);
		$scope.model.remove({"_id" : item._id }, {}, function(err, data){ 
			console.log("delete task successfully");
			$scope.load();
			defer.resolve();
		})
		return defer.promise; 
	}

	$scope.update = function(item){
		var defer = $q.defer();
		console.log("update task ", item);
		$scope.model.update({"_id" : item._id}, {$set: item}, {}, function(err, data){
			$scope.load();
			console.log("update task successfully");
			defer.resolve();
		});
		return defer.promise; 
	}
	// $scope.insert= function(){
	// 	$scope.model.new.done = 0;
	// 	$scope.tasks.push($scope.model.new);
	// };
    //
	// $scope.update = function(){
	// }
  });
