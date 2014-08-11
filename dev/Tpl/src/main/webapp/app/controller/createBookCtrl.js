
booksApp.controller('createBookCtrl', function($scope, $location, $rootScope,
		$http) {
	$scope.newBook = {};
	$scope.save = function(aBook) {
		var jsonBook = angular.toJson(aBook);
		$http.post('/Tpl/rest/books', jsonBook).success(
				function(data, status, headers, config) {
					if (status = 200) {
						// Ok message and go back
						console.log("Creation Completed.\nBook's Country: "
								+ $scope.newBook.country);
						$location.path("/");
					}
				}).error(function(data, status, headers, config) {
			console.log("An Error occurred while trying to store a book");
		});
	};

	$scope.reset = function() {
		$scope.newBook = {};
	};

	$scope.reset();

	$scope.backToHome = function() {
		$location.path("/");
	};

});