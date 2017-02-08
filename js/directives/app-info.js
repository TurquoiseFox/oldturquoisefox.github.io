app.directive('appInfo', function(){
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'directives/app-info.html'
	};
});