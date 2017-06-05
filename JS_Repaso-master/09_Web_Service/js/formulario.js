
class Formulario {

	constructor () {
		this.aDatosPaisesFull = []
		this.aPaises = []
		this.oDomSelect = document.querySelector('#nombrePais')
		this.url = "http://api.geonames.org/countryInfoJSON",
		this.query =  "?lang=es&username=alce65", 
		this.oConexion = {} // objeto Ajax
		this.metodoHttp = "GET"

	} // Fin del constructor

	controller () {
		// Define el manejadore de eventos del select
		this.oDomSelect.addEventListener("change",
				this.selectChange.bind(this) )
		// Inicializa el dataset de ficheros
		this.oConexion = new Ajax(
			this.metodoHttp,
			this.url + this.query,
			this.procesaAllPaises.bind(this) );
	} // Fin del controller

	// callBack Procesado como respuesta ajax

	procesaAllPaises () {				
		if (this.oConexion.oPeticion &&
			this.oConexion.oPeticion.readyState == READY_STATE_COMPLETE) {
			try {
				if (this.oConexion.oPeticion.status == 200) {
					this.aDatosPaisesFull = JSON.parse(this.oConexion.oPeticion.responseText)
					this.aDatosPaisesFull = this.aDatosPaisesFull.geonames
					this.pintaSelect()
				} else {
					throw "Error " + this.oConexion.oPeticion.status + 
							" - " + this.oConexion.oPeticion.statusText;
				}		            
			}
			catch (error) {
				document.querySelector('#contenidos').innerHTML = error;
			}
		}
	} // fin del método manejador del evento onreadystatechange


	pintaSelect() {
		// leer info all paises
		for (let i = 0; i < this.aDatosPaisesFull.length; i++) {
			let pais = {}
			pais.code = this.aDatosPaisesFull[i].countryCode			
			pais.nombre = this.aDatosPaisesFull[i].countryName
			this.aPaises.push(pais);			
		}
		this.oDomSelect.innerHTML = ""
		for (let i = 0; i < this.aPaises.length; i++) {
			this.oDomSelect.innerHTML += `
				<option value = "${this.aPaises[i].code}">
					${this.aPaises[i].nombre}
				</option>`;
		};
	} // Fin del método pintaDataset


	selectChange(oEvent) {
		let pais = this.oDomSelect.value;
		let q = "";
		q = this.url + this.query + "&country=" + pais 
		//código de la petoicion	
		this.oConexion = {}
		this.oConexion = new Ajax(this.metodoHttp,
			q,
			this.muestraContenido.bind(this));
	}; // Fin del método btnClic

	muestraContenido () {				
		if (this.oConexion.oPeticion &&
			this.oConexion.oPeticion.readyState == READY_STATE_COMPLETE) {
			try {
				if (this.oConexion.oPeticion.status == 200) {
					let oDatos =  JSON.parse(this.oConexion.oPeticion.responseText)
					oDatos = oDatos.geonames[0]
					var sLinea
					document.getElementById('contenidos').innerHTML = "<dl>"
					for (var i in oDatos) {
						sLinea = "<dt>" + i + "</dt><dd>" + oDatos[i] + "</dd>"
						document.getElementById('contenidos').innerHTML += sLinea
					}
					document.getElementById('contenidos').innerHTML += "</dl>"

				} else {
					throw "Error " + this.oConexion.oPeticion.status + 
							" - " + this.oConexion.oPeticion.statusText;
				}		            
			}
			catch (error) {
				document.querySelector('#contenidos').innerHTML = error;
			}
		}
	} // fin del método manejador del evento onreadystatechange

} // Fin de la clase formulario
