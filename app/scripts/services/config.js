'use strict';

/**
 * @ngdoc service
 * @name desktopAppApp.config
 * @description
 * # config
 * Value in the desktopAppApp.
 */
angular.module('desktopAppApp')
  .value('config', {
	  // use either memory, nedb, moongodb
	  'database' : 'memory'
  });
