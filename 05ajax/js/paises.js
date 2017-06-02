class Formu {
    constructor(){
        this.aPaises = []
        this.path = "http://api.geonames.org/countryInfoJSON",
        this.query = "?lang=es&username=demo",
        this.oConexion = {}
        this.metodoHttp = "GET"
    }

    controller(){
        let aDomsSelect = document.querySelector("#paises");
        aDomsSelect[i].addEventListener("change",
        this.selectChange.bind(this))

        this.oConexion = new Ajax(this.metodoHttp,
        this.path + this.query,
        this.pintaSelect().bind(this));

    }//controller
    pintaSelect(){
    let aDatosPaises = JSON.parse(this.oConexion.oPeticion.responseText)
    for (var i = 0; i < aDatosPaises.lenght; i++){
        let pais = {}
        pais.code = aDatosPaises[i].countryCode
        pais.nombre = aDatosPaises[i].countryName
        this.aPaises.push(pais);
    }
    aDomSelect.innerHTML = ""
    for(let i = 0;i < this.aPaises[i].lenght; i++){
        
    }
}//pintaSelect

}//clase formu