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

	  DatabaseServiceInterface.prototype.load = function(name){
	  	  console.log("DatabaseService load datastore");
	      return new DataStore(name); 
	  };

	  function MemoryDatabaseService(){}
	  MemoryDatabaseService.prototype = new DatabaseServiceInterface(); 
	  MemoryDatabaseService.prototype.constructor = MemoryDatabaseService;
	  MemoryDatabaseService.prototype.toString = function(){
		  return 'MemoryDatabase is loaded';
	  };

	  function WebDatabaseService(){}
	  WebDatabaseService.prototype = new DatabaseServiceInterface(); 
	  WebDatabaseService.prototype.constructor = WebDatabaseService;
	  WebDatabaseService.prototype.toString = function(){
		  return 'WebDatabase is loaded';
	  };

	  // =======================
	  // Database Store 
	  // ======================
	  var DataStore = function(){
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

	  DataStore.prototype.constructor = function() {};

	  DataStore.prototype.find = function(query, callback) {
		  callback(null, this.items);
	  };

	  DataStore.prototype.insert = function(item, callback){
		  item._id = Math.floor((Math.random() * 1000) + 100);
		  this.items.push(item);
		  if(callback) callback(null);
	  };

	  DataStore.prototype.update = function(query, update, option, callback){
		  var match = _.findWhere(this.items, query);
		  if(match) {
			  match = update;
		  }
		  if(callback) callback(null, null);
	  };

	  DataStore.prototype.remove = function(query, options, callback){
		  var matches = _.where(this.items, query);
		  console.log("Matches")
		  console.log(matches);
		  this.items = _.difference(this.items, matches);
		  callback(null, null);
	  };

	  return DatabaseService; 
  });
