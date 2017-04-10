var myApp = angular.module('myApp', []);


myApp.controller('FavoritesController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('FavoritesController');
}]);



myApp.controller('SearchController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('SearchController');

  $scope.movieService = MovieService;
  $scope.movieSearch = '';
  $scope.searchMovies = MovieService.factorySearchQuery;
  $scope.movieResult = MovieService.movieResult;

}]);



myApp.factory('MovieService', ['$http', function($http){
  var movie = movie;
  var movieResult = {
    movie: ''
  };
  var favoriteMovies = [];

  var searchQuery = function(movieSearch){
    var movie = movieSearch;
    console.log(movie);
    console.log('I was clicked!');
    getOMDB(movie);
  };


  function getOMDB(movie){
    var OMDBmovie = movie;

    console.log(OMDBmovie);
    $http.get('http://www.omdbapi.com/?t=' + OMDBmovie + '&y=&plot=short&r=json').then(function(response){
    var movieResultOMDB = {
        title: response.data.Title,
        runtime: response.data.Runtime,
        year: response.data.Year,
        director: response.data.Director,
        plot: response.data.Plot,
        genre: response.data.Genre
      };
      var copy = angular.copy(movieResultOMDB);
      movieResult.movie = copy;

    });

  }



  return {
    movieResult: movieResult,
    factorySearchQuery: searchQuery,

  };

}]);
