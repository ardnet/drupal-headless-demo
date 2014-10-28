(function() {
  var apiEndPoint = 'http://baker-bakes.dev/ngdrupal',
  	  app = angular.module('drupalNg', ['ngResource', 'ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
  	$routeProvider
  	  .when('/', {
  	    templateUrl: 'pages/home.html',
  	    controller: 'HomepageImages'
  	  })
  	  .when('/recipes', {
  	  	templateUrl: 'pages/recipe.html',
  	    controller: 'RecipesCtrl'
  	  })
  	  .when('/contact', {
  	  	templateUrl: 'pages/contact-us.html',
  	  	controller: 'ContactUsCtrl'
  	  });

  	  $locationProvider.html5Mode(true);
  });

  app.controller('HomepageImages', ['$scope', '$http', function($scope, $http) {
  	var that = this;
  	that.images = [];

  	$http.get(apiEndPoint + '/homepage_images').
        success(function(data) {
        	that.images = data.homepage_images;
        });
  }]);

  app.controller('RecipesCtrl', ['$scope', '$http', function($scope, $http) {
  	var that = this;
  	that.recipes = [];

  	$http.get(apiEndPoint + '/recipes').
        success(function(data) {
        	that.recipes = data.recipes_content;
        });
  }]);

  app.controller('ContactUsCtrl', function($scope) {
  	$scope.message = 'This is from Contact Us y\'all!';
  });

})();





