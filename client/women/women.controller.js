(function() {
	angular.module('myApp')
		.controller('womenCtrl', ['$scope', 'womenDataService', '$http', '$location', function($scope, womenDataService, $http, $location) {
			womenDataService.then(function(data) {
				$scope.women = data;
				$scope.show = new Array($scope.women.length).fill(false);
				console.log($location.path());
			});

			$scope.onSubmit = function(item) {
				$http.post('/api2/women', item).then(function() {
					$('#myModal').modal('toggle');
					window.location = 'http://localhost:3000/women';
				});
			}

			$scope.clearForm = function() {
				$scope.item = {};
			}

			$scope.close = function(message) {
				console.log(message);
			}

			$scope.onDelete = function(name) {
				$http.delete('/api2/women/' + name).then(function(data) {
					console.log('Delete Successfully');
				})
			}
		}])
		.factory('womenDataService', ['$q', '$http', function($q, $http) {
			var defer = $q.defer();
			$http.get('/api2/women').then(function(data) {
				defer.resolve(data.data);
			});
			return defer.promise;
		}]);
})()