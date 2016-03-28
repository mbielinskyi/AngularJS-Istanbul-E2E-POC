'use strict';
(function () {
	angular.module('myApp.view1', ['ngRoute'])
		.config(['$routeProvider', routesConfig])
		.controller('View1Ctrl', ["$scope", View1Ctrl]);

	function routesConfig ($routeProvider) {
	  $routeProvider.when('/view1', {
	    templateUrl: 'view1/view1.html',
	    controller: 'View1Ctrl'
	  });
	}

	function View1Ctrl ($scope) {
		$scope.runSomeActions = function () {
			$scope.test = "Test";
			console.log("Test!");
		};
	}	
})();


