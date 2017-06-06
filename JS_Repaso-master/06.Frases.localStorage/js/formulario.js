class Formulario {

	constructor () {
	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM
		this.oDOM = {
			eFrase : document.querySelector("#sFrase"),
			eBtnComprobar :  document.querySelector("#btnComprobar"),
			eRespuesta : document.querySelector("#sRespuesta"),
		}; // fin del objeto oDOM
	   
		console.dir(this.oDOM);	
	}

	/**
	 * @method controller
	 */
	controller () {
		// Definicion de los manejadores de eventos
		//this.oDOM.eFrase.addEventListener("keyup",this.actualizarVista.bind(this));
		//oDOM.btnBorrar.onclick = actualizarVista;
		this.oDOM.eBtnComprobar.addEventListener("click",this.actualizarVista.bind(this))

		if(localStorage.frase) {
			this.oDOM.eFrase.value = localStorage.frase;
		}
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
		//if (oEvent.currentTarget.id == "btnBorrar") {
			 this.oDOM.eRespuesta.innerHTML=`
			 <mark>
			 	${aMensajes[this.comprobarFrase()]}
			 </mark>
			 ` 
		//} 

		
		//this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
		//console.log(this.oDOM.fNombre.value);
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

		localStorage.frase = this.oDOM.eFrase.value;

		return nResponse;
	}

}