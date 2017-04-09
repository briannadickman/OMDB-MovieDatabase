var myApp = angular.module('myApp', []);


myApp.controller('FavoritesController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('FavoritesController');
}]);


myApp.controller('SearchController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('SearchController');

  $scope.movieService = MovieService;
  $scope.movieSearch = '';

  // var movie = $scope.movieSearch;
  // $scope.getResult = MovieService.factoryGetResult();

  $scope.getResult = function(){
    var movie = $scope.movieSearch;
    console.log(movie);
    console.log('I was clicked!');

  };

}]);


myApp.factory('MovieService', ['$http', function($http){
  var movie = movie;

  return {
    data: 'MovieService reached!',
    movie: movie
  };

}]);
