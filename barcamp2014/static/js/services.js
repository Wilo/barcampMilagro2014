//this file is a service Get
app.factory('indexFactory',['$http', function($http){
    return{
	getData: function(){
	    return $http.get('https://gist.githubusercontent.com/Wilo/1ec22885281689ac9904/raw/6a42d0263d886afefd6d60922182d3582c2f6b2e/file.json');
	}
    };
}]);
/*
  Esta demo está inspirada en el grid de Kendo ui 
*/
