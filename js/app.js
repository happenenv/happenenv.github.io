var happenApp = angular.module('happenApp', []);

happenApp.controller('RingueController', function RingueController($scope) {

	var segundo = 0;
	var minuto = 1;
	var intervalo;
	$scope.tempo = "00:00";
	$scope.tempoInicial;
	$scope.pausa = 0;
	$scope.inciado = 0;

	function relogio () {
		console.log('tic tac');
		if(segundo > 0){
			segundo--;
			if(segundo < 10){
				segundo = "0"+segundo;
			}
		}
		else if(segundo == 0){
			minuto--;
			if(minuto < 0){
				segundo = "00";
				parar();
			}else{
				segundo = 59;
			}
		}
		$scope.tempo = "0"+minuto+":"+segundo;
		$scope.$apply();
		console.log($scope.tempo);
	}

	$scope.comecar = function () {
		minuto = $scope.tempoInicial;
		$scope.inciado = 1;
		intervalo = window.setInterval(relogio, 1000);
	}

	$scope.parar = function () {
		$scope.pausa = 1;
		window.clearInterval(intervalo);
	}

	$scope.retomar = function () {
		$scope.pausa = 0;
		intervalo = window.setInterval(relogio, 1000);
	}

	$scope.reiniciar = function () {
		$scope.pausa = 0;
		$scope.inciado = 0;
		$scope.tempo = "00:00";
		minuto = segundo = 0;
		window.clearInterval(intervalo);
	}
});