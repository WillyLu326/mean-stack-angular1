(function() {
	angular.module('myApp')
		.controller('menCtrl', ['$scope', 'menDataService', function($scope, menDataService) {
			menDataService.then(function(data) {
				$scope.men = data;
			});
		}])
		.factory('menDataService', ['$q', '$http', function($q, $http) {
			var defer = $q.defer();
			$http.get('/api/emps').then(function(data) {
				defer.resolve(data.data);
			});
			return defer.promise;
		}])
		.directive('menDetail', function() {
			return {
				scope: {
					menEmps: '=men'
				},
				restrict: 'E',
				templateUrl: '/men/men-detail.html',
				link: function(scope, element, attr) {

				}
			}
		});
})()