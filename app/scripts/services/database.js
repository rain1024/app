'use strict';

/**
 * @ngdoc service
 * @name desktopAppApp.Database
 * @description
 * # Database
 * Service in the desktopAppApp.
 */

angular.module('desktopAppApp')
  .service('Database', function Database() {
      // AngularJS will instantiate a singleton by
	  // calling "new" on this function

	  // =======================
	  // Database Service
	  // ======================

	  var DatabaseService = function() {
		  console.log("create database service");
		  var db = {};
		  var databaseType = CONFIGURATION.database;
		  if(databaseType === 'memory'){
			  db = new MemoryDatabaseService();
		  } else if(databaseType === 'nedb'){
			  var config = {folder : '/home/rain'}
			  db = new NedbAdapter(config);
		  } else if (databaseType === 'webserivce'){
			  db = new WebDatabaseService();
		  }
		  return db;
	  };
	  
	  var DatabaseServiceInterface = function(){};

	  DatabaseServiceInterface.prototype.toString = function(){
		  return 'Somekind of DatabaseService is loaded';
	  };

	  DatabaseServiceInterface.prototype.load = function(){
		  throw 'load function must be implemented';
	  };
	  // =======================
	  // Database Store 
	  // ======================
	  var MemoryDataStore = function(){
		  this.items = [
			{ 
			    '_id' : 1,
				'name' : 'Dolor quos debitis natus pariatur',
				'done' : true
			},
			{ 
			    '_id' : 2,
				'name' : 'Magnam nostrum aspernatur nobis tempore ',
				'done' : false
			},
			{ 
			    '_id' : 3,
				'name' : 'Dicta quis quas ipsam modi pariatur ',
				'done' : true
			}
		  ];
	  };

	  MemoryDataStore.prototype.constructor = function() {};

	  MemoryDataStore.prototype.find = function(query, callback) {
		  callback(null, this.items);
	  };

	  MemoryDataStore.prototype.insert = function(item, callback){
		  item._id = Math.floor((Math.random() * 1000) + 100);
		  this.items.push(item);
		  if(callback) callback(null);
	  };

	  MemoryDataStore.prototype.update = function(query, update, option, callback){
		  this.items = _.map(this.items, function(item){
			  if(item._id === query._id){
				return _.extend(item, update.$set);
			  } else{
				  return item;
			  }
		  })
		  if(callback) callback(null, null);
	  };

	  MemoryDataStore.prototype.remove = function(query, options, callback){
		  var matches = _.where(this.items, query);
		  console.log("Matches")
		  console.log(matches);
		  this.items = _.difference(this.items, matches);
		  callback(null, null);
	  };
	  function MemoryDatabaseService(){}
	  MemoryDatabaseService.prototype = new DatabaseServiceInterface(); 
	  MemoryDatabaseService.prototype.constructor = MemoryDatabaseService;
	  MemoryDatabaseService.prototype.toString = function(){
		  return 'MemoryDatabase is loaded';
	  };

	  MemoryDatabaseService.prototype.load = function(name){
		  return new MemoryDataStore();
	  }

	  function WebDatabaseService(){}
	  WebDatabaseService.prototype = new DatabaseServiceInterface(); 
	  WebDatabaseService.prototype.constructor = WebDatabaseService;
	  WebDatabaseService.prototype.toString = function(){
		  return 'WebDatabase is loaded';
	  };


	  return DatabaseService; 
  });
