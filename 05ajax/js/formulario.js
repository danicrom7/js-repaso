
class Formulario {

	constructor () {
		this.aFiles = [
			"saludo.txt",
			"file01.txt",
			"file02.txt",
			"file03.txt",
			"historia.txt",
			"holamundo.txt",
			"saludo.json"
		]

		this.path =  "datos/", // carpeta de datos (json / jpg)
		this.file =  ""; // pathÂ´+ nombre de los ficheros con extensiÃ³n
		this.oConexion = {} // objeto Ajax
		this.metodoHttp = "GET"

	} // Fin del constructor

	controller () {
		// Define el manejadore de eventos del boton
		let aDomBotones = document.querySelectorAll('button');		
		for (let i = 0; i < aDomBotones.length; i++) {
			aDomBotones[i].addEventListener("click",
				this.btnClic.bind(this)
			)
		};
		// Inicializa el dataset de ficheros
		this.pintaDataset();
	} // Fin del controller

	pintaDataset() {
		let oDomInput = document.querySelector('#ficherosDatalist');		
		oDomInput.innerHTML = ""
		for (let i = 0; i < this.aFiles.length; i++) {
			let sFile = this.aFiles[i];
			oDomInput.innerHTML += `
				<option>${sFile}</option>`;
		};
	} // Fin del mÃ©todo pintaDataset

	btnClic (oEvent) {
		// Obtener la instancia del objeto XMLHttpRequest
		this.file = this.path + document.querySelector("#Nombre").value;
		if (this.file) {
			//cÃ³digo de la petoicion	
			this.oConexion = new Ajax(this.metodoHttp,
				this.file + '?nocache=' + Math.random(),
				this.muestraContenido.bind(this));
		};								
	}; // Fin del mÃ©todo btnClic

	muestraContenido () {				
		if (this.oConexion.oPeticion &&
			this.oConexion.oPeticion.readyState == READY_STATE_COMPLETE) {
			try {
				if (this.oConexion.oPeticion.status == 200) {							
					document.querySelector('#contenidos').innerHTML = 
						this.oConexion.oPeticion.responseText
				} else {
					throw "Error " + this.oConexion.oPeticion.status + 
							" - " + this.oConexion.oPeticion.statusText;
				}		            
			}
			catch (error) {
				document.querySelector('#contenidos').innerHTML = error;
			}
		}
	} // fin del mÃ©todo manejador del evento onreadystatechange

} // Fin de la clase formulario