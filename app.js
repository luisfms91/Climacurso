const lugar = require('./lugar/lugar');
const clima = require('./Clima/clima');


const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'direccion para obtener el clima',
        demand:true
    }
}).argv;

const encodedURL = encodeURI(argv.direccion);
console.log(encodedURL);
const  getInfo = async (direccion) => {

    try {
        const coord = await lugar.geLugarLatLot(direccion);
        console.log(coord);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `el clima de ${direccion} es de ${temp}`
    } catch (error) {        
        return `no se pudo obtener el clima ${direccion}`;
    }
    
}

getInfo(encodedURL).then(console.log).catch(console.log);