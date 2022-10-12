const request= require('request')

const  url= "https://pokeapi.co/api/v2/type"

const r = request(url, 
    {json:true }, 
    function( err, response, body){
    const tipos = response.body.results
        tipos.forEach(function (element){
        console.log(element)
        console.log(`******************`)
        
    });

}

)



