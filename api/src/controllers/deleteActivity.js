const {Activity} = require('../db')

const deleteActivity = async (id) => {
    const activities = await Activity.findByPk(id)
    return await activities.destroy()
}

module.exports = deleteActivity