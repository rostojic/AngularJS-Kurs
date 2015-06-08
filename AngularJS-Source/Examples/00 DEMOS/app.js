
var app = angular.module("myApp",[]);

app.controller("myController", function($scope){
	$scope.movie = {};
	$scope.movie.director = "Slobodan Sijan";
	$scope.movie.name = "Ko to tamo peva";
	$scope.movie.year = 1981;
	$scope.firstName = "Radovan";
	$scope.secondName = "Ostojic";
	$scope.getName = function(){
		return $scope.secondName + ", " + $scope.firstName;
	}
});

