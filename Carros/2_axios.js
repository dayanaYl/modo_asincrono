const axios = require('axios')

const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"

//configuracion de request
let config = {
    url : url,
    method : 'get'
}

//realizar la opreacion async
axios(config)
      .then(response =>
      response.data
      ).then(data => {
        data.forEach(function(tipo){
            console.log (`marcas: ${tipo.nome}`)
            console.log('-------------')
        })
      })
      .catch(error => {
        console.log(Error('Error :$error'))
      })