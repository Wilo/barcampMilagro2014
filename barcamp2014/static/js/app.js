//this file is a app controller for angularjs
var app = angular.module('Search', []);
app.controller('searchController', ['$scope', 'indexFactory', function($scope, indexFactory){
    $scope.data=[];
    indexFactory.getData().then(function(data){
	$scope.data = data.data;
    });
}]);
