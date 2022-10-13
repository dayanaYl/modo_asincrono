//dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

const exito = data =>{
        const tipos = JSON.parse(data)
        
        //recorrer el arreglo de tipos
        tipos.forEach(function (element) {
            console.log(`Tipo: ${element.name}`)
            console.log(`--------------------`)
        });
}

const fallo = status =>{
       console.log(status)
}

const url = "https://data.police.uk/api/crime-categories?date=2011-08"
//Funcion para conectarnos a un API publica

const get_data = (endpoint , exito , fallo) =>{
   //1.crear el objeto de conexion
    const h = new http()
    //2.abrir una conexion a la API
    h.open('GET' , endpoint)
    //3.enviar la request definida 
    h.send()
    //4.una vez recibida la response tratar la info
    h.onload = () => {
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(h.status)
        }
    }

}
 //incocar Get_data

 get_data(url, exito, fallo)