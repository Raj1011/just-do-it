
var mainApp = angular.module('themeManagement', ['ui.router']);

mainApp.config(['$routeProvider', function($stateProvider, $urlRouterProvider) {
 
	$urlRouterProvider.otherwise('/home');
	$stateProvider
   // HOME STATES AND NESTED VIEWS ========================================
   .state('home', {
       url: '/home',
       templateUrl: 'home.html'
   })
   
   .state('soundMixer', {
       url: '/soundMixer',
       templateUrl: 'soundMixer.html'
       
   })
   .state('mashup', {
       url: '/mashup',
       templateUrl: 'mashup.html'
   })
   // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
   .state('about', {
       // we'll get to this in a bit       
   });
	
}]);

