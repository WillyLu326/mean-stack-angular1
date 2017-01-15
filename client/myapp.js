(function(){
	angular.module('myApp', ['ui.router'])
		.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
			function($stateProvider, $locationProvider, $urlRouterProvider) {
			$stateProvider
				.state('root', {
					url: '/',
					templateUrl: '/home/home.view.html'
				})
				.state('root.men', {
					url: 'men',
					templateUrl: '/men/men.view.html',
					controller: 'menCtrl'
				})
				.state('root.women', {
					url:'women',
					templateUrl: '/women/women.view.html',
					controller: 'womenCtrl'
				});

			$urlRouterProvider.otherwise('/');

			$locationProvider.html5Mode(true);
		}])
		.directive('productItems', function() {
			return {
				restrict: 'ECMA',
				scope: {
					obj: '=',
					show: '=',
					edit: '&onEdit',
					delete: '&onDelete'
				},
				bindToController: true,
				controller: function($scope) {	
					this.showEdit = true;	
					this.showEditField = function() {
						this.showEdit = !this.showEdit;
					}
				},
				controllerAs: 'ctrl',
				templateUrl: '/template/product-item.html',
				link: function(scope, element, attr, ctrl) {
					
				}
			}
		})
		.directive('addItem', function() {
			return {
				restrict: 'ECMA',
				scope: {
					submit: '&onSubmit',
					close: '&onClose'
				},
				bindToController: true,
				controller: function($scope) {
					
				},
				controllerAs: 'ctrl',
				templateUrl: '/template/add-item.html',
				link: function(scope, element, attr, ctrl) {}
			}
		});
})();