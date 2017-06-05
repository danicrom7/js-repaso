
/**
 * @class AJAX
 * 
 * @property this.sMetodo : tring  -> Método HTTP empleado
 * @property this.sUrl : string ->  Dirección del recurso solicitado
 * @property this.fCallback : object(function)->  Función callback que manejará la respuesta del servidor
 * @property this.oPeticion : object -> objeto XMLHttpRequest
 * 
 */

class Ajax {

    constructor(pMetodo, pUrl, pFuncion) {
        // Propiedes    
        this.sMetodo = pMetodo; 
        this.sUrl = pUrl;
        this.fCallback =  pFuncion; 
        this.oPeticion =  {};

        this.lanzarAjax();
    }

    // Metodos privados

    inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }; // fin del método que instancia el objeto XMLHttpRecuest (Ajax)


    lanzarAjax() {
        
        // Obtener la instancia del objeto XMLHttpRequest
        this.oPeticion = this.inicializa_xhr();
        if (this.oPeticion) {
            // Preparar la funcion de respuesta
            this.oPeticion.onreadystatechange = this.fCallback; //.bind(this);
            // Realizar peticion HTTP
            this.oPeticion.open(this.sMetodo, this.sUrl, true);
            this.oPeticion.send(null);
        }
    } // Fin de la función que implementa la consulta al servidor via Ajax

} // Fin de la clase AJAX
