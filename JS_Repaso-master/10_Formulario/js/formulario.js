class Formulario {

    constructor () {
        this.oDatos = {"Nombre": "",
                    "Apellidos": "",
                    "Correo": "",
                    "Password": "",
                    "Password2": "",
                    "Comentarios": "",
                    "Tema" : "",
                    "Curso" : ""
            };
        this.oParrafo = document.querySelector("#listaDatos");
        // referencia del párrafo donde escribir
        this.oBtnEnviar = document.querySelector("#btnSubmit")
        this.oForm = document.querySelector("#form_1")

        this.oBtnEnviar.addEventListener("click",
            this.recogeDatos.bind(this));

        this.oForm.addEventListener("submit", 
            this.simularEnviar.bind(this));

    }

    simularEnviar (oE) {
        alert("Iniciandosubmit");
        //anula el comportamiento por defecto de submit
        oE.preventDefault();
        //llamada a la función que procesara el objeto presentandolo en pantalla
        this.escribeDatos();
    }
 

    recogeDatos (oE) {
        this.oDatos.Nombre = document.querySelector("#inputName").value;
        this.oDatos.Apellidos = document.querySelector("#inputApell").value;
        this.oDatos.Correo = document.querySelector("#inputMail").value;        
        this.oDatos.Password = document.querySelector("#inputPasswd").value;
        this.oDatos.Password2 = document.querySelector("#inputPasswd2").value;
        this.oDatos.Comentarios = document.querySelector("#coment").value;
        this.oDatos.Tema = document.querySelector("#selectTema").value;
        this.oDatos.Curso = document.querySelector("#selectCurso").value;
    } //Fin del método recogeDatos


    escribeDatos () {
        //ocultar formulario
        document.querySelector("#form_1").classList.toggle("oculto")
        //mostrar bloque div para el resultado
        document.querySelector("#resultado").classList.toggle("oculto");
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    } //Fin del método escribedatos	

} // Fin de la clase Formulario
