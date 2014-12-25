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

	$scope.tasks = {};

	$scope.loadPromise = function(){
		var defer = $q.defer();
		$scope.model.find({}, function(err, data){
			defer.resolve(data);
		})
		return defer.promise; 
	}
  $scope.init = function(){
    $scope.newItem = {};
    $scope.newItem.tags = [];
  }

	$scope.load = function() {
		$scope.loadPromise().then(function(data){
			$scope.tasks = data;
      $scope.init();
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

	$scope.getClone = function(entity){
    var temp = _.clone(entity);
    if(!_.isArray(temp.tags)) temp.tags = [];
		return temp; 
	}

	$scope.update = function(item){
		$scope.model.update({"_id" : item._id}, {$set: item}, {}, function(err, data){
      console.log("updated item: ", item);
			$scope.load();
		});
	}
  });
