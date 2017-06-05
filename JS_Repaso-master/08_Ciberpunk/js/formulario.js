
const READY_STATE_UNINITIALIZED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLETE = 4;

class App {

	constructor () {

		this.path =  "datos/", // carpeta de datos (json / jpg)
		this.file =  ""; // path´+ nombre de los ficheros sin extensión
		this.fullFile =  ""; // nombre de los ficheros con extensión
		this.oConexion = {} // objeto Ajax
		this.oLibro = {} // objeto con los datos del libro

	} // Fin del constructor

	libroClic (oEvent) {
		// Obtener la instancia del objeto XMLHttpRequest
		this.file = this.path + oEvent.target.id;
		this.fullFile = this.file + ".json";
		if (this.fullFile) {
			//******************código de la petoicion	
			this.oConexion = new Ajax("GET",
				this.fullFile + '?nocache=' + Math.random(),
				this.muestraContenido.bind(this));
		};								
	}; // Fin del método libroClic

	muestraContenido () {				
		console.log(this)
		console.log(this.oConexion.oPeticion)
		if (this.oConexion.oPeticion.readyState == READY_STATE_COMPLETE) {
			try {
				if (this.oConexion.oPeticion.status == 200) {							
					this.oLibro = JSON.parse(this.oConexion.oPeticion.responseText);
					var sLinea
					document.getElementById('contenidos').innerHTML = "<dl>"
					for (var i in this.oLibro) {
						sLinea = "<dt>" + i + "</dt><dd>" + this.oLibro[i] + "</dd>"
						document.getElementById('contenidos').innerHTML += sLinea
					}
					document.getElementById('contenidos').innerHTML += "</dl>"
					document.getElementById('img_libro').src = this.file + ".jpg"
				} else {
					throw "Error " + this.oConexion.oPeticion.status + 
							" - " + this.oConexion.oPeticion.statusText;
				}		            
			}
			catch (error) {
				document.getElementById('contenidos').innerHTML = error;
				document.getElementById('img_libro').src = "images/submedium.jpg";
			}
		}
	} // fin del método manejador del evento onreadystatechange

	controller () {
		let aDomIconos = document.querySelectorAll('.icono');		
		for (let i = 0; i < aDomIconos.length; i++) {
			aDomIconos[i].addEventListener("click",
				this.libroClic.bind(this)
			)
		};

	}

} // Fin de la clase

window.onload = function () {
	new App().controller()
}