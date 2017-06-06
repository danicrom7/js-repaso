class Formulario {

	constructor () {
	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM
		this.oDOM = {
			eSamples : document.querySelector("#olSamples"),
			eFrase : document.querySelector("#sFrase"),
			eBtnComprobar :  document.querySelector("#btnComprobar"),
			eRespuesta : document.querySelector("#sRespuesta"),
		}; // fin del objeto oDOM

		// Textos de ejemplo que se incorporaram al DOM
		this.aSamples = [
			"HOLA MUNDO",
			"hola mundo",
			"Hola Mundo"
		]

		// Incorporación de los textos al DOM
		this.oDOM.eSamples.innerHTML = this.crearSamples()
	}

	/**
	 * @method controller
	 */
	controller () {
		// Definicion de los manejadores de eventos
		//this.oDOM.eFrase.addEventListener("keyup",this.actualizarVista.bind(this));
		this.oDOM.eBtnComprobar.addEventListener("click",this.actualizarVista.bind(this))
		for (var i = 0; i < this.oDOM.eSamples.children.length; i++) {
			this.oDOM.eSamples.children[i].addEventListener("click",this.actualizarVista.bind(this));			
		}
	}

	/**
	 * @method crearSamples
	 * @return string
	 */
	crearSamples () {
		let sHtml = ""
		for (var i = 0; i < this.aSamples.length; i++) {
			sHtml += `<li data-item="${i}">${this.aSamples[i]}</li>`;
		}
		return sHtml;
	}

	/**
	 * @method actualizarVista
	 * @param object oEvent 
	 * @return void
	 */
	actualizarVista (oEvent) {
		let aMensajes= [
			"Mezcla de Mayuscula y Minúsculas",
	 		"Todo minusculas",
	 		"Todo mayusculas"
		]	
		if (oEvent.currentTarget.id == "btnComprobar") {
			 this.oDOM.eRespuesta.innerHTML=`
			 <mark>
			 	${aMensajes[this.comprobarFrase()]}
			 </mark>` 
		} else {
			// Se a pulsado uno de los ejemplos
			let n = oEvent.currentTarget.getAttribute("data-item")
			this.oDOM.eFrase.value=this.aSamples[n]
		}
	} // Fin de la funcion actualizarVista


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
		if ( this.oDOM.eFrase.value == this.oDOM.eFrase.value.toLowerCase()) {
			nResponse = 1
		} else if (this.oDOM.eFrase.value == this.oDOM.eFrase.value.toUpperCase()) {
			nResponse = 2
		} 
		return nResponse;
	}
}