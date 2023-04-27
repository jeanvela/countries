const { Activity } = require('../db')

const postActivities = async ({name, difficulty, duration, season,countries}) => {
    const newActivities = await Activity.create({name, difficulty, duration, season})
    newActivities.addCountries(countries)
    if (!name || !difficulty || !duration || !season) throw new Error('Faltan datos')
    return newActivities
}

module.exports = postActivities