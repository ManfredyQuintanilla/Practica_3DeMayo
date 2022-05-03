const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

    
        var Data = response.data.bpi
        var Valores = [
                    `${Data.USD.code} `+`${Data.USD.rate}`,
                    `${Data.EUR.code} `+`${Data.EUR.rate}`,
                    `GBP `+`${Data.GBP.rate}`,
                ]
        

       console.log("Actualmente BTC vale:")
       Valores.forEach(Datos=>console.log(Datos))
        

       
    })