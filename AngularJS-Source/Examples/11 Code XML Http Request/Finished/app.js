var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope, $http ) {
	$http.get('http://esednice.comtrade.com/movies/api/movies')
		.success(function(result){
			$scope.movies = result;
			console.log(result);
		})
		.error(function(data, status){
			console.log(data);
		});
});
