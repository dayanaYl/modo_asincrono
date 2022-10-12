const http = require('xmlhttprequest').XMLHttpRequest

const  url= "https://pokeapi.co/api/v2/type"


//Función para conectarnos a una API publica
function get_data(endpoint){
    let promise = new Promise(function (resolve , rejected){
    //1. Crear el objeto de conexón 
    const h = new http()
    //2. Abrir una conexión a la base de datos 
    h.open('GET' , endpoint)
    //3. Enviar la request definida
    h.send()
    //4. Una vez recibida la response, tratar la información
    h.onload = function(){
        if(h.status == 200){
            resolve(h.responseText)

        }else{
            rejected(h.status)
    }
    }
    })
    return promise
}

function exito(data){
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo de tipos 
    tipos.forEach(function (element){
        console.log(`Tipo: ${element.name}`)
        console.log(`----------------------`)
    
    }); 

}
function fallo(status){
    console.log(status)

}

get_data(url).then(function(data){
    exito(data)
})