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
          'tags' : []
        },
        { 
            '_id' : 2,
          'name' : 'Magnam nostrum aspernatur nobis tempore ',
          'tags' : []
        },
        { 
            '_id' : 3,
          'name' : 'Dicta quis quas ipsam modi pariatur ',
          'tags' : []
        }
		  ];
	  };

	  MemoryDataStore.prototype.constructor = function() {};

	  MemoryDataStore.prototype.find = function(query, callback) {
      console.log("first item from store.find: ", this.items[0]);
		  callback(null, this.items);
	  };

	  MemoryDataStore.prototype.insert = function(item, callback){
		  item._id = Math.floor((Math.random() * 1000) + 100);
      console.log("item from store.insert: ", item);
		  this.items.push(item);
		  if(callback) callback(null);
	  };

	  MemoryDataStore.prototype.update = function(query, update, option, callback){
		  this.items = _.map(this.items, function(item){
			  if(item._id === query._id){
          return update.$set;
			  } else {
				  return item;
			  }
      });
      console.log("first item from store.update", this.items[0]);
		  if(callback) callback(null, null);
	  };

	  MemoryDataStore.prototype.remove = function(query, options, callback){
		  var matches = _.where(this.items, query);
		  this.items = _.difference(this.items, matches);
		  callback(null, null);
	  };

	  // =======================
	  // MemoryDatabaseService 
	  // ======================
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
