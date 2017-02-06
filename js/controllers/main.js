app.controller('main', ['$scope', function($scope) {
	var scope = $scope;
	scope.name = "Sylvia Poelgeest";
	scope.paging = "about me";
	scope.value = 0;
	scope.min = 0;
	scope.max = 100;
	scope.showing = false;

	if(scope.value === 10){
		scope.showing = true;
		return scope.showing;
	} else {
		scope.showing = false;
		return scope.showing;
	}
	
}]);