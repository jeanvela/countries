const { Country, Activity } = require('../db')

const findAllCountries = async (query) => {
    const countries = await Country.findAll({
        where: query,
        include: {
            model: Activity,
            attributes: ["name","difficulty","duration","season"],
            through: {
                attributes: []
            }
        }
    })
    return countries
}

module.exports = findAllCountries