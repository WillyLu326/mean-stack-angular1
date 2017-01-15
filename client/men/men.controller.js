(function() {
	angular.module('myApp')
		.controller('menCtrl', ['$scope', 'menDataService', '$http', function($scope, menDataService, $http) {
			menDataService.then(function(data) {
				$scope.men = data;
				$scope.show = new Array($scope.men.length).fill(false);
			});

			$scope.onEdit = function(item) {
				$http.put('/api/emps/' + item.name, item).then(function(data) {
					console.log('Update Successfully');
				});
			}

			$scope.onDelete = function(name) {
				$http.delete('/api/emps/' + name).then(function() {
					console.log('Delete Successfully');
				})
			}

			$scope.onSubmit = function(item) {
				$http.post('/api/emps', item).then(function(data) {
					console.log('Post Successfully');
					$("#myModal").modal('toggle');
				});
			}
		}])
		.factory('menDataService', ['$q', '$http', function($q, $http) {
			var defer = $q.defer();
			$http.get('/api/emps').then(function(data) {
				defer.resolve(data.data);
			});
			return defer.promise;
		}]);
})()