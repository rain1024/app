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
		  var db = {};
		  var databaseType = CONFIGURATION.database;
		  if(databaseType === 'memory'){
			  db = new MemoryDatabaseService();
		  } else if(databaseType === 'nedb'){
			  db = new database.Nedb();
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
		  this.newDoc.name = 'abc';
	  };
	  DataStore.prototype.constructor = function() {};
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
