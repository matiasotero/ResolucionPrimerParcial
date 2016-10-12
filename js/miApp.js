var app = angular.module('parcialito', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.
	state('Home',{
		url:'/Home',
		templateUrl:"home.html",
		controller:"controlHome"
	})
	.state('Login',{
		url:"/Login",
		templateUrl:"login.html",
		controller:"controlLogin"
	})
	.state('Registro',{
		url:'/Registro',
		templateUrl:"register.html"
	})
	.state('Votaciones',{
		url:"/Votaciones",
		abstract:true,
		templateUrl:"abstractVotaciones.html"
	})
	.state('Votaciones.Menu',{
		url:'/Menu',
		views:{
			"contenido":{
				templateUrl:"votacionesMenu.html",
				controller:"controlMenu"
			}
		}
	})
	.state('Votaciones.Grilla',{
		url:'/Grilla',
		views:{
			"contenido":{
				templateUrl:"votacionesGrilla.html"
			}
		}
	})
	.state('Votaciones.Alta',{
		url:'/Alta',
		views:{
			"contenido":{
				templateUrl:"votacionesAlta.html",
				controller:"controlAlta"
			}
		}
	})
	$urlRouterProvider.otherwise("/Home");
});

app.controller("controlMenu", function($scope,$state){
	$scope.RedirigirLogin=function(){
		$state.go("/Login");
	}
});

app.controller("controlHome",function($scope){

});

app.controller("controlLogin",function($scope){

});

app.controller("controlRegistro",function($scope){

});

app.controller("controlMenu",function($scope,$state){
	$scope.irAAlta=function(){
		$state.go("Votaciones.Alta");
	}
});

app.controller("controlAlta",function($scope,$state){

});