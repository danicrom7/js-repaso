	function main () {

			const READY_STATE_UNINITIALIZED = 0;
			const READY_STATE_LOADING = 1;
			const READY_STATE_LOADED = 2;
			const READY_STATE_INTERACTIVE = 3;
			const READY_STATE_COMPLETE = 4;
			var oPeticionHTTP, sTitulo, nItems;

			nItems = document.getElementsByClassName('icono').length;
			for (var i = 0; i < nItems; i++) {
				document.getElementsByClassName('icono')[i].onclick = libro_clic;
			};
			// document.getElementById('Islas_en_La_Red').onclick = libro_clic;


			function libro_clic (oEvent) {
				// Obtener la instancia del objeto XMLHttpRequest
			    sTitulo = "datos/" + oEvent.target.id 
				var file = sTitulo + ".json";
				if (file){
					oPeticionHTTP = new XMLHttpRequest();
					
					if (oPeticionHTTP){
						// Preparar la funcion de respuesta
						// oPeticionHTTP.onreadystatechange = muestraContenido 
						oPeticionHTTP.onreadystatechange = muestraContenido;
						// Realizar peticion HTTP
						var sURL = file + '?nocache='+Math.random();
						oPeticionHTTP.open('GET', sURL);
						oPeticionHTTP.send(null);				
					};
				};								
			}; // fin del manejador del onclick del boton 
		

			function muestraContenido() {
				if(oPeticionHTTP.readyState == READY_STATE_COMPLETE && oPeticionHTTP.status == 200)
				{
					var oLibro = JSON.parse(oPeticionHTTP.responseText);
					var sLinea
					document.getElementById('contenidos').innerHTML = "<dl>"
					for (var i in oLibro){
						sLinea = "<dt>" + i + "</dt><dd>" + oLibro[i] + "</dd>"
						document.getElementById('contenidos').innerHTML += sLinea
					}
					document.getElementById('contenidos').innerHTML += "</dl>"
					document.getElementById('img_libro').src = sTitulo + ".jpg"
				}
			} // fin de la función manejadora del evento onreadystatechange


		};//fin de la  función main

		window.onload = main;