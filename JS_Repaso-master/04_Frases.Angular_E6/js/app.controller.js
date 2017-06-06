// código del controlador en AngularJS

class AppController {

//	constructor ($scope) {
//		this.$scope = $scope;
//	}

	$onInit () {
		// Textos de ejemplo que se incorporaram al DOM
		this.aSamples = [
			"HOLA MUNDO",
			"hola mundo",
			"Hola Mundo"
		]

		this.sRespuesta = ""
		this.sFrase = ""  // ng-model de inputFrase		
	}

	/**
	 * @method actualizarVista
	 * @param object oEvent 
	 * @return void
	 */
	actualizarInput (oEvent) {
		let n = oEvent.currentTarget.getAttribute("data-item")
		this.sFrase = this.aSamples[n]
	}

	actualizaVista () {
		let aMensajes= [
			"Mezcla de Mayuscula y Minúsculas",
	 		"Todo minusculas",
	 		"Todo mayusculas"
		]			

		if (this.sFrase =="") {
			this.eRespuesta = "";
		} else {
			this.sRespuesta = aMensajes[this.comprobarFrase()]
		}		
	}


	/**
	 * @method comprobarFrase
	 * @param 
	 * @return number
	 * 
	 * 0 => Mezcla de Mayuscula y Minúsculas
	 * 1 => Todo minusculas
	 * 2 => Todo mayusculas 
	 * 
	 */
	comprobarFrase() {
		let nResponse = 0
		if ( this.sFrase == this.sFrase.toLowerCase()) {
			nResponse = 1
		} else if (this.sFrase == this.sFrase.toUpperCase()) {
			nResponse = 2
		} 
		return nResponse;
	}

} // Fin de la clase AppController


angular.module("appModule")
.controller('AppController', AppController)