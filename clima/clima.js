const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cfa31b56044f28cc65c0abb3b0308b5f&units=metric`);
    return resp.data.main.temp;
}




module.exports = {
    getClima
}