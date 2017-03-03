var app = angular.module("app", ['ngAnimate', 'ngSanitize','ngRoute', 'ui.bootstrap']);
 
 
//app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
//   
//	$locationProvider.html5Mode(true);
//	
//  $routeProvider.when('/home', {
//    templateUrl: "home.html",
//    controller: "HomeController"
//  });
//	
//  $routeProvider.when('/about', {
//    templateUrl: "about.html"
////    ,controller: "AboutController"
//  });
//   
//  $routeProvider.when('/projects', {
//    templateUrl: "projects.html"
////    	,
////    controller: "ProjectsController"
//  });
//
//  $routeProvider.when('/project-1', {
//    templateUrl: "project-1.html"
////    	,
////    controller: "Project-1Controller"
//  });
//
//  $routeProvider.when('/project-2', {
//    templateUrl: "project-2.html"
////    	,
////    controller: "Project-2Controller"
//  });
//
//  $routeProvider.when('/project-3', {
//    templateUrl: "project-3.html"
////    	,
////    controller: "Project-3Controller"
//  });
//
//  $routeProvider.when('/contact', {
//    templateUrl: "contact.html"
////    	,
////    controller: "ContactController"
//  });
//
//  $routeProvider.when('/team', {
//    templateUrl: "team.html"
////    	,
////    controller: "TeamController"
//  });	  
//   
//  $routeProvider.otherwise({
//        redirectTo: '/home'
//  });   
//  
//}]);


app.controller('HomeController', HomeController);

function HomeController($scope, $window){
	
	$scope.initialText = "Descripcion simple de inicial.";
	$scope.initialTitle = "COPY, COPY, COPY";
	
	$scope.projectText = "Somos expertos desarrolladores.";
	$scope.projectTitle = "PROJECT, PROJECT";
	
	$scope.myInterval = 4000;
	  $scope.noWrapSlides = false;
	  $scope.active = 0;
	  var slides = $scope.slides = [];
	  var currIndex = 0;

	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      // company: ['Wave Dev - codificando ideas','Wave','xxx','rrr'][slides.length % 4],
	      text: ['Somos una compañía de expertos en arquitectura de sistemas, desarrollo de software y análisis de requerimientos.',
	      '2 Somos una compañía de expertos en arquitectura de sistemas',
	      '3 Somos una compañía de expertos en arquitectura de sistemas',
	      '4 Somos una compañía de expertos en arquitectura de sistemas'][slides.length % 4],
	      id: currIndex++
	    });
	  };

	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };

	  for (var i = 0; i < 4; i++) {
	    $scope.addSlide();
	  }

	  // Randomize logic below

	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }

	  // http://stackoverflow.com/questions/962802#962890
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
	  
	  $scope.hoverCopy = function(some){
		  if(some == "into"){
			  
			 $scope.initialTitle = "COPY, COPY, COPY";
			 $scope.initialText = "";
			 $scope.initialDescription = "Descripcion copy copy vitaeoluptate voluptatum neque aliquam nostrquasi, magnam enim sed id!"; 
		  }else{
			  
			$scope.initialText = "Descripcion simple de inicial.";
			$scope.initialTitle = "COPY, COPY, COPY";
			$scope.initialDescription = "";
				  
		  }
	  };
	  
	  $scope.hoverProject = function(some){
		  if(some == "into"){
			  
			$scope.projectTitle = "PROJECT, PROJECT";
			$scope.projectText = "";
			$scope.projectDescription = "Description de project laborum omnis vitae quaerat totam illum sequi dolore rerum voluptate voluptatum n";
			  
		  }else{
			  	
			$scope.projectText = "Descripcion simple de inicial.";
			$scope.projectTitle = "PROJECT, PROJECT";
			$scope.projectDescription = "";  
		  }
	  };
	
};

app.controller('NavigationController', NavigationController);

function NavigationController($scope, $window){
	
	$scope.currentPage = "home.html";
	$scope.currentController = "";
	$scope.home = true;
	
	$scope.scrollTop = function(){
		$window.scrollTo(0, 0);
	};
	
	$(".projectsDrop").click(function() {
		$(".drop-btn").attr("class", "drop-btn");
		$(".drop-list").css("display", "none" );
	});
	
	$scope.changeView = function(view){
		$scope.currentPage = view + ".html"
		if(view == "home"){
			$scope.home = true;
		}else{
			$scope.home = false;
		}
		$scope.scrollTop();
	};
	
	
	
};
 
//app.controller("HomeController", ["$scope",function($scope) {
////   $scope.mensaje="Texto cargado desde el controlador HomeController";
//}]);
//
//app.controller("AboutController", ["$scope",function($scope) {
////	   $scope.mensaje="Texto cargado desde el controlador AboutController";
//	}]);
// 
//app.controller("ProjectsController", ["$scope",function($scope) {
//   $scope.mensaje="Texto cargado desde el controlador ProjectsController";
//}]);
// 
// 
//app.controller("Project-1Controller", ["$scope",function($scope) {
//   $scope.mensaje="Texto cargado desde el controlador Project-1Controller";
//}]);
//
//app.controller("Project-2Controller", ["$scope",function($scope) {
//   $scope.mensaje="Texto cargado desde el controlador Project-2Controller";
//}]);
//
//app.controller("Project-3Controller", ["$scope",function($scope) {
//   $scope.mensaje="Texto cargado desde el controlador Project-3Controller";
//}]);
//
//app.controller("TeamController", ["$scope",function($scope) {
//   $scope.mensaje="Texto cargado desde el controlador TeamController";
//}]);
