//Dependecia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

const  url= "https://pokeapi.co/api/v2/type"

const exito = (data) =>{
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo de tipos 
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`)
        console.log(`----------------------`)
    
    }); 

}

const fallo = (status) => {
    console.log(status)


}

//Función para conectarnos a una API publica
const get_data = (endpoint , exito, fallo) =>{
    //1. Crear el objeto de conexón 
    const h = new http()
    //2. Abrir una conexión a la base de datos 
    h.open('GET' , endpoint)
    //3. Enviar la request definida
    h.send()
    //4. Una vez recibida la response, tratar la información
    h.onload = () => {
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(http.status)
        }
    }
}

//invocar get_data
get_data(url, exito, fallo)
