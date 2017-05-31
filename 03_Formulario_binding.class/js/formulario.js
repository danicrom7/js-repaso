angular.module("miApp",[])
.controller("MainController",MainController);

function MainController(){
	this.frase = document.querySelector("#sFrase");
	this.respuesta = document.querySelector("#sRespuesta")
	

	

	this.btnBorrar = () => {
		this.frase = "";
		
	}

	this.comprobar = () =>{
   let nResponse = 0
		if ( this.Frase == this.LowerCase()) {
			nResponse = 1
		} else if (this.Frase == this.UpperCase()) {
			nResponse = 2
		} 
		return nResponse;
	}
	actualizarVista = () => {
		let aMensajes= [
			"Mezcla de Mayuscula y MinÃºsculas",
	 		"Todo minusculas",
	 		"Todo mayusculas"
		]	
		//if (oEvent.currentTarget.id == "btnBorrar") {
			 this.oDOM.Respuesta.innerHTML=`
			 <mark>
			 	${aMensajes[this.comprobar()]}
			 </mark>
			 ` 
		//} 
		//this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value; 
		//console.log(this.oDOM.fNombre.value);
	} 
}



