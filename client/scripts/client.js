var myApp = angular.module('myApp', []);

// myApp.controller('ResultsController', ['$scope', 'MovieService', function($scope, MovieService){
//   console.log('ResultsController');
//   $scope.getResult = MovieService.getOMDB();
//   $scope.infoFromOMDB = MovieService.data;
// }]);

myApp.controller('FavoritesController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('FavoritesController');
}]);


myApp.controller('SearchController', ['$scope', 'MovieService', function($scope, MovieService){
  console.log('SearchController');

  // $scope.movieSearch = '';

  $scope.getResult = function(){
    console.log('I was clicked!');
  };
    // MovieService.click();
  // $scope.infoFromOMDB = MovieService.data;
  //
  // $scope.searchMovies = MovieService.getOMDB(movieSearch);

}]);



// myApp.factory('MovieService', ['$http', function($http){
//
//   var infoFromOMDB = [];
//   var movie = movieSearch;
//
//   return {
//     data: infoFromOMDB,
//     movie : movie,
//     getOMDB : function(){
//       $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json').then(function(response){
//         infoFromOMDB.push(response);
//         console.log('from getOMDB function: ', response);
//       });
//     },
//     click : function(){
//       console.log('I was clicked!');
//     }



    // getMovie : function(movieSearchValue){
    //   console.log('searching!');
    //   console.log(movieSearchValue);
    //       if (movieSearchValue.toLowerCase().includes($scope.movieSearch.toLowerCase())){
    //         // console.log(movieSearchValue);
    //         return true;
    //       } else{
    //         return false;
    //       }
    //     }
      // };


}]);
