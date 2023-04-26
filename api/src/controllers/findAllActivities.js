const { Activity } = require('../db')

const findAllActivities = async () => {
    const activities = await Activity.findAll()
    return activities
}

module.exports = findAllActivities