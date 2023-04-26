const { Country, Activity } = require('../db')

const findCountryById = async (id) => {
    const country = await Country.findByPk(id,{
        where: {
            id: id.toUpperCase()
        },
        include: {
            model: Activity,
            attributes: ["name","difficulty","duration","season"],
            through: {
                attributes: []
            }
        }
    })
    //VALIDAR
    return country
}

module.exports= findCountryById