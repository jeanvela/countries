const axios = require('axios')
const {Country}= require('../db')

// Obtenemos la info de la api
// Llamo al end-point de la api y metrae toda la info que voy a necesitar,
// Usamos async await (Por que no sabemos cuanto va a demorar  en traer la informacion y le decimos que espere)
const getApi = async () => {
    const api = await axios.get('https://restcountries.com/v3.1/all')
    // me trae la informacion
    const apiInfo = await api.data.map(e => {
        // retonarmos la info necesaria
        return {
            id: e.cca3,
            name: e.name.common,
            flags: e.flags.png,
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : `${e.name.oficial} has no capital`,
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    })
    return apiInfo
}

// Guardamos la info en la base de datos
const saveApiDb = async () => {
    try {
        const countries = await Country.findAll()
        if (!countries.length) {
            const allcountries = await getApi()
            //bulkCreate() nos permite pasarle un array de objetos  y los crea todo juntos  en la DB
            await Country.bulkCreate(allcountries)
        }
    } catch (error) {
        console.log(error)
        // return {error:error.message}
    }
    
}

module.exports = saveApiDb