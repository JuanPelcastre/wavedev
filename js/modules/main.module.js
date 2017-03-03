angular
	.module('wavePage', ['ui.bootstrap'])
	.controller('NavigationController', NavigationController);

function NavigationController($scope){
	
	$scope.page = "";
	
	
	$scope.navigate = function(){
		
		$scope.page = "portfolio.html";
			
	};
	
};