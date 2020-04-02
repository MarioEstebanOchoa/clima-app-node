const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv



// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-2.900000, -79.010002)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)