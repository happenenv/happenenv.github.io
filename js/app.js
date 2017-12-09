var happenApp = angular.module('happenApp', []);

happenApp.controller('RingueController', function RingueController($scope) {

	var segundo = 0+"0";
	var minuto = 1;
	$scope.tempo = "00:00";
	var intervalo;

	function relogio () {
		console.log('tic tac');
		if(segundo > 0){
			segundo--;
		}
		else if(segundo == 0){
			minuto--;
			if(minuto < 0){
				segundo = "00";
				end();
			}else{
				segundo = 59;
			}
		}
		$scope.tempo = "0"+minuto+":"+segundo;
		$scope.$apply();
		console.log($scope.tempo);
	}

	$scope.start = function () {
		intervalo = window.setInterval(relogio, 1000);
		console.log('foi');
	}

	$scope.end = function () {
		window.clearInterval();
	}
});