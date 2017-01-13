(function(){
	angular.module('myApp', ['ui.router'])
		.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
			function($stateProvider, $locationProvider, $urlRouterProvider) {
			$stateProvider
				.state('men', {
					url: '/men',
					templateUrl: '/men/men.html',
					controller: 'menCtrl'
				})
				.state('women', {
					url:'/women',
					templateUrl: '/women/women.html',
					controller: 'womenCtrl'
				});

			$urlRouterProvider.otherwise('/men');

			$locationProvider.html5Mode(true);
		}]);
})();