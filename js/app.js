var happenApp = angular.module('happenApp', []);

happenApp.controller('RingueController', function RingueController($scope) {

	var segundo = 0;
	var minuto = 1;
	var intervalo;
	$scope.tempo = "00:00";
	$scope.tempoInicial;
	$scope.pausa = 0;
	$scope.inciado = 0;
	var round = 1;
	$scope.round = round; 

	function relogio () {
		console.log('tic tac');
		if(segundo > 0){
			segundo--;
			if(segundo < 10){
				segundo = "0"+segundo;
			}
			else if(segundo == 28 && minuto == 0){
				play();
			}
		}
		else if(segundo == 0){
			minuto--;
			if(minuto < 0){
				segundo = "00";
				$scope.reiniciar();
			}else{
				segundo = 59;
			}
		}
		$scope.tempo = minuto+":"+segundo;
		$scope.$apply();
		console.log($scope.tempo);
	}

	$scope.comecar = function () {
		minuto = $scope.tempoInicial;
		segundo = 0;
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
		minuto = segundo = "00";
		window.clearInterval(intervalo);
	}

	$scope.tocar = function () {
		play();
	}

	//Create the audio tag
	var soundFile = document.createElement("audio");
	soundFile.preload = "auto";

	//Load the sound file (using a source element for expandability)
	var src = document.createElement("source");
	src.src = "../images/fimDeRound" + ".mp3";
	soundFile.appendChild(src);

	//Load the audio tag
	//It auto plays as a fallback
	soundFile.load();
	soundFile.volume = 0.000000;
	soundFile.play();

	//Plays the sound
	function play() {
	   //Set the current time for the audio file to the beginning
	   soundFile.currentTime = 0.01;
	   soundFile.volume = 1;

	   //Due to a bug in Firefox, the audio needs to be played after a delay
	   setTimeout(function(){soundFile.play();},1);
	}

	$scope.stop = function () {
		soundFile.volume = 0;
	}

	/*
	 * Placar do round
	 */

	 $scope.anterior = function () {
	 	$scope.round = $scope.round==1?1:$scope.round-1;
	 		 	console.log($scope.round);

	 }

	 $scope.proxima = function () {
	 	$scope.round = $scope.round==4?4:$scope.round+1;
	 	console.log($scope.round);
	 }
});