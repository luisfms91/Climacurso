const axios = require('axios');

const geLugarLatLot = async(direccion) => {   
    

    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,   
        headers:{'X-RapidAPI-Key':'d49ffe5015mshc301e06052ff523p1de7d5jsn11a39d2619bd'}
    });
    

    
    const resp = await instance.get();
    
    if(resp.data.Results.length == 0){
        throw new Error(`no hay resultados para: ${direccion}`)
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

   return {
       dir, lat, lng
   }

}

module.exports = {
    geLugarLatLot
}