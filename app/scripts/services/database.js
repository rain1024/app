'use strict';

/**
 * @ngdoc service
 * @name desktopAppApp.Database
 * @description
 * # Database
 * Service in the desktopAppApp.
 */
angular.module('desktopAppApp')
  .service('Database', function Database(config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

	  // =======================
	  // Database Service
	  // ======================
	  var DatabaseService = function() {
		  var db = new Object();
		  if(config.database == 'memory')
			  db = new MemoryDatabaseService();
		  else if(config.database = 'nedb'){
			  db = new NedbDatabaseService();
		  } else if (config.database = 'webserivce'){
			  db = new WebDatabaseService();
		  }
		  return db;
	  };
	  
	  var DatabaseServiceInterface = function(){};

	  DatabaseServiceInterface.prototype.toString = function(){
		  return 'Somekind of DatabaseService is loaded';
	  }

	  DatabaseServiceInterface.prototype.load = function(name){
		  return new DataStore(name); 
	  }

	  MemoryDatabaseService.prototype = new DatabaseServiceInterface(); 
	  MemoryDatabaseService.prototype.constructor = MemoryDatabaseService;
	  function MemoryDatabaseService(){};
	  MemoryDatabaseService.prototype.toString = function(){
		  return 'MemoryData is loaded';
	  }

	  var NebbDatabaseService = new DatabaseServiceInterface(); 

	  var WebDatabaseSerivce = new DatabaseServiceInterface(); 

	  // =======================
	  // Database Store 
	  // ======================
	  var DataStore = function(){
		  this.docs = [
			{ 
				'name' : 'Dolor quos debitis natus pariatur',
				'done' : true
			},
			{ 
				'name' : 'Magnam nostrum aspernatur nobis tempore ',
				'done' : false
			},
			{ 
				'name' : 'Dicta quis quas ipsam modi pariatur ',
				'done' : true
			}
		  ];
		  this.newDoc = {};
		  this.newDoc.name = "abc";
	  };
	  DataStore.prototype.constructor = function(name) {};
	  DataStore.prototype.find = function() {
		  return this.docs;
	  };
	  DataStore.prototype.insert = function(){
		  this.docs.push(this.newDoc);
		  this.newDoc = {};
	  };
	  DataStore.prototype.delete = function(doc){
		  this.docs = _.without(this.docs, doc);
	  };

	  return DatabaseService; 
  });
