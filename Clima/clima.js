const axios = require('axios');

const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${lon.toString()}&appid=dc4fc73f94d85f15fd8ff41c31e95a6c&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}